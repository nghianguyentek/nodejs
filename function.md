# Functions in Node.js

A function is a way to organize our code to do a particular job. Generally, it often has a name, a list of parameters,
and a body (i.e., a block of code) that always returns a value if executed. As variable, we must declare it before use (
i.e., call it).

Function parameters enable us to transfer outside values (input) into a function as variables.

## Declare a function

```
function functionName([parameterName, ...]) {
    ...
    [return ...;]
}
```

The content between `[` and `]` is optional.

## Call a function

```
functionName([argument, ...]);
```

An argument is an actual value transferred to a function parameter at runtime.

Since every function is a `function` value, we can assign them to variables or parameters (as arguments). In those
cases, we can call them using the names of variables or parameters instead.

```
function logError(str) {
    console.log(`Error: ${str}`);
}

let errorHandler = logError;
errorHandler('Division by zero');
```

## Anonymous function and lambda (arrow) expression

An anonymous function is a function that has no name (and the script engine will generate it). We often use them as
arguments for another one or in case of running only once after declared.

```
(function ([parameterName, ...]) {
    ...
    [return ...;]
})
```

or in lambda form

```
([parameterName, ...]) => { ... [return ...;] }
```
