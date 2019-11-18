const app = require('express')()
const bodyParser = require('body-parser')
const logger = require('pino')({
  prettyPrint: true
})

// swagger configs
// generate swagger definition
// setup swagger-ui
const swaggerJSDoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')
const options = {
  definition: require('./swaggerDef.js'),
  apis: ['src/application/**/*.js']
}
const swaggerSpec = swaggerJSDoc(options)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// Para prevenir erros em testes
// @ts-ignore
if (require.main === module) {
  app.use('/', require('./src/application/routes'))
  // app.use('')
  app.listen(3000, (req, res) => {
    logger.info('Listening on port', 3000)
  })
} else {
  module.exports = app
}
