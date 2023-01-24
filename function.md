# Functions in Node.js

A function is a way to organize our code to do a particular job. Generally, it often has a name, a list of parameters, and a body (i.e., a block of code) that always returns a value if executed. As variable, we must declare it before use (i.e., call it).

Function parameters enable us to transfer outside values (input) into a function as variables.

## Declare a function

```
function functionName(parameterName, ...) {
    ...
    return ...;
}
```

If we don't need parameters,

```
function functionName() {
    ...
    return ...;
}
```

If we don't return any value (`undefined` is returned, actually),

```
function functionName() {
    ...
}
```