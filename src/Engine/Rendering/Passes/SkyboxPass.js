import { ScreenRenderPass } from '../ScreenRenderPass.js';
import { Matrix } from '../../Math/Matrix.js';

export class SkyboxPass extends ScreenRenderPass {
    constructor(gl, width, height, material, target = null, name = 'Skybox Pass') {
        super(gl, width, height, material, target, name);
        this.clearColor = null; // Do not clear previous passes!
        this.clearDepth = false; // Do not clear depth
        
        // Pre-allocate matrix buffers to avoid per-frame allocations
        this._camViewProj = new Float32Array(16);
        this._invCamViewProj = new Float32Array(16);
    }

    setCamera(camera) {
        // Reuse pre-allocated buffers instead of creating new ones
        Matrix.multiply(this._camViewProj, camera.projectionMatrix, camera.viewMatrix);
        Matrix.invert(this._invCamViewProj, this._camViewProj);

        this.material.setUniforms({
            'uInverseViewProjection': this._invCamViewProj,
            'uCameraPos': [camera.transform.position.x, camera.transform.position.y, camera.transform.position.z]
        });
    }

    setLight(direction, sunColor, topColor, bottomColor) {
        this.material.setUniforms({
            'uLightDir': direction,
            'uSunColor': sunColor,
            'uTopColor': topColor,
            'uBottomColor': bottomColor
        });
    }

    setInputTexture(depthTex) {
        this.setTexture('uDepthTexture', depthTex);
    }
    
    execute(renderer, scene, camera) {
        this.setCamera(camera);
        super.execute(renderer, scene, camera);
    }

}
