// Wireframe Vertex Shader (WebGL 1.0 / GLSL ES 1.0)
// Simple passthrough shader for wireframe visualization

uniform mat4 uProjectionMatrix;
uniform mat4 uViewMatrix;
uniform mat4 uModelMatrix;

attribute vec3 aVertexPosition;
attribute vec2 aTexCoord;
attribute vec3 aNormal;

varying vec3 vPos;
varying vec3 vNormal;

void main() {
    vec4 worldPos = uModelMatrix * vec4(aVertexPosition, 1.0);
    vec4 viewPos = uViewMatrix * worldPos;
    
    vPos = worldPos.xyz;
    vNormal = normalize((uModelMatrix * vec4(aNormal, 0.0)).xyz);
    
    gl_Position = uProjectionMatrix * viewPos;
}
