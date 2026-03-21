import { RenderPass } from './RenderPass.js';

/**
 * Object Render Pass
 * 
 * Renders 3D scene objects to a render target or the screen. This is typically the
 * first pass in a render pipeline, responsible for drawing all visible geometry.
 * Supports material overrides for special passes (depth, normal, shadow mapping).
 * 
 * @class ObjectRenderPass
 * @extends RenderPass
 * @description
 * Features:
 * - Render to framebuffer or screen
 * - Optional material override (e.g., for depth-only passes)
 * - Per-object material selection for specialized passes
 * - Automatic clear color configuration
 * - Performance metrics (draw call count)
 */
export class ObjectRenderPass extends RenderPass {
    /**
     * Creates a new object render pass.
     * @param {WebGLRenderingContext} gl - The WebGL context
     * @param {number} width - Viewport width in pixels
     * @param {number} height - Viewport height in pixels
     * @param {RenderTarget} [renderTarget=null] - Optional target to render to (null = screen)
     * @param {Material} [materialOverride=null] - Optional material to override object materials
     * @param {string} [name='ObjectPass'] - Descriptive name for this pass
     */
    constructor(gl, width, height, renderTarget = null, materialOverride = null, name = 'ObjectPass') {
        super(gl, width, height, name);
        /** @type {RenderTarget} Target to render to, or null for screen */
        this.renderTarget = renderTarget;
        /** @type {Material} Optional material override for all objects */
        this.materialOverride = materialOverride;
        /** @type {number[]} RGBA clear color [r, g, b, a] */
        this.clearColor = [0.0, 0.0, 0.0, 1.0];
        /** @type {boolean} Whether to clear the depth buffer */
        this.clearDepth = true;
        /** @type {Camera} Optional camera override for rendering */
        this.camera = null;
    }

    /**
     * Resize the pass and its render target.
     * @param {number} width - New width in pixels
     * @param {number} height - New height in pixels
     */
    resize(width, height) {
        if (!this.autoResize) return;
        super.resize(width, height);
        if (this.renderTarget) {
            this.renderTarget.resize(width, height);
        }
    }

    /**
     * Execute the object render pass.
     * Renders all scene objects using their materials, or using the material override.
     * Supports per-object material selection for depth/normal/shadow passes.
     * @param {Renderer} renderer - The renderer instance
     * @param {Array|Object} scene - Scene objects or array of GameObjects
     * @param {Camera} camera - Camera for rendering
     */
    execute(renderer, scene, camera) {
        const renderCamera = this.camera || camera;
        if (this.camera) renderCamera.updateView();

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
            let flags = this.gl.COLOR_BUFFER_BIT;
            if (this.clearDepth) flags |= this.gl.DEPTH_BUFFER_BIT;
            this.gl.clear(flags);
        }

        // Render scene objects
        if (scene && Array.isArray(scene)) {
            for (const obj of scene) {
                if (this.materialOverride) {
                    let materialToUse = this.materialOverride;
                    if (this.name === 'Depth Pass' && obj.depthMaterial) {
                        materialToUse = obj.depthMaterial;
                    } else if (this.name === 'Normal Pass' && obj.normalMaterial) {
                        materialToUse = obj.normalMaterial;
                    } else if (this.name === 'Shadow Pass' && obj.shadowMaterial) {
                        materialToUse = obj.shadowMaterial;
                    }
                    obj.render(renderCamera, this.renderTarget, materialToUse);
                } else {
                    obj.render(renderCamera, this.renderTarget);
                }
            }
        } else if (scene && scene.render) {
             // Maybe scene is an object?
             scene.render(renderCamera, this.renderTarget, this.materialOverride);
        }

        if (this.renderTarget) {
            this.renderTarget.unbind();
        }

        const stats = renderer.resetDrawCalls();
        this.drawCount = stats.count;
        this.drawDetails = stats.details;
        this.executionTime = performance.now() - startTime;
    }
}
