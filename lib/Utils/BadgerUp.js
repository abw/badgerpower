import badgerConfig from './Config.js'
import { snakeToStudly } from '@abw/badger-utils'

export const badgerUp = (module, params={}) => {
  const config = badgerConfig(params)

  return new module(
    config.rootDir,
    {
      ...config,
      // where to find config files relative to the project root
      config: {
        dir: [
          config.configDir        // e.g. /path/to/badger/config
        ]
      },
      // where to find JS library files
      library: {
        dir: config.libraryDir    // e.g. /path/to/badger/lib
      },
      // how to convert case to find JS libraries
      case: {
        library: snakeToStudly
      }
    }
  )
}

export default badgerUp