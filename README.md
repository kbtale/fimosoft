<div align="center">

# FimoSoft

**Landing page for FimoSoft Games.**

[Access the website here](https://www.fimosoftgames.com)

Created with [Astro 6](https://astro.build/) and [GSAP](https://gsap.com/).

![Astro](https://img.shields.io/badge/Astro_6-000000?style=for-the-badge&logo=astro&logoColor=white)
![GSAP](https://img.shields.io/badge/GSAP_3-88CE02?style=for-the-badge&logo=greensock&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![CSS](https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=css3&logoColor=white)

https://github.com/user-attachments/assets/4ead9ab5-3ebf-4fc1-8205-d2ff631b453a

</div>

## Relevant details

### 1. Halftone Dither Engine
The background video is processed through a halftone dither renderer:
*   **Offscreen Canvas**: Uses a secondary buffer to sample video frames without blocking the main thread.
*   **Pixel-to-Dot Mapping**: Real-time `ImageData` processing that calculates pixel brightness and maps it to a dot-size grid.
*   **Performance Jitter**: Software-locked at 18 FPS using `requestAnimationFrame` and `FPS_INTERVAL` to reduce GPU overhead.

### 2. GSAP Logo Morphing Timeline
The main logo is decomposed into individual `span.letter` elements to allow letter-by-letter transformations:
*   **ScrollTrigger Pinning**: The logo is pinned at the start of the viewport.
*   **Responsive Scaling**: All positions and sizes are calculated using `clamp()` functions and dynamic `getBoundingClientRect()` snapshots.

### 3. CCTV Security Feed (404 Page)
The error page has a simulated security camera system:
*   **Dynamic HUD**: A real-time ticking timestamp driven by `requestAnimationFrame` and randomized camera IDs based on project screenshots.
*   **Analog Artifacts**: Scanlines generated via `repeating-linear-gradient` animations, combined with SVG fractal noise for static interference.
*   **Gated Transitions**: Camera switches include a "glitch flash" effect using CSS class toggles and `mix-blend-mode: overlay`.

### 4. Custom Surface Cursor
Instead of a standard cursor, the site uses a custom pointer:
*   **Clip-path Morphing**: The cursor inner element uses CSS `clip-path` polygons to morph from a 20-point circle to a sharp triangle when hovering over interactive targets.
*   **Context Detection**: Uses `Element.closest()` for bubble-up detection of links, buttons, and game cards.
*   **Inversion Logic**: Implements `mix-blend-mode: difference` for contrast regardless of the background dither state.

## Setup

### Installation
For security reasons, always install dependencies avoiding arbitrary script execution:

```bash
npm install --ignore-scripts
```

The --ignore-scripts flag is not mandatory but... in the AI era, you'll never know.

### Development
Launch the local dev server:

```bash
npm run dev
```

### Production Build
Generate the optimized static folder:

```bash
npm run build
```
