import React    from 'react'
import OSS      from '@/svg/oss.svg?react'
import ExtLink  from '@/site/ExtLink.jsx'
import { Icon, Warning } from '@abw/badger-react-ui'

const Intro = () =>
  <>
    <h1 className="x2 mar-t-8 mar-b-1">
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
          <i>free speech</i> part). But be warned that it comes
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
    <div className="small mar-b-4 flex gap-2 bgc-95 bdr-1 bgd-20 pad-4">
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
  </>

export default Intro