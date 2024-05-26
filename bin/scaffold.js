#!/usr/bin/env node
import { bin, options } from '@abw/badger'
import { scaffold } from '../lib/Utils/Scaffold.js'

const config = await options({
  name:         'scaffold.js',
  version:      '0.0.1',
  description:  'Scaffold the project files.',
  verbose:      true,
  options: [
    {
      name:     'debug',
      short:    'd',
      about:    'Enable debugging',
      required: false,
    }
  ]
})

const rootDir = bin(import.meta.url).parent()
const scafDir = rootDir.dir('scaffold')
const destDir = rootDir

await scaffold({
  root:    rootDir,
  src:     scafDir.dir('src'),
  lib:     scafDir.dir('lib'),
  dest:    destDir,
  options: config,
})