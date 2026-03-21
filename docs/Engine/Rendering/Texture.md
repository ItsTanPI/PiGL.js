# Texture Class Documentation

## Function Overview

| Modifier | Signature | Description |
| :--- | :--- | :--- |
| public | constructor(gl, url) | Creates and loads a new texture. |
| private | isPowerOf2(value) | Check if a value is a power of 2. |

## Overview

Handles loading and managing WebGL textures. Loads images asynchronously and
creates GPU texture objects with proper filtering and wrapping parameters.

## Class Definition

**Namespace:** `Engine.Rendering`  
**Class:** `Texture`

## Properties

| Name | Type | Description |
| :--- | :--- | :--- |
| gl | WebGLRenderingContext | The WebGL context. |
| texture | WebGLTexture | The GPU texture object. |
| image | Image | The loaded image element. |
| loaded | boolean | Whether the texture has been loaded and uploaded to GPU. |

## Methods

### constructor

`constructor(gl, url)`

Creates and loads a new texture.
The image is loaded asynchronously; check the loaded property to determine
when the texture is ready for use. A placeholder magenta texture is displayed until loaded.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| gl | WebGLRenderingContext | The WebGL context. |
| url | string | URL to the image file to load. |

### isPowerOf2

`isPowerOf2(value)`

Check if a value is a power of 2.
Used to determine if mipmapping can be generated for the texture.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| value | number | Value to test. |

**Returns:**
- `boolean`: True if value is a power of 2, false otherwise.
