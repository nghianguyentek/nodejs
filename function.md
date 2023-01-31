# Functions in Node.js

A function is a way to organize our code to do a particular job. Generally, it often has a name, a list of parameters,
and a body (i.e., a block of code) that always returns a value if executed. As variable, we must declare it before use (
i.e., call it).

Function parameters enable us to transfer outside values (input) into a function as variables.

## Declare a function

```fs
function functionName([parameterName, ...]) {
    ...
    [return ...;]
}
```

The content between `[` and `]` is optional.

## Call a function

```fs
functionName([argument, ...]);
```

An argument is an actual value transferred to a function parameter at runtime.

Since every function is a `function` value, we can assign them to variables or parameters (as arguments). In those
cases, we can call them using the names of variables or parameters instead.

```fs
function logError(str) {
    console.log(`Error: ${str}`);
}

let errorHandler = logError;
errorHandler('Division by zero');
```

## Anonymous function and lambda (arrow) expression

An anonymous function is a function that has no name (and the script engine will generate it). We often use them as
arguments for another one or in case of running only once after declared.

```fs
(function ([parameterName, ...]) {
    ...
    [return ...;]
})
```

or in lambda form

```fs
([parameterName, ...]) => { ... [return ...;] }
```

## `this` keyword

In a "normal" function, `this` refers to the caller. On the other hand, in an anonymous one, `this` refers to itself.

```js
const obj = { a: 'a' }
obj.showMe = function() { console.log(this.a) }  // a
obj.showYourself = () => { console.log(this.a) }  // undefined
obj.showYourself2 = () => { this.a = 'b'; console.log(this.a) }  // b
```

Note that the `a` property in the `showYourself2()` method (i.e., an anonymous function) belongs to the method (not the `a` property of the `obj` object).


