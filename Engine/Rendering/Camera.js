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
        this.name = 'Camera';
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

    getScreenPosition(gameObject) {
        // Basic Transform logic to project 3D point to 2D Screen UV (0-1)
        
        // 1. Get View Matrix & Projection Matrix
        const v = this.viewMatrix;
        const p = this.projectionMatrix;
        
        // 2. Get Object World Position (Translation column of matrix)
        gameObject.transform.updateWorldMatrix(); // Ensure clean matrix
        const m = gameObject.transform.worldMatrix;
        const wx = m[12], wy = m[13], wz = m[14], ww = 1.0;

        // 3. View Space
        const vx = v[0]*wx + v[4]*wy + v[8]*wz + v[12]*ww;
        const vy = v[1]*wx + v[5]*wy + v[9]*wz + v[13]*ww;
        const vz = v[2]*wx + v[6]*wy + v[10]*wz + v[14]*ww;
        const vw = v[3]*wx + v[7]*wy + v[11]*wz + v[15]*ww;

        // 4. Clip Space
        const px = p[0]*vx + p[4]*vy + p[8]*vz + p[12]*vw;
        const py = p[1]*vx + p[5]*vy + p[9]*vz + p[13]*vw;
        const pz = p[2]*vx + p[6]*vy + p[10]*vz + p[14]*vw;
        const pw = p[3]*vx + p[7]*vy + p[11]*vz + p[15]*vw;

        // 5. NDC Space (-1 to 1)
        if (pw === 0) return [0.5, 0.5]; // Avoid divide by zero
        const ndcX = px / pw;
        const ndcY = py / pw;

        // 6. Screen UV Space (0 to 1)
        return [(ndcX + 1) * 0.5, (ndcY + 1) * 0.5];
    }
}
