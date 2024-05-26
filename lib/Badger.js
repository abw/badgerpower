import { Workspace } from '@abw/badger'
import { badgerUp } from './Utils/BadgerUp.js'
import { extract } from '@abw/badger-utils'
import process from 'node:process'

// Badger is based on the Badger Workspace base class
// https://abw.github.io/badger-js/docs/manual/workspace.html

export class Badger extends Workspace {
  constructor(dir, props) {
    super(dir, props)
    this.components = { }
    this.rootDir = props.rootDir
  }

  //-----------------------------------------------------------------------------
  // Config
  //-----------------------------------------------------------------------------
  envConfig(item) {
    // convert an item like 'db' to a regex like /^DB_/
    const regex = new RegExp(`^${item.toUpperCase()}_`)
    return extract(
      process.env,
      regex,
      { key: key => key.replace(regex, '').toLowerCase() }
    )
  }
  async deploymentConfig(deployment=process.env.DEPLOYMENT) {
    const config = await this.config(`deployment/${deployment}`)
    config.deployment = deployment
    return config
  }

  //-----------------------------------------------------------------------------
  // Misc
  //-----------------------------------------------------------------------------
  hello() {
    return 'Hello from the Badger workspace'
  }
}

export const badger = badgerUp(Badger)

export default badger

