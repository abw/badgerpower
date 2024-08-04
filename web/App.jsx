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
import Link             from './Link.jsx'
import ExtLink          from './ExtLink.jsx'
import { Icon, Tiles, Warning } from '@abw/badger-react-ui'

export const App = () =>
  <div id="site">
    <div className="conform-tablet has-svgs">
      <div className="full-width conform-tablet grey bgc-50 pad-v-16">
        <BadgerPower/>
      </div>
      <h1 className="x2 mar-t-8 mar-b-none">
        Free software by Andy Wardley, for Andy Wardley
      </h1>
      <div className="small fgc-50">(but you can use it too)</div>
      <div className="flex gap-4 start stack-tablet mar-t-8">
        <div>
          <p className="larger mar-t-none">
            This is <span className="weight-600">Open Source Software</span> and
            you&apos;re welcome to use it, but be warned that it is also{' '}
            <span className="weight-600">Opinionated and Selfish Software</span>.
            I wrote it for me to help me get my job done.
          </p>
          <p className="large">
            It&apos;s free sofware
            in <strike>both</strike> all three senses: <i>free beer</i>,{' '}
            <i>free speech</i> and <i>free weekend</i>. You don&apos;t have
            to pay anything to use it (that&apos;s the <i>free beer</i> part).
            You can do what you like with it within reason (that&apos;s the{' '}
            <i>free speech</i> part). But be warned that it comes comes
            &quot;AS IS&quot; with no warranty and no support.  Sorry, but I
            have no desire to give up my free time to provide free support to
            help other people get their jobs done
            <Icon name="asterisk-shrink=6-up=4" color="blue-50"/> (that&apos;s
            the <i>free weekend</i> part).
          </p>
          <p className="large">
            So please be aware that
            you&apos;re on your own if you choose to use this software.
            If you&apos;re not comfortable with that then you probably
            shouldn&apos;t be using it.
          </p>
        </div>
        <div className="rigid split-3 text-center mar-t-2 mar-b-4">
          <OSS className="oss"/>
        </div>
      </div>
      <div className="small mar-b-4 flex gap-2 bgc-100 pad-4">
        <Icon name="asterisk-shrink=6-up=1" color="blue-50"/>{' '}
        <div>
          That&apos;s not to say I <i>won&apos;t</i> help if you ask
          nicely, particularly if you&apos;re a hobbyist, working on another
          Open Source project, or someone coding for a good cause.  But if
          you&apos;re expecting professional support then you should expect
          to pay for it.  Feel free to contact me for a quote.
        </div>
      </div>
      <Warning
        icon="exclamation"
        border radius
        title="People who share their source code do not owe you anything!"
      >
        <div className="flex space gap-2 middle">
          <div>
            Free as in <ExtLink href="https://en.wiktionary.org/wiki/free_as_in_beer" text="beer"/>,
            free as in <ExtLink href="https://en.wiktionary.org/wiki/free_as_in_speech" text="speech"/>,
            free as in <ExtLink href="https://freeasinweekend.org/open-source-open-mind" text="weekend"/>{' '}
          </div>
          <div className="text-right smaller">
            <Icon name="thumb"/>{' '}
            Thanks <ExtLink href="https://dylanbeattie.net/" text="Dylan"/>!
          </div>
        </div>
      </Warning>

      <div className="full-width conform-tablet yellow bgc-60 mar-t-12 mar-b-4">
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



      <div className="full-width conform-tablet blue bgc-60 mar-t-12 mar-b-4">
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

      <div className="full-width conform-tablet purple bgc-60 mar-t-12 mar-b-4">
        <h1 className="font-mono x3">Other Sites</h1>
      </div>
      <Link
        url="https://abw.github.io/spinal-tapsum/"
        text="Spinal Tapsum - it's one louder but none more black"
      />

      <footer className="full-width conform-tablet grey bgc-50 mar-t-20 mar-b-none pad-v-4 fgc-90">
        <div>
          &copy; Andy Wardley from the dawn of time until the end of days
        </div>
      </footer>
    </div>
  </div>


export default App
