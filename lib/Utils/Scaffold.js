import badger         from '../Badger.js'
import nunjucks       from 'nunjucks'
import { findFiles }  from './Filesystem.js'
import { timestamp }  from '@abw/badger-timestamp'
import { chmod }      from 'node:fs/promises'
import { green, grey, yellow } from '@abw/badger'

export async function scaffold(params) {
  const { root, src, lib, dest, options } = params
  const base      = src.path()
  const length    = base.length + 1
  const files     = await findFiles(src)
  const deploy    = await badger.deploymentConfig()
  const vars = {
    ...deploy,
    root
  }

  if (options.debug) {
    console.log(`deployment data:`, deploy)
    console.log('merged data', vars)
  }

  const env = nunjucks.configure(
    [
      src.path(),
      lib.path(),
    ],
    {
      autoescape: true
    }
  )
  env.addFilter(
    'pad',
    function(str, width, char=' ') {
      return str.padEnd(width, char)
    }
  )

  if (options.verbose || options.progress || options.debug) {
    console.log(
      '\nScaffolding files\n',
      grey('\n  from:'), yellow(src.path()),
      grey('\n  with:'), yellow(lib.path()),
      grey('\n    to:'), yellow(dest.path()),
      '\n'
    )
  }

  for (let file of files) {
    const path = file.path()
    const relt = path.slice(length)
    const out  = dest.file(relt)
    const now  = timestamp()
    const text = nunjucks.render(
      relt,
      {
        ...vars,
        template: {
          source:    path,
          output:    out.path(),
          generated: now.stamp(),
        }
      }
    )

    // make sure the output directory exists
    await out.directory().mustExist({ create: true })

    // write the output to the file
    await out.write(text)

    // copy the file permissions
    const stat = await file.stat()
    await chmod(out.path(), stat.mode)

    if (options.verbose || options.debug) {
      console.log(
        green(`  ✓ ${relt}`)
      )
      if (options.debug) {
        console.log(
          grey('    from:'), yellow(path),
          grey('\n      to:'), yellow(out.path())
        )
      }
    }
  }
}
