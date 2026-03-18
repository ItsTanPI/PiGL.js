export class EditorWindow {
    constructor(editor, title) {
        this.editor = editor;
        this.title = title;
        this.folder = this.editor.gui.addFolder(title);
    }
    
    // Abstract method to override
    update() {}
}
