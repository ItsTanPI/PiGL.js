import { Camera } from './Engine/Rendering/Camera.js';
import { Shader } from './Engine/Rendering/Shader.js';
import { Renderer } from './Engine/Rendering/Renderer.js';
import { Material } from './Engine/Rendering/Material.js';
import { RenderTarget } from './Engine/Rendering/RenderTarget.js';
import { FullScreenQuad } from './Engine/Rendering/FullScreenQuad.js';
import { GameObject } from './Engine/Core/GameObject.js';
import { Time } from './Engine/Core/TimeManager.js';

import vsSource from './Engine/shaders/quad.vert?raw';
import fsSource from './Engine/shaders/quad.frag?raw';
import ppVsSource from './Engine/shaders/quad_screen.vert?raw';
import ppFsSource from './Engine/shaders/quad_screen.frag?raw';

const canvas = document.getElementById('glcanvas');
const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');

if (!gl) {
    alert('Unable to initialize WebGL. Your browser might not support it.');
}

gl.enable(gl.BLEND);
gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
gl.enable(gl.DEPTH_TEST);
gl.depthFunc(gl.LEQUAL);

let sceneBuffer = new RenderTarget(gl, window.innerWidth, window.innerHeight);

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
    if (sceneBuffer) sceneBuffer.resize(canvas.width, canvas.height);
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();


const quadShader = new Shader(gl, vsSource, fsSource);
const ppShader = new Shader(gl, ppVsSource, ppFsSource); // Post Process Shader

const quadRenderer = new Renderer(gl);
const screenPass = new FullScreenQuad(gl);

const camera = new Camera();

// Create Materials
const playerMaterial = new Material(quadShader);
playerMaterial.setVec4('uColor', 0.0, 1.0, 0.5, 1.0); 

const player = new GameObject(quadRenderer, playerMaterial);
player.transform.position.set(0.0, 0.0, -1.0);
// player.color is removed, we use material

// Create Enemy Material
const enemyMaterial = new Material(quadShader);
enemyMaterial.setVec4('uColor', 1.0, 0.2, 0.2, 1.0);

const enemy = new GameObject(quadRenderer, enemyMaterial);
enemy.transform.position.set(-1.5, 0.5, -3.0);
enemy.transform.scale.set(0.5, 0.5, 1.0); 


function draw(now) {
    // Update the global Time singleton
    Time.update(now);

    // -----------------------------------------------------------
    // PASS 1: RENDER SCENE TO FRAMEBUFFER
    // -----------------------------------------------------------
    // Bind the offscreen buffer
    sceneBuffer.bind();

    // Clear the offscreen buffer
    gl.clearColor(0.2, 0.2, 0.2, 1.0); // Dark Gray background for scene
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    const aspect = sceneBuffer.width / sceneBuffer.height;
    camera.setPerspective(45 * Math.PI / 180, aspect, 0.1, 100.0);
    
    // Animate camera position and rotation based on total Time.time! 
    // camera.transform.position.x = Math.sin(Time.time) * 2; // move left/right
    // camera.transform.position.z = 5 + Math.cos(Time.time); // move forward/back
    // camera.transform.rotation.y = Math.sin(Time.time) * 0.2; // slight panning/twisting
    camera.updateView();

    // Update object Logic using Time.deltaTime for frame-rate independent rotation
    player.transform.rotation.z += 0.5 * Time.deltaTime; // continuously rotate parent along Z-axis
    enemy.transform.rotation.y += 2.0 * Time.deltaTime;  // continuously rotate child locally along Y-axis

    // Render Scene (rendering the parent only updates all parent transformations)
    // Pass the render target explicitly!
    player.render(camera, sceneBuffer);
    enemy.render(camera, sceneBuffer);
    
     // -----------------------------------------------------------
    // PASS 2: POST PROCESS / SCREEN OUTPUT
    // -----------------------------------------------------------
    
    // We can use screenPass.draw(shader, uniforms, target)
    // target = null means Screen
    screenPass.draw(ppShader, {
        'uTexture': sceneBuffer.texture,
        'uTime': Time.time,
        'uResolution': [canvas.width, canvas.height]
    }, null);

    requestAnimationFrame(draw);
}

requestAnimationFrame(draw);