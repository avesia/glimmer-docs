---
outline: deep
---

# Installation

## Prerequirements

- [meson](https://mesonbuild.com/)

    This project is using meson for building and testing.

- [cmake](https://cmake.org/)

    Some dependencies is using cmake. meson supports cmake dependencies.

- C/C++ compiler
    
    Glimmer officially supports Clang(`clang++`), GNU Compiler Collection(`g++`) and Emscripten(`em++`).

- Vulkan SDK(Optional)

    GVK package requires Vulkan SDK if you'll use it.

- Emscripten SDK(Optional)

    GWGL package requires Emscripten SDK for building.

## Compiling

### Cloning a repository

```sh
$ git clone https://source.canvas.ac/doraidamon/glimmer.git
```

Glimmer is also available on [GitHub](https://github.com/doraidamon/glimmer.git).

### Setup meson

Set up meson build directory. Run `meson setup` command on project root.

```sh
$ cd glimmer
$ meson setup build
```

### Changing a library configuration

You can build a library with customized configuration.

#### Configurations

| Configuration | Description | Default value |
| :-- | :-- | :-- |

### Compiling glimmer

Move on `build` directory and run `meson compile`.
If you want to 

```sh
$ cd build
$ meson compile
```
