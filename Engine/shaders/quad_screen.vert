precision mediump float;

attribute vec2 aVertexPosition;
attribute vec2 aTexCoord;

varying vec2 vTexCoord;

void main() {
    // Just forward texture coordinates, no transforms needed for screen-space quad
    gl_Position = vec4(aVertexPosition.x, aVertexPosition.y, 0.0, 1.0);
    vTexCoord = aTexCoord;
}
