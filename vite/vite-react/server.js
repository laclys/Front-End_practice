const express = require('express')
const fs = require('fs')

const app = express()

const template = fs.readFileSync('dist/client/index.html', 'utf-8')

// 映射静态资源目录
app.use(express.static('dist/client'))

app.get('*', async (req, res) => {
  const render = require('./dist/server/server-entry').render

  const context = {}

  const html = await render(req.url, context)

  const responseHtml = template.replace(`<!-- App_HTML -->`, html)

  res.set('content-type', 'text/html')
  res.send(responseHtml)
})

app.listen(4399)
