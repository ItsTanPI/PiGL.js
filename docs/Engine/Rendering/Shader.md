# Shader Class Documentation

## Function Overview

| Modifier | Signature | Description |
| :--- | :--- | :--- |
| public | constructor(gl, vsSource, fsSource) | Creates and compiles a new shader program. |
| public | setUniform(name, value, type) | Sets a uniform value by name. |
| public | getAttribLocation(name) | Gets (and caches) an attribute location by name. |
| public | use() | Activates this shader program for rendering. |

## Overview

Shader wraps a compiled WebGL shader program with uniform and attribute management.
Compiles GLSL vertex and fragment shaders into a WebGL program.
Provides convenient methods to set uniforms and query attribute locations.

## Class Definition

**Namespace:** `Engine.Rendering`  
**Class:** `Shader`

## Properties

| Name | Type | Description |
| :--- | :--- | :--- |
| gl | WebGLRenderingContext | The WebGL context. |
| program | WebGLProgram | Compiled shader program. |
| uniforms | Object | Cached uniform locations. |
| attributes | Object | Cached attribute locations. |

## Methods

### constructor

`constructor(gl, vsSource, fsSource)`

Creates and compiles a new shader program.
Logs compilation and linking errors to console if shader fails to compile/link.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| gl | WebGLRenderingContext | The WebGL context. |
| vsSource | string | Vertex shader GLSL source code. |
| fsSource | string | Fragment shader GLSL source code. |

### setUniform

`setUniform(name, value, type)`

Sets a uniform value by name. Auto-detects type if not provided.

If type is not provided, attempts to infer from value:
- number → '1f'
- 2-element array → '2fv'
- 3-element array → '3fv'
- 4-element array → '4fv'
- 16-element array → 'Matrix4fv'

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| name | string | Uniform variable name. |
| value | number \| number[] \| Float32Array | The value to set. |
| type | string | Optional explicit type: '1i', '1f', '2fv', '3fv', '4fv', 'Matrix4fv'. |

**Returns:**
- `void`

### getAttribLocation

`getAttribLocation(name)`

Gets (and caches) an attribute location by name.
Used by Mesh.bind() to enable vertex attributes.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| name | string | Attribute variable name in the shader. |

**Returns:**
- `number`: The attribute location or -1 if not found.

### use

`use()`

Activates this shader program for rendering.
Calls `gl.useProgram()`. Must be called before rendering with this shader.

**Returns:**
- `void`
