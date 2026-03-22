precision highp float;

attribute vec3 aVertexPosition;
attribute vec3 aNormal;
attribute vec3 aColor;
attribute vec2 aTexCoord;

uniform mat4 uViewMatrix;
uniform mat4 uProjectionMatrix;
uniform mat4 uModelMatrix;

varying vec3 vNormal;
varying vec3 vPosition;
varying vec3 vColor;
varying vec2 vTexCoord;

void vertex(inout vec3 worldPos, inout vec3 normal, inout vec3 color, inout vec2 texCoord);

void main()
{
    vec3 position = aVertexPosition;
    vec2 texCoord = aTexCoord;
    vec3 color = aColor;
    
    vec3 worldPos = (uModelMatrix * vec4(position, 1.0)).xyz; 
    
    vec3 worldNormal = normalize((uModelMatrix * vec4(aNormal, 0.0)).xyz);
    

    #ifdef VERTEX
        vertex(worldPos, worldNormal, color, texCoord);
    #endif

    vec3 viewNormal = normalize((uViewMatrix * vec4(worldNormal, 0.0)).xyz);


    vPosition = worldPos;
    vNormal = worldNormal;
    vColor = color;
    vTexCoord = texCoord;

    gl_Position = uProjectionMatrix * uViewMatrix * vec4(worldPos, 1.0);
}
