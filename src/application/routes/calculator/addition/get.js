const routes = require('express').Router()

const { calculator } = require('../../../../domain')

routes.get('/', (req, res) => {
  res.send(5)
})

module.exports = {
  routes
}
