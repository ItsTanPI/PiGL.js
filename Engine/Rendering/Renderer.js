export class Renderer {
    constructor(gl) {
        this.gl = gl;
        
        // Define a unit Quad (Triangle Strip) suitable for Sprite rendering
        // [X, Y,  U, V]
        const vertices = new Float32Array([
            -0.5,  0.5, 0.0, 1.0,  // top left
            -0.5, -0.5, 0.0, 0.0,  // bottom left
             0.5,  0.5, 1.0, 1.0,  // top right
             0.5, -0.5, 1.0, 0.0,  // bottom right
        ]);

        this.buffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer);
        gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);
    }

    draw(gameObject, camera) {
        const material = gameObject.material;
        if (!material || !material.shader) return;

        const gl = this.gl;
        const shader = material.shader;
        shader.use();

        gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer);

        const aPos = shader.getAttribLocation('aVertexPosition');
        if (aPos !== -1) {
            gl.enableVertexAttribArray(aPos);
            // 2 components (x, y), stride of 16 bytes (4 floats of 4 bytes), offset 0
            gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 16, 0); 
        }

        const aTex = shader.getAttribLocation('aTexCoord');
        if (aTex !== -1) {
            gl.enableVertexAttribArray(aTex);
            // 2 components (u, v), stride 16, offset 8
            gl.vertexAttribPointer(aTex, 2, gl.FLOAT, false, 16, 8); 
        }

        // Setup Standard Uniforms
        shader.setUniform('uProjectionMatrix', camera.projectionMatrix);
        shader.setUniform('uViewMatrix', camera.viewMatrix);
        shader.setUniform('uModelMatrix', gameObject.transform.worldMatrix);

        // Setup Material Uniforms
        for (const name in material.uniforms) {
            const u = material.uniforms[name];
            shader.setUniform(name, u.value);
        }

        // Draw Quad
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    }
}
