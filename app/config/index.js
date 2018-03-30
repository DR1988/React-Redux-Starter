import devConfig from './dev.config'
import prodConfig from './prod.config'

let untrackedConfig = {}
try {
  untrackedConfig = require('./untracked.config').default // eslint-disable-line global-require, import/no-unresolved
} catch (error) {
  untrackedConfig = {}
}

const config = Object.assign({}, process.env.NODE_ENV === 'production' ?
 { ...prodConfig, ...untrackedConfig } : { ...devConfig, ...untrackedConfig })

export default Object.freeze(config)
