import GUI from 'lil-gui';

export class ProfilerWindow {
    constructor(editor, container) {
        this.editor = editor;
        this.container = container;
        this.gui = new GUI({ 
            container: container, 
            title: 'Engine Profiler', 
            touchEventTarget: container,
            autoPlace: false
        });

        // Ensure lil-gui fills the container
        this.gui.domElement.style.width = '100%';
        this.gui.domElement.style.height = 'auto';

        this.stats = {
            enabled: true,
            fps: 0,
            avgFps: 0,
            fps1Low: 0,
            fps1High: 0,
            ms: 0,
            gpuTotal: 0,
            totalDrawCalls: 0,
            totalPasses: 0,
            totalVertices: 0,
            approxMemory: '0 MB',
            pieMode: 'Average',
            avgFrames: 60
        };

        this.graphCanvas = document.createElement('canvas');
        this.graphCanvas.style.width = '100%';
        this.graphCanvas.style.height = '150px';
        this.graphCanvas.style.background = '#222';
        this.graphCanvas.style.marginTop = '5px';
        this.container.appendChild(this.graphCanvas);

        this.frameTimeCanvas = document.createElement('canvas');
        this.frameTimeCanvas.style.width = '100%';
        this.frameTimeCanvas.style.height = '100px';
        this.frameTimeCanvas.style.background = '#222';
        this.frameTimeCanvas.style.marginTop = '5px';
        this.container.appendChild(this.frameTimeCanvas);

        this.init();
    }

    init() {
        const game = this.editor.game;
        
        this.gui.add(this.stats, 'enabled').name('Enable Profiling').onChange(v => {
            if (game && game.profiler) {
                if (v) game.profiler.enable();
                else game.profiler.disable();
            }
        });

        this.gui.add(this.stats, 'fps').name('FPS').disable().listen();
        this.gui.add(this.stats, 'avgFps').name('Avg FPS').disable().listen();
        this.gui.add(this.stats, 'fps1Low').name('1% Low FPS').disable().listen();
        this.gui.add(this.stats, 'fps1High').name('1% High FPS').disable().listen();
        this.gui.add(this.stats, 'ms').name('Frame Time (ms)').disable().listen();
        this.gui.add(this.stats, 'gpuTotal').name('GPU Time (est ms)').disable().listen();
        this.gui.add(this.stats, 'totalDrawCalls').name('Total Draw Calls').disable().listen();
        this.gui.add(this.stats, 'totalPasses').name('Total Passes').disable().listen();
        this.gui.add(this.stats, 'totalVertices').name('Total Vertices').disable().listen();
        this.gui.add(this.stats, 'approxMemory').name('Pass Mesh Mem').disable().listen();

        // Control for pie chart mode
        this.gui.add(this.stats, 'pieMode', ['Current Frame', 'Average']).name('Graph Mode');
        this.gui.add(this.stats, 'avgFrames', 10, 300).step(10).name('Avg Sample Count');

        // Pass-specific stats folder
        this.passesFolder = this.gui.addFolder('Pass Performance');
        
        // Add toggle to see details
        this.showPassDetails = false;
        this.passesFolder.add(this, 'showPassDetails').name('Show Details').onChange(() => this.rebuildPassFolders());

        // Update stats and draw graph
        setInterval(() => {
            this.update();
            this.drawGraph();
            this.drawFrameTimeGraph();
        }, 100);
    }

    drawFrameTimeGraph() {
        const ctx = this.frameTimeCanvas.getContext('2d');
        const profiler = this.editor.game.profiler;
        if (!profiler || !profiler.enabled || !profiler.frameTimeHistory) return;

        this.frameTimeCanvas.width = this.frameTimeCanvas.clientWidth;
        this.frameTimeCanvas.height = this.frameTimeCanvas.clientHeight;
        const w = this.frameTimeCanvas.width;
        const h = this.frameTimeCanvas.height;
        ctx.clearRect(0, 0, w, h);

        const count = Math.min(profiler.frameTimeHistory.length, this.stats.avgFrames);
        if (count < 2) return;

        const data = [];
        for (let i = profiler.frameTimeHistory.length - count; i < profiler.frameTimeHistory.length; i++) {
            data.push(profiler.frameTimeHistory[i]);
        }

        // Draw line graph
        let min = 0
        let max = 100
        if (max - min < 5) {
            min = Math.max(0, min - 5);
            max += 5;
        }
        const range = max - min || 1;

        ctx.beginPath();
        ctx.strokeStyle = '#4363d8'; // Blue line
        ctx.lineWidth = 1.5;
        for (let i = 0; i < data.length; i++) {
            const x = (i / (data.length - 1)) * w;
            const y = h - ((data[i] - min) / range) * h * 0.8 - h * 0.1; // padding 10% bottom/top
            if (i === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
        }
        ctx.stroke();

        // draw min/max labels
        ctx.fillStyle = '#fff';
        ctx.font = '10px monospace';
        ctx.textAlign = 'left';
        
        ctx.textBaseline = 'top';
        ctx.fillText(`Max: ${max.toFixed(1)}ms`, 5, 5);
        ctx.textBaseline = 'bottom';
        ctx.fillText(`Min: ${min.toFixed(1)}ms`, 5, h - 5);
        
        ctx.textAlign = 'right';
        ctx.textBaseline = 'top';
        ctx.fillText(`Delta time: ${data[count-1].toFixed(2)}`, w - 5, 5);
    }

    drawGraph() {
        const ctx = this.graphCanvas.getContext('2d');
        const profiler = this.editor.game.profiler;
        if (!profiler || !profiler.enabled) return;

        // Sync canvas resolution
        this.graphCanvas.width = this.graphCanvas.clientWidth;
        this.graphCanvas.height = this.graphCanvas.clientHeight;

        const w = this.graphCanvas.width;
        const h = this.graphCanvas.height;
        ctx.clearRect(0, 0, w, h);

        if (!profiler.metrics || !profiler.metrics.passes || profiler.metrics.passes.length === 0) return;

        const colors = ['#e6194B', '#3cb44b', '#ffe119', '#4363d8', '#f58231', '#911eb4', '#46f0f0', '#f032e6'];
        
        let passData = [];
        let totalGPU = 0;

        if (this.stats.pieMode === 'Average') {
            let passIdx = 0;
            const sampleCount = this.stats.avgFrames;
            for (const pName in profiler.passHistory) {
                const hist = profiler.passHistory[pName];
                if (hist.length > 0) {
                    let sum = 0;
                    // Take up to `sampleCount` recent frames
                    let count = Math.min(hist.length, sampleCount);
                    for(let k = hist.length - count; k < hist.length; k++) sum += hist[k];
                    
                    const avg = sum / count;
                    passData.push({ name: pName, duration: avg, color: colors[passIdx % colors.length]});
                    totalGPU += avg;
                }
                passIdx++;
            }
        } else {
            profiler.metrics.passes.forEach((p, i) => {
                passData.push({ name: p.name, duration: p.duration, color: colors[i % colors.length] });
                totalGPU += p.duration;
            });
        }

        if (totalGPU <= 0) return;

        const centerX = w * 0.3;
        const centerY = h / 2;
        const radius = Math.max(0, Math.min(centerX, centerY) - 10);

        if (radius <= 0) return;

        let currentAngle = -0.5 * Math.PI; // Start at top

        // Draw Pie Chart
        passData.forEach((pass) => {
            if (pass.duration <= 0) return;
            const sliceAngle = (pass.duration / totalGPU) * 2 * Math.PI;
            ctx.beginPath();
            ctx.moveTo(centerX, centerY);
            ctx.arc(centerX, centerY, radius, currentAngle, currentAngle + sliceAngle);
            ctx.closePath();
            
            ctx.fillStyle = pass.color;
            ctx.fill();
            
            // Text Label on Slice (if big enough)
            if (sliceAngle > 0.3) {
                const labelAngle = currentAngle + sliceAngle / 2;
                const labelX = centerX + Math.cos(labelAngle) * (radius * 0.6);
                const labelY = centerY + Math.sin(labelAngle) * (radius * 0.6);
                ctx.fillStyle = '#000';
                ctx.font = '10px bold sans-serif';
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                const passShort = pass.name.replace('Pass', '').substring(0, 6);
                ctx.fillText(passShort, labelX, labelY);
            }

            currentAngle += sliceAngle;
        });

        // Draw Legend
        const legendX = centerX + radius + 20;
        let legendY = 20;
        const lineH = 16;
        
        ctx.textAlign = 'left';
        ctx.font = '10px monospace';
        passData.forEach((pass) => {
            // Color box
            ctx.fillStyle = pass.color;
            ctx.fillRect(legendX, legendY - 8, 10, 10);
            
            // Text
            ctx.fillStyle = '#fff';
            const pct = ((pass.duration / totalGPU) * 100).toFixed(1);
            ctx.fillText(`${pass.name.substring(0,10)}: ${pass.duration.toFixed(2)}ms (${pct}%)`, legendX + 15, legendY);
            
            legendY += lineH;
        });
    }

    rebuildPassFolders() {
        // Clear pass folder
        const children = [...this.passesFolder.children];
        children.forEach(c => {
            if (c.property !== 'showPassDetails') c.destroy();
        });

        if (!this.showPassDetails) return;

        const game = this.editor.game;
        if (game.renderQueue && game.renderQueue.passes) {
            game.renderQueue.passes.forEach(pass => {
                const folder = this.passesFolder.addFolder(pass.name || 'Pass');
                folder.add(pass, 'drawCount').name('Draw Calls').disable().listen();
                folder.add(pass, 'executionTime').name('Perf (ms)').disable().listen();
                folder.add(pass, 'enabled').name('Active').disable().listen();
            });
        }
    }

    update() {
        const game = this.editor.game;
        if (!game) return;

        const profiler = game.profiler;
        if (!profiler) return;

        this.stats.fps = Math.round(profiler.fps || 0);

        if (profiler.fpsHistory && profiler.fpsHistory.length > 0) {
            let sumFps = 0;
            let countFps = Math.min(profiler.fpsHistory.length, this.stats.avgFrames);
            let sampleSet = [];
            for (let i = profiler.fpsHistory.length - countFps; i < profiler.fpsHistory.length; i++) {
                sumFps += profiler.fpsHistory[i];
                sampleSet.push(profiler.fpsHistory[i]);
            }
            this.stats.avgFps = Math.round(sumFps / countFps);

            sampleSet.sort((a, b) => a - b);
            let p1LowIdx = Math.floor(sampleSet.length * 0.01);
            let p1HighIdx = Math.floor(sampleSet.length * 0.99);
            if (p1HighIdx >= sampleSet.length) p1HighIdx = sampleSet.length - 1;
            
            this.stats.fps1Low = Math.round(sampleSet[p1LowIdx] || this.stats.fps);
            this.stats.fps1High = Math.round(sampleSet[p1HighIdx] || this.stats.fps);
        } else {
            this.stats.avgFps = this.stats.fps;
            this.stats.fps1Low = this.stats.fps;
            this.stats.fps1High = this.stats.fps;
        }

        this.stats.ms = (profiler.metrics.cpuTime || 0).toFixed(2);
        
        let totalDC = 0;
        let gpuTime = 0;
        let totalVerts = 0;

        if (profiler.metrics && profiler.metrics.passes) {
            this.stats.totalPasses = profiler.metrics.passes.length;
            profiler.metrics.passes.forEach(pass => {
                totalDC += pass.drawCalls.length;
                gpuTime += pass.duration;
                pass.drawCalls.forEach(dc => totalVerts += (dc.vertices || 0));
            });
        }
        this.stats.totalDrawCalls = totalDC;
        this.stats.totalVertices = totalVerts;
        this.stats.gpuTotal = gpuTime.toFixed(3);
        // Approx 32 bytes per vertex (pos+uv+norm) + maybe indices
        // Just a rough estimate for the rendered meshes in this frame
        this.stats.approxMemory = ((totalVerts * 32) / (1024 * 1024)).toFixed(2) + ' MB';

        if (this.showPassDetails) {
            // Update individual folder labels if they are open
            // (lil-gui doesn't support easy dynamic folder title updates, 
            // but we can update the items inside)
        }
    }
}
