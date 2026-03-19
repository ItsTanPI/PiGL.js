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
        // Hierarchy Window
        const hierarchyContent = this.wm.createWindow('Hierarchy', 20, 20, 250, 400);
        this.windows.hierarchy = new HierarchyWindow(this, hierarchyContent);

        // Inspector Window
        const inspectorContent = this.wm.createWindow('Inspector', 290, 20, 320, 500);
        this.windows.inspector = new InspectorWindow(this, inspectorContent);

        // Material Window
        const materialContent = this.wm.createWindow('Materials', 630, 20, 320, 500);
        this.windows.material = new MaterialWindow(this, materialContent);

        // Render Pass Window
        const renderPassContent = this.wm.createWindow('Render Passes', 970, 20, 320, 500);
        this.windows.renderPass = new RenderPassWindow(this, renderPassContent);

        // Profiler Window
        const profilerContent = this.wm.createWindow('Profiler', 20, 440, 250, 250);
        this.windows.profiler = new ProfilerWindow(this, profilerContent);
    }

    selectObject(object) {
        this.windows.inspector.inspect(object);
    }

    update() {
        // Handled by lil-gui and window manager
    }
}

