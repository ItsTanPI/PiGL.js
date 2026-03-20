export class Shader {
    constructor(gl, vsSource, fsSource) {
        this.gl = gl;
        const vertexShader = this.loadShader(gl.VERTEX_SHADER, vsSource);
        const fragmentShader = this.loadShader(gl.FRAGMENT_SHADER, fsSource);

        this.program = gl.createProgram();
        gl.attachShader(this.program, vertexShader);
        gl.attachShader(this.program, fragmentShader);
        gl.linkProgram(this.program);

        if (!gl.getProgramParameter(this.program, gl.LINK_STATUS)) {
            console.error('Shader init error:', gl.getProgramInfoLog(this.program));
        }

        this.uniforms = {};
        this.attributes = {};
    }

    getUniformLocation(name) {
        if (this.uniforms[name] === undefined) {
            this.uniforms[name] = this.gl.getUniformLocation(this.program, name);
        }
        return this.uniforms[name];
    }

    setUniform(name, value, type) {
        const gl = this.gl;
        const loc = this.getUniformLocation(name);
        if (!loc) return; // Uniform not found or optimized out

        if (type) {
            if (type === '1i') {
                 gl.uniform1i(loc, value);
            } else if (type === '1f') {
                 gl.uniform1f(loc, value);
            } else if (type === '2fv') {
                 gl.uniform2fv(loc, value);
            } else if (type === '3fv') {
                 gl.uniform3fv(loc, value);
            } else if (type === '4fv') {
                 gl.uniform4fv(loc, value);
            } else if (type === 'Matrix4fv') {
                 gl.uniformMatrix4fv(loc, false, value);
            }
            return;
        }

        if (typeof value === 'number') {
            gl.uniform1f(loc, value);
        } else if (Array.isArray(value) || value instanceof Float32Array) {
            switch (value.length) {
                case 2: gl.uniform2fv(loc, value); break;
                case 3: gl.uniform3fv(loc, value); break;
                case 4: gl.uniform4fv(loc, value); break;
                case 16: gl.uniformMatrix4fv(loc, false, value); break;
                default: console.warn(`Unsupported uniform array length: ${value.length} for ${name}`);
            }
        }
    }

    getAttribLocation(name) {
        if (this.attributes[name] === undefined) {
            this.attributes[name] = this.gl.getAttribLocation(this.program, name);
        }
        return this.attributes[name];
    }

    use() {
        this.gl.useProgram(this.program);
    }

    loadShader(type, source) {
        const shader = this.gl.createShader(type);
        this.gl.shaderSource(shader, source);
        this.gl.compileShader(shader);
        if (!this.gl.getShaderParameter(shader, this.gl.COMPILE_STATUS)) {
            console.error('Shader compile error:', this.gl.getShaderInfoLog(shader));
            this.gl.deleteShader(shader);
            return null;
        }
        return shader;
    }
}
