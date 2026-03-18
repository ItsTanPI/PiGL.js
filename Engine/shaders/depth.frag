precision mediump float;

void main() {
    float near = 0.1; 
    float far = 100.0; 
  
    float z = gl_FragCoord.z * 2.0 - 1.0; // Back to NDC 
    float linearDepth = (2.0 * near * far) / (far + near - z * (far - near)); // Linearize
  
    linearDepth /= far; // Normalize to [0, 1] range

    gl_FragColor = vec4(vec3(linearDepth), 1.0);
}
