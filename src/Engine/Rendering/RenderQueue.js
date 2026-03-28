/**
 * Render Queue
 * 
 * Manages an ordered collection of render passes that are executed sequentially
 * to produce the final rendered image. The queue handles pass execution,
 * conditional enabling/disabling, and viewport resizing.
 * 
 * @class RenderQueue
 * @description
 * The render queue is the core of the render pipeline. It maintains a list of
 * render passes (ObjectRenderPass, ScreenRenderPass, etc.) and executes them
 * in order each frame. Each pass can render to its own target or the screen.
 */
export class RenderQueue {
    /**
     * Creates a new render queue.
     */
    constructor(gl) {

        /** @type {RenderPass[]} Array of render passes to execute */
        this.gl = gl;
        this.passes = [];
    }

    /**
     * Add a render pass to the queue.
     * Passes are executed in the order they are added.
     * @param {RenderPass} pass - The render pass to add
     */
    addPass(pass) {
        this.passes.push(pass);
    }

    /**
     * Remove a render pass from the queue.
     * @param {RenderPass} pass - The render pass to remove
     * @returns {boolean} True if the pass was found and removed, false otherwise
     */
    removePass(pass) {
        const index = this.passes.indexOf(pass);
        if (index > -1) {
            this.passes.splice(index, 1);
            return true;
        }
        return false;
    }

    /**
     * Execute all enabled passes in the queue.
     * Each pass's execute() method is called in order, allowing for multi-stage rendering.
     * @param {Renderer} renderer - The renderer instance
     * @param {Array|Object} scene - The scene or objects to render
     * @param {Camera} camera - The camera for rendering
     */
    execute(renderer, scene, camera) {
        for (const pass of this.passes) {
            if (pass.enabled) {
                pass.execute(renderer, scene, camera);
                this.gl.finish()
            }
        }
    }

    /**
     * Resize all passes in the queue.
     * Propagates resize event to all passes that have autoResize enabled.
     * Called when the canvas/viewport dimensions change.
     * @param {number} width - New viewport width in pixels
     * @param {number} height - New viewport height in pixels
     */
    resize(width, height) {
        for (const pass of this.passes) {
            pass.resize(width, height);
        }
    }
}
