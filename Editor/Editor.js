import { WindowManager } from './Core/WindowManager.js';
import { HierarchyWindow } from './Windows/HierarchyWindow.js';
import { InspectorWindow } from './Windows/InspectorWindow.js';
import { MaterialWindow } from './Windows/MaterialWindow.js';
import { RenderPassWindow } from './Windows/RenderPassWindow.js';
import { ProfilerWindow } from './Windows/ProfilerWindow.js';

export class Editor {
    constructor(game) {
        this.game = game;
        this.wm = new WindowManager();
        this.windows = {};

        this.initWindows();
    }

    initWindows() {
        // Create and hide all windows by default except for the Navigation Bar
        const hierarchyResult = this.wm.createWindow('Hierarchy', 20, 20, 250, 400);
        this.windows.hierarchy = new HierarchyWindow(this, hierarchyResult.content);
        this.wm.addNavItem('HIERARCHY', hierarchyResult.window);
        hierarchyResult.window.style.display = 'none';

        // Inspector Window
        const inspectorResult = this.wm.createWindow('Inspector', 290, 20, 320, 500);
        this.windows.inspector = new InspectorWindow(this, inspectorResult.content);
        this.wm.addNavItem('INSPECTOR', inspectorResult.window);
        inspectorResult.window.style.display = 'none';

        // Material Window
        const materialResult = this.wm.createWindow('Materials', 630, 20, 320, 500);
        this.windows.material = new MaterialWindow(this, materialResult.content);
        this.wm.addNavItem('MATERIALS', materialResult.window);
        materialResult.window.style.display = 'none';

        // Render Pass Window
        const renderPassResult = this.wm.createWindow('Render Passes', 970, 20, 320, 500);
        this.windows.renderPass = new RenderPassWindow(this, renderPassResult.content);
        this.wm.addNavItem('PASSES', renderPassResult.window);
        renderPassResult.window.style.display = 'none';

        // Profiler Window
        const profilerResult = this.wm.createWindow('Profiler', 20, 440, 250, 250);
        this.windows.profiler = new ProfilerWindow(this, profilerResult.content);
        this.wm.addNavItem('PROFILER', profilerResult.window);
        profilerResult.window.style.display = 'none';

        // Render Output Selector (Viewport)
        const passes = ['Final', 'Scene', 'Depth', 'Normal'];
        this.wm.addNavSelect(passes, (mode) => {
            this.game.setViewports(mode);
        });

        this.setupShortcuts();
    }

    setupShortcuts() {
        window.addEventListener('keydown', (e) => {
            if (e.key.toLowerCase() === 'h') {
                this.wm.toggleVisibility();
            }
        });
    }

    selectObject(object) {
        this.windows.inspector.inspect(object);
    }

    update() {
        // Handled by lil-gui and window manager
    }
}

