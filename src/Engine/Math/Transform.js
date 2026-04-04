import { Vector3 } from './Vector3.js';
import { Matrix } from './Matrix.js';

/**
 * Transform manages local/world space position, rotation, scale and hierarchy.
 * 
 * @class Transform
 * @description Stores 3D transformation (position, rotation in Euler angles, scale)
 * and computes local and world matrices. Supports parent-child hierarchy for
 * skeletal/rigged objects.
 */
export class Transform {
    /**
     * Creates a new Transform.
     * @constructor
     */
    constructor() {
        /** @type {Vector3} Local position relative to parent. */
        this.position = new Vector3(0, 0, 0);
        /** @type {Vector3} Local rotation in radians (Euler: X, Y, Z). */
        this.rotation = new Vector3(0, 0, 0);
        /** @type {Vector3} Local scale. Default [1, 1, 1]. */
        this.scale = new Vector3(1, 1, 1);
        
        /** @type {Float32Array} Local transformation matrix (4x4). */
        this.localMatrix = new Float32Array(16);
        /** @type {Float32Array} World transformation matrix (4x4). */
        this.worldMatrix = new Float32Array(16);
        Matrix.identity(this.localMatrix);
        Matrix.identity(this.worldMatrix);

        /** @type {Transform|null} Parent transform; null if root. */
        this.parent = null;
        /** @type {Transform[]} Direct children. */
        this.children = [];
        
        /** @type {boolean} Dirty flag: true if local matrix needs recalculation. */
        this._isDirty = true;
        
        // Wire up dirty flag callbacks on position, rotation, scale changes
        this.position._onchange = () => this.markDirty();
        this.rotation._onchange = () => this.markDirty();
        this.scale._onchange = () => this.markDirty();
    }

    /**
     * Attaches a child transform to this transform.
     * 
     * @method add
     * @param {Transform} child - The child transform to attach.
     * @returns {void}
     * 
     * @description If the child already has a parent, it is removed from the old parent first.
     */
    add(child) {
        if (child.parent) {
            child.parent.remove(child);
        }
        child.parent = this;
        this.children.push(child);
    }

    /**
     * Detaches a child transform from this transform.
     * 
     * @method remove
     * @param {Transform} child - The child to detach.
     * @returns {void}
     * 
     * @description Uses swap-and-pop pattern for O(1) removal instead of splice's O(n).
     */
    remove(child) {
        const index = this.children.indexOf(child);
        if (index !== -1) {
            child.parent = null;
            // Swap with last element and pop for O(1) removal
            const lastIdx = this.children.length - 1;
            if (index !== lastIdx) {
                this.children[index] = this.children[lastIdx];
            }
            this.children.pop();
        }
    }

    /**
     * Marks this transform as dirty, requiring matrix recalculation.
     * @method markDirty
     * @returns {void}
     * @private
     */
    markDirty() {
        this._isDirty = true;
    }

    /**
     * Recomputes the local matrix from position, rotation, and scale.
     * 
     * @method updateLocalMatrix
     * @returns {void}
     * 
     * @description Builds the local matrix as: Translate × RotateY × RotateX × RotateZ × Scale.
     * Rotation order is YXZ (Euler). Only recalculates if transform is dirty.
     */
    updateLocalMatrix() {
        if (!this._isDirty) return;
        
        Matrix.identity(this.localMatrix);
        Matrix.translate(this.localMatrix, this.localMatrix, this.position);
        
        // Typical rotation order Y -> X -> Z
        Matrix.rotateY(this.localMatrix, this.localMatrix, this.rotation.y);
        Matrix.rotateX(this.localMatrix, this.localMatrix, this.rotation.x);
        Matrix.rotateZ(this.localMatrix, this.localMatrix, this.rotation.z);
        
        Matrix.scale(this.localMatrix, this.localMatrix, this.scale);
        this._isDirty = false;
    }

    /**
     * Recomputes the world matrix combining this and parent transforms, recursively updates children.
     * 
     * @method updateWorldMatrix
     * @returns {void}
     * 
     * @description Combines parent world matrix with local matrix. Then recursively updates all children.
     * Call at least once per frame on root nodes before rendering.
     */
    updateWorldMatrix() {
        // First update this node's local matrix based on pos/rot/scale
        this.updateLocalMatrix();

        // If we have a parent, our world matrix is ParentWorldMatrix * OurLocalMatrix
        if (this.parent) {
            Matrix.multiply(this.worldMatrix, this.parent.worldMatrix, this.localMatrix);
        } else {
            // Otherwise, our world matrix is just our local matrix (fast copy using set)
            this.worldMatrix.set(this.localMatrix);
        }

        // Recursively update all children so they combine with this new matrix
        for (let i = 0; i < this.children.length; i++) {
            this.children[i].updateWorldMatrix();
        }
    }
}
