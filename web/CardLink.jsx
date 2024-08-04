import React from 'react'

const CardLink = ({ href, Picture }) =>
  <a
    href={href}
    className="card surface hover pad-a-4 border bdr-2 shadow-1"
    target="_blank" rel="noreferrer"
  >
    <Picture/>
  </a>

export default CardLink