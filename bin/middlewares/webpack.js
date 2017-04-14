import express from 'express'
const router = express.Router()

const config = require('../../webpack.config').default({ dev: true })
const webpack = require('webpack')
const compiler = webpack(config)
const webpackDevMiddleware = require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath,
  stats: {
    colors: true,
  },
  serverSideRender: true,
})
router.use(webpackDevMiddleware)
router.use(require('webpack-hot-middleware')(compiler))

export default router