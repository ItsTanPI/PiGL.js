export class Texture {
    constructor(gl, url) {
        this.gl = gl;
        this.texture = gl.createTexture();
        this.image = new Image();
        this.loaded = false;

        // Placeholder 1x1 pixel while loading
        gl.bindTexture(gl.TEXTURE_2D, this.texture);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, new Uint8Array([255, 0, 255, 255]));

        this.image.onload = () => {
            gl.bindTexture(gl.TEXTURE_2D, this.texture);
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

    isPowerOf2(value) {
        return (value & (value - 1)) === 0;
    }
}
