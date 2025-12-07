---
title: "Bones"
date: 2023-02-06T20:58:32-05:00
lastmod: 2025-12-02T21:22:00-05:00
type: "page"
layout: "static"
---

## About

Bones is a small x86 kernel I wrote using C and nasm.

## Features
 - Handwritten bootloader with ELF loader, and alternatively Multiboot2 compatible (for GRUB)
 - RS232 driver
 - PCI (not Express) 
 - virtio-blk driver over PCI
 - FAT filesystem only
 - Text-mode VGA driver
 - PS/2 keyboard driver
 - Custom C standard library (very minimal)
 - Somewhat usable command line interface (emulates GNU readline)

<!-- TODO add reading from disk screenshots or something interesting like that -->
{{< raw >}}
  <div class="gallery">
    <a href="screenshots/boot.png" title="VGA test">
      <img class="gallery-item" src="screenshots/boot.png">
    </a>
    <a href="screenshots/console.png" title="Running commands over the VGA console">
      <img class="gallery-item" src="screenshots/console.png">
    </a>
    <a href="screenshots/serial_console.png" title="Running filesystem commands over the serial console">
      <img class="gallery-item" src="screenshots/serial_console.png">
    </a>
  </div>
  <p class="gallery-after">Click to see full-size version</p>
{{< /raw >}}
