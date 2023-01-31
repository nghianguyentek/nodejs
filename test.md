# Testing

## Installation

```
npm install -D jest
```

## Configuration

Update your the `package.json` file as below:

```json
{
    "scripts": {
        "test": "jest --coverage"
    },
    "jest": {
        "testResultsProcessor": "jest-sonar-reporter"
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

## Run test

`npm test`

## Compose a feature test

```js
describe('feature_name', () => {
    test('case_name', () => {

    })

    ...
})
```