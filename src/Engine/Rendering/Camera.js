import { GameObject } from '../Core/GameObject.js';
import { Matrix } from '../Math/Matrix.js';

/**
 * Camera extends GameObject to provide projection and view matrices for rendering.
 * 
 * @class Camera
 * @extends GameObject
 * @description Supports both perspective and orthographic projections. The camera itself is a GameObject
 * so it has a Transform and can be positioned/rotated in the scene. Updated each frame and passed to
 * render passes to define what is visible.
 */
export class Camera extends GameObject {
    /**
     * Creates a new Camera with default perspective settings.
     * @constructor
     */
    constructor() {
        super(null); // Camera has no renderer
        /** @type {Float32Array} 4x4 projection matrix; updated by setPerspective/setOrthographic. */
        this.projectionMatrix = new Float32Array(16);
        /** @type {Float32Array} 4x4 view matrix; inverse of world matrix (camera's pose). */
        this.viewMatrix = new Float32Array(16);
        
        // Settings for Inspector
        /** @type {number} Field of view in radians (for perspective mode). */
        this.fov = 45 * Math.PI / 180;
        /** @type {number} Aspect ratio (width/height). */
        this.aspect = 1.0;
        /** @type {number} Near clipping plane distance. */
        this.near = 0.1;
        /** @type {number} Far clipping plane distance. */
        this.far = 100.0;
        /** @type {boolean} Is orthographic projection active? */
        this.orthographic = false;
        /** @type {number} Size for orthographic projection (half-height). */
        this.orthoSize = 30.0;

        // Initial defaults
        Matrix.identity(this.projectionMatrix);
        Matrix.identity(this.viewMatrix);

        // Ensure starting position is matched with transform
        this.transform.position.set(0, 0, 5);
        this.name = 'Camera';
    }

    /**
     * Sets up perspective projection (standard 3D view).
     * 
     * @method setPerspective
     * @param {number} fov - Field of view in radians.
     * @param {number} aspect - Aspect ratio (width / height).
     * @param {number} near - Near clipping plane.
     * @param {number} far - Far clipping plane.
     * @returns {void}
     * 
     * @description Updates internal projection matrix. Call `updateProjection()` to rebuild if settings change.
     */
    setPerspective(fov, aspect, near, far) {
        this.fov = fov;
        this.aspect = aspect;
        this.near = near;
        this.far = far;
        this.orthographic = false;

        const f = 1.0 / Math.tan(fov / 2);
        const out = this.projectionMatrix;
        
        out.fill(0);
        out[0] = f / aspect;
        out[5] = f;
        out[10] = (far + near) / (near - far);
        out[11] = -1;
        out[14] = (2 * far * near) / (near - far);
    }

    /**
     * Sets up orthographic projection (2D/isometric view).
     * 
     * @method setOrthographic
     * @param {number} left - Left clip boundary.
     * @param {number} right - Right clip boundary.
     * @param {number} bottom - Bottom clip boundary.
     * @param {number} top - Top clip boundary.
     * @param {number} near - Near clipping plane.
     * @param {number} far - Far clipping plane.
     * @returns {void}
     */
    setOrthographic(left, right, bottom, top, near, far) {
        this.near = near;
        this.far = far;
        this.orthographic = true;
        // Approximation for inspector
        this.orthoSize = (top - bottom) / 2;

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

    /**
     * Rebuilds projection matrix from current settings.
     * 
     * @method updateProjection
     * @returns {void}
     * 
     * @description Call after changing `fov`, `aspect`, `near`, `far`, or `orthographic` mode.
     */
    updateProjection() {
        if (this.orthographic) {
            const size = this.orthoSize;
            this.setOrthographic(-size * this.aspect, size * this.aspect, -size, size, this.near, this.far);
        } else {
            this.setPerspective(this.fov, this.aspect, this.near, this.far);
        }
    }

    /**
     * Computes the view matrix from the camera's world transform.
     * 
     * @method updateView
     * @returns {void}
     * 
     * @description The view matrix is the inverse of the camera's world matrix.
     * Call once per frame before rendering.
     */
    updateView() {
        // Because the Camera is just a GameObject, we first calculate its world matrix based on 
        // position, rotation, scale, and any parents it might be attached to.
        this.transform.updateWorldMatrix();
        
        // The ViewMatrix for rendering is exactly the mathematical inverse of the Camera's WorldMatrix!
        Matrix.invert(this.viewMatrix, this.transform.worldMatrix);
    }

    /**
     * Projects a GameObject's world position to normalized screen coordinates (0–1).
     * 
     * @method getScreenPosition
     * @param {GameObject} gameObject - Object to project.
     * @param {number[]} [out=null] - Optional output array to reuse [x, y]; if null, creates new array.
     * @returns {number[]} Array [screenX, screenY] in normalized device coords (0=left/bottom, 1=right/top).
     * 
     * @description Useful for UI positioning or culling checks. Returns [0.5, 0.5] on projection failure.
     * Pass an output array to avoid allocation.
     */
    getScreenPosition(gameObject, out = null) {
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
        if (pw === 0) {
            if (!out) out = [0.5, 0.5];
            else { out[0] = 0.5; out[1] = 0.5; }
            return out;
        }
        const ndcX = px / pw;
        const ndcY = py / pw;

        // 6. Screen UV Space (0 to 1)
        const screenX = (ndcX + 1) * 0.5;
        const screenY = (ndcY + 1) * 0.5;
        
        if (!out) {
            out = [screenX, screenY];
        } else {
            out[0] = screenX;
            out[1] = screenY;
        }
        return out;
    }
}
