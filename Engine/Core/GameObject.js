import { Transform } from '../Math/Transform.js';

export class GameObject {
    constructor(renderer, material) {
        this.transform = new Transform();
        this.renderer = renderer;
        this.material = material; 
    }

    render(camera) {
        // Ensure world matrix is updated before drawing
        this.transform.updateWorldMatrix();
        
        if (this.renderer && this.material) {
            this.renderer.draw(this, camera);
        }
    }
}
