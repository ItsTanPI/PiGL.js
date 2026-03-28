import { Transform } from '../Math/Transform.js';

/**
 * GameObject represents a renderable scene entity combining transform, mesh, and material.
 * 
 * @class GameObject
 * @description A GameObject is the fundamental building block of scenes. It groups a Transform,
 * Mesh (geometry), and Material (shader + uniforms) together. Render passes and the Renderer
 * iterate GameObjects in a scene to produce the final image.
 */
export class GameObject {
    /**
     * Creates a new GameObject.
     * 
     * @constructor
     * @param {Renderer} renderer - The Renderer instance to use for drawing.
     * @param {Material} material - The Material (shader + uniforms) to render with.
     * @param {Mesh} [mesh=null] - Optional Mesh geometry; if null, Renderer provides a default quad.
     * @param {string} [name="GameObject"] - Friendly name for debugging/editor.
     */
    constructor(renderer, material, mesh = null, name = "GameObject") {
        this.name = name;
        this.active = true;
        this.transform = new Transform();
        this.renderer = renderer;
        this.material = material; 
        this.mesh = mesh;
    }

    /**
     * Renders this GameObject to a target or the screen.
     * 
     * @method render
     * @param {Camera} camera - Camera providing view and projection matrices.
     * @param {RenderTarget} [target=undefined] - Optional render target to draw to; if undefined, renders to screen.
     * @param {Material} [material=null] - Optional material override; if null, uses this.material.
     * @returns {void}
     * 
     * @description Updates the world matrix before delegating to the Renderer.
     * The Renderer handles texture binding, uniform setting, and draw calls.
     */
    render(camera, target = undefined, material = null) {
        if (!this.active) return;
        
        // Ensure world matrix is updated before drawing
        this.transform.updateWorldMatrix();
        
        // Use provided material or fall back to instance material
        const matToUse = material || this.material;

        if (this.renderer && matToUse) {
            this.renderer.draw(this, camera, target, matToUse);
        }
    }
}
