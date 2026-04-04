/**
 * Vector3 is a lightweight wrapper around a Float32Array for 3D vectors.
 * 
 * @class Vector3
 * @description Provides x, y, z components with getters/setters and common operations.
 * Used throughout the engine for positions, scales, rotations, and other 3D calculations.
 */
export class Vector3 {
    /**
     * Creates a new Vector3.
     * 
     * @constructor
     * @param {number} [x=0] - X component.
     * @param {number} [y=0] - Y component.
     * @param {number} [z=0] - Z component.
     */
    constructor(x = 0, y = 0, z = 0) {
        /** @type {Float32Array} Internal storage; access via x,y,z getters/setters. */
        this.data = new Float32Array([x, y, z]);
        /** @type {Function|null} Callback when vector changes (for Transform dirty flagging). */
        this._onchange = null;
    }

    /** @type {number} X component getter/setter. */
    get x() { return this.data[0]; }
    set x(v) { this.data[0] = v; if (this._onchange) this._onchange(); }

    /** @type {number} Y component getter/setter. */
    get y() { return this.data[1]; }
    set y(v) { this.data[1] = v; if (this._onchange) this._onchange(); }

    /** @type {number} Z component getter/setter. */
    get z() { return this.data[2]; }
    set z(v) { this.data[2] = v; if (this._onchange) this._onchange(); }

    /**
     * Sets all components.
     * 
     * @method set
     * @param {number} x - New X value.
     * @param {number} y - New Y value.
     * @param {number} z - New Z value.
     * @returns {Vector3} This vector for chaining.
     */
    set(x, y, z) {
        this.data[0] = x;
        this.data[1] = y;
        this.data[2] = z;
        if (this._onchange) this._onchange();
        return this;
    }

    /**
     * Copies values from another Vector3.
     * 
     * @method copy
     * @param {Vector3} v - Source vector.
     * @returns {Vector3} This vector for chaining.
     */
    copy(v) {
        this.data[0] = v.x;
        this.data[1] = v.y;
        this.data[2] = v.z;
        if (this._onchange) this._onchange();
        return this;
    }

    /**
     * Converts to a plain array [x, y, z].
     * Allocates a new array - prefer using data directly or using set() for efficiency.
     * @method toArray
     * @returns {number[]} Plain array [x, y, z].
     * @deprecated For performance, use this.data directly or Vector3.set()
     */
    toArray() {
        return [this.data[0], this.data[1], this.data[2]];
    }

    /**
     * Adds another vector to this one (in-place).
     * @method add
     * @param {Vector3} v - Vector to add.
     * @returns {Vector3} This vector for chaining.
     */
    add(v) {
        this.data[0] += v.data[0];
        this.data[1] += v.data[1];
        this.data[2] += v.data[2];
        if (this._onchange) this._onchange();
        return this;
    }

    /**
     * Subtracts another vector from this one (in-place).
     * @method subtract
     * @param {Vector3} v - Vector to subtract.
     * @returns {Vector3} This vector for chaining.
     */
    subtract(v) {
        this.data[0] -= v.data[0];
        this.data[1] -= v.data[1];
        this.data[2] -= v.data[2];
        if (this._onchange) this._onchange();
        return this;
    }

    /**
     * Scales this vector by a scalar (in-place).
     * @method scale
     * @param {number} s - Scale factor.
     * @returns {Vector3} This vector for chaining.
     */
    scale(s) {
        this.data[0] *= s;
        this.data[1] *= s;
        this.data[2] *= s;
        if (this._onchange) this._onchange();
        return this;
    }

    /**
     * Calculates magnitude without allocation.
     * @method magnitude
     * @returns {number} Length of this vector.
     */
    magnitude() {
        const x = this.data[0];
        const y = this.data[1];
        const z = this.data[2];
        return Math.sqrt(x * x + y * y + z * z);
    }

    /**
     * Normalizes this vector in-place.
     * @method normalize
     * @returns {Vector3} This vector for chaining.
     */
    normalize() {
        const mag = this.magnitude();
        if (mag > 0.00001) {
            this.data[0] /= mag;
            this.data[1] /= mag;
            this.data[2] /= mag;
        }
        if (this._onchange) this._onchange();
        return this;
    }}