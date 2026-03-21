/**
 * Base class for all rendering passes in the engine.
 * A render pass encapsulates a single rendering operation, such as rendering objects,
 * applying post-processing effects, or compositing multiple render targets.
 * 
 * @class RenderPass
 * @description
 * Render passes are executed in a pipeline to produce the final image. Each pass can:
 * - Render to its own target or the framebuffer
 * - Use materials and shaders
 * - Resize based on window dimensions
 * - Track performance metrics (draw calls, execution time)
 * 
 * The base class provides the foundation for specialized passes like ObjectRenderPass (renders 3D objects),
 * ScreenRenderPass (applies full-screen effects), and custom passes like LightingPass or OutlinePass.
 */
export class RenderPass {
    /**
     * Creates a new render pass.
     * @param {WebGLRenderingContext} gl - The WebGL context
     * @param {number} width - Initial viewport width in pixels
     * @param {number} height - Initial viewport height in pixels
     * @param {string} [name='RenderPass'] - Descriptive name for debugging and profiling
     */
    constructor(gl, width, height, name = 'RenderPass') {
        /** @type {WebGLRenderingContext} */
        this.gl = gl;
        /** @type {number} Viewport width in pixels */
        this.width = width;
        /** @type {number} Viewport height in pixels */
        this.height = height;
        /** @type {string} Descriptive name for this pass */
        this.name = name;
        /** @type {boolean} Whether this pass is executed in the pipeline */
        this.enabled = true;
        /** @type {boolean} Whether to automatically resize when canvas dimensions change */
        this.autoResize = true;
        /** @type {number} Number of draw calls executed in the last frame */
        this.drawCount = 0;
        /** @type {number} Execution time of this pass in milliseconds */
        this.executionTime = 0;
    }

    /**
     * Resize the pass viewport.
     * Called when canvas dimensions change. Subclasses should override to handle
     * resize of attached render targets or other size-dependent resources.
     * @param {number} width - New width in pixels
     * @param {number} height - New height in pixels
     */
    resize(width, height) {
        if (!this.autoResize) return;
        this.width = width;
        this.height = height;
    }

    /**
     * Execute the render pass.
     * This is the main method called during the render pipeline. Subclasses must implement
     * this method to perform their specific rendering operations.
     * @param {Renderer} renderer - The renderer instance
     * @param {Array|Object} scene - The scene or list of objects to render
     * @param {Camera} camera - The camera for rendering
     */
    execute(renderer, scene, camera) {
        console.warn("RenderPass.execute() not implemented");
    }
}
