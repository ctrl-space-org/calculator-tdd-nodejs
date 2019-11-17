const routes = require('express').Router()

const { routes: post } = require('./post')

routes.use(post)

module.exports = {
  routes
}
