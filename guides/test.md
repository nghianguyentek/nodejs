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
test('module_name:function_name:expected_status', () => {
  expect(expression).a_criterion_function()
})
```

where:

- `module_name:function_name:expected_status`: is the name of the test case
- `expected_status`: can be `success`, `fail`, etc.

Based on the type of the value of the given `expression`, we have different criterion functions. If it is:

### A boolean

- `toBeTruthy()`
- `toBeFalsy()`

### A number

- `toBe(inteterNumber)` or `toBeCloseTo(floatNumber)`
- `toBeGreaterThan(number)`
- `toBeGreaterThanOrEqual(number)`
- `toBeLessThan(number)`
- `toBeLessThanOrEqual(number)`

### A string

-  `toMatch(/regex/)`
- `not.toMath(/regex/)`

### An array

- `toContain(value)`

### An error

- `toThrow()`
- `toThrow(errorType)`
- `toThrow(errorMessage)`

*Note that: `expression` must be wrapped in an anonymous function*

```js
expect(() => expression).toThrow()
```

## Group test cases

To group related test cases together, we can use the `describe()`

```js
describe('module_name:function_name:expected_status', () => {
    test('sub_exepected_status', () => {

    })

    ...
})
```

where:

- `module_name:function_name:expected_status`: the name of the test group.

## Run test

```sh
npm test
```

***Note that:*** *The upper command will run all test files in the current package.*

### Verbose

If there are many test files (suites), Jest will not display the detail of each suite. To enable this, we use the `verbose` configuration. 

Update your `package.json` file as below:

```json
{
    "jest": {
        "verbose": true
    }
}
```

## Filter tests to run

Since `npm test` run all test files in the current package, it is time-consuming. Consequently, Jest supports us in filtering tests by specifying [test file paths](#filter-tests-by-specifying-paths) and [test case or group names](#filter-tests-by-specifying-test-cases-or-groups-names).

There are some points to remember:

- We may have to combine both paths and names to run exactly one test case or group.
- Jest uses Regular Expression for text matching.

### Filter tests by specifying paths

```sh
npm test "path" ["path" ... ]
```

#### Examples

1. To run all test files in directories that have `test` in their names (e.g., `test`, `XXXtest`, `testXXX`, `XXXtestXXX`, etc.):

```sh
npm test "test"
```

2. To run all test files in the current package that end with `url.test.js` in their names (e.g., `url.test.js`, `XXXurl.test.js`, etc.):

```sh
npm test "url.test.js"
```

### Filter tests by specifying (test cases or groups) names

```sh
npm test -- -t "name" ["name" ... ]
```

#### Examples

1. To run test cases or groups that have `url` in their names (e.g., `curl:get`, `url:encode`, `net:url:encode`, etc.)

```sh
npm test -- -t "url"
```