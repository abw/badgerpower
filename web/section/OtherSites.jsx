import React from 'react'
import Link from '@/site/Link.jsx'

const OtherSites = () =>
  <>
    <div className="full-width conform-tablet maroon bgc-60 bgd-50 mar-t-12 mar-b-4">
      <h1 className="font-mono x3">Other Sites</h1>
    </div>
    <p>
      Some of the non-commerical web sites I&apos;ve built Just For Fun&trade;
    </p>
    <Link
      url="/spinal-tapsum/"
      text="Spinal Tapsum - it's one louder but none more black"
    />
    <Link
      url="https://tt2.org/"
      text="The Perl Template Toolkit is the grand-daddy of template processing software"
    />
    <Link
      url="https://wardley.org/"
      text="My (now very dated) personal web site, from the days when having a personal web site was a thing"
    />
    <Link
      url="https://wordley.wardley.org/"
      text="Word search for crossword solvers"
    />
  </>

export default OtherSites