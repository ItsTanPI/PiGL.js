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
        
        // Pre-allocate resolution buffer to avoid per-frame allocation
        this._resolutionBuffer = new Float32Array([width, height]);
    }

    /**
     * Set the input buffers for pixelation effect.
     * @param {WebGLTexture} sceneTex - Scene color texture
     * @param {WebGLTexture} depthTex - Depth texture for edge preservation
     * @param {WebGLTexture} normalTex - Normal texture for edge preservation
     */
    setInputBuffers(sceneTex, GbufferTex) {
        this.setTexture('uSceneTexture', sceneTex);
        this.setTexture('uGbufferTexture', GbufferTex);

    }

    resize(width, height) {
        super.resize(width, height);
        // Update cached resolution buffer instead of creating new array
        this._resolutionBuffer[0] = width;
        this._resolutionBuffer[1] = height;
        this.material.setUniform('uResolution', this._resolutionBuffer);
    }
}
