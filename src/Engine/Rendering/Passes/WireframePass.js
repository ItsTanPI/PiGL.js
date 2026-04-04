import { RenderPass } from '../RenderPass.js';
import { Material } from '../Material.js';
import { Shader } from '../Shader.js';

import wireframeVs from '../../shaders/wireframe.vert?raw';
import wireframeFs from '../../shaders/wireframe.frag?raw';

/**
 * Wireframe Pass - Renders all objects as wireframes with tessellation visualization
 * 
 * @class WireframePass
 * @description Renders geometry in wireframe mode to visualize mesh structure and tessellation.
 * Useful for debugging, performance analysis, and understanding tessellation levels.
 */
export class WireframePass extends RenderPass {
    /**
     * Creates a new wireframe pass.
     * 
     * @constructor
     * @param {WebGLRenderingContext} gl - WebGL context
     * @param {number} width - Viewport width
     * @param {number} height - Viewport height
     * @param {RenderTarget} [target=null] - Optional render target; if null, renders to screen
     * @param {string} [name='Wireframe Pass'] - Debug name
     */
    constructor(gl, width, height, target = null, name = 'Wireframe Pass') {
        super(gl, width, height, name);
        
        this.target = target;
        this.enabled = false;  // Disabled by default
        
        // Create wireframe material
        const shaderWireframe = new Shader(gl, wireframeVs, wireframeFs);
        this.material = new Material(shaderWireframe, 'Wireframe');
        
        // Set default wireframe properties
        this.material.setUniforms({
            'uWireColor': [0.0, 1.0, 0.0],      // Green wireframe
            'uWireWidth': 1.0,
            'uWireOpacity': 1.0,
            'uShowBackfaces': false
        });
        
        // Store GL context for polygon mode changes
        this._gl = gl;
        this._polygonMode = null;
    }

    /**
     * Set wireframe color
     * @method setWireColor
     * @param {number} r - Red (0-1)
     * @param {number} g - Green (0-1)
     * @param {number} b - Blue (0-1)
     */
    setWireColor(r, g, b) {
        this.material.setVec3('uWireColor', r, g, b);
    }

    /**
     * Set wireframe opacity
     * @method setOpacity
     * @param {number} opacity - Opacity value (0-1)
     */
    setOpacity(opacity) {
        this.material.setFloat('uWireOpacity', Math.max(0, Math.min(1, opacity)));
    }

    /**
     * Toggle backface rendering
     * @method setShowBackfaces
     * @param {boolean} show - Whether to show backface wireframes
     */
    setShowBackfaces(show) {
        this.material.setUniform('uShowBackfaces', show ? 1 : 0, '1i');
    }

    /**
     * Execute wireframe rendering pass
     * 
     * @method execute
     * @param {Renderer} renderer - Renderer instance
     * @param {GameObject[]} scene - Scene objects to render
     * @param {Camera} camera - Camera for rendering
     */
    execute(renderer, scene, camera) {
        if (!this.enabled) return;

        // Bind target or screen
        if (this.target) {
            this.target.bind();
        } else {
            this._gl.bindFramebuffer(this._gl.FRAMEBUFFER, null);
            this._gl.viewport(0, 0, this.width, this.height);
        }

        // Note: WebGL doesn't support polygon mode like OpenGL
        // Wireframe rendering is done using LINE_STRIP primitive directly
        
        // Clear and setup
        this._gl.clearColor(0.1, 0.1, 0.15, 1.0);
        this._gl.clear(this._gl.COLOR_BUFFER_BIT | this._gl.DEPTH_BUFFER_BIT);
        this._gl.depthMask(true);
        this._gl.enable(this._gl.DEPTH_TEST);

        // Render all scene objects in wireframe
        const shader = this.material.shader;
        shader.use();

        // Setup standard uniforms
        shader.setUniform('uProjectionMatrix', camera.projectionMatrix);
        shader.setUniform('uViewMatrix', camera.viewMatrix);

        // Recursive function to draw object and children
        const drawWireframe = (gameObject) => {
            if (!gameObject.active) return;

            gameObject.transform.updateWorldMatrix();

            if (gameObject.mesh) {
                // Setup object uniforms
                shader.setUniform('uModelMatrix', gameObject.transform.worldMatrix);

                // Setup material uniforms
                for (const name in this.material.uniforms) {
                    const u = this.material.uniforms[name];
                    shader.setUniform(name, u.value, u.type);
                }

                // Draw object
                const mesh = gameObject.mesh;
                mesh.bind(shader);
                
                // Draw in LINE mode to show wireframe
                if (mesh.indices && mesh.indices.length > 0) {
                    this._gl.drawElements(this._gl.LINE_STRIP, mesh.count, this._gl.UNSIGNED_SHORT, 0);
                } else {
                    this._gl.drawArrays(this._gl.LINE_STRIP, 0, mesh.count);
                }
            }

            // Draw children recursively
            if (gameObject.transform && gameObject.transform.children) {
                for (const childTransform of gameObject.transform.children) {
                    if (childTransform.gameObject) {
                        drawWireframe(childTransform.gameObject);
                    }
                }
            }
        };

        for (const gameObject of scene) {
            drawWireframe(gameObject);
        }
    }

    /**
     * Resize pass buffers
     * 
     * @method resize
     * @param {number} width - New width
     * @param {number} height - New height
     */
    resize(width, height) {
        this.width = width;
        this.height = height;
        if (this.target) {
            this.target.resize(width, height);
        }
    }

    /**
     * Toggle wireframe visibility
     * @method toggle
     */
    toggle() {
        this.enabled = !this.enabled;
        console.log(this.name + (this.enabled ? ' enabled' : ' disabled'));
    }
}
