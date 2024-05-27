import React            from 'react'
import BadgerPower      from '@/svg/badger-power.svg?react'
import BadgerColor      from '@/svg/badger-color.svg?react'
import BadgerCSS        from '@/svg/badger-css.svg?react'
import BadgerDatabase   from '@/svg/badger-database.svg?react'
import BadgerFilesystem from '@/svg/badger-filesystem.svg?react'
import BadgerForm       from '@/svg/badger-form.svg?react'
import BadgerIcon       from '@/svg/badger-icon.svg?react'
import BadgerJS         from '@/svg/badger-js.svg?react'
import BadgerReactUI    from '@/svg/badger-react-ui.svg?react'
import BadgerUtils      from '@/svg/badger-utils.svg?react'
import BadgerTimestamp  from '@/svg/badger-timestamp.svg?react'
import OSS              from '@/svg/oss.svg?react'
import CardLink         from './CardLink.jsx'
import { Tiles }        from '@abw/badger-react-ui'
import Link from './Link.jsx'

export const App = () =>
  <div id="site">
    <div className="conform-tablet has-svgs">
      <BadgerPower/>
      <h1 className="x2 mar-v-8">
        Free software by Andy Wardley, for Andy Wardley
      </h1>
      <div className="flex gap-4 start stack-tablet">
        <div>
          <p className="large mar-t-none">
            This is Open Source Software and you&apos;re welcome to use it,
            but be warned that it is also Opinionated and Selfish Software.
          </p>
          <p>
            I wrote it for me to help me get my job done. It&apos;s free sofware
            (in both senses: <i>free speech</i> and <i>free beer</i>) but it
            comes &quot;AS IS&quot; with no warranty and no support.
          </p>
          <p>
            Sorry, but I don&apos;t have the time or inclination to help other
            people get their jobs done, unless they&apos;re my paying clients,
            work colleagues, family or close friends. So please be aware that
            you&apos;re on your own if you choose to use this software.
            If you&apos;re not comfortable with that then you probably
            shouldn&apos;t be using it.
          </p>
        </div>
        <div className="rigid split-3 text-center mar-t-2 mar-b-4">
          <OSS className="oss"/>
        </div>
      </div>
      <div className="full-width conform-tablet yellow bgc-60 mar-t-4">
        <h1 className="font-mono x3">Javascript</h1>
      </div>
      <h2 className="mar-b-1">Front End</h2>
      <div className="small">CSS, Javascript and React for the Browser</div>
      <Tiles gap="4" minWidth="256px" className="mar-v-6">
        <CardLink href="/badger-react-ui/" Picture={BadgerReactUI}/>
        <CardLink href="/badger-form/" Picture={BadgerForm}/>
        <CardLink href="/badger-css/" Picture={BadgerCSS}/>
        <CardLink href="/badger-icon/" Picture={BadgerIcon}/>
        <CardLink href="/badger-color/" Picture={BadgerColor}/>
      </Tiles>

      <h2 className="mar-b-1">Back End</h2>
      <div className="small">Javascript for Node.js on the Server</div>
      <Tiles gap="4" minWidth="256px" className="mar-v-6">
        <CardLink href="/badger-js/" Picture={BadgerJS}/>
        <CardLink href="/badger-database-js/" Picture={BadgerDatabase}/>
        <CardLink href="/badger-filesystem-js/" Picture={BadgerFilesystem}/>
      </Tiles>

      <h2 className="mar-b-1">Isomorphic</h2>
      <div className="small">Javascript for Front and Back End</div>
      <Tiles gap="4" minWidth="256px" className="mar-v-6">
        <CardLink href="/badger-utils/" Picture={BadgerUtils}/>
        <CardLink href="/badger-timestamp/" Picture={BadgerTimestamp}/>
      </Tiles>

      <h2 className="mar-b-1">Other JS Modules</h2>
      <div className="small">Sadly Lacking in Badgery Goodness</div>
      <p>
        These modules aren&apos;t badger-branded but come from the same badger
        sett.
      </p>
      <Link
        url="https://abw.github.io/react-context/"
        text="Wrapper of convenience for working with React contexts"
      />
      <Link
        url="https://abw.github.io/react-one-louder/"
        text="Theming engine for React components"
      />
      <Link
        url="https://github.com/abw/react-sometimes"
        text="Conditional rendering of React components based on a date/time range"
      />



      <div className="full-width conform-tablet blue bgc-60 mar-t-4 mar-b-2">
        <h1 className="font-mono x3">Perl</h1>
      </div>
      <p>
        The Perl Badger modules are still alive and well, but they&apos;re
        not really actively maintained any more.  Although I still have lots
        of old websites running Perl code I do most of my development in
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
    </div>
  </div>


export default App
