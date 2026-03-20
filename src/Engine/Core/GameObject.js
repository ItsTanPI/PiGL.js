import { Transform } from '../Math/Transform.js';

export class GameObject {
    constructor(renderer, material, mesh = null, name = "GameObject") {
        this.name = name;
        this.transform = new Transform();
        this.renderer = renderer;
        this.material = material; 
        this.mesh = mesh;
    }

    render(camera, target = undefined, material = null) {
        // Ensure world matrix is updated before drawing
        this.transform.updateWorldMatrix();
        
        // Use provided material or fall back to instance material
        const matToUse = material || this.material;

        if (this.renderer && matToUse) {
            this.renderer.draw(this, camera, target, matToUse);
        }
    }
}
