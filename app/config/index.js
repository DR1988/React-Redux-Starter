import devConfig from './dev.config'
import prodConfig from './prod.config'
import untrackedConfig from './untracked.config'

const config = Object.assign({}, process.env.NODE_ENV === 'production' ?
 { ...prodConfig, ...untrackedConfig } : { ...devConfig, ...untrackedConfig })

export default Object.freeze(config)
