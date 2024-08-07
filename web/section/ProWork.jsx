import React from 'react'
import Link  from '@/site/Link.jsx'

const ProWork = () =>
  <>
    <div className="full-width conform-tablet purple bgc-60 bgd-50 mar-t-12 mar-b-4">
      <h1 className="font-mono x3">Professional Work</h1>
    </div>
    <p>
      Some of the badger-powered commerical web sites I&apos;ve built in my
      professional capacity as a web designer, developer and systems architect.
    </p>
    <Link
      url="https://completelyretail.co.uk/"
      text="Retail property marketing and letting"
    />
    <Link
      url="https://lensesforhire.co.uk/"
      text="Lenses and camera equipment for hire"
    />
    <Link
      url="https://wardray-premise.com/"
      text="Radiation shielding and medical imaging accessories"
    />
  </>

export default ProWork