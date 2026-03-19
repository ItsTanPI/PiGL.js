precision highp float;

attribute vec2 aVertexPosition;
attribute vec2 aTexCoord;

varying vec2 vUv;

void main() {
    vUv = aTexCoord;
    gl_Position = vec4(aVertexPosition, 0.0, 1.0);
}
