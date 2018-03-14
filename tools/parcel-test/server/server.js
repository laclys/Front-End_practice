const { resolve } = require('path')

const Koa = require('koa')
const serve = require('koa-static')

const app = new Koa()
app.use(serve(resolve(__dirname, '../')))

app.listen(2200)