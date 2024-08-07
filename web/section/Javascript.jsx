import React            from 'react'
import BadgerDatabase   from '@/svg/badger-database.svg?react'
import BadgerFilesystem from '@/svg/badger-filesystem.svg?react'
import BadgerForm       from '@/svg/badger-form.svg?react'
import BadgerIcon       from '@/svg/badger-icon.svg?react'
import BadgerJS         from '@/svg/badger-js.svg?react'
import BadgerReactUI    from '@/svg/badger-react-ui.svg?react'
import BadgerUtils      from '@/svg/badger-utils.svg?react'
import BadgerTimestamp  from '@/svg/badger-timestamp.svg?react'
import CardLink         from '@/site/CardLink.jsx'
import Link             from '@/site/Link.jsx'
import { Tiles }        from '@abw/badger-react-ui'

const Javascript = () =>
  <>
    <div className="full-width conform-tablet yellow bgc-60 bgd-50 mar-t-12 mar-b-4">
      <h1 className="font-mono x3">Javascript</h1>
    </div>
    <h2 className="mar-b-1">Front End</h2>
    <div className="small fgc-50">Javascript and React for the Browser</div>
    <Tiles gap="4" minWidth="256px" className="mar-v-6">
      <CardLink href="/badger-react-ui/" Picture={BadgerReactUI}/>
      <CardLink href="/badger-form/" Picture={BadgerForm}/>
      <CardLink href="/badger-icon/" Picture={BadgerIcon}/>
    </Tiles>

    <h2 className="mar-b-1">Back End</h2>
    <div className="small fgc-50">Javascript for Node.js on the Server</div>
    <Tiles gap="4" minWidth="256px" className="mar-v-6">
      <CardLink href="/badger-js/" Picture={BadgerJS}/>
      <CardLink href="/badger-database-js/" Picture={BadgerDatabase}/>
      <CardLink href="/badger-filesystem-js/" Picture={BadgerFilesystem}/>
    </Tiles>

    <h2 className="mar-b-1">Isomorphic</h2>
    <div className="small fgc-50">Javascript for Both Front and Back End</div>
    <Tiles gap="4" minWidth="256px" className="mar-v-6">
      <CardLink href="/badger-utils/" Picture={BadgerUtils}/>
      <CardLink href="/badger-timestamp/" Picture={BadgerTimestamp}/>
    </Tiles>

    <h2 className="mar-b-1">Other JS Modules</h2>
    <div className="small fgc-50">What!  No Badger?</div>
    <p>
      These modules aren&apos;t badger-branded but come from the same badger
      sett.
    </p>
    <Link
      url="/react-context/"
      text="Wrapper of convenience for working with React contexts"
    />
    <Link
      url="/react-night-and-day/"
      text="Theming engine for React components"
    />
    <Link
      url="/react-one-louder/"
      text="React library for switching between light and dark themes"
    />
    <Link
      url="https://github.com/abw/react-sometimes"
      text="Conditional rendering of React components based on a date/time range"
    />
  </>

export default Javascript