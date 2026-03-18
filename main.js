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

const canvas = document.getElementById('glcanvas');
const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
if (!gl) { alert('Unable to initialize WebGL.'); }

gl.enable(gl.BLEND);
gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
gl.enable(gl.DEPTH_TEST);
gl.depthFunc(gl.LEQUAL);

let sceneBuffer = new RenderTarget(gl, window.innerWidth, window.innerHeight);

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
    
    sceneBuffer.resize(canvas.width, canvas.height);
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();


const shaderMain = new Shader(gl, mainVs, mainFs);
const shaderScreen = new Shader(gl, screenVs, screenFs);

const matWhite = new Material(shaderMain);
const matRed = new Material(shaderMain);

matWhite.setVec4('uColor', 1.0, 1.0, 1.0, 1.0); // White
matRed.setVec4('uColor', 1.0, 1.0, 1.0, 1.0); // White


const renderer = new Renderer(gl);
const camera = new Camera();

// Perspective setup
const aspect = canvas.width / canvas.height;
camera.setPerspective(45 * Math.PI / 180, aspect, 0.1, 100.0);
camera.transform.position.set(15, 15, 15);
camera.transform.rotation.y = Math.PI / 4; 
camera.transform.rotation.x = -Math.asin(1 / Math.sqrt(3));


let cubeObj = null;
let floorObj = null;

// Load Cube
ObjLoader.load(gl, './Assets/3D/Cube.obj').then(mesh => {
    cubeObj = new GameObject(renderer, matWhite, mesh);
    cubeObj.transform.position.set(0, 1, 0);
});

ObjLoader.load(gl, './Assets/3D/Floor.obj').then(mesh => {
    floorObj = new GameObject(renderer, matRed, mesh);
    floorObj.transform.position.set(0, 0, 0);
});


function loop(now) {
    Time.update(now);

    // Render to screen
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    gl.clearColor(0.1, 0.1, 0.1, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    camera.updateView();

    if (cubeObj) {
        cubeObj.render(camera);
    }

    if (floorObj) {
        floorObj.render(camera);
    }

    
    requestAnimationFrame(loop);
}
requestAnimationFrame(loop);

