import { Camera } from './Engine/Rendering/Camera.js';
import { Shader } from './Engine/Rendering/Shader.js';
import { Renderer } from './Engine/Rendering/Renderer.js';
import { Material } from './Engine/Rendering/Material.js';
import { RenderTarget } from './Engine/Rendering/RenderTarget.js';
import { FullScreenQuad } from './Engine/Rendering/FullScreenQuad.js';
import { Texture } from './Engine/Rendering/Texture.js';
import { GameObject } from './Engine/Core/GameObject.js';
import { Time } from './Engine/Core/TimeManager.js';
import { ObjLoader } from './Engine/Loaders/ObjLoader.js';

// Assets
import mainVs from './Engine/shaders/quad.vert?raw';
import mainFs from './Engine/shaders/quad.frag?raw';
import screenVs from './Engine/shaders/quad_screen.vert?raw';
import screenFs from './Engine/shaders/quad_screen.frag?raw';
import depthVs from './Engine/shaders/depth.vert?raw';
import depthFs from './Engine/shaders/depth.frag?raw';
import normalVs from './Engine/shaders/normal.vert?raw';
import normalFs from './Engine/shaders/normal.frag?raw';
import multiplyFs from './Engine/shaders/multiply.frag?raw';
import outlineFs from './Engine/shaders/outline.frag?raw';

const canvas = document.getElementById('glcanvas');
const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
if (!gl) { alert('Unable to initialize WebGL.'); }
gl.getExtension('OES_standard_derivatives');

gl.enable(gl.BLEND);
gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
gl.enable(gl.DEPTH_TEST);
gl.depthFunc(gl.LEQUAL);

let sceneBuffer = new RenderTarget(gl, window.innerWidth, window.innerHeight);
let depthBuffer = new RenderTarget(gl, window.innerWidth, window.innerHeight);
let normalBuffer = new RenderTarget(gl, window.innerWidth, window.innerHeight);
let outlineBuffer = new RenderTarget(gl, window.innerWidth, window.innerHeight);

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
    
    sceneBuffer.resize(canvas.width, canvas.height);
    depthBuffer.resize(canvas.width, canvas.height);
    normalBuffer.resize(canvas.width, canvas.height);
    outlineBuffer.resize(canvas.width, canvas.height);
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();


const shaderMain = new Shader(gl, mainVs, mainFs);
const shaderScreen = new Shader(gl, screenVs, screenFs);
const shaderDepth = new Shader(gl, depthVs, depthFs);
const shaderNormal = new Shader(gl, normalVs, normalFs);
const shaderOutline = new Shader(gl, screenVs, outlineFs);

const matWhite = new Material(shaderMain);
const matRed = new Material(shaderMain);

const matDepth = new Material(shaderDepth); // Depth material
const matNormal = new Material(shaderNormal); // Normal material

matWhite.setVec4('uColor', 0.5, 0.5, 0.5, 1.0); // White
matRed.setVec4('uColor', 1.0, 0.0, 0.0, 1.0); // White


const renderer = new Renderer(gl);
const screenPass = new FullScreenQuad(gl);
const camera = new Camera();

// Perspective setup
const aspect = canvas.width / canvas.height;
camera.setPerspective(45 * Math.PI / 180, aspect, 0.1, 100.0);
camera.transform.position.set(10, 10, 10);
camera.transform.rotation.y = Math.PI / 4; 
camera.transform.rotation.x = -Math.asin(1 / Math.sqrt(3));

let cubeObj = null;
let floorObj = null;

// Load Cube
ObjLoader.load(gl, './Assets/3D/Monkey.obj').then(mesh => {
    cubeObj = new GameObject(renderer, matRed, mesh);
    cubeObj.transform.position.set(0, 2, 0);
    cubeObj.transform.scale.set(1.3, 1.3, 1.3);

});

ObjLoader.load(gl, './Assets/3D/Floor.obj').then(mesh => {
    floorObj = new GameObject(renderer, matWhite, mesh);
    floorObj.transform.position.set(0, 0, 0);
    floorObj.transform.scale.set(1.3, 1.3, 1.3);

});


function loop(now) {
    Time.update(now);

    if (cubeObj) {
        // Spin the cube
        // cubeObj.transform.rotation.x += 1.0 * Time.deltaTime;
        cubeObj.transform.rotation.y += 1.0 * Time.deltaTime;
    
    }

    camera.updateView();

    // 1. Depth Pass (Render to texture)
    depthBuffer.bind(); 
    gl.clearColor(1.0, 1.0, 1.0, 1.0); // Clear to white (max depth)
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    // Explicitly target the depthBuffer, although bind() above sets it, 
    // passing it ensures the renderer knows the target context if needed.
    if (cubeObj) cubeObj.render(camera, depthBuffer, matDepth);
    if (floorObj) floorObj.render(camera, depthBuffer, matDepth);
    depthBuffer.unbind();

    // 2. Normal Pass
    normalBuffer.bind();
    gl.clearColor(0.5, 0.5, 1.0, 1.0); // Default normal "flat blue" in tangent space, or just background
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    // Render with normal material override
    if (cubeObj) cubeObj.render(camera, normalBuffer, matNormal);
    if (floorObj) floorObj.render(camera, normalBuffer, matNormal);
    normalBuffer.unbind();

    // 3. Scene Pass
    sceneBuffer.bind();
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    // Render with default materials to sceneBuffer
    if (cubeObj) cubeObj.render(camera, sceneBuffer);
    if (floorObj) floorObj.render(camera, sceneBuffer);
    sceneBuffer.unbind();

    // 4. Outline Pass
    outlineBuffer.bind();
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT); // Clear mask to black (no edge)
    screenPass.draw(shaderOutline, {
        'uDepthTexture': depthBuffer.texture,
        'uNormalTexture': normalBuffer.texture,
        'uSceneTexture' : sceneBuffer.texture,
        'uResolution': [canvas.width, canvas.height]
    }, outlineBuffer);
    outlineBuffer.unbind();
    // 5. Final Screen Pass
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    gl.viewport(0, 0, canvas.width, canvas.height);
    gl.clearColor(0.1, 0.1, 0.1, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    
    // Display the Outline Buffer
    screenPass.draw(shaderScreen, {
        'uTexture': outlineBuffer.texture
    });
    
    requestAnimationFrame(loop);
}
requestAnimationFrame(loop);

