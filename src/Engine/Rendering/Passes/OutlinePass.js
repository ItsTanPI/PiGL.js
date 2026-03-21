import { ScreenRenderPass } from '../ScreenRenderPass.js';

/**
 * Outline Pass
 * 
 * Edge detection pass using depth and normal discontinuities to create outlines.
 * Commonly used for cel shading, toon rendering, or stylized graphics effects.
 * 
 * @class OutlinePass
 * @extends ScreenRenderPass
 * @description
 * Features:
 * - Depth-based edge detection
 * - Normal-based edge detection
 * - Combines both for robust outlines
 * - Configurable resolution for edge sharpness
 */
export class OutlinePass extends ScreenRenderPass {
    /**
     * Creates a new outline/edge detection pass.
     * @param {WebGLRenderingContext} gl - The WebGL context
     * @param {number} width - Viewport width in pixels
     * @param {number} height - Viewport height in pixels
     * @param {Material} material - Edge detection shader material
     * @param {RenderTarget} [target=null] - Optional target to render to
     * @param {string} [name='Outline Pass'] - Descriptive name
     */
    constructor(gl, width, height, material, target = null, name = 'Outline Pass') {
        super(gl, width, height, material, target, name);
        /** @type {number[]} RGBA clear color - transparent by default for layering */
        this.clearColor = [0.0, 0.0, 0.0, 0.0];
    }

    /**
     * Set the input buffers for edge detection.
     * @param {WebGLTexture} depthTex - Depth texture for depth-based edges
     * @param {WebGLTexture} normalTex - Normal texture for discontinuity detection
     */
    setInputBuffers(depthTex, normalTex) {
        this.setTexture('uDepthTexture', depthTex);
        this.setTexture('uNormalTexture', normalTex);
    }

    resize(width, height) {
        super.resize(width, height);
        this.material.setUniform('uResolution', [width, height]);
    }
}
