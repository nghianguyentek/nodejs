# Modules

- [What is a Node.js module?](#what-is-a-nodejs-module)
- [Exporting module features](#exporting-module-features)
- [Importing features of another module](#importing-features-of-another-module)

## What is a Node.js module?

In Node.js, each `.js` file can be a module into which we group our related [functions](function.md) and [variables](variable.md) for later reuse. For example, whenever we create a Javascript file named `sample-module.js`, we create a `sample-module` module.

*sample-module.js*

```js
function sayHi() {
	console.log('Hi, Node.js modules')
}
```

*Note that a directory containing one or more `.js` files is also a module.*

## Exporting module features

To expose the features of a module, we use the `module.exports = {...}` syntax. 

For example, in the `sample-module` module (i.e., the `sample-module.js` file), we expose our `sayHi()` function as the following

*[sample-module.js](samples/sample-module.js)*

```js
function sayHi() {
	console.log('Hi, Node.js modules!')
}

module.exports = { sayHi }
```

## Importing features of another module

On the other hand, to use features of other modules, we must load them to our current working module using the `require()` function.

For example, we will create a new `sample-module-import.js` file at the same location of the `sample.js` file. In the `sample.test.js` file (i.e., `sample.test` module), we import the `sayHi()` function of the `sample` module as the following

*[sample-module-import.js](samples/sample-module-import.js)*

```js
const { sayHi } = require('./sample-module')

sayHi()

// output: Hi, Node.js modules!
```