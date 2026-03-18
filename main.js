import { Camera } from './Engine/Rendering/Camera.js';
import { Shader } from './Engine/Rendering/Shader.js';
import { Renderer } from './Engine/Rendering/Renderer.js';
import { Material } from './Engine/Rendering/Material.js';
import { RenderTarget } from './Engine/Rendering/RenderTarget.js';
import { FullScreenQuad } from './Engine/Rendering/FullScreenQuad.js';
import { Texture } from './Engine/Rendering/Texture.js';
import { GameObject } from './Engine/Core/GameObject.js';
import { Time } from './Engine/Core/TimeManager.js';

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

const matColor = new Material(shaderMain);
matColor.setVec4('uColor', 1.0, 0.5, 0.2, 1.0); // Orange

const renderer = new Renderer(gl);
const screenPass = new FullScreenQuad(gl);
const camera = new Camera();

const obj = new GameObject(renderer, matColor);
obj.transform.position.z = -5.0; 


function draw(now) {
    Time.update(now);

    obj.transform.rotation.y += 1 * Time.deltaTime;
    camera.updateView();
    
    const aspect = canvas.width / canvas.height;
    camera.setPerspective(45 * Math.PI / 180, aspect, 0.1, 100.0);

    sceneBuffer.bind();
    gl.clearColor(0.1, 0.1, 0.1, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    obj.render(camera, sceneBuffer);

    sceneBuffer.unbind();

    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    gl.viewport(0, 0, canvas.width, canvas.height);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    screenPass.draw(shaderScreen, { 
        'uTexture': sceneBuffer.texture
    }, null);

    requestAnimationFrame(draw);
}

requestAnimationFrame(draw);
