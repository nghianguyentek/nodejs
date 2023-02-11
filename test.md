# Testing in Node.js

From v18.x LTS, Node.js supports a built-in test runner. Unfortunately, our hosting provider may not support it. Therefore, we will use a test framework as a workaround solution, particularly the Jest framework.

## Installation

`npm install -D jest`

## Configuration

Update your `package.json` file as below:

```json
{
    "scripts": {
        "test": "jest"
    }
}
```

## Compose a simple test case

```js

test('case_name', () => {
    expect(expression).a_criterion_function()
})

```

Based on the type of the value of the given `expression`, we have different criterion functions. If it is:

- A boolean
    - `toBeTruthy()`
    - `toBeFalsy()`
- A number
    - `toBe(inteterNumber)` or `toBeCloseTo(floatNumber)`
    - `toBeGreaterThan(number)`
    - `toBeGreaterThanOrEqual(number)`
    - `toBeLessThan(number)`
    - `toBeLessThanOrEqual(number)`
- A string
    -  `toMatch(/regex/)`
    - `not.toMath(/regex/)`
- An array
    - `toContain(value)`
- An error
    - `toThrow(errorMessage)`

## Group test cases

To group related test cases together, we can use the `describe()`

```js
describe('group_name', () => {
    test('case_name', () => {

    })

    ...
})
```

## Run test

`npm test`

## Verbose

If there are many test files (suites), Jest will not display the detail of each suite. To enable this, we use the `verbose` configuration. 

Update your `package.json` file as below:

```json
{
    "jest": {
        "verbose": true
    }
}
```