import { Mesh } from './Mesh.js';

export class Renderer {
    constructor(gl) {
        this.gl = gl;
        this.drawCalls = 0;
        this.currentPassDrawCalls = [];
        this.drawCallDetails = [];
        
        // Define a unit Quad (Triangle Strip) suitable for Sprite rendering
        // converted to separate arrays for Mesh class compatibility
        const positions = new Float32Array([
            -0.5,  0.5, 0.0,
            -0.5, -0.5, 0.0,
             0.5,  0.5, 0.0,
             0.5, -0.5, 0.0,
        ]);

        const uvs = new Float32Array([
            0.0, 1.0,
            0.0, 0.0,
            1.0, 1.0,
            1.0, 0.0,
        ]);
        
        const normals = new Float32Array([
            0.0, 0.0, 1.0,
            0.0, 0.0, 1.0,
            0.0, 0.0, 1.0,
            0.0, 0.0, 1.0,
        ]);

        // Mesh expects TRIANGLES by default, but our quad data is STRIP layout.
        // However, Mesh.draw uses TRIANGLES if no indices.
        // We need to either use indices for two triangles, or change Mesh to support STRIP, 
        // OR redefine Quad as two triangles (6 verts).
        
        // Let's redefine Quad as two triangles (6 verts) to match OBJ loader style (TRIANGLES)
        // Standard Quad:
        // TL, BL, TR
        // TR, BL, BR
        const quadPos = new Float32Array([
            -0.5,  0.5, 0.0,
            -0.5, -0.5, 0.0,
             0.5,  0.5, 0.0,
             0.5,  0.5, 0.0,
            -0.5, -0.5, 0.0,
             0.5, -0.5, 0.0
        ]);
        const quadUV = new Float32Array([
            0.0, 1.0,
            0.0, 0.0,
            1.0, 1.0,
            1.0, 1.0,
            0.0, 0.0,
            1.0, 0.0
        ]);
        const quadNorm = new Float32Array([
            0.0, 0.0, 1.0,
            0.0, 0.0, 1.0,
            0.0, 0.0, 1.0,
            0.0, 0.0, 1.0,
            0.0, 0.0, 1.0,
            0.0, 0.0, 1.0
        ]);

        this.defaultMesh = new Mesh(gl, quadPos, quadUV, quadNorm);
    }

    draw(gameObject, camera, target = undefined, material = null) {
        // If material is passed explicitly, use it. Otherwise use gameObject.material
        const matToUse = material || gameObject.material;
        
        if (!matToUse || !matToUse.shader) return;
        
        const gl = this.gl;
        const mesh = gameObject.mesh || this.defaultMesh;

        // Handle render target if specified
        if (target !== undefined) {
             if (target) {
                 target.bind();
             } else {
                 // Explicitly requested screen
                 gl.bindFramebuffer(gl.FRAMEBUFFER, null);
                 gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
             }
        }

        const shader = matToUse.shader;
        shader.use();

        // Bind Mesh Buffers & Attributes
        mesh.bind(shader);

        // Setup Standard Uniforms
        shader.setUniform('uProjectionMatrix', camera.projectionMatrix);
        shader.setUniform('uViewMatrix', camera.viewMatrix);
        shader.setUniform('uModelMatrix', gameObject.transform.worldMatrix);

        // Setup Material Uniforms
        let textureUnit = 0;

        for (const name in matToUse.uniforms) {
            const u = matToUse.uniforms[name];
            let valueToSend = u.value;
            let typeToSend = u.type;

            // Handle Textures
            // Check if value is WebGLTexture OR if explicit type is '1i' (sampler)
            if (valueToSend instanceof WebGLTexture || (typeToSend === '1i' && valueToSend && typeof valueToSend === 'object')) {
                 gl.activeTexture(gl.TEXTURE0 + textureUnit);
                 gl.bindTexture(gl.TEXTURE_2D, valueToSend);
                 
                 // If the texture was bound successfully, logic for unit
                 if (gl.isTexture(valueToSend) || valueToSend instanceof WebGLTexture) {
                    valueToSend = textureUnit;
                    typeToSend = '1i'; // Ensure type is correct for sampler
                    textureUnit++;
                 }
            }

            // If we have an explicit type from Material, use it
            // Renderer passes type to Shader.setUniform
            shader.setUniform(name, valueToSend, typeToSend);
        }

        // Draw Mesh
        mesh.draw();
        this.drawCalls++;

        // Track detail
        this.drawCallDetails.push({
            object: gameObject ? gameObject.name : 'Unknown',
            material: matToUse ? matToUse.name : 'Unknown',
            shader: shader ? (shader.name || 'Shader') : 'Unknown',
            target: target ? 'RenderTarget' : 'Screen'
        });
    }

    resetDrawCalls() {
        const count = this.drawCalls;
        const details = [...this.drawCallDetails];
        this.drawCalls = 0;
        this.drawCallDetails = [];
        return { count, details };
    }
}
