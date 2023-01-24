# Variables in Node.js

We use variables to store data used in memory for later use in a program. A variable has a name and a value (the stored data) that belongs to a particular type ([data type](data-type.md)).

## Declaration and assignment

To declare a variable in Node.js, we can use `const varName` or `let varName`. After that, we can assign a value to it using the `=` operator. Note that we can not reassign `const` variables; thus, we must set their value immediately after declaration.

```
const secondsPerMinute = 60;
let name = 'JavaScript Quick Guides';
let age, phoneNo = '0901234567';
age = 1;
phoneNo = '0907654321';
```