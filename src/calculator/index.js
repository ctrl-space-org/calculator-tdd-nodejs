const subtraction = (a = 0, b = 0) => a - b

/**
 * Método de somar
 *
 * @param {number} a num1
 * @param {number} b num2
 * @returns {number} result
 */
const addition = (a = 0, b = 0) => a + b

/**
 * Método de divisão
 *
 * @param {number} a num1
 * @param {number} b num2
 * @returns {number} result
 */
const division = (a, b) => {
  return a / b
}

module.exports = {
  addition,
  subtraction,
  division
}
