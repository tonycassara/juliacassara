const express = require('express')
const path = require('path')

const app = express()

const indexPath = path.join(__dirname, '../dist/index.html')
const distPath = express.static(path.join(__dirname, '../dist'))

app.listen(3000, () => {
  console.log('Listening on port 3000')
})

app.use('/', distPath)

app.get('/', function(req, res) {
  res.sendFile(indexPath)
})
