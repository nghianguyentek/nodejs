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

## Compose a simple test

```js

test('test_case_name', () => {
    expect(expression).a_criterion_function(...)
})

```

- `a_criterion_function` can be one of the following:
    - Objects comparation
        - `toBe(value)`: `===`
        - `toStrictEquals(value)`: `==`
        - `toBeNull()`: `=== null`
        - `toBeUndefined()`: `=== undefined`
        - `toBeDefined()`: `!== undefined`
        - `toBeTruthy()`: `if`
        - `toBeFalsy()`: `unless`

    - Numbers comparation
        - `toBe(inteterNumber)` or `toBeCloseTo(floatNumber)`
        - `toBeGreaterThan(number)`
        - `toBeGreaterThanOrEqual(number)`
        - `toBeLessThan(number)`
        - `toBeLessThanOrEqual(number)`
    - Strings comparation
        -  `toMatch(/regex/)`
        - `not.toMath(/regex/)`
    - Array item existance
        - `toContain(value)`
    - Error detection
        - `toThrow(errorMessage)`

## Compose a test suite

To group related test cases together, we can use the `describe()`

```js
describe('feature_name', () => {
    test('case_name', () => {

    })

    ...
})
```

## Run test

`npm test`