import React from 'react'

const Link = ({ url, text, children }) =>
  <div>
    <a href={url} className="larger">{url}</a>
    <p className="mar-t-none">
      {text || children}
    </p>
  </div>

export default Link