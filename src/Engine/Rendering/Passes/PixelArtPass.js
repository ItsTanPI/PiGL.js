/**
 * Pixel Art Pass
 * 
 * Post-processing pass that creates a pixelated/pixel art effect.
 * Down-samples and up-samples the scene to create blocky, retro aesthetics.
 * 
 * @class PixelArtPass
 * @extends ScreenRenderPass
 * @description
 * Features:
 * - Configurable pixel block size
 * - Preserves detail in depth and normal discontinuities
 * - Works with G-buffers for advanced effects
 */
import { ScreenRenderPass } from '../ScreenRenderPass.js';

export class PixelArtPass extends ScreenRenderPass {
    /**
     * Creates a new pixel art/pixelation effect pass.
     * @param {WebGLRenderingContext} gl - The WebGL context
     * @param {number} width - Viewport width in pixels
     * @param {number} height - Viewport height in pixels
     * @param {Material} material - Pixel art shader material
     * @param {RenderTarget} [target=null] - Optional target to render to
     * @param {string} [name='PixelArt Pass'] - Descriptive name
     */
    constructor(gl, width, height, material, target, name = 'PixelArt Pass') {
        super(gl, width, height, material, target, name);
    }

    /**
     * Set the input buffers for pixelation effect.
     * @param {WebGLTexture} sceneTex - Scene color texture
     * @param {WebGLTexture} depthTex - Depth texture for edge preservation
     * @param {WebGLTexture} normalTex - Normal texture for edge preservation
     */
    setInputBuffers(sceneTex, depthTex, normalTex) {
        this.setTexture('uSceneTexture', sceneTex);
        this.setTexture('uDepthTexture', depthTex);
        this.setTexture('uNormalTexture', normalTex);

    }

    resize(width, height) {
        super.resize(width, height);
        this.material.setUniform('uResolution', [width, height]);
    }
}
