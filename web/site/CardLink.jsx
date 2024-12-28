import React from 'react'
import TSLogo  from '@/svg/tslogo.svg?react'
import { classes } from '@abw/badger-react-ui'
import { projectVersion } from './Versions.jsx'

const CardLink = ({ href, Picture, ts }) => {
  const version = projectVersion(href)
  return (
    <a
      href={href}
      className={classes('card surface hover pad-a-4 border bdr-2 shadow-1', { ts })}
      target="_blank" rel="noreferrer"
    >
      <Picture/>
      { ts &&
        <div
          className="tslogo"
          data-tooltip="top right"
          aria-label="Typescript"
        >
          <TSLogo/>
        </div>
      }
      { version &&
        <div className="version">
          v{version}
        </div>
      }
    </a>
  )
}

export default CardLink