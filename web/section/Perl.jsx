import React from 'react'
import Link  from '@/site/Link.jsx'

const Perl = () =>
  <>
    <div className="full-width conform-tablet blue bgc-60 bgd-50 mar-t-12 mar-b-4">
      <h1 className="font-mono x3">Perl</h1>
    </div>
    <p>
      The Perl Badger modules are still alive and well, but they&apos;re
      not really actively maintained any more.  Although I still have lots
      of old websites running Perl code, I do most of my development in
      Javascript these days.
    </p>
    <Link
      url="https://perl.badgerpower.com/"
      text="The old (pre-2024) badgerpower web site with documentation for the Perl Badger modules"
    />
    <Link
      url="https://github.com/abw/badger/"
      text="The github repository for the Perl Badger modules"
    />
    <Link
      url="https://github.com/abw/badger-database/"
      text="The github repository for the Perl Badger Database modules"
    />
  </>

export default Perl