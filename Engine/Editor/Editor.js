import { HierarchyWindow } from './Windows/HierarchyWindow.js';
import { InspectorWindow } from './Windows/InspectorWindow.js';
import { MaterialWindow } from './Windows/MaterialWindow.js';
import { RenderPassWindow } from './Windows/RenderPassWindow.js';
import GUI from 'lil-gui';

export class Editor {
    constructor(game) {
        this.game = game;
        this.gui = new GUI({ title: 'Editor' });
        
        // Window system
        this.windows = {
            renderPass: new RenderPassWindow(this),
            hierarchy: new HierarchyWindow(this),
            inspector: new InspectorWindow(this),
            materials: new MaterialWindow(this)
        };
        
        this.selectedObject = null;
    }

    getSceneObjects() {
        const objs = [];
        if (this.game.cubeObj) objs.push(this.game.cubeObj);
        if (this.game.floorObj) objs.push(this.game.floorObj);
        if (this.game.camera) objs.push(this.game.camera);
        return objs;
    }

    selectObject(obj) {
        this.selectedObject = obj;
        this.windows.inspector.inspect(obj);
    }
}

