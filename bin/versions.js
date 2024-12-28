#!/usr/bin/env node
// Script to extract the version numbers of all projects and write them
// to config/versions.json
import { bin } from '@abw/badger-filesystem'

const root = bin(import.meta.url).up()
const site = await root.file('config/site.yaml', { codec: 'auto' }).read()
const versions = { }

for (const project of site.projects) {
  versions[project] = await siteVersion(project)
}
const vfile = root.file('config/versions.json', { codec: 'auto' })
await vfile.write(versions)

console.log(`Wrote versions to ${vfile}`)

async function siteVersion(path) {
  const pkg = await root.dir(path).file('package.json', { codec: 'auto' }).read()
  return pkg.version
}
