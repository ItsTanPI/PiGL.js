/**
 * Shader wraps a compiled WebGL shader program with uniform and attribute management.
 * 
 * @class Shader
 * @description Compiles GLSL vertex and fragment shaders into a WebGL program.
 * Provides convenient methods to set uniforms and query attribute locations.
 */
export class Shader {
    /**
     * Creates and compiles a new shader program.
     * 
     * @constructor
     * @param {WebGLRenderingContext} gl - The WebGL context.
     * @param {string|string[]} vsSource - Vertex shader GLSL source code, or array of strings.
     * @param {string|string[]} fsSource - Fragment shader GLSL source code, or array of strings.
     * @param {string|string[]} [tcSource=null] - Optional tessellation control shader source.
     * @param {string|string[]} [teSource=null] - Optional tessellation evaluation shader source.
     * 
     * @throws Logs compilation and linking errors to console if shader fails to compile/link.
     */
    constructor(gl, vsSource, fsSource, tcSource = null, teSource = null) {
        /** @type {WebGLRenderingContext} */
        this.gl = gl;
        const vertexShader = this.loadShader(gl.VERTEX_SHADER, vsSource);
        const fragmentShader = this.loadShader(gl.FRAGMENT_SHADER, fsSource);

        /** @type {WebGLProgram} Compiled shader program. */
        this.program = gl.createProgram();
        gl.attachShader(this.program, vertexShader);
        
        // Optionally attach tessellation shaders if provided and supported
        let tessellationSupported = false;
        if (tcSource && teSource) {
            const tcShader = this.loadShader(0x8E88, tcSource); // GL_TESS_CONTROL_SHADER
            const teShader = this.loadShader(0x8E87, teSource); // GL_TESS_EVALUATION_SHADER
            
            if (tcShader && teShader) {
                gl.attachShader(this.program, tcShader);
                gl.attachShader(this.program, teShader);
                tessellationSupported = true;
            } else {
                console.warn('Tessellation shaders not supported, falling back to vertex/fragment only');
            }
        }
        
        gl.attachShader(this.program, fragmentShader);
        gl.linkProgram(this.program);

        if (!gl.getProgramParameter(this.program, gl.LINK_STATUS)) {
            console.error('Shader init error:', gl.getProgramInfoLog(this.program));
        }

        /** @type {Object<string, WebGLUniformLocation>} Cached uniform locations. */
        this.uniforms = {};
        /** @type {Object<string, number>} Cached attribute locations. */
        this.attributes = {};
        /** @type {boolean} Whether tessellation is supported and active. */
        this.tessellationSupported = tessellationSupported;
    }

    /**
     * Gets (and caches) a uniform location by name.
     * 
     * @method getUniformLocation
     * @param {string} name - Uniform variable name in the shader.
     * @returns {WebGLUniformLocation|null} The uniform location or null if not found.
     * @private Internal use; see setUniform() for public API.
     */
    getUniformLocation(name) {
        if (this.uniforms[name] === undefined) {
            this.uniforms[name] = this.gl.getUniformLocation(this.program, name);
        }
        return this.uniforms[name];
    }

    /**
     * Sets a uniform value by name. Auto-detects type if not provided.
     * 
     * @method setUniform
     * @param {string} name - Uniform variable name.
     * @param {number|number[]|Float32Array} value - The value to set.
     * @param {string} [type] - Optional explicit type: '1i', '1f', '2fv', '3fv', '4fv', 'Matrix4fv'.
     * @returns {void}
     * 
     * @description If type is not provided, attempts to infer from value:
     * - number → '1f'
     * - 2-element array → '2fv'
     * - 3-element array → '3fv'
     * - 4-element array → '4fv'
     * - 16-element array → 'Matrix4fv'
     */
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

    /**
     * Gets (and caches) an attribute location by name.
     * 
     * @method getAttribLocation
     * @param {string} name - Attribute variable name in the shader.
     * @returns {number} The attribute location or -1 if not found.
     * 
     * @description Used by Mesh.bind() to enable vertex attributes.
     */
    getAttribLocation(name) {
        if (this.attributes[name] === undefined) {
            this.attributes[name] = this.gl.getAttribLocation(this.program, name);
        }
        return this.attributes[name];
    }

    /**
     * Activates this shader program for rendering.
     * 
     * @method use
     * @returns {void}
     * 
     * @description Calls `gl.useProgram()`. Must be called before rendering with this shader.
     */
    use() {
        this.gl.useProgram(this.program);
    }

    /**
     * Compiles a single shader (vertex or fragment).
     * 
     * @method loadShader
     * @param {number} type - WebGL shader type (gl.VERTEX_SHADER, gl.FRAGMENT_SHADER, or 0x8E88/0x8E87 for tessellation).
     * @param {string|string[]} source - GLSL source code, or array of GLSL strings to be combined.
     * @returns {WebGLShader|null} Compiled shader or null on error.
     * @private
     */
    loadShader(type, source) {
        let finalSource = source;
        if (Array.isArray(source)) {
            finalSource = source.join('\n');
        }

        let shader;
        try {
            shader = this.gl.createShader(type);
            if (!shader) {
                console.warn(`Shader type ${type} not supported`);
                return null;
            }
        } catch (e) {
            console.warn(`Shader type ${type} not supported:`, e.message);
            return null;
        }
        
        this.gl.shaderSource(shader, finalSource);
        this.gl.compileShader(shader);
        if (!this.gl.getShaderParameter(shader, this.gl.COMPILE_STATUS)) {
            console.error('Shader compile error:', this.gl.getShaderInfoLog(shader));
            this.gl.deleteShader(shader);
            return null;
        }
        return shader;
    }
}
