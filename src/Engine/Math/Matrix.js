/**
 * Matrix Utility Class
 * 
 * Provides static methods for 4x4 matrix operations commonly used in 3D graphics.
 * All operations work with Float32Array matrices in row-major order (16 elements).
 * 
 * @class Matrix
 * @description
 * A centralized collection of matrix operations including:
 * - Creation and initialization
 * - Transformation (translate, rotate, scale)
 * - Matrix composition (multiply)
 * - Matrix inversion for screen-space calculations
 */
export class Matrix {
    /**
     * Create an identity matrix (4x4).
     * Sets the matrix to the identity transformation (no scale, rotation, or translation).
     * @static
     * @param {Float32Array} out - Output matrix (will be modified)
     * @returns {Float32Array} The identity matrix
     */
    static identity(out) {
        return mat4.identity(out);
    }

    /**
     * Copy one matrix to another (fast memory copy).
     * @static
     * @param {Float32Array} out - Output matrix (will be modified)
     * @param {Float32Array} a - Source matrix to copy
     * @returns {Float32Array} The copied matrix
     */
    static copy(out, a) {
        out.set(a);
        return out;
    }

    /**
     * Multiply two 4x4 matrices: out = a × b
     * Computes the product of two matrices and stores the result in out.
     * @static
     * @param {Float32Array} out - Output matrix (will be modified)
     * @param {Float32Array} a - First matrix to multiply
     * @param {Float32Array} b - Second matrix to multiply
     * @returns {Float32Array} The result matrix
     */
    static multiply(out, a, b) {
        return mat4.multiply(out, a, b);
    }

    /**
     * Translate a matrix by a vector.
     * Applies a translation transformation to the matrix.
     * @static
     * @param {Float32Array} out - Output matrix (will be modified)
     * @param {Float32Array} a - Input matrix to translate
     * @param {Object|Float32Array} v - Translation vector (can be {x,y,z} or [x,y,z])
     * @returns {Float32Array} The translated matrix
     */
    static translate(out, a, v) {
        return mat4.translate(out, a, v);
    }

    /**
     * Scale a matrix by a vector.
     * Applies a scaling transformation to the matrix.
     * @static
     * @param {Float32Array} out - Output matrix (will be modified)
     * @param {Float32Array} a - Input matrix to scale
     * @param {Object|Float32Array} v - Scale vector (can be {x,y,z} or [x,y,z])
     * @returns {Float32Array} The scaled matrix
     */
    static scale(out, a, v) {
        return mat4.scale(out, a, v);
    }

    /**
     * Rotate a matrix around the X axis.
     * @static
     * @param {Float32Array} out - Output matrix (will be modified)
     * @param {Float32Array} a - Input matrix to rotate
     * @param {number} rad - Rotation angle in radians
     * @returns {Float32Array} The rotated matrix
     */
    static rotateX(out, a, rad) {
        return mat4.rotateX(out, a, rad);
    }

    /**
     * Rotate a matrix around the Y axis.
     * @static
     * @param {Float32Array} out - Output matrix (will be modified)
     * @param {Float32Array} a - Input matrix to rotate
     * @param {number} rad - Rotation angle in radians
     * @returns {Float32Array} The rotated matrix
     */
    static rotateY(out, a, rad) {
        return mat4.rotateY(out, a, rad);
    }

    /**
     * Rotate a matrix around the Z axis.
     * @static
     * @param {Float32Array} out - Output matrix (will be modified)
     * @param {Float32Array} a - Input matrix to rotate
     * @param {number} rad - Rotation angle in radians
     * @returns {Float32Array} The rotated matrix
     */
    static rotateZ(out, a, rad) {
        return mat4.rotateZ(out, a, rad);
    }

    /**
     * Invert a 4x4 matrix.
     * Computes the inverse of a matrix for screen-space calculations and other transformations.
     * Returns null if the matrix is singular (non-invertible).
     * @static
     * @param {Float32Array} out - Output matrix (will be modified)
     * @param {Float32Array} a - Input matrix to invert
     * @returns {Float32Array|null} The inverted matrix, or null if singular
     */
    static invert(out, a) {
        return mat4.invert(out, a);
    }

    /**
     * Compose a transformation matrix from position, rotation (Euler), and scale.
     * More efficient than separate translate/rotate/scale calls.
     * @static
     * @param {Float32Array} out - Output matrix (will be modified)
     * @param {Vector3|Array} pos - Position [x, y, z]
     * @param {Vector3|Array} rot - Rotation in radians [x, y, z] - applied as YXZ order
     * @param {Vector3|Array} scale - Scale [x, y, z]
     * @returns {Float32Array} The composed matrix
     */
    static compose(out, pos, rot, scale) {
        return mat4.compose(out, pos, rot, scale);
    }
}

/**
 * Low-level 4x4 matrix operations object.
 * Implements the actual matrix math algorithms.
 * Use the Matrix class for type-safe wrapper access.
 * @private
 */
export const mat4 = {
    identity(out) {
        out.fill(0);
        out[0] = 1; out[5] = 1; out[10] = 1; out[15] = 1;
        return out;
    },
    multiply(out, a, b) {
        let a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3];
        let a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7];
        let a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11];
        let a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];
        
        // Cache only current line of second matrix
        let b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3];
        out[0] = b0*a00 + b1*a10 + b2*a20 + b3*a30;
        out[1] = b0*a01 + b1*a11 + b2*a21 + b3*a31;
        out[2] = b0*a02 + b1*a12 + b2*a22 + b3*a32;
        out[3] = b0*a03 + b1*a13 + b2*a23 + b3*a33;
        
        b0 = b[4]; b1 = b[5]; b2 = b[6]; b3 = b[7];
        out[4] = b0*a00 + b1*a10 + b2*a20 + b3*a30;
        out[5] = b0*a01 + b1*a11 + b2*a21 + b3*a31;
        out[6] = b0*a02 + b1*a12 + b2*a22 + b3*a32;
        out[7] = b0*a03 + b1*a13 + b2*a23 + b3*a33;
        
        b0 = b[8]; b1 = b[9]; b2 = b[10]; b3 = b[11];
        out[8] = b0*a00 + b1*a10 + b2*a20 + b3*a30;
        out[9] = b0*a01 + b1*a11 + b2*a21 + b3*a31;
        out[10] = b0*a02 + b1*a12 + b2*a22 + b3*a32;
        out[11] = b0*a03 + b1*a13 + b2*a23 + b3*a33;
        
        b0 = b[12]; b1 = b[13]; b2 = b[14]; b3 = b[15];
        out[12] = b0*a00 + b1*a10 + b2*a20 + b3*a30;
        out[13] = b0*a01 + b1*a11 + b2*a21 + b3*a31;
        out[14] = b0*a02 + b1*a12 + b2*a22 + b3*a32;
        out[15] = b0*a03 + b1*a13 + b2*a23 + b3*a33;
        return out;
    },
    translate(out, a, v) {
        let x = v.x !== undefined ? v.x : v[0];
        let y = v.y !== undefined ? v.y : v[1];
        let z = v.z !== undefined ? v.z : v[2];
        if (a === out) {
            out[12] = a[0]*x + a[4]*y + a[8]*z + a[12];
            out[13] = a[1]*x + a[5]*y + a[9]*z + a[13];
            out[14] = a[2]*x + a[6]*y + a[10]*z + a[14];
            out[15] = a[3]*x + a[7]*y + a[11]*z + a[15];
        } else {
            let a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3];
            let a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7];
            let a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11];
            out[0] = a00; out[1] = a01; out[2] = a02; out[3] = a03;
            out[4] = a10; out[5] = a11; out[6] = a12; out[7] = a13;
            out[8] = a20; out[9] = a21; out[10] = a22; out[11] = a23;
            out[12] = a00*x + a10*y + a20*z + a[12];
            out[13] = a01*x + a11*y + a21*z + a[13];
            out[14] = a02*x + a12*y + a22*z + a[14];
            out[15] = a03*x + a13*y + a23*z + a[15];
        }
        return out;
    },
    scale(out, a, v) {
        let x = v.x !== undefined ? v.x : v[0];
        let y = v.y !== undefined ? v.y : v[1];
        let z = v.z !== undefined ? v.z : v[2];
        out[0] = a[0]*x; out[1] = a[1]*x; out[2] = a[2]*x; out[3] = a[3]*x;
        out[4] = a[4]*y; out[5] = a[5]*y; out[6] = a[6]*y; out[7] = a[7]*y;
        out[8] = a[8]*z; out[9] = a[9]*z; out[10] = a[10]*z; out[11] = a[11]*z;
        out[12] = a[12]; out[13] = a[13]; out[14] = a[14]; out[15] = a[15];
        return out;
    },
    rotateX(out, a, rad) {
        // Cache sin/cos to avoid recalculation for each element
        let s = Math.sin(rad), c = Math.cos(rad);
        let a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7];
        let a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11];
        if (a !== out) {
            out[0] = a[0]; out[1] = a[1]; out[2] = a[2]; out[3] = a[3];
            out[12] = a[12]; out[13] = a[13]; out[14] = a[14]; out[15] = a[15];
        }
        out[4] = a10*c + a20*s; out[5] = a11*c + a21*s; out[6] = a12*c + a22*s; out[7] = a13*c + a23*s;
        out[8] = a20*c - a10*s; out[9] = a21*c - a11*s; out[10] = a22*c - a12*s; out[11] = a23*c - a13*s;
        return out;
    },
    rotateY(out, a, rad) {
        // Cache sin/cos to avoid recalculation for each element
        let s = Math.sin(rad), c = Math.cos(rad);
        let a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3];
        let a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11];
        if (a !== out) {
            out[4] = a[4]; out[5] = a[5]; out[6] = a[6]; out[7] = a[7];
            out[12] = a[12]; out[13] = a[13]; out[14] = a[14]; out[15] = a[15];
        }
        out[0] = a00*c - a20*s; out[1] = a01*c - a21*s; out[2] = a02*c - a22*s; out[3] = a03*c - a23*s;
        out[8] = a00*s + a20*c; out[9] = a01*s + a21*c; out[10] = a02*s + a22*c; out[11] = a03*s + a23*c;
        return out;
    },
    rotateZ(out, a, rad) {
        // Cache sin/cos to avoid recalculation for each element
        let s = Math.sin(rad), c = Math.cos(rad);
        let a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3];
        let a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7];
        if (a !== out) {
            out[8] = a[8]; out[9] = a[9]; out[10] = a[10]; out[11] = a[11];
            out[12] = a[12]; out[13] = a[13]; out[14] = a[14]; out[15] = a[15];
        }
        out[0] = a00*c + a10*s; out[1] = a01*c + a11*s; out[2] = a02*c + a12*s; out[3] = a03*c + a13*s;
        out[4] = a10*c - a00*s; out[5] = a11*c - a01*s; out[6] = a12*c - a02*s; out[7] = a13*c - a03*s;
        return out;
    },
    invert(out, a) {
        let a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3];
        let a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7];
        let a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11];
        let a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];

        let b00 = a00 * a11 - a01 * a10;
        let b01 = a00 * a12 - a02 * a10;
        let b02 = a00 * a13 - a03 * a10;
        let b03 = a01 * a12 - a02 * a11;
        let b04 = a01 * a13 - a03 * a11;
        let b05 = a02 * a13 - a03 * a12;
        let b06 = a20 * a31 - a21 * a30;
        let b07 = a20 * a32 - a22 * a30;
        let b08 = a20 * a33 - a23 * a30;
        let b09 = a21 * a32 - a22 * a31;
        let b10 = a21 * a33 - a23 * a31;
        let b11 = a22 * a33 - a23 * a32;

        let det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;

        if (!det) return null;
        det = 1.0 / det;

        out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
        out[1] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
        out[2] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
        out[3] = (a22 * b04 - a21 * b05 - a23 * b03) * det;
        out[4] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
        out[5] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
        out[6] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
        out[7] = (a20 * b05 - a22 * b02 + a23 * b01) * det;
        out[8] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
        out[9] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
        out[10] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
        out[11] = (a21 * b02 - a20 * b04 - a23 * b00) * det;
        out[12] = (a11 * b07 - a10 * b09 - a12 * b06) * det;
        out[13] = (a00 * b09 - a01 * b07 + a02 * b06) * det;
        out[14] = (a31 * b01 - a30 * b03 - a32 * b00) * det;
        out[15] = (a20 * b03 - a21 * b01 + a22 * b00) * det;

        return out;
    },
    compose(out, pos, rot, scale) {
        // Efficiently compose TRS (translate, rotate, scale) in one pass
        // Position
        let px = pos.x !== undefined ? pos.x : pos[0];
        let py = pos.y !== undefined ? pos.y : pos[1];
        let pz = pos.z !== undefined ? pos.z : pos[2];
        
        // Rotation (YXZ order)
        let rx = rot.x !== undefined ? rot.x : rot[0];
        let ry = rot.y !== undefined ? rot.y : rot[1];
        let rz = rot.z !== undefined ? rot.z : rot[2];
        
        // Scale
        let sx = scale.x !== undefined ? scale.x : scale[0];
        let sy = scale.y !== undefined ? scale.y : scale[1];
        let sz = scale.z !== undefined ? scale.z : scale[2];
        
        // Cache sin/cos for all rotations (only compute once)
        let cy = Math.cos(ry), sy_sin = Math.sin(ry);
        let cx = Math.cos(rx), sx_sin = Math.sin(rx);
        let cz = Math.cos(rz), sz_sin = Math.sin(rz);
        
        // Build rotation matrix (YXZ order: RotZ * RotX * RotY)
        // Then apply scale to each column
        
        // Column 0 (X axis)
        out[0] = (cy * cz - sy_sin * sx_sin * sz_sin) * sx;
        out[1] = (cy * sz_sin + sy_sin * sx_sin * cz) * sx;
        out[2] = (-sy_sin * cx) * sx;
        out[3] = 0;
        
        // Column 1 (Y axis)
        out[4] = (-cx * sz_sin) * sy;
        out[5] = (cx * cz) * sy;
        out[6] = (sx_sin) * sy;
        out[7] = 0;
        
        // Column 2 (Z axis)
        out[8] = (sy_sin * cz + cy * sx_sin * sz_sin) * sz;
        out[9] = (sy_sin * sz_sin - cy * sx_sin * cz) * sz;
        out[10] = (cy * cx) * sz;
        out[11] = 0;
        
        // Column 3 (Translation)
        out[12] = px;
        out[13] = py;
        out[14] = pz;
        out[15] = 1;
        
        return out;
    }
};