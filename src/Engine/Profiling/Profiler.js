/**
 * Profiler collects frame timing and render pipeline metrics.
 * 
 * @class Profiler
 * @description Tracks frame time, CPU time, per-pass durations, and draw call counts.
 * Maintains a history of metrics for averaging/analysis. Enable/disable to control collection.
 */
export class Profiler {
    /**
     * Creates a new Profiler instance.
     * @constructor
     */
    constructor() {
        /** @type {boolean} Is profiling currently enabled? */
        this.enabled = false;
        /** @type {Object} Current frame metrics. */
        this.metrics = {
            startTime: 0,
            endTime: 0,
            frameTime: 0,
            cpuTime: 0,
            passes: [],
        };
        /** @type {number} Timestamp of last frame start (for FPS calculation). */
        this.lastFrameStart = 0;
        /** @type {number} Calculated frames per second. */
        this.fps = 0;
        
        /** @type {number[]} History of CPU times for averaging. */
        this.history = [];
        /** @type {number} Maximum entries to keep in history. */
        this.maxHistory = 60;
        /** @type {Object|null} Currently active pass being profiled. */
        this.currentPass = null;
    }

    /**
     * Enables profiling data collection.
     * @method enable
     * @returns {void}
     */
    enable() {
        this.enabled = true;
    }

    /**
     * Disables profiling and clears collected data.
     * @method disable
     * @returns {void}
     */
    disable() {
        this.enabled = false;
        this.metrics.passes = [];
    }

    /**
     * Marks the beginning of a frame. Call once per animation frame.
     * @method beginFrame
     * @returns {void}
     * @description Updates FPS calculation based on elapsed time since last beginFrame.
     */
    beginFrame() {
        if (!this.enabled) return;
        const now = performance.now();
        if (this.lastFrameStart > 0) {
            const delta = now - this.lastFrameStart;
            this.fps = 1000 / delta;
        }
        this.lastFrameStart = now;
        this.metrics.startTime = now;
        this.metrics.passes = [];
    }

    /**
     * Marks the end of a frame and records CPU time.
     * @method endFrame
     * @returns {void}
     */
    endFrame() {
        if (!this.enabled) return;
        this.metrics.endTime = performance.now();
        this.metrics.cpuTime = this.metrics.endTime - this.metrics.startTime;
        this.addToHistory(this.metrics.cpuTime);
    }

    /**
     * Marks the beginning of a render pass.
     * @method beginPass
     * @param {string} passName - Name/label for the pass (e.g., 'ObjectPass', 'LightingPass').
     * @returns {void}
     */
    beginPass(passName) {
        if (!this.enabled) return;
        const passMetric = {
            id: this.metrics.passes.length,
            name: passName,
            startTime: performance.now(),
            endTime: 0,
            duration: 0,
            drawCalls: []
        };
        this.metrics.passes.push(passMetric);
        this.currentPass = passMetric;
    }

    /**
     * Marks the end of the current render pass.
     * @method endPass
     * @returns {void}
     */
    endPass() {
        if (!this.enabled || !this.currentPass) return;
        this.currentPass.endTime = performance.now();
        this.currentPass.duration = this.currentPass.endTime - this.currentPass.startTime;
        this.currentPass = null;
    }

    /**
     * Records a single draw call in the current pass.
     * @method recordDrawCall
     * @param {string} objectName - Name of the drawn object.
     * @param {string} materialName - Name of the material used.
     * @param {number} shaderNum - Identifier for the shader program.
     * @param {number} startTime - Draw start timestamp (ms).
     * @param {number} endTime - Draw end timestamp (ms).
     * @returns {void}
     */
    recordDrawCall(objectName, materialName, shaderNum, startTime, endTime) {
        if (!this.enabled || !this.currentPass) return;
        this.currentPass.drawCalls.push({
            object: objectName,
            material: materialName,
            shader: shaderNum,
            duration: endTime - startTime
        });
    }

    addToHistory(time) {
        this.history.push(time);
        if (this.history.length > this.maxHistory) {
            this.history.shift();
        }
    }
}

export class ProfilerInstrumenter {
    static attach(renderQueue, renderer) {
        const profiler = new Profiler();
        
        // 1. Queue Instrumentation
        const originalExecute = renderQueue.execute.bind(renderQueue);
        renderQueue.execute = function(rendererCtx, scene, camera) {
            if (profiler.enabled) profiler.beginFrame();
            
            // Loop passes to instrument them if new
            // We check this every frame to catch new dynamic passes
            const passes = renderQueue.passes || [];
            for (let i = 0; i < passes.length; i++) {
                const pass = passes[i];
                if (!pass.__profilerInstrumented) {
                    const originalPassExecute = pass.execute.bind(pass);
                    const passName = pass.constructor.name;
                    
                    pass.execute = function(r, s, c) {
                        if (profiler.enabled) profiler.beginPass(passName);
                        originalPassExecute(r, s, c);
                        if (profiler.enabled) profiler.endPass();
                    };
                    
                    pass.__profilerInstrumented = true;
                }
            }
            
            originalExecute(rendererCtx, scene, camera);
            
            if (profiler.enabled) profiler.endFrame();
        };

        // 2. Renderer Draw Instrumentation
        const originalDraw = renderer.draw.bind(renderer);
        renderer.draw = function(gameObject, camera, target, material) {
            const t0 = performance.now();
            originalDraw(gameObject, camera, target, material);
            const t1 = performance.now();
            
            if (profiler.enabled) {
                const objName = gameObject ? gameObject.name : 'Unknown';
                const matName = material ? material.name : 'Unknown';
                profiler.recordDrawCall(objName, matName, 0, t0, t1);
            }
        };

        // Default disabled to save performance
        profiler.disable();
        return profiler;
    }
}
