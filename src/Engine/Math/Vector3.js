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
    }

    /** @type {number} X component getter/setter. */
    get x() { return this.data[0]; }
    set x(v) { this.data[0] = v; }

    /** @type {number} Y component getter/setter. */
    get y() { return this.data[1]; }
    set y(v) { this.data[1] = v; }

    /** @type {number} Z component getter/setter. */
    get z() { return this.data[2]; }
    set z(v) { this.data[2] = v; }

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
        return this;
    }

    /**
     * Converts to a plain array [x, y, z].
     * @method toArray
     * @returns {number[]} Plain array [x, y, z].
     */
    toArray() {
        return [this.data[0], this.data[1], this.data[2]];
    }
}
