const routes = require('express').Router()

const { routes: calculatorRoutes } = require('./calculator')

routes.use('/calculator', calculatorRoutes)

routes.get('/status', (req, res) => {
  res.send({
    status: 'ok'
  })
})

module.exports = routes
