---
title: "Method"
date: 2023-02-06T20:58:19-05:00
lastmod: 2025-12-02T21:22:00-05:00
type: "page"
layout: "static"
---

## About

Method is an OpenGL rendering engine I have been working on to learn computer
graphics. The only dependencies are SDL and glad.

The corresponding Github repository is not actively updated.

## Features
 - 3D rendering
    - Shadow mapping, CSM, PCSS
    - Post-processing (gamma correction, tonemapping, bloom)
    - Phyiscally-inspired atmospheric scattering for sky rendering based on [this](https://doi.org/10.1145/166117.166140) paper
       - Not-so-physically inspired clouds
    - Deferred decals
    - Mesh decals
    - PBR spec/gloss pipeline
    - Probe-based global illumination
        - Cubemap and spherical harmonics for specular and diffuse
    - GPU path tracing
    - Mesh CSG for blockout
 - 2D rendering
    - Texture generator
       - Perlin, Voronoi, Worley noise
       - Composition of images -- add, multiply, threshold, min/max, lerp, invert
    - Bitmap font rendering
    - Custom UI toolkit
       - Simple vertical/horizontal and fixed layouts
       - Windows, labels, buttons, text boxes, sliders, progress bars, color picker, texture embed
    - Atlas packing
    - Batched draw calls
 - In-game console
    - Console variable system
    - Autorun
    - Context-sensitive autocomplete
    - Persistent history
 - Shader preprocessor
 - Scene serialization
    - One JSON file per entity (diffable and avoids checkout conflicts)
 - CPU profiler
 - GPU profiler
 - Custom file format loaders
   - JSON parser
   - PNG image reader
   - TGA image reader and writer
   - OBJ model reader
 - Linux and Win32 support layers
   - Filesystem watching
 - Asset hot-reloading 

{{< raw >}}
  <div class="gallery">
    <a href="screenshots/editor.png" title="Edit world">
      <img class="gallery-item" src="screenshots/editor.png">
    </a>
    <a href="screenshots/path-tracing.png" title="GPU path tracing">
      <img class="gallery-item" src="screenshots/path-tracing.png">
    </a>
    <a href="screenshots/console.png" title="Nice-to-use console">
      <img class="gallery-item" src="screenshots/console.png">
    </a>
    <a href="screenshots/sky.png" title="Atmosphere rendering">
      <img class="gallery-item" src="screenshots/sky.png">
    </a>
  </div>
  <p class="gallery-after">Click to see full-size version</p>
{{< /raw >}}
