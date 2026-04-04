import { RenderPass } from './RenderPass.js';
import { FullScreenQuad } from './FullScreenQuad.js';

/**
 * Screen Render Pass
 * 
 * Base class for full-screen shader-based effects. Renders to the screen using
 * a full-screen quad and a material. Used for post-processing, lighting calculations,
 * and other screen-space operations.
 * 
 * @class ScreenRenderPass
 * @extends RenderPass
 * @description
 * Features:
 * - Full-screen quad rendering
 * - Input texture management
 * - Optional render target (for chaining effects)
 * - Automatic resolution uniform setting
 */
export class ScreenRenderPass extends RenderPass {
    /**
     * Creates a new screen render pass.
     * @param {WebGLRenderingContext} gl - The WebGL context
     * @param {number} width - Viewport width in pixels
     * @param {number} height - Viewport height in pixels
     * @param {Material} material - Material with the screen-space shader
     * @param {RenderTarget} [renderTarget=null] - Optional target to render to (null = screen)
     * @param {string} [name='ScreenPass'] - Descriptive name for this pass
     */
    constructor(gl, width, height, material, renderTarget = null, name = 'ScreenPass') {
        super(gl, width, height, name);
        /** @type {Material} The material/shader for this pass */
        this.material = material;
        /** @type {RenderTarget} Optional target to render to */
        this.renderTarget = renderTarget;
        /** @type {FullScreenQuad} Quad for rendering */
        this.fullScreenQuad = new FullScreenQuad(gl);
        /** @type {Object<string, WebGLTexture>} Input textures mapped by uniform name */
        this.inputs = {};
        /** @type {number[]|null} Optional RGBA clear color, or null to skip clearing */
        this.clearColor = null;
        /** @type {Float32Array} Reusable resolution uniform buffer */
        this._resolutionBuffer = new Float32Array([width, height]);
    }

    /**
     * Set an input texture for the screen-space shader.
     * @param {string} name - Uniform variable name in the shader
     * @param {WebGLTexture} texture - The texture to bind
     */
    setTexture(name, texture) {
        this.inputs[name] = texture;
    }

    /**
     * Resize the pass and its render target.
     * @param {number} width - New width in pixels
     * @param {number} height - New height in pixels
     */
    resize(width, height) {
        super.resize(width, height);
        // Update cached resolution uniform
        this._resolutionBuffer[0] = width;
        this._resolutionBuffer[1] = height;
        if (this.renderTarget) {
            this.renderTarget.resize(width, height);
        }
    }

    /**
     * Execute the screen render pass.
     * Binds input textures and renders a full-screen quad with the material.
     * @param {Renderer} renderer - The renderer instance
     * @param {Array|Object} scene - Scene (usually unused for screen passes)
     * @param {Camera} camera - Camera (usually unused for screen passes)
     */
    execute(renderer, scene, camera) {
        const startTime = performance.now();
        renderer.resetDrawCalls();

        if (this.renderTarget) {
            this.renderTarget.bind();
        } else {
            this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, null);
            this.gl.viewport(0, 0, this.width, this.height);
        }

        if (this.clearColor) {
            this.gl.clearColor(this.clearColor[0], this.clearColor[1], this.clearColor[2], this.clearColor[3]);
            this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
        } else {
             // If manual clear isn't requested, we might want to just clear depth or something, 
             // but usually fullscreen passes cover everything so clear isn't strictly needed unless blending.
             // For now, assume if clearColor is null, we don't clear.
        }

        // Set inputs
        for (const [name, texture] of Object.entries(this.inputs)) {
            this.material.setUniform(name, texture);
        }

        // We might also want to set resolution uniforms if the shader expects it
        this.material.setUniform('uResolution', this._resolutionBuffer);

        this.fullScreenQuad.draw(this.material, this.renderTarget);

        if (this.renderTarget) {
            this.renderTarget.unbind();
        }

        const stats = renderer.resetDrawCalls();
        this.drawCount = stats.count;
        this.drawDetails = stats.details;
        this.executionTime = performance.now() - startTime;
    }
}
