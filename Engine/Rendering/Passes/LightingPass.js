import { ScreenRenderPass } from '../ScreenRenderPass.js';

export class LightingPass extends ScreenRenderPass {
    constructor(gl, width, height, material, target = null, name = 'Lighting Pass') {
        super(gl, width, height, material, target, name);
    }
    
    // Set buffers from previous passes
    setInputBuffers(sceneTex, normalTex, depthTex) {
        this.setTexture('uSceneTexture', sceneTex);
        this.setTexture('uNormalTexture', normalTex);
        this.setTexture('uDepthTexture', depthTex);
    }

    setLight(direction, color, ambient) {
        this.material.setUniforms({
            'uLightDir': direction,
            'uLightColor': color,
            'uAmbient': ambient
        });
    }
}
