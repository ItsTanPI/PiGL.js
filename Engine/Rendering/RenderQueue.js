export class RenderQueue {
    constructor() {
        this.passes = [];
    }

    addPass(pass) {
        this.passes.push(pass);
    }

    removePass(pass) {
        const index = this.passes.indexOf(pass);
        if (index > -1) {
            this.passes.splice(index, 1);
        }
    }

    execute(renderer, scene, camera) {
        for (const pass of this.passes) {
            if (pass.enabled) {
                pass.execute(renderer, scene, camera);
            }
        }
    }

    resize(width, height) {
        for (const pass of this.passes) {
            pass.resize(width, height);
        }
    }
}
