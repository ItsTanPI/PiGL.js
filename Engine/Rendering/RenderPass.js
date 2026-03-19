export class RenderPass {
    constructor(gl, width, height, name = 'RenderPass') {
        this.gl = gl;
        this.width = width;
        this.height = height;
        this.name = name;
        this.enabled = true;
        this.drawCount = 0;
    }

    resize(width, height) {
        this.width = width;
        this.height = height;
    }

    execute(renderer, scene, camera) {
        console.warn("RenderPass.execute() not implemented");
    }
}
