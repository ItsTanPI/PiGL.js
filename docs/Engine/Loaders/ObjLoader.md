# ObjLoader Class Documentation

## Function Overview

| Modifier | Signature | Description |
| :--- | :--- | :--- |
| static | load(gl, url) | Loads a .obj file from a URL and returns a Mesh. |
| static | parse(text) | Parses OBJ text content into WebGL buffer-ready arrays. |

## Overview

ObjLoader loads and parses Wavefront .obj model files into Mesh instances.
Provides static methods to load .obj files from URLs or parse raw OBJ text.
Supports vertices (v), texture coordinates (vt), normals (vn), and faces (f).
Automatically triangulates polygons and creates WebGL mesh buffers.

## Class Definition

**Namespace:** `Engine.Loaders`  
**Class:** `ObjLoader`

## Methods

### load

`static async load(gl, url)`

Loads a .obj file from a URL and returns a Mesh.
Fetches the file, parses it, and constructs buffers.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| gl | WebGLRenderingContext | The WebGL context. |
| url | string | URL to the .obj file. |

**Returns:**
- `Promise<Mesh>`: Promise resolving to a Mesh with loaded geometry.

### parse

`static parse(text)`

Parses OBJ text content into WebGL buffer-ready arrays.
Processes v, vt, vn, and f lines. Triangulates non-triangular faces using fan triangulation.
OBJ indices are 1-based and converted to 0-based for WebGL.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| text | string | Raw OBJ file content (plain text). |

**Returns:**
- `Object`: Object with keys: `positions`, `uvs`, `normals` (Float32Arrays), and `vertexCount`.
