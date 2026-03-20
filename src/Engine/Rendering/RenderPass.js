export class RenderPass {
    constructor(gl, width, height, name = 'RenderPass') {
        this.gl = gl;
        this.width = width;
        this.height = height;
        this.name = name;
        this.enabled = true;
        this.autoResize = true; // If false, resize() will be ignored
        this.drawCount = 0;
        this.executionTime = 0; // Time in milliseconds
    }

    resize(width, height) {
        if (!this.autoResize) return;
        this.width = width;
        this.height = height;
    }

    execute(renderer, scene, camera) {
        console.warn("RenderPass.execute() not implemented");
    }
}
