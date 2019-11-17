const routes = require('express').Router()

routes.post('/', (req, res) => {
  res.json({
    result: 4
  })
})

module.exports = {
  routes
}
