import { Mesh } from './Mesh.js';

/**
 * Renderer performs low-level WebGL draw operations: binding shaders/meshes, setting uniforms,
 * and issuing draw calls.
 * 
 * @class Renderer
 * @description Acts as a graphics driver that handles the details of rendering GameObjects.
 * It manages texture binding, uniform updates, and draw call metrics/profiling.
 * Typically called by render passes or directly when rendering individual GameObjects.
 */
export class Renderer {
    /**
     * Creates a new Renderer with a default quad mesh.
     * 
     * @constructor
     * @param {WebGLRenderingContext} gl - The WebGL context.
     */
    constructor(gl) {
        /** @type {WebGLRenderingContext} */
        this.gl = gl;
        /** @type {number} Total draw calls issued this frame. */
        this.drawCalls = 0;
        /** @type {number[]} Draw call counts per pass (if profiling). */
        this.currentPassDrawCalls = [];
        /** @type {Array} Detailed draw call information (for profiler). */
        this.drawCallDetails = [];
        /** @type {string|null} Current pass name for detailed profiling. */
        this.currentPassName = null;
        
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

    /**
     * Renders a single GameObject to a target or the screen.
     * 
     * @method draw
     * @param {GameObject} gameObject - The object to render; must have transform, material, and optional mesh.
     * @param {Camera} camera - The camera providing projection and view matrices.
     * @param {RenderTarget|null} [target=undefined] - Optional render target; null = screen, undefined = no change.
     * @param {Material} [material=null] - Optional material override; if null, uses gameObject.material.
     * @returns {void}
     * 
     * @description Handles all WebGL state setup:
     * - Activates shader program
     * - Binds mesh vertex buffers and attributes
     * - Sets standard uniforms (projection, view, model matrices)
     * - Binds material textures to texture units
     * - Sets material uniforms
     * - Issues draw call
     */
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
        if (!this.currentPassName) {
            mesh.draw();
            this.drawCalls++;
            return;
        }

        // this.gl.finish(); 
        const start = performance.now();
        mesh.draw();
        // this.gl.finish(); 
        const end = performance.now();

        const callDuration = end - start;
        this.drawCalls++;

        this.drawCallDetails.push({
            pass: this.currentPassName,
            object: gameObject.name,
            duration: callDuration,
            vertices: mesh.count
        });
    }

    /**
     * Returns and resets the draw call counter.
     * 
     * @method resetDrawCalls
     * @returns {{count: number, details: Array}} Object with `count` and `details` array for profiling.
     * @description Call once per frame after all rendering to get metrics and reset for next frame.
     */
    resetDrawCalls() {
        const result = { count: this.drawCalls, details: this.drawCallDetails.slice() };
        this.drawCalls = 0;
        this.drawCallDetails = [];
        return result;
    }
}
