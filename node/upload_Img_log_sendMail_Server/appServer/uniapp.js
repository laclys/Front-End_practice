const express = require('express')
const log4js = require('log4js')
const app = express()
const mongoose = require('mongoose')
const config = require('./db/config')
const indexRouter = require('./router/index')
const postcardRouter = require('./router/postcard')
const postcardOrderRouter = require('./router/postcardOrder')

// LOG配置
log4js.configure({
  appenders: [{
    type: 'dateFile',
    filename: 'logs/access.log',
    pattern: '-yyyy-MM-dd.log',
    alwaysIncludePattern: true,
    category: 'access'
  }]
})
// Log Middleware
app.use(log4js.connectLogger(log4js.getLogger('access'), { level: log4js.levels.INFO }))

// 链接数据库
mongoose.connect(config.mongodb)
mongoose.connection.on('connected', function () {
  console.log('mongo connect success')
})

// Use native promises
mongoose.Promise = global.Promise

// 设置路由
app.use('/', indexRouter)
app.use('/postcard', postcardRouter)
app.use('/postcard-order', postcardOrderRouter)

// 监听2333端口
app.listen(2333, function () {
  console.log('Node app start at 2333')
})
