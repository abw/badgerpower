#!/usr/bin/env node
import { bin, setup } from '@abw/badger'

await setup({
  rootDir: bin().up(),
  writeEnv: true,
})