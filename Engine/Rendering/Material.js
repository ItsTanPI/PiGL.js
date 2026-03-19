export class Material {
    constructor(shader, name = 'Material') {
        this.shader = shader;
        this.uniforms = {};
        this.name = name;
    }

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

    setFloat(name, value) {
        if (this.uniforms[name] && this.uniforms[name].type === '1f') {
            this.uniforms[name].value = value;
        } else {
            this.uniforms[name] = { type: '1f', value: value };
        }
    }

    setVec2(name, x, y) {
        if (this.uniforms[name] && this.uniforms[name].type === '2fv') {
            const v = this.uniforms[name].value;
            v[0] = x; v[1] = y;
        } else {
            this.uniforms[name] = { type: '2fv', value: new Float32Array([x, y]) };
        }
    }

    setVec3(name, x, y, z) {
        if (this.uniforms[name] && this.uniforms[name].type === '3fv') {
            const v = this.uniforms[name].value;
            v[0] = x; v[1] = y; v[2] = z;
        } else {
            this.uniforms[name] = { type: '3fv', value: new Float32Array([x, y, z]) };
        }
    }

    setVec4(name, x, y, z, w) {
        if (this.uniforms[name] && this.uniforms[name].type === '4fv') {
            const v = this.uniforms[name].value;
            v[0] = x; v[1] = y; v[2] = z; v[3] = w;
        } else {
            this.uniforms[name] = { type: '4fv', value: new Float32Array([x, y, z, w]) };
        }
    }

    setMat4(name, value) {
        // Mat4 is usually overwritten, not mutated in place
        this.uniforms[name] = { type: 'Matrix4fv', value: value };
    }

    // Helper for direct array setting if user prefers
    setUniform(name, value, type) {
        // value can be number, array, Float32Array
        // type string like '1f', '3fv', 'Matrix4fv'
        this.uniforms[name] = { type, value };
    }
}
