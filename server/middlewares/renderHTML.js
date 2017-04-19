import express from 'express'
import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import App from './../../app/components/App/App'

const router = express.Router()
const assetUrl = process.env.NODE_ENV !== 'production' ? 'http://localhost:3000' : '/'

const renderHTML = componentHTML => `
<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Hello React</title>
  </head>
  <body>
    <div id="root">${componentHTML}</div>
    <script type="application/javascript" src="${assetUrl}/build.js"></script>
  </body>
</html>
`

router.get('*', (req, res) => {
  // const mainChunk = res.locals.webpackStats.toJson().assetsByChunkName.main
  const componentHTML = renderToStaticMarkup(<App />)

  return res.end(renderHTML(componentHTML))
})

export default router
