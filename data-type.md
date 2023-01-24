# Data types in Node.js

A data type is a named group of data characteristics; for example, numbers and sequences of characters (i.e., strings).
In JavaScript, we have two data type groups: [simple (primitive)](#common-primitive-types)
and [complex (object)](#complex-types).

## Common primitive types

The characteristic of primitive types is immutable. That is, we can not change the value after creating. Common
primitive types in JavaScript are:

- [number](#number-type)
- [string](#string-type)
- [boolean](#boolean-type)
- [undefined](#undefined-type)
- [null](#null-type)

### Number type

All numeric data, including floating-point (having a decimal point) numbers.

### String type

A string is a sequence of characters. In JavaScript, we can represent a string value in source code using `'` (single
quote), `"` (double quote), or <code>`</code> (backtick).

```
'kihon.vn'
"kihon.vn"
`kihon.vn`
```

A backtick pair indicates a string formation syntax used to create a multiline string literal or a string value from the
string representations of expressions. An expression is a unit of code, if evaluated, returns a value; for example,
a [variable](variable.md) name. A statement is a unit of code representing a complete action, such as
a [variable declaration, an assignment](variable.md#declare-and-assign-variables), etc. Sometimes, an expression is also
a statement; for example, a [function call](function.md#call-a-function).

```
`This is the first line
This is the second line
This is the last line`

`This is ${variableName}`
```

### Boolean type

Logical value, either `true` or `false`

### undefined type

`undefined`, indicates no value is specified

### null type

`null`, indicates no object is specified

## Complex types

A complex type is a combination of others. Common JavaScript built-in types are `object` and `function`. Note
that `function` is an `object` type having the callable characteristic.

## User-defined (custom) types

Whenever we define a [function](function.md), we create a new `function` type (it's also a new `object` type). And we
called them user-defined (custom) types.