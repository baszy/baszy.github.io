---
title: "Method"
date: 2023-02-06T20:58:19-05:00
type: "page"
layout: "static"
---

## About

Method is a complete, minimal-dependency OpenGL rendering engine I have been
working on to learn computer graphics. The only dependencies are SDL and glad
(and likely FreeType in the future, once I get sick of bitmap fonts).

It currently only runs on Linux due to occasional usage of mmap and inotify.
However, this code is separated into a platform layer so that a WinAPI version
can easily be integrated.

The Github version is not actively updated.

## Features
 - 3D rendering
    - Basic scene description
    - Blinn-Phong shading
    - Shadow mapping, real-time reprojection (required for CSM)
    - Post-processing (gamma correction, exposure, bloom)
    - Atmospheric scattering for sky rendering based on [this](https://doi.org/10.1145/166117.166140) paper
 - 2D rendering
    - Bitmap font rendering
    - Custom UI toolkit
       - Windowing
       - Simple vertical/horizontal layouts
       - Labels
       - Buttons
       - Text boxes
       - Progress bars
       - Immediate-mode API for convenience, and retained backend for performance
    - In-game console
 - PNG image reader
 - TGA image reader + writer
 - OBJ model reader
 - Live asset reload with inotify

## Screenshots

![Editor screenshot](screenshots/editor.png)
