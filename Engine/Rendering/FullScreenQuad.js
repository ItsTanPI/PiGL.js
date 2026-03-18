export class FullScreenQuad {
    constructor(gl) {
        this.gl = gl;
        // Simple Quad geometry for full screen
        // x, y, u, v
        const vertices = new Float32Array([
            -1.0,  1.0, 0.0, 1.0, // Top-Left
            -1.0, -1.0, 0.0, 0.0, // Bottom-Left
             1.0,  1.0, 1.0, 1.0, // Top-Right
             1.0, -1.0, 1.0, 0.0  // Bottom-Right
        ]);

        this.buffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer);
        gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);
    }

    /**
     * Executes a shader pass.
     * @param {Shader} shader - The shader to use.
     * @param {Object} uniforms - Key-value pairs of uniforms. Textures should be WebGLTexture objects.
     * @param {RenderTarget|null} target - The output target. If null, renders to screen.
     */
    draw(shader, uniforms = {}, target = null) {
        const gl = this.gl;
        
        // 1. Bind Render Target
        if (target) {
            target.bind();
        } else {
            gl.bindFramebuffer(gl.FRAMEBUFFER, null);
            gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
        }

        // 2. Use Shader
        shader.use();

        // 3. Bind Quad Buffer
        gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer);

        const aPos = shader.getAttribLocation('aVertexPosition');
        if (aPos !== -1) {
            gl.enableVertexAttribArray(aPos);
            gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 16, 0); 
        }

        const aTex = shader.getAttribLocation('aTexCoord');
        if (aTex !== -1) {
            gl.enableVertexAttribArray(aTex);
            gl.vertexAttribPointer(aTex, 2, gl.FLOAT, false, 16, 8); 
        }

        // 4. Set Uniforms & Bind Textures
        let textureUnit = 0;
        
        for (const key in uniforms) {
            const value = uniforms[key];

            // Check if value is a texture (simple check for now)
            // In WebGL, textures are objects. 
            // Better check: instanceof WebGLTexture (but that might fail across contexts if not careful, usually safe)
            if (value instanceof WebGLTexture) {
                gl.activeTexture(gl.TEXTURE0 + textureUnit);
                gl.bindTexture(gl.TEXTURE_2D, value);
                shader.setUniform(key, textureUnit); // Set sampler to unit index
                textureUnit++;
            } else {
                shader.setUniform(key, value);
            }
        }

        // 5. Draw
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

        // Cleanup texture bindings (optional but good for safety)
        for(let i=0; i<textureUnit; i++) {
            gl.activeTexture(gl.TEXTURE0 + i);
            gl.bindTexture(gl.TEXTURE_2D, null);
        }
    }
}
