import React from 'react'
import TSLogo  from '@/svg/tslogo.svg?react'
import { classes } from '@abw/badger-react-ui'

const CardLink = ({ href, Picture, ts }) =>
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
  </a>

export default CardLink