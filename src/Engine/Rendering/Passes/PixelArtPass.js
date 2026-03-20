// Reuse quad_screen.vert
import { ScreenRenderPass } from '../ScreenRenderPass.js';

export class PixelArtPass extends ScreenRenderPass {
    constructor(gl, width, height, material, target, name = 'PixelArt Pass') {
        super(gl, width, height, material, target, name);
    }

    setInputBuffers(sceneTex, depthTex, NormlTex) {
        this.setTexture('uSceneTexture', sceneTex);
        this.setTexture('uDepthTexture', depthTex);
        this.setTexture('uNormalTexture', NormlTex);
    }

    resize(width, height) {
        super.resize(width, height);
        this.material.setUniform('uResolution', [width, height]);
    }
}
