/**
 * Texture Manager
 * 
 * Handles loading and managing WebGL textures. Loads images asynchronously and
 * creates GPU texture objects with proper filtering and wrapping parameters.
 * 
 * @class Texture
 * @description
 * Features:
 * - Asynchronous image loading with placeholder texture
 * - Power-of-two dimension validation for mipmap generation
 * - Automatic texture configuration
 * - Linear filtering for better visual quality
 */
export class Texture {
    /**
     * Creates and loads a new texture.
     * The image is loaded asynchronously; check the loaded property to determine
     * when the texture is ready for use. A placeholder magenta texture is displayed until loaded.
     * @param {WebGLRenderingContext} gl - The WebGL context
     * @param {string} url - URL to the image file to load
     */
    constructor(gl, url) {
        /** @type {WebGLRenderingContext} */
        this.gl = gl;
        /** @type {WebGLTexture} The GPU texture object */
        this.texture = gl.createTexture();
        /** @type {Image} The loaded image element */
        this.image = new Image();
        /** @type {boolean} Whether the texture has been loaded and uploaded to GPU */
        this.loaded = false;

        // Placeholder 1x1 pixel while loading
        gl.bindTexture(gl.TEXTURE_2D, this.texture);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, new Uint8Array([255, 0, 255, 255]));
        this.image.onload = () => {
            gl.bindTexture(gl.TEXTURE_2D, this.texture);
            
            gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
            
            gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, this.image);
            
            // WebGL1 needs power of 2 for mips/wrapping, or clamp/linear for non-pot
            if (this.isPowerOf2(this.image.width) && this.isPowerOf2(this.image.height)) {
               gl.generateMipmap(gl.TEXTURE_2D);
            } else {
               gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
               gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
               gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
            }
            this.loaded = true;
        };
        this.image.src = url;
    }

    /**
     * Check if a value is a power of 2.
     * Used to determine if mipmapping can be generated for the texture.
     * @private
     * @param {number} value - Value to test
     * @returns {boolean} True if value is a power of 2, false otherwise
     */
    isPowerOf2(value) {
        return (value & (value - 1)) === 0;
    }

    /**
     * Calculate the approximate GPU memory used by this texture.
     * Assumes RGBA 8-bit format, including mipmaps if applicable.
     * @returns {number} Memory in bytes
     */
    getMemorySize() {
        if (!this.loaded || !this.image) return 0;

        const width = this.image.width;
        const height = this.image.height;
        
        // RGBA 8-bit = 4 bytes per pixel
        let bytes = width * height * 4;

        // Add mipmap chain memory if applicable
        if (this.isPowerOf2(width) && this.isPowerOf2(height)) {
            // Mipmap chain adds 1/3 of original size
            bytes = bytes * 1.33;
        }

        return Math.round(bytes);
    }
}
