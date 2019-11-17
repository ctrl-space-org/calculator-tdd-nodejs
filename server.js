const app = require('express')()

app.post('/calculator/addition', function(req, res) {
  res.send('POST request to the homepage')
})

app.listen(port => {
  console.log('Calculator service running.')
})
