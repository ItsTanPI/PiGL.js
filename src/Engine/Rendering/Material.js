/**
 * Material pairs a Shader with a set of named uniforms (values and textures).
 * 
 * @class Material
 * @description Stores uniform values (floats, vectors, matrices, textures) that are passed
 * to the shader during rendering. Multiple GameObjects can share the same Material.
 */
export class Material {
    /**
     * Creates a new Material.
     * 
     * @constructor
     * @param {Shader} shader - The shader program to use for rendering with this material.
     * @param {string} [name='Material'] - Friendly name for debugging/editor.
     */
    constructor(shader, name = 'Material') {
        /** @type {Shader} The shader program. */
        this.shader = shader;
        /** @type {Object<string, {type: string, value: any}>} Uniform values; structure: {type: '1f'|'3fv'|..., value: ...}. */
        this.uniforms = {};
        /** @type {string} Material name. */
        this.name = name;
    }

    /**
     * Batch-sets multiple uniforms from an object; auto-detects types.
     * 
     * @method setUniforms
     * @param {Object<string, any>} obj - Object mapping uniform names to values.
     * @returns {Material} This material for chaining.
     * 
     * @description Auto-detects type from value:
     * - number → setFloat
     * - 2-element array → setVec2
     * - 3-element array → setVec3
     * - 4-element array → setVec4
     * - 16-element array → setMat4
     * - WebGLTexture → stored as 'Texture' type
     */
    setUniforms(obj) {
        for (const key in obj) {
            let val = obj[key];
            // Auto-detect type if not exists, or update value
            
            // Check if it's a vector array
            if (Array.isArray(val) || val instanceof Float32Array) {
                if (val.length === 2) this.setVec2(key, val[0], val[1]);
                else if (val.length === 3) this.setVec3(key, val[0], val[1], val[2]);
                else if (val.length === 4) this.setVec4(key, val[0], val[1], val[2], val[3]);
                else if (val.length === 16) this.setMat4(key, val);
            } else if (typeof val === 'number') {
                this.setFloat(key, val);
            } else if (val instanceof WebGLTexture) {
                // Determine unit? Usually handled by renderer binding.
                // Just store as generic value for now.
                this.uniforms[key] = { value: val, type: 'Texture' }; 
            }
        }
        return this; // Chainable
    }

    /**
     * Sets a float (1f) uniform.
     * @method setFloat
     * @param {string} name - Uniform name.
     * @param {number} value - Float value.
     * @returns {void}
     */
    setFloat(name, value) {
        if (this.uniforms[name] && this.uniforms[name].type === '1f') {
            this.uniforms[name].value = value;
        } else {
            this.uniforms[name] = { type: '1f', value: value };
        }
    }

    /**
     * Sets a vec2 (2fv) uniform.
     * @method setVec2
     * @param {string} name - Uniform name.
     * @param {number} x - X component.
     * @param {number} y - Y component.
     * @returns {void}
     */
    setVec2(name, x, y) {
        if (this.uniforms[name] && this.uniforms[name].type === '2fv') {
            const v = this.uniforms[name].value;
            v[0] = x; v[1] = y;
        } else {
            this.uniforms[name] = { type: '2fv', value: new Float32Array([x, y]) };
        }
    }

    /**
     * Sets a vec3 (3fv) uniform.
     * @method setVec3
     * @param {string} name - Uniform name.
     * @param {number} x - X component.
     * @param {number} y - Y component.
     * @param {number} z - Z component.
     * @returns {void}
     */
    setVec3(name, x, y, z) {
        if (this.uniforms[name] && this.uniforms[name].type === '3fv') {
            const v = this.uniforms[name].value;
            v[0] = x; v[1] = y; v[2] = z;
        } else {
            this.uniforms[name] = { type: '3fv', value: new Float32Array([x, y, z]) };
        }
    }

    /**
     * Sets a vec4 (4fv) uniform.
     * @method setVec4
     * @param {string} name - Uniform name.
     * @param {number} x - X component.
     * @param {number} y - Y component.
     * @param {number} z - Z component.
     * @param {number} w - W component.
     * @returns {void}
     */
    setVec4(name, x, y, z, w) {
        if (this.uniforms[name] && this.uniforms[name].type === '4fv') {
            const v = this.uniforms[name].value;
            v[0] = x; v[1] = y; v[2] = z; v[3] = w;
        } else {
            this.uniforms[name] = { type: '4fv', value: new Float32Array([x, y, z, w]) };
        }
    }

    /**
     * Sets a mat4 (Matrix4fv) uniform.
     * @method setMat4
     * @param {string} name - Uniform name.
     * @param {Float32Array} value - 4x4 matrix (16 elements).
     * @returns {void}
     */
    setMat4(name, value) {
        // Mat4 is usually overwritten, not mutated in place
        this.uniforms[name] = { type: 'Matrix4fv', value: value };
    }

    /**
     * Sets a uniform directly with an explicit type.
     * 
     * @method setUniform
     * @param {string} name - Uniform name.
     * @param {any} value - The value (number, array, Float32Array, WebGLTexture, etc.).
     * @param {string} type - Type string: '1f', '1i', '2fv', '3fv', '4fv', 'Matrix4fv', 'Texture', etc.
     * @returns {void}
     */
    setUniform(name, value, type) {
        this.uniforms[name] = { type, value };
    }
}
