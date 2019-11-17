const app = require('express')()
const logger = require('pino')({
  prettyPrint: true
})

app.use('/', require('./src/application/routes'))

// Para prevenir erros em testes
// @ts-ignore
if (require.main === module) {
  app.listen(3000, (req, res) => {
    logger.info('Listening on port', 3000)
  })
} else {
  module.exports = app
}
