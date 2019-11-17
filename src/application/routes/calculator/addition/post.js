const routes = require('express').Router()

const { calculator } = require('../../../../domain')

routes.post('/', (req, res) => {
  const { num1, num2 } = req.body
  res.json({
    result: calculator.addition(num1, num2)
  })
})

module.exports = {
  routes
}
