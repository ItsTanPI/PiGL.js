import { ScreenRenderPass } from '../ScreenRenderPass.js';
import { Matrix } from '../../Math/Matrix.js';

/**
 * Lighting Pass
 * 
 * Deferred lighting pass that computes lighting from scene, normal, depth, and shadow information.
 * Combines multiple render target textures to produce final lit output.
 * 
 * @class LightingPass
 * @extends ScreenRenderPass
 * @description
 * This pass performs deferred rendering:
 * 1. Takes input buffers: scene color, normal map, depth, shadow map
 * 2. Computes light space and view-projection matrices
 * 3. Applies lighting calculations via full-screen shader
 * 4. Outputs final lit scene
 */
export class LightingPass extends ScreenRenderPass {
    /**
     * Creates a new lighting pass.
     * @param {WebGLRenderingContext} gl - The WebGL context
     * @param {number} width - Viewport width in pixels
     * @param {number} height - Viewport height in pixels
     * @param {Material} material - Lighting shader material
     * @param {RenderTarget} [target=null] - Optional target to render to
     * @param {string} [name='Lighting Pass'] - Descriptive name
     */
    constructor(gl, width, height, material, target = null, name = 'Lighting Pass') {
        super(gl, width, height, material, target, name);
        /** @type {Camera} Optional light camera for shadow/lighting calculations */
        this.lightCamera = null;
    }
    
    /**
     * Set the input G-buffers for lighting computation.
     * @param {WebGLTexture} sceneTex - Scene color/albedo texture
     * @param {WebGLTexture} normalTex - Per-pixel normal vectors
     * @param {WebGLTexture} depthTex - Per-pixel depth values
     * @param {WebGLTexture} shadowTex - Shadow map depth comparison texture
     */
    setInputBuffers(sceneTex, normalTex, depthTex, shadowTex) {
        this.setTexture('uSceneTexture', sceneTex);
        this.setTexture('uNormalTexture', normalTex);
        this.setTexture('uDepthTexture', depthTex);
        this.setTexture('uShadowMap', shadowTex);
    }
    
    /**
     * Execute the lighting pass.
     * Computes light matrices if light camera is set, then performs deferred lighting.
     * @param {Renderer} renderer - The renderer instance
     * @param {Array|Object} scene - Scene (usually unused)
     * @param {Camera} camera - Main camera for view projection
     */
    execute(renderer, scene, camera) {
        if (this.lightCamera) {
            this.setMatricesFromCameras(camera, this.lightCamera);
        }
        // Then do the normal screen pass render
        super.execute(renderer, scene, camera);
    }

    setMatricesFromCameras(camera, lightCamera) {
        // Compute uLightSpaceMatrix (Light Proj * Light View)
        const lightSpace = new Float32Array(16);
        Matrix.multiply(lightSpace, lightCamera.projectionMatrix, lightCamera.viewMatrix);

        // Compute uInverseViewProjection (Inverse(CamProj * CamView))
        const camViewProj = new Float32Array(16);
        Matrix.multiply(camViewProj, camera.projectionMatrix, camera.viewMatrix);
        
        const invCamViewProj = new Float32Array(16);
        Matrix.invert(invCamViewProj, camViewProj);

        const camPos = camera.transform.position;
        this.material.setUniforms({
            'uLightSpaceMatrix': lightSpace,
            'uInverseViewProjection': invCamViewProj,
            'uCameraPos': [camPos.x, camPos.y, camPos.z]
        });
    }

    setMatrices(invViewProj, lightSpaceParams) {
        this.material.setUniforms({
            'uInverseViewProjection': invViewProj,
            'uLightSpaceMatrix': lightSpaceParams
        })
    }

    setLight(direction, color, ambient) {
        this.material.setUniforms({
            'uLightDir': direction,
            'uLightColor': color,
            'uAmbient': ambient
        });
    }
}
