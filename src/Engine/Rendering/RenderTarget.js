/**
 * Resolves WebGL2 internal format, base format, and type
 * from a human-readable format + precision combo.
 *
 * @param {WebGL2RenderingContext} gl
 * @param {'RGBA'|'RGB'|'RG'|'R'} format  - Channel layout
 * @param {'8'|'16f'|'32f'}       precision - Bit depth per channel
 * @returns {{ internalFormat: number, glFormat: number, glType: number }}
 */
function resolveFormat(gl, format, precision) {
    const table = {
        'RGBA': {
            '8':   { internalFormat: gl.RGBA8,   glFormat: gl.RGBA, glType: gl.UNSIGNED_BYTE },
            '16f': { internalFormat: gl.RGBA16F,  glFormat: gl.RGBA, glType: gl.HALF_FLOAT    },
            '32f': { internalFormat: gl.RGBA32F,  glFormat: gl.RGBA, glType: gl.FLOAT         },
        },
        'RGB': {
            '8':   { internalFormat: gl.RGB8,    glFormat: gl.RGB,  glType: gl.UNSIGNED_BYTE },
            '16f': { internalFormat: gl.RGB16F,   glFormat: gl.RGB,  glType: gl.HALF_FLOAT    },
            '32f': { internalFormat: gl.RGB32F,   glFormat: gl.RGB,  glType: gl.FLOAT         },
        },
        'RG': {
            '8':   { internalFormat: gl.RG8,     glFormat: gl.RG,   glType: gl.UNSIGNED_BYTE },
            '16f': { internalFormat: gl.RG16F,    glFormat: gl.RG,   glType: gl.HALF_FLOAT    },
            '32f': { internalFormat: gl.RG32F,    glFormat: gl.RG,   glType: gl.FLOAT         },
        },
        'R': {
            '8':   { internalFormat: gl.R8,      glFormat: gl.RED,  glType: gl.UNSIGNED_BYTE },
            '16f': { internalFormat: gl.R16F,     glFormat: gl.RED,  glType: gl.HALF_FLOAT    },
            '32f': { internalFormat: gl.R32F,     glFormat: gl.RED,  glType: gl.FLOAT         },
        },
    };
 
    const result = table[format]?.[precision];
    if (!result) {
        console.warn(`RenderTarget: Unknown format/precision "${format} ${precision}", falling back to RGBA8`);
        return table['RGBA']['8'];
    }
    return result;
}
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
 * - Configurable channel format: RGBA, RGB, RG, R
 * - Configurable bit precision: 8-bit (UNSIGNED_BYTE), 16f (HALF_FLOAT), 32f (FLOAT)
 * - Depth buffer for depth testing (optional)
 * - Automatic bind/unbind management
 * - Dynamic resize support
 *
 * @note
 * 16f and 32f formats require the EXT_color_buffer_float extension.
 * Enable it once during engine init: gl.getExtension('EXT_color_buffer_float')
 */
export class RenderTarget {
    /**
     * Creates a new render target with color and depth attachments.
     *
     * @param {WebGL2RenderingContext} gl     - The WebGL2 context
     * @param {number}                width   - Framebuffer width in pixels
     * @param {number}                height  - Framebuffer height in pixels
     * @param {Object}                [options={}]
     *
     * -- Texture sampling --
     * @param {number}  [options.minFilter=gl.LINEAR]       - Minification filter
     * @param {number}  [options.magFilter=gl.LINEAR]       - Magnification filter
     * @param {number}  [options.wrapS=gl.CLAMP_TO_EDGE]    - S-axis wrapping
     * @param {number}  [options.wrapT=gl.CLAMP_TO_EDGE]    - T-axis wrapping
     *
     * -- Format --
     * @param {'RGBA'|'RGB'|'RG'|'R'} [options.format='RGBA']      - Channel layout
     * @param {'8'|'16f'|'32f'}       [options.precision='8']       - Bit depth per channel
     *
     * -- Depth --
     * @param {boolean} [options.depth=true]   - Whether to create a depth buffer
     */
    constructor(gl, width, height, options = {}) {
        /** @type {WebGL2RenderingContext} */
        this.gl = gl;
        /** @type {number} */
        this.width = width;
        /** @type {number} */
        this.height = height;

        // Store format options for resize
        /** @type {'RGBA'|'RGB'|'RG'|'R'} */
        this.format    = options.format    ?? 'RGBA';
        /** @type {'8'|'16f'|'32f'} */
        this.precision = options.precision ?? '8';
        /** @type {boolean} */
        this.hasDepth  = options.depth     ?? true;

        this.framebuffer = gl.createFramebuffer();
        gl.bindFramebuffer(gl.FRAMEBUFFER, this.framebuffer);

        /** @type {WebGLTexture} Color attachment texture */
        this.texture = gl.createTexture();
        gl.bindTexture(gl.TEXTURE_2D, this.texture);

        const { internalFormat, glFormat, glType } = resolveFormat(gl, this.format, this.precision);

        // Store for resize
        this._internalFormat = internalFormat;
        this._glFormat       = glFormat;
        this._glType         = glType;

        gl.texImage2D(gl.TEXTURE_2D, 0, internalFormat, width, height, 0, glFormat, glType, null);

        const minFilter = options.minFilter ?? gl.LINEAR;
        const magFilter = options.magFilter ?? gl.LINEAR;
        const wrapS     = options.wrapS     ?? gl.CLAMP_TO_EDGE;
        const wrapT     = options.wrapT     ?? gl.CLAMP_TO_EDGE;

        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, minFilter);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, magFilter);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, wrapS);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, wrapT);

        gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, this.texture, 0);

        /** @type {WebGLRenderbuffer|null} */
        this.depthBuffer = null;

        if (this.hasDepth) {
            this.depthBuffer = gl.createRenderbuffer();
            gl.bindRenderbuffer(gl.RENDERBUFFER, this.depthBuffer);
            gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_COMPONENT16, width, height);
            gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.RENDERBUFFER, this.depthBuffer);
        }

        const status = gl.checkFramebufferStatus(gl.FRAMEBUFFER);
        if (status !== gl.FRAMEBUFFER_COMPLETE) {
            console.error('RenderTarget: Framebuffer is not complete — status: ' + status);
        }

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
     * @param {number} width  - New width in pixels
     * @param {number} height - New height in pixels
     */
    resize(width, height) {
        if (this.width === width && this.height === height) return;

        this.width  = width;
        this.height = height;
        const gl    = this.gl;

        gl.bindTexture(gl.TEXTURE_2D, this.texture);
        gl.texImage2D(
            gl.TEXTURE_2D, 0,
            this._internalFormat,
            width, height, 0,
            this._glFormat, this._glType,
            null
        );

        if (this.hasDepth && this.depthBuffer) {
            gl.bindRenderbuffer(gl.RENDERBUFFER, this.depthBuffer);
            gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_COMPONENT16, width, height);
        }

        gl.bindTexture(gl.TEXTURE_2D, null);
        gl.bindRenderbuffer(gl.RENDERBUFFER, null);
    }

    // Add this method to the RenderTarget class
    invalidate(includeDepth = true) {
        const gl = this.gl;
        gl.bindFramebuffer(gl.FRAMEBUFFER, this.framebuffer);
        
        const attachments = [gl.COLOR_ATTACHMENT0];
        if (includeDepth && this.hasDepth) {
            attachments.push(gl.DEPTH_ATTACHMENT);
        }
        gl.invalidateFramebuffer(gl.FRAMEBUFFER, attachments);
        gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    }

    /**
     * Destroy this render target and free all GPU resources.
     */
    destroy() {
        const gl = this.gl;
        gl.deleteFramebuffer(this.framebuffer);
        gl.deleteTexture(this.texture);
        if (this.depthBuffer) gl.deleteRenderbuffer(this.depthBuffer);

        this.framebuffer = null;
        this.texture     = null;
        this.depthBuffer = null;
    }

    /**
     * Calculate the approximate GPU memory used by this render target.
     * Includes color texture and depth buffer if present.
     * @returns {number} Memory in bytes
     */
    getMemorySize() {
        let bytes = 0;

        // Color texture memory
        const channelCount = this.format === 'RGBA' ? 4 : this.format === 'RGB' ? 3 : this.format === 'RG' ? 2 : 1;
        const bytesPerChannel = this.precision === '32f' ? 4 : this.precision === '16f' ? 2 : 1;
        bytes += this.width * this.height * channelCount * bytesPerChannel;

        // Depth buffer (typically 16-bit or 24-bit per pixel)
        if (this.hasDepth) {
            bytes += this.width * this.height * 2; // 16-bit depth
        }

        return bytes;
    }
}