import { RenderPass } from './RenderPass.js';
import { FullScreenQuad } from './FullScreenQuad.js';

export class ScreenRenderPass extends RenderPass {
    constructor(gl, width, height, material, renderTarget = null, name = 'ScreenPass') {
        super(gl, width, height, name);
        this.material = material;
        this.renderTarget = renderTarget;
        this.fullScreenQuad = new FullScreenQuad(gl);
        this.inputs = {}; // UniformName -> Texture
        this.clearColor = null;
    }

    setTexture(name, texture) {
        this.inputs[name] = texture;
    }

    resize(width, height) {
        super.resize(width, height);
        if (this.renderTarget) {
            this.renderTarget.resize(width, height);
        }
    }

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
        this.material.setUniform('uResolution', [this.width, this.height]);

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
