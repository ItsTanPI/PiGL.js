# Mesh Class Documentation

## Function Overview

| Modifier | Signature | Description |
| :--- | :--- | :--- |
| public | constructor(gl, vertices, uvs, normals, indices) | Creates a new Mesh. |
| public | bind(shader) | Binds all vertex buffers and enables attributes for a shader. |
| public | draw() | Issues a draw call for this mesh. |

## Overview

Mesh holds vertex, uv, and normal buffers plus optional indices for indexed rendering.
Manages GPU buffers for vertex data (position, UV, normal). Provides
`bind()` to setup vertex attributes and `draw()` to issue draw calls. A Mesh represents
the geometry of a GameObject.

## Class Definition

**Namespace:** `Engine.Rendering`  
**Class:** `Mesh`

## Properties

| Name | Type | Description |
| :--- | :--- | :--- |
| gl | WebGLRenderingContext | The WebGL context. |
| vertices | Float32Array | Vertex positions. |
| uvs | Float32Array | UV texture coordinates. |
| normals | Float32Array | Vertex normals. |
| indices | Uint16Array | Optional index buffer. |
| count | number | Number of vertices (or indices if using indexed rendering). |
| vertexBuffer | WebGLBuffer | GPU buffer for positions. |
| uvBuffer | WebGLBuffer | GPU buffer for UVs. |
| normalBuffer | WebGLBuffer | GPU buffer for normals. |
| indexBuffer | WebGLBuffer | GPU buffer for indices. |

## Methods

### constructor

`constructor(gl, vertices, uvs, normals, indices)`

Creates a new Mesh from vertex data and uploads to GPU.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| gl | WebGLRenderingContext | The WebGL context. |
| vertices | Float32Array | Vertex positions as flat array [x,y,z, x,y,z, ...]. |
| uvs | Float32Array | UV texture coordinates [u,v, u,v, ...]. |
| normals | Float32Array | Vertex normals [nx,ny,nz, ...]. |
| indices | Uint16Array | Optional triangle indices for indexed rendering. (Default: null) |

### bind

`bind(shader)`

Binds all vertex buffers and enables attributes for a shader.
Enables and configures vertex attribute arrays, binding each to the appropriate buffer.
Must be called before draw().

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| shader | Shader | The shader to bind attributes for. Looks for 'aVertexPosition', 'aTexCoord', 'aNormal'. |

**Returns:**
- `void`

### draw

`draw()`

Issues a draw call for this mesh.
Uses indexed drawing (`drawElements`) if indices are present; otherwise `drawArrays`.
The mesh must be bound (`bind()`) before calling `draw()`.

**Returns:**
- `void`
