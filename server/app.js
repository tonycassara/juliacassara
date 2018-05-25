const express = require('express')
const path = require('path')
const middleware = require('./middleware')
const webpack = require('webpack')
const webpackMiddleware = require('webpack-dev-middleware')
const webpackConfig = require('../webpack.config.js')

const app = express()
app.use(webpackMiddleware(webpack(webpackConfig)))
app.use(middleware.bodyParser.urlencoded({ extended: false }))
app.use(middleware.bodyParser.json())

const indexPath = path.join(__dirname, '../dist/index.html')
// const distPath = express.static(path.join(__dirname, '../dist'))

app.get('*', (request, response) => {
  response.sendFile(indexPath)
})

app.listen(3000, () => {
  console.log('Listening on port 3000')
})
