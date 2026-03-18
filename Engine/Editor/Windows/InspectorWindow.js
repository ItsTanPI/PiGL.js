import { EditorWindow } from './EditorWindow.js';

export class InspectorWindow extends EditorWindow {
    constructor(editor) {
        super(editor, 'Inspector');
        this.activeControls = [];
    }

    inspect(object) {
        this.folder.title = `Inspector: ${object.name || 'Object'}`;
        this.clear();

        const t = object.transform;
        
        this.addVector3(t.position, 'Position');
        // Rotation in Euler (Degrees for UI)
        // Note: internal rotation is radians. We need a proxy or conversion.
        // For simplicity, exposing raw radians for now, or just label as such.
        this.addVector3(t.rotation, 'Rotation (Rad)');
        this.addVector3(t.scale, 'Scale');
    }

    addVector3(target, label) {
        const sub = this.folder.addFolder(label);
        
        // Horizontal layout via lil-gui isn't default, so just stack them
        this.activeControls.push(sub.add(target, 'x').listen());
        this.activeControls.push(sub.add(target, 'y').listen());
        this.activeControls.push(sub.add(target, 'z').listen());
    }

    clear() {
        // Safely destroy all children by iterating backwards or while loop
        while (this.folder.children.length > 0) {
            this.folder.children[0].destroy();
        }
        this.activeControls = [];
    }
}
