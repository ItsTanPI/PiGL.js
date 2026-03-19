import { ScreenRenderPass } from '../ScreenRenderPass.js';

export class OutlinePass extends ScreenRenderPass {
    constructor(gl, width, height, material, target = null, name = 'Outline Pass') {
        super(gl, width, height, material, target, name);
        this.clearColor = [0.0, 0.0, 0.0, 0.0]; // Transparent background
    }

    setInputBuffers(depthTex, normalTex) {
        this.setTexture('uDepthTexture', depthTex);
        this.setTexture('uNormalTexture', normalTex);
        this.setTexture('uSceneTexture', depthTex); // Dummy bind if shader expects it? No, removed from frag.
    }

    resize(width, height) {
        super.resize(width, height);
        this.material.setUniform('uResolution', [width, height]);
    }
}
