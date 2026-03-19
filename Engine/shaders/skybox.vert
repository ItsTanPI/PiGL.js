precision mediump float;

attribute vec2 aVertexPosition;
attribute vec2 aTexCoord;

varying vec2 vTexCoord;

void main() {
    gl_Position = vec4(aVertexPosition, 1.0, 1.0); // Force z=1.0 (Far plane)
    vTexCoord = aTexCoord;
}