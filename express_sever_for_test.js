var express = require('express')
var bodyParser = require('body-parser')
var app = express()
app.use(bodyParser.urlencoded({ extended: false }))

// 设置跨域访问
app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'X-Requested-With')
  res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
  res.header('X-Powered-By', ' 3.2.1')
  res.header('Content-Type', 'application/json;charset=utf-8')
  next()
})

var data = { 'name': 'Lac', 'age': '10' }

app.get('/', function (req, res) {
  console.log('get..........')
  console.log(req.query)
  if (req.query && req.query.callback) {
    var str = req.query.callback + '(' + JSON.stringify(data) + ')' // jsonp
    console.log('jsonp: ' + str)
    res.end(str)
  } else {
    console.log('json: ' + JSON.stringify(data))
    res.end(JSON.stringify(data))
  }
})

app.post('/', function (req, res) {
  console.log('post............')
  console.log(req.body)
  console.log('json: ' + JSON.stringify(data))
  res.end(JSON.stringify(data))
})

app.listen(8085, function () {
  console.log('Listening on port 8085...')
})
