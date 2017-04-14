import express from 'express'
import path from 'path'
import webpackMidlleware from './middlewares/webpack.js'

const app = express()
const port = process.env.PORT ? process.env.PORT : 3000
const host = process.env.host ? process.env.host : 'localhost'

app.use(webpackMidlleware)
app.use(express.static(path.resolve(__dirname, './../')))
app.listen(port, host, (err) => {
  if (err) console.error(err)

  console.info(`SERVER: Listening at ${host}:${port}`)
})

