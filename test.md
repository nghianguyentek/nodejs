# Testing

## Configuration

`package.json`

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

## Run test

`npm test`