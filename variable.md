# Variables in Node.js

We use variables to keep track of stored data in memory for later use in a program. A variable has an identifier (name)
and a value (the stored data) that belongs to a particular [type](data-type.md).

## Declare and assign variables

To declare a variable in Node.js, we can use `const` keyword or `let` keyword. After that, we can assign a value to it
using the `=` operator. Note that we can not reassign `const` variables; thus, we must set their value immediately after
declaration. In addition, after declaring a variable using the `let` keyword, if we don't assign any
value, [`undefined`](data-type.md#undefined-type) is set. Since every variable has a value, we can assign a variable to
another variable (the value of another variable).

```
const secondsPerMinute = 60, minutesPerHour = secondsPerMinute;

let name = 'JavaScript Quick Guides';
let age, 
    phoneNo = '0901234567',
    isActive = true;
    
age = 1;
phoneNo = '0907654321';
```