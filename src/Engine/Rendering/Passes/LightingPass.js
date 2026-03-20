import { ScreenRenderPass } from '../ScreenRenderPass.js';
import { mat4 } from '../../Math/Transform.js';

export class LightingPass extends ScreenRenderPass {
    constructor(gl, width, height, material, target = null, name = 'Lighting Pass') {
        super(gl, width, height, material, target, name);
        this.lightCamera = null;
    }
    
    // Set buffers from previous passes
    setInputBuffers(sceneTex, normalTex, depthTex, shadowTex) {
        this.setTexture('uSceneTexture', sceneTex);
        this.setTexture('uNormalTexture', normalTex);
        this.setTexture('uDepthTexture', depthTex);
        this.setTexture('uShadowMap', shadowTex);
    }
    
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
        mat4.multiply(lightSpace, lightCamera.projectionMatrix, lightCamera.viewMatrix);

        // Compute uInverseViewProjection (Inverse(CamProj * CamView))
        const camViewProj = new Float32Array(16);
        mat4.multiply(camViewProj, camera.projectionMatrix, camera.viewMatrix);
        
        const invCamViewProj = new Float32Array(16);
        this.invertMatrix(camViewProj, invCamViewProj);

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

    invertMatrix(m, out) {
        let m00 = m[0], m01 = m[1], m02 = m[2], m03 = m[3];
        let m10 = m[4], m11 = m[5], m12 = m[6], m13 = m[7];
        let m20 = m[8], m21 = m[9], m22 = m[10], m23 = m[11];
        let m30 = m[12], m31 = m[13], m32 = m[14], m33 = m[15];

        let b00 = m00 * m11 - m01 * m10;
        let b01 = m00 * m12 - m02 * m10;
        let b02 = m00 * m13 - m03 * m10;
        let b03 = m01 * m12 - m02 * m11;
        let b04 = m01 * m13 - m03 * m11;
        let b05 = m02 * m13 - m03 * m12;
        let b06 = m20 * m31 - m21 * m30;
        let b07 = m20 * m32 - m22 * m30;
        let b08 = m20 * m33 - m23 * m30;
        let b09 = m21 * m32 - m22 * m31;
        let b10 = m21 * m33 - m23 * m31;
        let b11 = m22 * m33 - m23 * m32;

        let det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
        if (!det) return false;
        det = 1.0 / det;

        out[0] = (m11 * b11 - m12 * b10 + m13 * b09) * det;
        out[1] = (m02 * b10 - m01 * b11 - m03 * b09) * det;
        out[2] = (m31 * b05 - m32 * b04 + m33 * b03) * det;
        out[3] = (m22 * b04 - m21 * b05 - m23 * b03) * det;
        out[4] = (m12 * b08 - m10 * b11 - m13 * b07) * det;
        out[5] = (m00 * b11 - m02 * b08 + m03 * b07) * det;
        out[6] = (m32 * b02 - m30 * b05 - m33 * b01) * det;
        out[7] = (m20 * b05 - m22 * b02 + m23 * b01) * det;
        out[8] = (m10 * b10 - m11 * b08 + m13 * b06) * det;
        out[9] = (m01 * b08 - m00 * b10 - m03 * b06) * det;
        out[10] = (m30 * b04 - m31 * b02 + m33 * b00) * det;
        out[11] = (m21 * b02 - m20 * b04 - m23 * b00) * det;
        out[12] = (m11 * b07 - m10 * b09 - m12 * b06) * det;
        out[13] = (m00 * b09 - m01 * b07 + m02 * b06) * det;
        out[14] = (m31 * b01 - m30 * b03 - m32 * b00) * det;
        out[15] = (m20 * b03 - m21 * b01 + m22 * b00) * det;

        return true;
    }
}
