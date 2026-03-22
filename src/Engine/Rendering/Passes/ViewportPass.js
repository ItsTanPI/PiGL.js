import { RenderPass } from '../RenderPass.js';
import { FullScreenQuad } from '../FullScreenQuad.js';

export class ViewportPass extends RenderPass {
    constructor(gl, width, height, screenMaterial) {
        super(gl, width, height, 'ViewportComposition');
        this.material = screenMaterial;
        this.fullScreenQuad = new FullScreenQuad(gl);
        this.buffers = {}; // name -> texture
        this.viewports = [];
        this.overlay = null; // Outline or UI texture
    }
    
    setBuffer(name, texture) {
        this.buffers[name] = texture;
    }
    
    setOverlay(texture) {
        this.overlay = texture;
    }

    setViewports(vps) {
        this.viewports = vps;
    }

    execute(renderer, scene, camera) {
        this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, null);
        
        // Clear entire screen first
        this.gl.viewport(0, 0, this.width, this.height);
        this.gl.clearColor(0.1, 0.1, 0.1, 1.0);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);

        for (const vp of this.viewports) {
            // Calculate pixel rect
            const valX = Math.floor(vp.x * this.width);
            const valY = Math.floor(vp.y * this.height); // WebGL y is bottom-up
            const valW = Math.floor(vp.w * this.width);
            const valH = Math.floor(vp.h * this.height);
    
            this.gl.viewport(valX, valY, valW, valH);
            
            // Determine texture to show
            let finalTex = this.buffers['Final']; // Default
            const p = vp.pass;
            
            if (this.buffers[p]) {
                finalTex = this.buffers[p];
            }
    
            this.material.setUniform('uTexture', finalTex); // Generic setter
            

            this.fullScreenQuad.draw(this.material);
        }
    }
}
