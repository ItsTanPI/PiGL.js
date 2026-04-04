import { RenderPass } from './RenderPass.js';
import { Shader } from '../Rendering/Shader.js';

import clearVs from '../shaders/clearquad.vert?raw';
import clearFs from '../shaders/clearquad.frag?raw';

export class ObjectRenderPass extends RenderPass {
    constructor(gl, width, height, renderTarget = null, renderMode = 0, name = 'ObjectPass') {
        super(gl, width, height, name);
        this.renderTarget = renderTarget;
        this.renderMode = renderMode;
        this.clearColor = [0.0, 0.0, 0.0, 1.0];
        this.clearDepth = true;
        this.camera = null;

        // Build clear quad
        this._clearShader = new Shader(gl, clearVs, clearFs);

        const verts = new Float32Array([
            -1, -1,
             1, -1,
            -1,  1,
            -1,  1,
             1, -1,
             1,  1,
        ]);
        this._clearVbo = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, this._clearVbo);
        gl.bufferData(gl.ARRAY_BUFFER, verts, gl.STATIC_DRAW);
        gl.bindBuffer(gl.ARRAY_BUFFER, null);
        
        // Pre-allocate reusable attachment arrays to avoid per-frame allocation
        this._attachmentsWithDepth = [gl.COLOR_ATTACHMENT0, gl.DEPTH_ATTACHMENT];
        this._attachmentsDepthOnly = [gl.DEPTH_ATTACHMENT];
    }

    _drawClearQuad() {
        const gl = this.gl;

        gl.depthFunc(gl.ALWAYS);
        gl.depthMask(true);
        gl.disable(gl.CULL_FACE);

        this._clearShader.use();
        this._clearShader.setUniform('uClearColor', this.clearColor);

        gl.bindBuffer(gl.ARRAY_BUFFER, this._clearVbo);
        const aPos = this._clearShader.getAttribLocation('aVertexPosition');
        if (aPos !== -1) {
            gl.enableVertexAttribArray(aPos);
            gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);
        }

        gl.drawArrays(gl.TRIANGLES, 0, 6);

        gl.bindBuffer(gl.ARRAY_BUFFER, null);

        // Restore
        gl.depthFunc(gl.LEQUAL);
        gl.enable(gl.CULL_FACE);
    }
    
    resize(width, height) {
        if (!this.autoResize) return;
        super.resize(width, height);
        if (this.renderTarget) this.renderTarget.resize(width, height);
    }

    execute(renderer, scene, camera) {
        const renderCamera = this.camera || camera;
        if (this.camera) renderCamera.updateView();

        const startTime = performance.now();
        renderer.resetDrawCalls();

        if (this.renderTarget) {
            // Invalidate before bind — no tile load from RAM
            const gl = this.gl;
            gl.bindFramebuffer(gl.FRAMEBUFFER, this.renderTarget.framebuffer);
            // Reuse pre-allocated attachment arrays instead of creating new ones
            const attachments = this.clearDepth ? this._attachmentsWithDepth : [gl.COLOR_ATTACHMENT0];
            gl.invalidateFramebuffer(gl.FRAMEBUFFER, attachments);
            gl.viewport(0, 0, this.renderTarget.width, this.renderTarget.height);
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

        // Recursive render function for object hierarchies
        const renderObjectAndChildren = (obj) => {
            if (!obj.active) return;
            if (obj.material) {
                obj.material.setUniform('uRenderMode', this.renderMode, '1i');
            }
            obj.render(renderCamera, this.renderTarget);
            
            // Render children recursively
            if (obj.transform && obj.transform.children) {
                for (const child of obj.transform.children) {
                    // Create a wrapper GameObject if child doesn't have one
                    if (child.gameObject) {
                        renderObjectAndChildren(child.gameObject);
                    }
                }
            }
        };
        
        // Render scene objects
        if (scene && Array.isArray(scene)) {
            for (const obj of scene) {
                renderObjectAndChildren(obj);
            }
        } else if (scene && scene.render) {
            scene.render(renderCamera, this.renderTarget);
        }

        if (this.renderTarget) {
            // Discard depth after — never needed next frame
            if (this.clearDepth) {
                // Reuse pre-allocated depth-only attachment array
                this.gl.invalidateFramebuffer(
                    this.gl.FRAMEBUFFER,
                    this._attachmentsDepthOnly
                );
            }
            this.renderTarget.unbind();
        }

        const stats = renderer.resetDrawCalls();
        this.drawCount = stats.count;
        this.drawDetails = stats.details;
        this.executionTime = performance.now() - startTime;
    }
}