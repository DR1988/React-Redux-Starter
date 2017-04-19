// const dev = process.env.NODE_ENV === 'development'
import cssHook from 'css-modules-require-hook'

const dev = process.env.NODE_ENV === 'development'

console.log('devdev', dev)

const cssHookConfig = {
  generateScopedName: dev ? '[name]__[local]' : '[hash:base64:5]',
  extensions: ['.scss', '.css'],
}

cssHook(cssHookConfig)

console.log(process.env.NODE_ENV)

require('./../server/index.js')  // eslint-disable-line global-require

