import { EditorWindow } from './EditorWindow.js';

export class RenderPassWindow extends EditorWindow {
    constructor(editor) {
        super(editor, 'Render Passes');
        
        this.passes = [
            'Scene',
            'Depth',
            'Normal',
            'Generic_Outline' // Using the material name or pass name
        ];
        
        this.data = {
            activePass: 'Generic_Outline' // Default
        };

        this.folder.add(this.data, 'activePass', this.passes)
            .name('Final Output')
            .onChange(v => {
                this.editor.game.setActivePass(v);
            });
    }
}
