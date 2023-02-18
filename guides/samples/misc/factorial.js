function Factorial() {
}

function validate(n) {
  if (typeof n !== 'number')
    throw new TypeError(`Expect a non-negative number, but got '${typeof n}'`)

  if (!Number.isInteger(n))
  throw new TypeError(`Expect a non-negative number, but got 'float'`)

  if (n < 0)
    throw new Error(`Expect a non-negative number, but got '${n}'`)
}

Factorial.of_v1 = n => {
  validate(n)

  if (0 === n || 1 === n)
    return 1

  return n * Factorial.of(n - 1)
}

Factorial.of_v2 = n => {
  validate(n)

  if (0 === n || 1 === n)
    return 1

  let result = n
  for (let i = n-1; i > 1; i--)
    result *= i

  return result
}

Factorial.of = n => Factorial.of_v2(n)

Factorial.approximate = n => {
  validate(n)

  if (0 === n || 1 === n)
    return 1

  return Math.sqrt(2 * Math.PI * n) * Math.pow(n / Math.E, n)
}

module.exports = { Factorial }