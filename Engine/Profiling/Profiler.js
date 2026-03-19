export class Profiler {
    constructor() {
        this.enabled = false;
        this.metrics = {
            startTime: 0,
            endTime: 0,
            frameTime: 0,
            cpuTime: 0,
            passes: [],
        };
        this.lastFrameStart = 0;
        this.fps = 0;
        
        this.history = [];
        this.maxHistory = 60;
        this.currentPass = null;
    }

    enable() {
        this.enabled = true;
    }

    disable() {
        this.enabled = false;
        this.metrics.passes = []; // Clear data
    }

    beginFrame() {
        if (!this.enabled) return;
        const now = performance.now();
        // FPS Calc relative to last beginFrame (Real frametime including wait)
        if (this.lastFrameStart > 0) {
            const delta = now - this.lastFrameStart;
            this.fps = 1000 / delta;
        }
        this.lastFrameStart = now;

        this.metrics.startTime = now;
        this.metrics.passes = [];
    }

    endFrame() {
        if (!this.enabled) return;
        this.metrics.endTime = performance.now();
        this.metrics.cpuTime = this.metrics.endTime - this.metrics.startTime;
        this.addToHistory(this.metrics.cpuTime);
    }

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

    endPass() {
        if (!this.enabled || !this.currentPass) return;
        this.currentPass.endTime = performance.now();
        this.currentPass.duration = this.currentPass.endTime - this.currentPass.startTime;
        this.currentPass = null;
    }

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
