#extension GL_OES_standard_derivatives : enable
precision mediump float;

varying vec3 vWorldPos;

void main() {
    // Calculate face normal using derivatives of world position
    vec3 dx = dFdx(vWorldPos);
    vec3 dy = dFdy(vWorldPos);
    vec3 normal = normalize(cross(dx, dy));
    
    // Remap to 0-1 range for visualization
    gl_FragColor = vec4(normal * 0.5 + 0.5, 1.0);
}
