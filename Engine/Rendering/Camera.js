import { GameObject } from '../Core/GameObject.js';
import { mat4 } from '../Math/Transform.js';

export class Camera extends GameObject {
    constructor() {
        super(null); // Camera has no renderer
        this.projectionMatrix = new Float32Array(16);
        this.viewMatrix = new Float32Array(16);
        
        // Initial defaults
        mat4.identity(this.projectionMatrix);
        mat4.identity(this.viewMatrix);

        // Ensure starting position is matched with transform
        this.transform.position.set(0, 0, 5);
    }

    setPerspective(fov, aspect, near, far) {
        const f = 1.0 / Math.tan(fov / 2);
        const out = this.projectionMatrix;
        
        out.fill(0);
        out[0] = f / aspect;
        out[5] = f;
        out[10] = (far + near) / (near - far);
        out[11] = -1;
        out[14] = (2 * far * near) / (near - far);
    }

    setOrthographic(left, right, bottom, top, near, far) {
        const out = this.projectionMatrix;
        const lr = 1 / (left - right);
        const bt = 1 / (bottom - top);
        const nf = 1 / (near - far);

        out.fill(0);
        out[0] = -2 * lr;
        out[5] = -2 * bt;
        out[10] = 2 * nf;
        out[12] = (left + right) * lr;
        out[13] = (top + bottom) * bt;
        out[14] = (far + near) * nf;
        out[15] = 1;
    }

    updateView() {
        // Because the Camera is just a GameObject, we first calculate its world matrix based on 
        // position, rotation, scale, and any parents it might be attached to.
        this.transform.updateWorldMatrix();
        
        // The ViewMatrix for rendering is exactly the mathematical inverse of the Camera's WorldMatrix!
        mat4.invert(this.viewMatrix, this.transform.worldMatrix);
    }
}
