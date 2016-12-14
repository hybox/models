# Hydra in a Box data model documentation

This data model documentation is built using [GitBook](https://toolchain.gitbook.com/).

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

## Troubleshoooing

Follow the [GitBook](https://toolchain.gitbook.com/setup.html) installation instructions to get a working GitBook environment if the above doesn't work.