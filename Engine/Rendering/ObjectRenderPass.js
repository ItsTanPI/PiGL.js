import { RenderPass } from './RenderPass.js';

export class ObjectRenderPass extends RenderPass {
    constructor(gl, width, height, renderTarget = null, materialOverride = null, name = 'ObjectPass') {
        super(gl, width, height, name);
        this.renderTarget = renderTarget;
        this.materialOverride = materialOverride;
        this.clearColor = [0.0, 0.0, 0.0, 1.0];
        this.clearDepth = true;
    }

    resize(width, height) {
        super.resize(width, height);
        if (this.renderTarget) {
            this.renderTarget.resize(width, height);
        }
    }

    execute(renderer, scene, camera) {
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
                    obj.render(camera, this.renderTarget, this.materialOverride);
                } else {
                    obj.render(camera, this.renderTarget);
                }
            }
        } else if (scene && scene.render) {
             // Maybe scene is an object?
             scene.render(camera, this.renderTarget, this.materialOverride);
        }

        if (this.renderTarget) {
            this.renderTarget.unbind();
        }

        const stats = renderer.resetDrawCalls();
        this.drawCount = stats.count;
        this.drawDetails = stats.details;
    }
}
