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


import { RenderQueue } from './Engine/Rendering/RenderQueue.js';
import { ObjectRenderPass } from './Engine/Rendering/ObjectRenderPass.js';
import { ScreenRenderPass } from './Engine/Rendering/ScreenRenderPass.js';
import { ViewportPass } from './Engine/Rendering/Passes/ViewportPass.js';

import { ProfilerInstrumenter } from './Engine/Profiling/Profiler.js';
import { Editor } from './Editor/Editor.js';

// Assets
import mainVs from './Engine/shaders/quad.vert?raw';
import mainFs from './Engine/shaders/quad.frag?raw';
import screenVs from './Engine/shaders/quad_screen.vert?raw';
import screenFs from './Engine/shaders/quad_screen.frag?raw';
import depthVs from './Engine/shaders/depth.vert?raw';
import depthFs from './Engine/shaders/depth.frag?raw';
import normalVs from './Engine/shaders/normal.vert?raw';
import normalFs from './Engine/shaders/normal.frag?raw';
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

const shaderMain = new Shader(gl, mainVs, mainFs);
const shaderScreen = new Shader(gl, screenVs, screenFs);
const shaderDepth = new Shader(gl, depthVs, depthFs);
const shaderNormal = new Shader(gl, normalVs, normalFs);
const shaderOutline = new Shader(gl, screenVs, outlineFs);

const matWhite = new Material(shaderMain, 'White');
const matRed = new Material(shaderMain, 'Red');

const matDepth = new Material(shaderDepth, 'Depth'); // Depth material
const matNormal = new Material(shaderNormal, 'Normal'); // Normal material
const matOutline = new Material(shaderOutline, 'Outline'); // Outline Material
const matScreen = new Material(shaderScreen, 'Screen'); // Final Screen Material (was just shader)

// Default Outline Settings
matOutline.setUniforms({
    'uDepthThreshold': 0.5,
    'uNormalThreshold': 0.4,
    'uThickness': 1.0,
    'uOutlineColor': [0.0, 0.0, 0.0, 1.0]
});

matWhite.setUniforms({ 'uColor': [1.0, 1.0, 1.0, 1.0] });
matRed.setUniforms({ 'uColor': [1.0, 0.0, 0.0, 1.0] });

// Register Materials for Editor
const materials = {
    'White': matWhite,
    'Red': matRed,
    'Depth': matDepth,
    'Normal': matNormal,
    'Outline': matOutline,
    'Screen': matScreen
};


const renderer = new Renderer(gl);
const camera = new Camera();

const scene = [];
const renderQueue = new RenderQueue();

const depthPass = new ObjectRenderPass(gl, canvas.width, canvas.height, depthBuffer, matDepth, 'Depth Pass');
depthPass.clearColor = [1.0, 1.0, 1.0, 1.0];
renderQueue.addPass(depthPass);

// 2. Normal Pass
const normalPass = new ObjectRenderPass(gl, canvas.width, canvas.height, normalBuffer, matNormal, 'Normal Pass');
normalPass.clearColor = [0.5, 0.5, 1.0, 1.0];
renderQueue.addPass(normalPass);

// 3. Scene Pass
const scenePass = new ObjectRenderPass(gl, canvas.width, canvas.height, sceneBuffer, null, 'Scene Pass');
scenePass.clearColor = [0.0, 0.0, 0.0, 1.0];
renderQueue.addPass(scenePass);

// 4. Outline Pass
const outlinePass = new ScreenRenderPass(gl, canvas.width, canvas.height, matOutline, outlineBuffer, 'Outline Pass');
outlinePass.clearColor = [0.0, 0.0, 0.0, 0.0];
outlinePass.setTexture('uDepthTexture', depthBuffer.texture);
outlinePass.setTexture('uNormalTexture', normalBuffer.texture);
outlinePass.setTexture('uSceneTexture', sceneBuffer.texture);
renderQueue.addPass(outlinePass);

// 5. Viewport Pass
const viewportPass = new ViewportPass(gl, canvas.width, canvas.height, matScreen);
viewportPass.setBuffer('Depth', depthBuffer.texture);
viewportPass.setBuffer('Normal', normalBuffer.texture);
viewportPass.setBuffer('Scene', sceneBuffer.texture);
viewportPass.setBuffer('Outline', outlineBuffer.texture);
renderQueue.addPass(viewportPass);

// Resize System
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
    
    // Resize buffers
    sceneBuffer.resize(canvas.width, canvas.height);
    depthBuffer.resize(canvas.width, canvas.height);
    normalBuffer.resize(canvas.width, canvas.height);
    outlineBuffer.resize(canvas.width, canvas.height);

    // Resize passes
    renderQueue.resize(canvas.width, canvas.height);

    // Update Camera Aspect Ratio
    const aspect = canvas.width / canvas.height;
    camera.setPerspective(45 * Math.PI / 180, aspect, 0.1, 100.0);
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas(); // Initial call


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
    cubeObj = new GameObject(renderer, matRed, mesh, 'Monkey'); // Changed to Monkey
    cubeObj.transform.position.set(0, 2, 0);
    cubeObj.transform.scale.set(1.3, 1.3, 1.3);
    scene.push(cubeObj);

    // Init Editor once objects are loaded (or init empty and refresh)
    // if (floorObj) initEditor();
});

ObjLoader.load(gl, './Assets/3D/Floor.obj').then(mesh => {
    floorObj = new GameObject(renderer, matWhite, mesh, 'Floor');
    floorObj.transform.position.set(0, 0, 0);
    floorObj.transform.scale.set(1.3, 1.3, 1.3);
    scene.push(floorObj);

    // if (cubeObj) initEditor();
});


// Viewport System
// x, y, w, h are normalized (0.0 to 1.0)
const viewports = [
    { x: 0.0, y: 0.0, w: 1.0, h: 1.0, pass: 'Outline' } // Default Fullscreen
];

// Set initial viewports
viewportPass.setViewports(viewports);


// Init Editor
const game = {
    gl,
    scene,
    camera,
    renderer,
    renderQueue,
    materials // exposed for Material Window later,
};

// Add setter for viewports
game.setViewports = (mode) => {
    viewports[0].pass = mode; 
};

// Initialize the Editor
const editor = new Editor(game);


// Profiler Setup
const profiler = ProfilerInstrumenter.attach(renderQueue, renderer);

function loop(now) {
    Time.update(now);
    game.deltaTime = Time.deltaTime; // Expose to editor for profiler

    if (cubeObj) {
        // Spin the cube
        // cubeObj.transform.rotation.x += 1.0 * Time.deltaTime;
        cubeObj.transform.rotation.y += 1.0 * Time.deltaTime;
    }

    camera.updateView();

    // Update viewport pass
    viewportPass.setViewports(viewports);

    // Execute Render Queue
    renderQueue.execute(renderer, scene, camera);
    
    requestAnimationFrame(loop);
}
requestAnimationFrame(loop);

