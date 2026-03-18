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

import { Editor } from './Engine/Editor/Editor.js';

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
    cubeObj = new GameObject(renderer, matRed, mesh, 'Monkey'); // Changed to Monkey
    cubeObj.transform.position.set(0, 2, 0);
    cubeObj.transform.scale.set(1.3, 1.3, 1.3);

    // Init Editor once objects are loaded (or init empty and refresh)
    if (floorObj) initEditor();
});

ObjLoader.load(gl, './Assets/3D/Floor.obj').then(mesh => {
    floorObj = new GameObject(renderer, matWhite, mesh, 'Floor');
    floorObj.transform.position.set(0, 0, 0);
    floorObj.transform.scale.set(1.3, 1.3, 1.3);

    if (cubeObj) initEditor();
});


// Viewport System
// x, y, w, h are normalized (0.0 to 1.0)
const viewports = [
    { x: 0.0, y: 0.0, w: 1.0, h: 1.0, pass: 'Outline' } // Default Fullscreen
];

let editor;
function initEditor() {
    if (editor) return; // already init
    
    // Expose viewports to editor
    const gameInterface = {
        cubeObj,
        floorObj,
        camera,
        materials,
        viewports, 
        // Helper to update active viewport pass (useful for single view editor logic)
        activePass: 'Outline',
        setActivePass(name) { 
            this.activePass = name; 
            // Update first viewport for now
            if (this.viewports.length > 0) this.viewports[0].pass = name;
        }
    };

    editor = new Editor(gameInterface);
}


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
    
    // Update material with textures (since textures might be dynamic from render buffers)
    // Though usually we set them once if the buffer texture objects don't change.
    matOutline.setUniform('uDepthTexture', depthBuffer.texture);
    matOutline.setUniform('uNormalTexture', normalBuffer.texture);
    matOutline.setUniform('uSceneTexture', sceneBuffer.texture);
    matOutline.setUniform('uResolution', [canvas.width, canvas.height]);
    
    screenPass.draw(matOutline, outlineBuffer);
    outlineBuffer.unbind();

    // 5. Final Screen Viewports
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    
    // Clear entire screen first
    gl.viewport(0, 0, canvas.width, canvas.height);
    gl.clearColor(0.1, 0.1, 0.1, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    // Loop through viewports
    // We can support dynamic editor modification of this array
    const vps = (editor && editor.game.viewports) ? editor.game.viewports : viewports;

    for (const vp of vps) {
        // Calculate pixel rect
        const valX = Math.floor(vp.x * canvas.width);
        const valY = Math.floor(vp.y * canvas.height); // WebGL y is bottom-up
        const valW = Math.floor(vp.w * canvas.width);
        const valH = Math.floor(vp.h * canvas.height);

        gl.viewport(valX, valY, valW, valH);
        
        // Define Scissor to restrict clearing if we were clearing per-viewport (we aren't here)
        // gl.scissor(valX, valY, valW, valH);

        // Determine texture to show
        let finalTex = outlineBuffer.texture; 
        const p = vp.pass;
        if (p === 'Scene') finalTex = sceneBuffer.texture;
        else if (p === 'Depth') finalTex = depthBuffer.texture;
        else if (p === 'Normal') finalTex = normalBuffer.texture;
        else if (p === 'Outline') finalTex = outlineBuffer.texture;

        matScreen.setUniform('uTexture', finalTex); // Generic setter
        screenPass.draw(matScreen);
    }
    
    requestAnimationFrame(loop);
}
requestAnimationFrame(loop);

