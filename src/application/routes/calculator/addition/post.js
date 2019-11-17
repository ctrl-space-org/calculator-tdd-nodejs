const routes = require('express').Router()

const { calculator } = require('../../../../domain')

/**
 * This function comment is parsed by doctrine
 *
 * @route GET /api
 * @group foo - Operations about user
 * @param {string} email.query.required - username or email - eg: user@domain
 * @param {string} password.query.required - user's password.
 * @returns {object} 200 - An array of user info
 */
routes.post('/', (req, res) => {
  const { num1, num2 } = req.body
  res.json({
    result: calculator.addition(num1, num2)
  })
})

module.exports = {
  routes
}
