import React            from 'react'
import BadgerDatabase   from '@/svg/badger-database.svg?react'
import BadgerFilesystem from '@/svg/badger-filesystem.svg?react'
import BadgerForm       from '@/svg/badger-form.svg?react'
import BadgerIcon       from '@/svg/badger-icon.svg?react'
import BadgerWebsite    from '@/svg/badger-website.svg?react'
import BadgerJS         from '@/svg/badger-js.svg?react'
import BadgerReactUI    from '@/svg/badger-react-ui.svg?react'
import BadgerMaths      from '@/svg/badger-maths.svg?react'
import BadgerUtils      from '@/svg/badger-utils.svg?react'
import BadgerCodecs     from '@/svg/badger-codecs.svg?react'
import BadgerTimestamp  from '@/svg/badger-timestamp.svg?react'
import OneLouder        from '@/svg/one-louder.svg?react'
import ReactContext     from '@/svg/react-context.svg?react'
import ReactModel       from '@/svg/react-model.svg?react'
import NightAndDay      from '@/svg/night-and-day.svg?react'
import ReactSometimes   from '@/svg/react-sometimes.svg?react'
import CardLink         from '@/site/CardLink.jsx'
import MiniCardLink     from '@/site/MiniCardLink.jsx'
// import Link             from '@/site/Link.jsx'
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
      <CardLink href="/badger-icon/" Picture={BadgerIcon} ts/>
      <CardLink href="/badger-website/" Picture={BadgerWebsite}/>
    </Tiles>

    <h2 className="mar-b-1">Back End</h2>
    <div className="small fgc-50">Javascript for Node.js on the Server</div>
    <Tiles gap="4" minWidth="256px" className="mar-v-6">
      <CardLink href="/badger-js/" Picture={BadgerJS}/>
      <CardLink href="/badger-database-js/" Picture={BadgerDatabase}/>
      <CardLink href="/badger-filesystem-js/" Picture={BadgerFilesystem} ts/>
    </Tiles>

    <h2 className="mar-b-1">Isomorphic</h2>
    <div className="small fgc-50">Javascript for Both Front and Back End</div>
    <Tiles gap="4" minWidth="256px" className="mar-v-6">
      <CardLink href="/badger-utils/" Picture={BadgerUtils} ts/>
      <CardLink href="/badger-timestamp/" Picture={BadgerTimestamp} ts/>
      <CardLink href="/badger-maths/" Picture={BadgerMaths} ts/>
      <CardLink href="/badger-codecs-js/" Picture={BadgerCodecs} ts/>
    </Tiles>

    <h2 className="mar-b-1">Other JS Modules</h2>
    <div className="small fgc-50">What!  No Badger?</div>
    <p>
      These modules aren&apos;t badger-branded but come from the same badger
      sett.
    </p>
    <Tiles gap="4" minWidth="256px" className="mar-v-6">
      <MiniCardLink
        href="/react-model/"
        title="React Model"
        description="Simple state model using React context"
        Picture={ReactModel}
        ts
      />
      <MiniCardLink
        href="/react-context/"
        title="React Context"
        description="Wrapper of convenience for working with React contexts"
        Picture={ReactContext}
        ts
      />
      <MiniCardLink
        href="/react-one-louder/"
        title="React One Louder"
        description="Theming engine for React components"
        Picture={OneLouder}
        ts
      />
      <MiniCardLink
        href="/react-night-and-day/"
        title="React Night and Day"
        description="React library for switching between light and dark themes"
        Picture={NightAndDay}
        ts
      />
      <MiniCardLink
        href="https://github.com/abw/react-sometimes/"
        title="React Sometimes"
        description="Conditional rendering of React components based on a date/time range"
        Picture={ReactSometimes}
        ts
      />
    </Tiles>
  </>

export default Javascript