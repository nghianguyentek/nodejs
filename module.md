# Modules in Node.js

In Node.js, each `.js` file is a module into which we group our related [functions](function.md) and [variables](variable.md) for later reuse. To expose the features of a module, we use the `module.exports = {...}` syntax. On the other hand, to use features of other modules, we must load them to our current working module using the `require()` function. 

For example, `http` is a Node.js built-in module that exposes the `createServer` function for us to create an HTTP server. The below codes shows how to load the `http` module and call the `createServer` from it:

```
const http = require('node:http');
http.createServer(...);
```