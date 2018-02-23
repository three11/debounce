# Debounce

Debounce multiple function executions

## Install

```
npm i @three11/debounce
```

or

```
yarn add @three11/debounce
```

## Usage

First, import the module:

```
import '@three11/debounce';
```

Then use it to postpone a function's execution:

```
debounce(yourAwesomeFn());
```

## Arguments

`debounce(fn, wait, immediate)` accepts three arguments:

* `fn` : <Function> - the function to debounce
* `wait` : <Number> - miliseconds to wait before running the `fn` again
* `immediate` : <Boolean> - whether the function should run immediately

## License

GNU GENERAL PUBLIC LICENSE Version 3, 29 June 2007
