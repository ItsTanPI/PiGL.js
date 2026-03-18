attribute vec4 aVertexPosition;
attribute vec2 aTexCoord;

uniform mat4 uViewMatrix;
uniform mat4 uProjectionMatrix;
uniform mat4 uModelMatrix;

varying lowp vec2 vTexCoord;

void main() {
    gl_Position = uProjectionMatrix * uViewMatrix * uModelMatrix * aVertexPosition;
    vTexCoord = aTexCoord;
}
