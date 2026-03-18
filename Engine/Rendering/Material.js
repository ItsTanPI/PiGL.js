export class Material {
    constructor(shader) {
        this.shader = shader;
        this.uniforms = {};
    }

    setFloat(name, value) {
        this.uniforms[name] = { type: '1f', value: value };
    }

    setVec2(name, x, y) {
        this.uniforms[name] = { type: '2fv', value: new Float32Array([x, y]) };
    }

    setVec3(name, x, y, z) {
        this.uniforms[name] = { type: '3fv', value: new Float32Array([x, y, z]) };
    }

    setVec4(name, x, y, z, w) {
        this.uniforms[name] = { type: '4fv', value: new Float32Array([x, y, z, w]) };
    }

    setMat4(name, value) {
        this.uniforms[name] = { type: 'Matrix4fv', value: value };
    }

    // Helper for direct array setting if user prefers
    setUniform(name, value, type) {
        // value can be number, array, Float32Array
        // type string like '1f', '3fv', 'Matrix4fv'
        this.uniforms[name] = { type, value };
    }
}
