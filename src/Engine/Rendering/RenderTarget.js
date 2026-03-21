/**
 * Render Target (Framebuffer Object)
 * 
 * A render target encapsulates a complete rendering destination: a framebuffer with
 * an attached color texture and depth buffer. Used to render scenes to textures for
 * post-processing, reflections, shadows, and deferred rendering pipelines.
 * 
 * @class RenderTarget
 * @description
 * Features:
 * - Color texture with configurable filtering and wrapping
 * - Depth buffer for depth testing
 * - Automatic bind/unbind management
 * - Dynamic resize support
 */
export class RenderTarget {
    /**
     * Creates a new render target with color and depth attachments.
     * @param {WebGLRenderingContext} gl - The WebGL context
     * @param {number} width - Framebuffer width in pixels
     * @param {number} height - Framebuffer height in pixels
     * @param {Object} [options={}] - Configuration options for texture sampling
     * @param {number} [options.minFilter=gl.LINEAR] - Minification filter (gl.LINEAR, gl.NEAREST, etc.)
     * @param {number} [options.magFilter=gl.LINEAR] - Magnification filter
     * @param {number} [options.wrapS=gl.CLAMP_TO_EDGE] - S-axis wrapping
     * @param {number} [options.wrapT=gl.CLAMP_TO_EDGE] - T-axis wrapping
     */
    constructor(gl, width, height, options = {}) {
        /** @type {WebGLRenderingContext} */
        this.gl = gl;
        /** @type {number} Framebuffer width in pixels */
        this.width = width;
        /** @type {number} Framebuffer height in pixels */
        this.height = height;

        this.framebuffer = gl.createFramebuffer();
        gl.bindFramebuffer(gl.FRAMEBUFFER, this.framebuffer);

        // Create texture to render to
        /** @type {WebGLTexture} Color attachment texture */
        this.texture = gl.createTexture();
        gl.bindTexture(gl.TEXTURE_2D, this.texture);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, width, height, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
        
        // Configurable filtering
        const minFilter = options.minFilter !== undefined ? options.minFilter : gl.LINEAR;
        const magFilter = options.magFilter !== undefined ? options.magFilter : gl.LINEAR;
        const wrapS = options.wrapS !== undefined ? options.wrapS : gl.CLAMP_TO_EDGE;
        const wrapT = options.wrapT !== undefined ? options.wrapT : gl.CLAMP_TO_EDGE;

        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, minFilter);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, magFilter);
        
        // Clamp to edge is safer for non-power-of-2 textures
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, wrapS);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, wrapT);

        // Attach texture to framebuffer color attachment
        gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, this.texture, 0);

        // Create depth buffer
        /** @type {WebGLRenderbuffer} Depth attachment renderbuffer */
        this.depthBuffer = gl.createRenderbuffer();
        gl.bindRenderbuffer(gl.RENDERBUFFER, this.depthBuffer);
        gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_COMPONENT16, width, height);
        
        // Attach depth buffer
        gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.RENDERBUFFER, this.depthBuffer);

        // Check status
        const status = gl.checkFramebufferStatus(gl.FRAMEBUFFER);
        if (status !== gl.FRAMEBUFFER_COMPLETE) {
            console.error('Framebuffer is not complete: ' + status);
        }
        
        // Cleanup binding state
        gl.bindTexture(gl.TEXTURE_2D, null);
        gl.bindRenderbuffer(gl.RENDERBUFFER, null);
        gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    }

    /**
     * Bind this render target for rendering.
     * Sets the framebuffer as the rendering destination and configures the viewport.
     * All subsequent draw calls will render to this target.
     */
    bind() {
        this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, this.framebuffer);
        this.gl.viewport(0, 0, this.width, this.height);
    }

    /**
     * Unbind this render target.
     * Resets rendering to the default framebuffer (screen).
     */
    unbind() {
        this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, null);
    }

    /**
     * Resize the framebuffer and its attachments.
     * Called when canvas dimensions change or when explicitly resizing the target.
     * @param {number} width - New width in pixels
     * @param {number} height - New height in pixels
     */
    resize(width, height) {
        if (this.width === width && this.height === height) return;
        
        this.width = width;
        this.height = height;
        const gl = this.gl;

        gl.bindTexture(gl.TEXTURE_2D, this.texture);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, width, height, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
        
        gl.bindRenderbuffer(gl.RENDERBUFFER, this.depthBuffer);
        gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_COMPONENT16, width, height);

        gl.bindTexture(gl.TEXTURE_2D, null);
        gl.bindRenderbuffer(gl.RENDERBUFFER, null);
    }
}
