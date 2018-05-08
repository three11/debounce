[![GitHub stars](https://img.shields.io/github/stars/three11/debounce.svg?style=social&label=Stars)](https://github.com/three11/debounce)
[![GitHub forks](https://img.shields.io/github/forks/three11/debounce.svg?style=social&label=Fork)](https://github.com/three11/debounce/network#fork-destination-box)
[![GitHub release](https://img.shields.io/github/release/three11/debounce.svg)](https://github.com/three11/debounce/releases/latest)
[![GitHub issues](https://img.shields.io/github/issues/three11/debounce.svg)](https://github.com/three11/debounce/issues)
[![GitHub last commit](https://img.shields.io/github/last-commit/three11/debounce.svg)](https://github.com/three11/debounce/commits/master)
[![Github file size](https://img.shields.io/github/size/three11/debounce/dist/index.min.js.svg)](https://github.com/three11/debounce/)
[![npm](https://img.shields.io/npm/dt/@three11/debounce.svg)](https://www.npmjs.com/package/@three11/debounce)
[![npm](https://img.shields.io/npm/v/@three11/debounce.svg)](https://www.npmjs.com/package/@three11/debounce)
[![license](https://img.shields.io/github/license/three11/debounce.svg)](https://github.com/three11/debounce)
[![Analytics](https://ga-beacon.appspot.com/UA-83446952-1/github.com/three11/debounce/README.md)](https://github.com/three11/debounce/)
[![Open Source Love svg1](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)](https://github.com/three11/debounce/)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/three11/debounce/graphs/commit-activity)

[![ForTheBadge built-with-love](https://ForTheBadge.com/images/badges/built-with-love.svg)](https://github.com/three11/)

# Debounce

Debounce multiple function executions

## Install

```console
npm i @three11/debounce
```

or

```console
yarn add @three11/debounce
```

## Usage

First, import the module:

```javascript
import debounce from '@three11/debounce';
```

Then use it to postpone a function's execution:

```javascript
debounce(yourAwesomeFn());
```

## Arguments

`debounce(fn, wait, immediate)` accepts three arguments:

*   `fn` : the function to debounce
*   `wait` : miliseconds to wait before running the `fn` again
*   `immediate` : whether the function should run immediately

## License

GNU GENERAL PUBLIC LICENSE Version 3, 29 June 2007
