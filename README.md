# PiGL.js

A custom WebGL rendering engine and editor built from scratch using vanilla JavaScript and GLSL. This project demonstrates a component-based architecture with a focus on multipass rendering and post-processing effects.

## Demo

[View Live Demo](https://itstanpi.github.io/PiGL.js/)

## Description

PiGL.js is a lightweight 3D engine that implements a custom rendering pipeline. It supports standard 3D features like model loading and lighting, but its core strength lies in its flexible render pass system, allowing for complex visual effects like pixel art stylization, outlines, and water rendering. The project includes a built-in visual editor for inspecting the scene and profiling performance.

I honestly just made this project because I was bored and wanted to mess around with graphics programming for a bit.

## Features

### Engine
- **Custom WebGL Renderer**: Built on raw WebGL API without external 3D libraries.
- **Render Pass System**: Modular pipeline for chaining render effects.
    - Lighting Pass
    - Skybox Rendering
    - Outline Effect (Post-processing)
    - Pixel Art / Dithering Effect
    - Water Rendering
- **Component System**: GameObject and Transform hierarchy.
- **Asset Management**: OBJ model loader and Texture handling.
- **Shadow Mapping**: Real-time shadow casting.
- **Camera System**: First-person camera controller.

### Editor
- **In-Browser Editor UI**: Windows system for managing tools.
- **Hierarchy Window**: View and select objects in the scene.
- **Inspector Window**: Modify object properties and transforms.
- **Material Editor**: Adjust shader uniforms and material properties in real-time.
- **Profiler**: Real-time monitoring of CPU/GPU frame times and draw calls.
- **Render Pass Debugger**: Toggle and inspect individual render passes.

## Documentation

Detailed API documentation for the engine and editor classes can be found in the [docs/](./docs/) directory.

### Architecture

The engine is split into two main parts: the Core Engine and the Editor.

**Core Engine**
- `GameObject`: The base entity class containing a Mesh, Material, and Transform.
- `Renderer`: Handles the WebGL context and executing the render queue.
- `RenderPass`: Base class for creating custom rendering steps.

### Render Pipeline

The rendering process is defined by a stack of passes. To add a new effect:
1. Create a class extending `RenderPass`.
2. Implement the `render()` method.
3. Add the pass to the `Renderer`.

### Shader System

Shaders are loaded as raw strings (via Vite) and compiled at runtime. The engine supports standard shader features including:
- Vertex/Fragment shaders
- Uniform management
- Texture samplers


## Development
- **Acknowledgment**: System architecture and engineering designed by Me(TanPi), with coding & docs assistance from AI under proper reviewing and supervision.

## Installation

To run this project locally:

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Build for production:
   ```bash
   npm run build
   ```

## Usage as a Library

You can use PiGL.js as a standalone app or as a library in your own projects.

### As a Library

To build the library:

```bash
npm run build:lib
```

This will generate `dist/pigl.umd.js` and `dist/pigl.es.js`.

#### Importing

- For ES Modules:
  ```js
  import { Renderer, Editor, LightingPass } from 'pigl';
  ```
- For UMD (browser):
  ```html
  <script src="dist/pigl.umd.js"></script>
  <script>
    const { Renderer, Editor, LightingPass } = window.PiGL;
  </script>
  ```

All engine, editor, passes, and utility modules are exported from the library entry point.

### As an App

You can continue to use the project as a standalone app with:

```bash
npm run dev
```

or build for deployment with:

```bash
npm run build
```

## Controls

- **WASD**: Move Camera
- **Mouse**: Look around
- **Editor UI**: Interacting with windows to change scene settings.

## Credits

- **3D Model**: [Lowpoly Island](https://sketchfab.com/3d-models/lowpoly-island-0a514854b7164178a6c7a69961235197) by the respective artist on Sketchfab.
