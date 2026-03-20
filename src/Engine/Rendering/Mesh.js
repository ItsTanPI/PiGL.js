export class Mesh {
    constructor(gl, vertices, uvs, normals, indices = null) {
        this.gl = gl;
        this.vertices = vertices; // Float32Array
        this.uvs = uvs;           // Float32Array
        this.normals = normals;   // Float32Array
        this.indices = indices;   // Uint16Array (optional)
        
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

    draw() {
        const gl = this.gl;
        if (this.indices && this.indices.length > 0) {
            gl.drawElements(gl.TRIANGLES, this.count, gl.UNSIGNED_SHORT, 0);
        } else {
            gl.drawArrays(gl.TRIANGLES, 0, this.count);
        }
    }
}
