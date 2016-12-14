# Hydra in a Box data model documentation

[![Build Status](https://travis-ci.org/hybox/models.svg?branch=master)](https://travis-ci.org/hybox/models)

This data model documentation is built using [GitBook](https://toolchain.gitbook.com/), supported by a set of Gulp tasks.

## Getting started

You will need a working install of NodeJS and NPM to get started. On macOS:

```bash
$ brew install npm
```

Clone the remote repository:

```bash
$ git clone https://github.com/hybox/models.git
$ cd models
```

Install the dependencies for this project:

```bash
$ npm install
$ gitbook install
```

## Editing

Edit, and then to preview your changes:

```bash
$ gitbook serve
```

To build a static version to the `_book` directory:

```bash
$ gulp build
```

To clean out the build directory:

```bash
$ gulp clean
```

## Publishing to GitHub Pages

Ensure all your changes are committed, and then run the following:

```bash
$ gulp publish
```

## Optional: Building ebooks (PDF, ePUB, and MOBI)

GitBook allows for publishing ebooks as part of the process, but adds a dependency on [Calibre](https://calibre-ebook.com/). See the [GitBook documentation](https://toolchain.gitbook.com/ebook.html) for more information.

On macOS:

```bash
$ brew tap Caskroom/cask
$ brew install Caskroom/cask/calibre
```

To build the ebooks (into the `_book`) directory:

```bash
$ gulp build-ebooks
```

## Troubleshoooing

Automated builds run on Travis-CI. Follow the [GitBook](https://toolchain.gitbook.com/setup.html) installation instructions to get a working GitBook environment if the above doesn't work.