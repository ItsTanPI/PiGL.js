import { EditorWindow } from './EditorWindow.js';

export class HierarchyWindow extends EditorWindow {
    constructor(editor) {
        super(editor, 'Scene Hierarchy');
        this.refresh();
    }

    refresh() {
        // Clear existing children
        this.folder.children.forEach(c => c.destroy());
        
        const objects = this.editor.getSceneObjects();

        for (const obj of objects) {
            const name = obj.name || 'GameObject';
            const btn = { [name]: () => this.editor.selectObject(obj) };
            this.folder.add(btn, name);
        }
    }
}
