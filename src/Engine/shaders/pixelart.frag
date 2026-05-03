precision highp float;

varying vec2 vTexCoord;

uniform sampler2D uSceneTexture;
uniform sampler2D uGbufferTexture;

uniform float uPixelSize;
uniform float uColorLevels;
uniform vec2 uResolution;

// New Uniform for Edge Control
uniform float uEdgeWidth; // Try values between 1.0 and 3.0

uniform float uDepthThreshold;
uniform float uNormalThreshold;

uniform float uSilhouetteDarkening;
uniform float uCreaseDarkening;
uniform float uCurvature;
uniform float uEdgeDistance;


void main() {
    // 1. PIXELATION
    vec2 size = uResolution / uPixelSize;
    vec2 uv = floor(vTexCoord * size) / size;
    vec2 texelSize = 1.0 / size;

    // 2. SAMPLING
    float depthCenter = texture2D(uGbufferTexture, uv).a;
    vec3 normalCenter = texture2D(uGbufferTexture, uv).rgb * 2.0 - 1.0;
    vec4 sceneColor = texture2D(uSceneTexture, uv);

    vec3 quantizedColor = floor(sceneColor.rgb * uColorLevels) / uColorLevels;

    float depthEdge = 0.0;
    float normalEdge = 0.0;

    
    // 3. EDGE DETECTION LOOP
    // We multiply the offset by uEdgeWidth to expand the search radius
    float base = clamp(depthCenter, 0.0, 1.0); // near 0 far 1
    base /= uEdgeDistance; 
    if(depthCenter>=0.98) base = 0.0; // make far 0.0
    
    float depthBased = 1.0 - pow(base, uCurvature); 
    float newiwdth =  clamp(uEdgeWidth * depthBased, 0.0, uEdgeWidth);
    
    vec2 offsets[4];
    offsets[0] = vec2(1.0, 0.0) *  newiwdth;
    offsets[1] = vec2(-1.0, 0.0) * newiwdth;
    offsets[2] = vec2(0.0, 1.0) *  newiwdth;
    offsets[3] = vec2(0.0, -1.0) * newiwdth;

    for(int i = 0; i < 4; i++) {
        vec2 neighborUV = uv + offsets[i] * texelSize;
        
        float depthNeighbor = texture2D(uGbufferTexture, neighborUV).a;
        // Sensitivity usually needs to decrease as width increases
        depthEdge = max(depthEdge, abs(depthCenter - depthNeighbor));

        vec3 normalNeighbor = texture2D(uGbufferTexture, neighborUV).rgb * 2.0 - 1.0;
        normalEdge = max(normalEdge, (1.0 - dot(normalCenter, normalNeighbor)));
    }

    // 4. ADAPTIVE COLOR LOGIC
    vec3 finalColor = quantizedColor;

    float adaptiveDepthThreshold = uDepthThreshold / max(newiwdth, 0.001);

    if (newiwdth > 0.1 && depthEdge > adaptiveDepthThreshold) {
        finalColor = quantizedColor * uSilhouetteDarkening;
    } 
    else if (newiwdth > 0.1 && normalEdge > uNormalThreshold) {
        finalColor = quantizedColor * uCreaseDarkening;
    } 
    else {
        finalColor = quantizedColor;
    }

    gl_FragColor = vec4(finalColor, 1.0);
}