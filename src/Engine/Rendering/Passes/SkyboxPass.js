import { ScreenRenderPass } from '../ScreenRenderPass.js';
import { Matrix } from '../../Math/Matrix.js';

export class SkyboxPass extends ScreenRenderPass {
    constructor(gl, width, height, material, target = null, name = 'Skybox Pass') {
        super(gl, width, height, material, target, name);
        this.clearColor = null; // Do not clear previous passes!
        this.clearDepth = false; // Do not clear depth
    }

    setCamera(camera) {
        // Need inverse view projection
        // Recompute here or reuse from main? Let's recompute for safety.
        const camViewProj = new Float32Array(16);
        Matrix.multiply(camViewProj, camera.projectionMatrix, camera.viewMatrix);
        
        const invCamViewProj = new Float32Array(16);
        Matrix.invert(invCamViewProj, camViewProj);

        this.material.setUniforms({
            'uInverseViewProjection': invCamViewProj,
            'uCameraPos': [camera.transform.position.x, camera.transform.position.y, camera.transform.position.z]
            // We pass pos as array or vec3
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
