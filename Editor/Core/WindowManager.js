export class WindowManager {
    constructor() {
        this.container = document.createElement('div');
        this.container.id = 'editor-ui-root';
        Object.assign(this.container.style, {
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
            zIndex: '9999',
            fontFamily: 'sans-serif'
        });
        document.body.appendChild(this.container);
    }

    createWindow(title, x, y, width, height) {
        const win = document.createElement('div');
        Object.assign(win.style, {
            position: 'absolute',
            left: `${x}px`,
            top: `${y}px`,
            width: `${width}px`,
            height: `${height}px`,
            backgroundColor: '#1a1a1a',
            border: '1px solid #333',
            display: 'flex',
            flexDirection: 'column',
            pointerEvents: 'auto',
            overflow: 'hidden',
            boxShadow: '0 4px 15px rgba(0,0,0,0.5)'
        });

        const header = document.createElement('div');
        header.innerText = title;
        Object.assign(header.style, {
            padding: '6px 10px',
            background: '#252525',
            color: '#ccc',
            fontSize: '11px',
            fontWeight: 'bold',
            cursor: 'move',
            userSelect: 'none',
            borderBottom: '1px solid #333',
            textTransform: 'uppercase'
        });

        const content = document.createElement('div');
        content.classList.add('window-content');
        Object.assign(content.style, {
            flex: '1',
            overflow: 'auto',
            background: '#111',
            position: 'relative',
            width: '100%',
            height: '100%'
        });

        const resizer = document.createElement('div');
        Object.assign(resizer.style, {
            width: '10px',
            height: '10px',
            background: '#444',
            position: 'absolute',
            right: '0',
            bottom: '0',
            cursor: 'nwse-resize',
            zIndex: '10'
        });

        win.appendChild(header);
        win.appendChild(content);
        win.appendChild(resizer);
        this.container.appendChild(win);

        this.addDragLogic(win, header);
        this.addResizeLogic(win, resizer);
        
        return content;
    }

    addResizeLogic(win, resizer) {
        let isResizing = false;
        let startWidth, startHeight, startX, startY;

        resizer.addEventListener('mousedown', (e) => {
            e.preventDefault();
            e.stopPropagation();
            isResizing = true;
            startX = e.clientX;
            startY = e.clientY;
            startWidth = win.offsetWidth;
            startHeight = win.offsetHeight;
            document.addEventListener('mousemove', onMove);
            document.addEventListener('mouseup', onUp);
        });

        const onMove = (e) => {
            if (!isResizing) return;
            const nw = startWidth + (e.clientX - startX);
            const nh = startHeight + (e.clientY - startY);
            if (nw > 100) win.style.width = nw + 'px';
            if (nh > 100) win.style.height = nh + 'px';
        };

        const onUp = () => {
            isResizing = false;
            document.removeEventListener('mousemove', onMove);
            document.removeEventListener('mouseup', onUp);
        };
    }

    addDragLogic(win, header) {
        let isDragging = false;
        let startX, startY, initialLeft, initialTop;

        header.addEventListener('mousedown', (e) => {
            isDragging = true;
            startX = e.clientX;
            startY = e.clientY;
            initialLeft = win.offsetLeft;
            initialTop = win.offsetTop;
            document.addEventListener('mousemove', onMove);
            document.addEventListener('mouseup', onUp);
            win.style.zIndex = '10000';
        });

        const onMove = (e) => {
            if (!isDragging) return;
            let nx = initialLeft + (e.clientX - startX);
            let ny = initialTop + (e.clientY - startY);
            
            // Simple snapping for docking simulation
            const snap = 20;
            if (nx < snap) nx = 0;
            if (ny < snap) ny = 0;
            if (Math.abs(window.innerWidth - (nx + win.offsetWidth)) < snap) nx = window.innerWidth - win.offsetWidth;
            if (Math.abs(window.innerHeight - (ny + win.offsetHeight)) < snap) ny = window.innerHeight - win.offsetHeight;

            win.style.left = nx + 'px';
            win.style.top = ny + 'px';
        };

        const onUp = () => {
            isDragging = false;
            document.removeEventListener('mousemove', onMove);
            document.removeEventListener('mouseup', onUp);
        };
    }
}
