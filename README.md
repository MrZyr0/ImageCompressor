# Gulp image compressor

Supported image extension **(svg|png|jpg|jpeg|gif)**.

## Introduction

Here is my gulpfile to quickly compress images with or without loss of quality.\
**Feel free to suggest improvements by creating issues or fork it !**

&nbsp; <!-- break line -->

## Includes

This project includes lot of nodes module. Please read package.json and package-lock.json to check their own licenses.

&nbsp; <!-- break line -->

## Usage

1. Clone the repository.

2. Install dependencies of npm using `npm i`.

3. Moove your images in `input` folder.\
**⚠ Be careful, do not put the files in the "output" folder. It will be cleared at runtime ⚠**

4. Run `gulp` with one command discribe bellow.

5. **You're done** your images will be in the `output` folder.

_I prefer to use package locally so I use npx to execute gulp. If you prefer to call gulp directly, install it globally : `npm i -g gulp`_

&nbsp; <!-- break line -->

## Commandes

### `npx gulp` or `npx gulp lossless`

By default, gulp compresses your images without loss of quality.

### `npx gulp lossy`

If you want more compression, you can ask gulp to use a compression alogrithm with minimal loss of quality.

### `npx gulp hard`

If you want **more compression** again, you can ask gulp to run the alogrithms several times with more loss of quality.

### `npx gulp clean`

Clear `output` folder.

### `npx gulp cleanAll`

Clear `input` and `output` folder.
