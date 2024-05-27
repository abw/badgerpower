import React from 'react'

const CardLink = ({ href, Picture }) =>
  <a href={href} className="card surface hover pad-a-4 border bdr-2 shadow-1">
    <Picture/>
  </a>

export default CardLink