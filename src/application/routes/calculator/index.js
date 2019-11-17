const routes = require('express').Router()

const { routes: additionRoutes } = require('./addition')

routes.use('/addition', additionRoutes)

module.exports = {
  routes
}
