/**
 * CameraController provides first-person camera movement using WASD keyboard and right-click mouse look.
 * 
 * @class CameraController
 * @description Attaches to a Camera and listens for input events to manipulate its transform.
 * Supports WASD for forward/left/backward/right, Q/E for up/down vertical, and right-mouse drag for look.
 */
export class CameraController {
    /**
     * Creates a new camera controller.
     * 
     * @constructor
     * @param {Camera} camera - The camera to control.
     * @param {HTMLElement} domElement - The DOM element to listen for input events (usually canvas).
     */
    constructor(camera, domElement) {
        /** @type {Camera} */
        this.camera = camera;
        /** @type {HTMLElement} */
        this.domElement = domElement;
        
        /** @type {number} Movement speed multiplier (units per second). */
        this.moveSpeed = 10.0;
        /** @type {number} Mouse look sensitivity (radians per pixel). */
        this.mouseSensitivity = 0.002;
        
        /** @type {Object<string, boolean>} Tracks pressed keys: w, a, s, d, q, e. */
        this.keys = {
            w: false, a: false, s: false, d: false,
            q: false, e: false
        };
        
        /** @type {Object} Mouse tracking state. */
        this.mouse = {
            x: 0, y: 0,
            lastX: 0, lastY: 0,
            isDown: false
        };

        // Sync initial rotation
        /** @type {Object} Current rotation: x (pitch), y (yaw). */
        this.rotation = {
            x: camera.transform.rotation.x,
            y: camera.transform.rotation.y
        };

        this._initEvents();
    }

    _initEvents() {
        window.addEventListener('keydown', (e) => this._onKey(e, true));
        window.addEventListener('keyup', (e) => this._onKey(e, false));

        this.domElement.addEventListener('mousedown', (e) => {
            if (e.button === 2) { // Right click
                this.mouse.isDown = true;
                this.mouse.lastX = e.clientX;
                this.mouse.lastY = e.clientY;
                // e.preventDefault();
            }
        });

        window.addEventListener('mouseup', (e) => {
            if (e.button === 2) {
                this.mouse.isDown = false;
            }
        });

        window.addEventListener('mousemove', (e) => {
            if (!this.mouse.isDown) return;
            
            const dx = e.clientX - this.mouse.lastX;
            const dy = e.clientY - this.mouse.lastY;
            
            this.mouse.lastX = e.clientX;
            this.mouse.lastY = e.clientY;

            // Yaw (Y-axis) - Left/Right
            this.rotation.y -= dx * this.mouseSensitivity;
            
            // Pitch (X-axis) - Up/Down
            this.rotation.x -= dy * this.mouseSensitivity;
            
            // Clamp pitch to avoid flipping
            const limit = Math.PI / 2 - 0.01;
            this.rotation.x = Math.max(-limit, Math.min(limit, this.rotation.x));

            this.camera.transform.rotation.x = this.rotation.x;
            this.camera.transform.rotation.y = this.rotation.y;
        });

        // Prevent context menu
        this.domElement.addEventListener('contextmenu', e => e.preventDefault());
    }

    _onKey(e, isDown) {
        const key = e.key.toLowerCase();
        if (this.keys.hasOwnProperty(key)) {
            this.keys[key] = isDown;
        }
    }

    /**
     * Updates camera transform based on input events.
     * 
     * @method update
     * @param {number} dt - Delta time in seconds since last frame.
     * @returns {void}
     * 
     * @description Must be called each frame. Applies accumulated key presses and mouse look
     * to the camera transform. Position changes use Time.deltaTime internally.
     */
    update(dt) {
        const speed = this.moveSpeed * dt;
        const transform = this.camera.transform;
        
        // Calculate Forward and Right vectors from Yaw (Y rotation)
        // Standard WebGL/OpenGL: -Z is forward, +Y is up, +X is right
        // Rotation Y 0 means looking at -Z
        
        const sinY = Math.sin(transform.rotation.y);
        const cosY = Math.cos(transform.rotation.y);

        // Forward on XZ plane
        // if rotY=0, forward is (0,0,-1). sin0=0, cos0=1. 
        // forwardX = -sin(0) = 0. forwardZ = -cos(0) = -1. Correct.
        const forwardX = -sinY;
        const forwardZ = -cosY;

        // Right vector on XZ plane
        // if rotY=0, right is (1,0,0). 
        // rightX = cos(0) = 1. rightZ = -sin(0) = 0. Correct.
        const rightX = cosY;
        const rightZ = -sinY;

        let mx = 0; // Strafe
        let mz = 0; // Forward/Back
        let my = 0; // Up/Down

        if (this.keys.w) mz += 1;
        if (this.keys.s) mz -= 1;
        if (this.keys.a) mx -= 1;
        if (this.keys.d) mx += 1;
        if (this.keys.q) my += 1; 
        if (this.keys.e) my -= 1;

        // Normalize vector if moving diagonally
        if (mx !== 0 || mz !== 0) {
            // Simple normalization for plane movement
            const len = Math.sqrt(mx*mx + mz*mz);
            mx /= len;
            mz /= len;
        }

        transform.position.x += (forwardX * mz + rightX * mx) * speed;
        transform.position.z += (forwardZ * mz + rightZ * mx) * speed;
        transform.position.y += my * speed;
    }
}
