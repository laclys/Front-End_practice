const express = require('express')
const Router = express.Router()

// Hello skywalker
Router.get('/hello', function (req, res) {
  res.send('<h1>Hello Luke</h1>')
})

module.exports = Router
