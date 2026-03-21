/**
 * Mesh holds vertex, uv, and normal buffers plus optional indices for indexed rendering.
 * 
 * @class Mesh
 * @description Manages GPU buffers for vertex data (position, UV, normal). Provides
 * bind() to setup vertex attributes and draw() to issue draw calls. A Mesh represents
 * the geometry of a GameObject.
 */
export class Mesh {
    /**
     * Creates a new Mesh from vertex data and uploads to GPU.
     * 
     * @constructor
     * @param {WebGLRenderingContext} gl - The WebGL context.
     * @param {Float32Array} vertices - Vertex positions as flat array [x,y,z, x,y,z, ...].
     * @param {Float32Array} uvs - UV texture coordinates [u,v, u,v, ...].
     * @param {Float32Array} normals - Vertex normals [nx,ny,nz, ...].
     * @param {Uint16Array} [indices=null] - Optional triangle indices for indexed rendering.
     */
    constructor(gl, vertices, uvs, normals, indices = null) {
        /** @type {WebGLRenderingContext} */
        this.gl = gl;
        /** @type {Float32Array} Vertex positions. */
        this.vertices = vertices;
        /** @type {Float32Array} UV texture coordinates. */
        this.uvs = uvs;
        /** @type {Float32Array} Vertex normals. */
        this.normals = normals;
        /** @type {Uint16Array|null} Optional index buffer. */
        this.indices = indices;
        
        /** @type {number} Number of vertices (or indices if using indexed rendering). */
        this.count = indices ? indices.length : vertices.length / 3;

        // Create Buffers
        this.vertexBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, this.vertexBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, this.vertices, gl.STATIC_DRAW);

        if (this.uvs && this.uvs.length > 0) {
            this.uvBuffer = gl.createBuffer();
            gl.bindBuffer(gl.ARRAY_BUFFER, this.uvBuffer);
            gl.bufferData(gl.ARRAY_BUFFER, this.uvs, gl.STATIC_DRAW);
        }

        if (this.normals && this.normals.length > 0) {
            this.normalBuffer = gl.createBuffer();
            gl.bindBuffer(gl.ARRAY_BUFFER, this.normalBuffer);
            gl.bufferData(gl.ARRAY_BUFFER, this.normals, gl.STATIC_DRAW);
        }

        if (this.indices && this.indices.length > 0) {
            this.indexBuffer = gl.createBuffer();
            gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
            gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, this.indices, gl.STATIC_DRAW);
        }
    }

    /**
     * Binds all vertex buffers and enables attributes for a shader.
     * 
     * @method bind
     * @param {Shader} shader - The shader to bind attributes for. Looks for 'aVertexPosition', 'aTexCoord', 'aNormal'.
     * @returns {void}
     * 
     * @description Enables and configures vertex attribute arrays, binding each to the appropriate buffer.
     * Must be called before draw().
     */
    bind(shader) {
        const gl = this.gl;
        
        // Position Attribute
        gl.bindBuffer(gl.ARRAY_BUFFER, this.vertexBuffer);
        const aPos = shader.getAttribLocation('aVertexPosition');
        if (aPos !== -1) {
            gl.enableVertexAttribArray(aPos);
            gl.vertexAttribPointer(aPos, 3, gl.FLOAT, false, 0, 0); 
        }

        // UV Attribute
        if (this.uvBuffer) {
            gl.bindBuffer(gl.ARRAY_BUFFER, this.uvBuffer);
            const aTex = shader.getAttribLocation('aTexCoord');
            if (aTex !== -1) {
                gl.enableVertexAttribArray(aTex);
                gl.vertexAttribPointer(aTex, 2, gl.FLOAT, false, 0, 0); 
            }
        } // Ideally disable if not present? Or use default value.

        // Normal Attribute (if shader supports it)
        if (this.normalBuffer) {
            gl.bindBuffer(gl.ARRAY_BUFFER, this.normalBuffer);
            const aNorm = shader.getAttribLocation('aNormal');
            if (aNorm !== -1) {
                gl.enableVertexAttribArray(aNorm);
                gl.vertexAttribPointer(aNorm, 3, gl.FLOAT, false, 0, 0);
            }
        }

        if (this.indexBuffer) {
            gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
        }
    }

    /**
     * Issues a draw call for this mesh.
     * 
     * @method draw
     * @returns {void}
     * 
     * @description Uses indexed drawing (drawElements) if indices are present; otherwise drawArrays.
     * The mesh must be bound (bind()) before calling draw().
     */
    draw() {
        const gl = this.gl;
        if (this.indices && this.indices.length > 0) {
            gl.drawElements(gl.TRIANGLES, this.count, gl.UNSIGNED_SHORT, 0);
        } else {
            gl.drawArrays(gl.TRIANGLES, 0, this.count);
        }
    }
}
