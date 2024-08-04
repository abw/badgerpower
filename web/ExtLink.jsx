import React from 'react'

const ExtLink = ({
  href,
  url=href,
  text,
  children
}) =>
  <a href={url} target="_blank" rel="noreferrer">{text||children}</a>

export default ExtLink
