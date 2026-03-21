/**
 * Full Screen Quad
 * 
 * Utility for rendering full-screen post-processing effects. Provides a simple quad
 * that covers the entire screen, typically used with screen-space shaders.
 * 
 * @class FullScreenQuad
 * @description
 * The full-screen quad is essential for implementing post-processing effects:
 * - Lighting/deferred rendering passes
 * - Screen-space effects (outlines, blur, etc.)
 * - Tone mapping and final composition
 * 
 * Internally manages a simple 2-triangle quad geometry in normalized device coordinates.
 */
export class FullScreenQuad {
    /**
     * Creates a full-screen quad geometry.
     * Sets up a simple 2-triangle quad that covers the entire viewport.
     * @param {WebGLRenderingContext} gl - The WebGL context
     */
    constructor(gl) {
        /** @type {WebGLRenderingContext} */
        this.gl = gl;
        // Simple Quad geometry for full screen
        // x, y, u, v
        const vertices = new Float32Array([
            -1.0,  1.0, 0.0, 1.0, // Top-Left
            -1.0, -1.0, 0.0, 0.0, // Bottom-Left
             1.0,  1.0, 1.0, 1.0, // Top-Right
             1.0, -1.0, 1.0, 0.0  // Bottom-Right
        ]);

        /** @type {WebGLBuffer} Vertex buffer containing quad geometry */
        this.buffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer);
        gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);
    }

    /**
     * Draw the full-screen quad with a given material or shader.
     * Renders the quad geometry to the currently bound framebuffer or to a specified target.
     * Used to apply screen-space shaders and post-processing effects.
     * @param {Shader|Material} shaderOrMaterial - Material containing the shader, or raw Shader object
     * @param {Object|RenderTarget|null} uniforms - Key-value uniforms for Shader (ignored for Material), or RenderTarget
     * @param {RenderTarget|null} [target=null] - Optional render target to draw to (null = screen)
     */
    draw(shaderOrMaterial, uniforms = {}, target = null) {
        const gl = this.gl;
        
        let shader;
        let finalUniforms = uniforms;
        
        // Handle Material input
        if (shaderOrMaterial.uniforms && shaderOrMaterial.shader) {
            shader = shaderOrMaterial.shader;
            // Convert Material.uniforms { type, value } format to raw key-value for this function's logic
            // Or better, just adapt loop below
            finalUniforms = {};
            for (const key in shaderOrMaterial.uniforms) {
                finalUniforms[key] = shaderOrMaterial.uniforms[key].value;
            }
            // If target was passed as 2nd arg (when using material), swap it
            if (uniforms && (uniforms.bind || uniforms === null)) {
                target = uniforms;
            }
        } else {
            shader = shaderOrMaterial;
        }

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
        
        for (const key in finalUniforms) {
            const value = finalUniforms[key];

            // Check if value is a texture (simple check for now)
            // In WebGL, textures are objects. 
            // Better check: instanceof WebGLTexture (but that might fail across contexts if not careful, usually safe)
            if (value instanceof WebGLTexture) {
                gl.activeTexture(gl.TEXTURE0 + textureUnit);
                gl.bindTexture(gl.TEXTURE_2D, value);
                shader.setUniform(key, textureUnit, '1i'); // Set sampler to unit index with integer type
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
