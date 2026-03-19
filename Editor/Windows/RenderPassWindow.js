import GUI from 'lil-gui';

export class RenderPassWindow {
    constructor(editor, container) {
        this.editor = editor;
        this.container = container;
        this.gui = new GUI({ 
            container: container, 
            title: 'Render Passes', 
            touchEventTarget: container,
            autoPlace: false
        });

        // Ensure lil-gui fills the container
        this.gui.domElement.style.width = '100%';
        this.gui.domElement.style.height = 'auto';

        this.init();
    }

    init() {
        this.refresh();
        // Periodically refresh stats like draw calls
        setInterval(() => this.updateStats(), 1000);
    }

    refresh() {
        // Clear all
        const children = [...this.gui.children];
        children.forEach(c => c.destroy());

        const queue = this.editor.game.renderQueue;
        if (!queue || !queue.passes) return;

        queue.passes.forEach((pass, index) => {
            const folder = this.gui.addFolder(`${index}: ${pass.name || 'Pass'}`);
            
            // Enabled/Active
            folder.add(pass, 'enabled').name('Active');
            
            // Draw Count (Read Only)
            folder.add(pass, 'drawCount').name('Draw Calls').disable().listen();

            // Clear Color (if exists)
            if (pass.clearColor) {
                const proxy = {
                    get color() { return [pass.clearColor[0], pass.clearColor[1], pass.clearColor[2]]; },
                    set color(v) { 
                        pass.clearColor[0] = v[0]; 
                        pass.clearColor[1] = v[1]; 
                        pass.clearColor[2] = v[2]; 
                    }
                };
                folder.addColor(proxy, 'color').name('Clear Color');
            }

            // Target Info
            if (pass.renderTarget) {
                folder.add({ info: `${pass.renderTarget.width}x${pass.renderTarget.height}` }, 'info').name('Resolution').disable();
            } else {
                folder.add({ info: 'Screen' }, 'info').name('Target').disable();
            }

            // Material Link
            if (pass.material) {
                folder.add({ select: () => {
                    if (this.editor.windows.material) {
                        this.editor.windows.material.inspect(pass.material);
                    }
                }}, 'select').name('Inspect Material');
            }

            // Draw Details Toggle
            const detailsProxy = { show: false };
            const detailsFolder = folder.addFolder('Performance Details');
            detailsFolder.add(detailsProxy, 'show').name('List Draw Calls').onChange((val) => {
                if (val) this.showDetails(detailsFolder, pass);
                else this.clearDetails(detailsFolder);
            });
        });
    }

    showDetails(folder, pass) {
        this.clearDetails(folder);
        if (!pass.drawDetails || pass.drawDetails.length === 0) {
            folder.add({ info: 'No draw calls' }, 'info').name('Status').disable();
            return;
        }

        pass.drawDetails.forEach((dc, i) => {
            const dcFolder = folder.addFolder(`Draw ${i}: ${dc.object}`);
            dcFolder.add(dc, 'material').name('Material').disable();
            dcFolder.add(dc, 'shader').name('Shader').disable();
            dcFolder.add(dc, 'target').name('Target').disable();
        });
    }

    clearDetails(folder) {
        const children = [...folder.children];
        children.forEach(c => {
            if (c.property !== 'show') c.destroy();
        });
    }

    updateStats() {
        // This relies on lil-gui's .listen() on the controllers
    }
}
