import express from 'express'
import path from 'path'
import webpackMidlleware from './middlewares/webpack'
import renderMiddleware from './middlewares/renderHTML'

const app = express()
const port = process.env.PORT ? process.env.PORT : 3000
const host = process.env.host ? process.env.host : 'localhost'
 /* eslint-disable no-console */

app.use(webpackMidlleware)
// app.use(renderMiddleware)

// const assetUrl = process.env.NODE_ENV !== 'production' ? 'http://localhost:3000' : '/'

const renderHTML = () => `
  <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Hello React</title>
    </head>
    <body>
      <div id="root"></div>
      <script type="application/javascript" src="/build.js"></script>
    </body>
  </html>
  `

app.get(/.*/, (req, res) => {
  res.end(renderHTML())
})
app.use(express.static(path.resolve(__dirname, './../')))
app.listen(port, host, (err) => {
  if (err) console.error(err)
  console.info(`SERVER: Listening at ${host}:${port}`) // eslint-disable-line no-console
})
