# TimeManager Class Documentation

## Function Overview

| Modifier | Signature | Description |
| :--- | :--- | :--- |
| public | constructor() | Creates a new TimeManager instance. |
| public | update(now) | Updates time tracking; call once per animation frame. |

## Overview

TimeManager is a singleton utility for tracking frame time and delta time.
Provides scaled and unscaled time values for frame-based animation and physics.
A single instance is exported as `Time` and should be updated each frame with the
requestAnimationFrame timestamp.

## Class Definition

**Namespace:** `Engine.Core`  
**Class:** `TimeManager`

## Properties

| Name | Type | Description |
| :--- | :--- | :--- |
| time | number | Total elapsed scaled time in seconds. |
| deltaTime | number | Time since last frame (scaled by timeScale) in seconds. |
| unscaledTime | number | Total elapsed unscaled time in seconds. |
| unscaledDeltaTime | number | Time since last frame (unscaled) in seconds. |
| timeScale | number | Multiplier for time progression; 0 = paused, 2 = double speed. |

## Methods

### constructor

`constructor()`

Creates a new TimeManager instance.

### update

`update(now)`

Updates time tracking; call once per animation frame.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| now | number | The timestamp from requestAnimationFrame (in milliseconds). |

**Returns:**
- `void`
