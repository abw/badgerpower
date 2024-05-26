import process from 'node:process'
import dotenv from 'dotenv'
import { dir } from '@abw/badger-filesystem'
import { fail } from '@abw/badger-utils'

// Read the config from the .env file
dotenv.config()

// Environment variables are loaded into process.env
const env = process.env

// Project root directory, wherever you happen to have it checked out
const envRootDir = env.ROOT_DIR
  || fail('ROOT_DIR is not defined as an environment variable')

// combine what we've got so far
export const envConfigDefaults = {
  envRootDir,
}

// Default options for debugging
export const defaults = {
  debug:       env.DEBUG,
  debugPrefix: 'Badger > ',
  debugColor:  'blue',
}

// Function to merge envConfig with user-supplied options.
// NOTE: we allow an alternative to the above envConfig to be
// supplied as the second argument to facilitate testing.
export const badgerConfig = (props={}, envConfig=envConfigDefaults) => {
  const config = {
    ...defaults,
    ...props
  }

  // root directory is converted to a directory object
  const root = config.rootDir = dir(envConfig.envRootDir)

  config.configDir  = root.dir('config')
  config.libraryDir = root.dir('lib')

  config.env = env
  return config
}

export default badgerConfig