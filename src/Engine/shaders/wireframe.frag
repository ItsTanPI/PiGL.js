precision highp float;

// Received from Vertex Shader - must match the names in your Vertex Shader exactly
varying vec3 vPos;
varying vec3 vNormal;

// Wireframe uniforms
uniform vec3 uWireColor;        // Line color (default: white)
uniform float uWireWidth;       // Line thickness (default: 1.0)
uniform float uWireOpacity;     // Line opacity (default: 1.0)
uniform bool uShowBackfaces;    // Show backface wireframe (default: false)

void main() {
    vec3 normal = normalize(vNormal);
    
    // In WebGL 1.0, world position is often used for viewDir calculation 
    // assuming camera is at (0,0,0) or passed via uniform. 
    // Since vPos is world space, we calculate direction to origin:
    vec3 viewDir = normalize(-vPos);
    
    // Backface check
    float NdotV = dot(normal, viewDir);
    if (NdotV < 0.0 && !uShowBackfaces) {
        discard;
    }
    
    // Base wireframe color with edge highlighting
    vec3 wireColor = uWireColor;
    
    // Add brightness based on surface angle for depth perception
    float surfaceBrightness = 0.5 + 0.5 * max(0.0, NdotV);
    wireColor *= mix(0.5, 1.0, surfaceBrightness);
    
    gl_FragColor = vec4(wireColor, uWireOpacity);
}