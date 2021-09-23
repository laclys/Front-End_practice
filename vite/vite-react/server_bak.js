const express = require('express')
const fs = require('fs')

const app = express()

const { createServer: createViteServer } = require('vite')

createViteServer({
  server: {
    middlewareMode: 'ssr',
  },
}).then((vite) => {
  app.use(vite.middlewares)

  app.get('*', async (req, res) => {

    let template = fs.readFileSync('index.html', 'utf-8')

    template = await vite.transformIndexHtml(req.url, template)

    const { render } = await vite.ssrLoadModule('/src/server-entry.jsx')

    const html = render(req.url)

    const responseHtml = template.replace(`<!-- App_HTML -->`, html)

    res.set('content-type', 'text/html')
    res.send(responseHtml)
  })

  app.listen(4399)
})
