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
            fps: 0,
            ms: 0,
            totalDrawCalls: 0,
            totalPasses: 0
        };

        this.init();
    }

    init() {
        this.gui.add(this.stats, 'fps').name('FPS').disable().listen();
        this.gui.add(this.stats, 'ms').name('Frame Time (ms)').disable().listen();
        this.gui.add(this.stats, 'totalDrawCalls').name('Total Draw Calls').disable().listen();
        this.gui.add(this.stats, 'totalPasses').name('Total Passes').disable().listen();

        // Pass-specific stats folder
        this.passesFolder = this.gui.addFolder('Pass Performance');
        
        // Add toggle to see details
        this.showPassDetails = false;
        this.passesFolder.add(this, 'showPassDetails').name('Show Details').onChange(() => this.rebuildPassFolders());

        // Update stats every 500ms
        setInterval(() => this.update(), 500);
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
                folder.add(pass, 'enabled').name('Active').disable().listen();
            });
        }
    }

    update() {
        const game = this.editor.game;
        if (!game) return;

        // Basic Frame Stats
        // Note: Real FPS/MS should be calculated in TimeManager or Loop, 
        // but we can pull from Time or calc simple delta here.
        this.stats.fps = Math.round(1 / (this.editor.game.deltaTime || 0.016));
        this.stats.ms = ((this.editor.game.deltaTime || 0.016) * 1000).toFixed(2);
        
        let totalDC = 0;
        if (game.renderQueue && game.renderQueue.passes) {
            this.stats.totalPasses = game.renderQueue.passes.length;
            
            // Clear and rebuild pass folder stats periodically or just update values
            // For simplicity in lil-gui, we check if we need to add new folders
            game.renderQueue.passes.forEach(pass => {
                totalDC += pass.drawCount || 0;
            });
        }
        this.stats.totalDrawCalls = totalDC;

        // Dynamically update pass folders if they don't exist
        game.renderQueue.passes.forEach(pass => {
            const label = `${pass.name}: ${pass.drawCount} DC`;
            // We can't easily update label names in lil-gui without keeping refs,
            // so we just rely on total dc for now or recreate if needed.
        });
    }
}
