const subtrair = (a, b) => {
  if (b === undefined) return a
  if (a === undefined) return b
  return a - b
}
const somar = (a, b) => a + b

module.exports = {
  somar,
  subtrair
}
