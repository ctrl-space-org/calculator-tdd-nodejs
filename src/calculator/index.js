const subtrair = (a, b) => {
  if (b === undefined) b = 0
  return a - b
}
const somar = (a, b) => a + b

module.exports = {
  somar,
  subtrair
}
