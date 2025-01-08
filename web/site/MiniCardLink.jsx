import React from 'react'
import TSLogo  from '@/svg/tslogo.svg?react'
import { classes } from '@abw/badger-react-ui'
import { projectVersion } from './Versions.jsx'

const MiniCardLink = ({ href, Picture, title, description, ts }) => {
  const version = projectVersion(href)
  return (
    <a
      href={href}
      className={classes('card mini surface hover pad-a-4 border bdr-2 shadow-1', { ts })}
      target="_blank" rel="noreferrer"
    >
      <div className="grid-3 gap-4 pad-b-4">
        <div className="pad">
          <Picture/>
        </div>
        <div className="blurb cols-2">
          <h3 className="mar-t-none mar-b-2">{title}</h3>
          {description}
        </div>
      </div>
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

export default MiniCardLink