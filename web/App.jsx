import React from 'react'
import BadgerCSS      from '@/svg/badger-css.svg?react'
import BadgerForm     from '@/svg/badger-form.svg?react'
import BadgerIcon     from '@/svg/badger-icon.svg?react'
import BadgerColor    from '@/svg/badger-color.svg?react'
import BadgerReactUI  from '@/svg/badger-react-ui.svg?react'
import { Tiles }      from '@abw/badger-react-ui'

function App() {
  return (
    <div className="conform-tablet">
      <h1 className="mar-b-none">Badger Power</h1>
      <p className="large">
        Software built by Andy Wardley, for Andy Wardley.
      </p>
      <p className="mar-t-none">
        You&apos;re welcome to use it, but you do so at your own risk.
      </p>
      <h2 className="mar-b-1">Front End</h2>
      <div className="small">CSS, Javascript and React</div>
      <Tiles gap="4" minWidth="200px" className="mar-v-6">
        <CardLink href="/badger-react-ui/" Picture={BadgerReactUI}/>
        <CardLink href="/badger-form/" Picture={BadgerForm}/>
        <CardLink href="/badger-css/" Picture={BadgerCSS}/>
        <CardLink href="/badger-icon/" Picture={BadgerIcon}/>
        <CardLink href="/badger-color/" Picture={BadgerColor}/>
      </Tiles>
    </div>
  )
}

const CardLink = ({ href, Picture }) =>
  <a href={href} className="card surface hover pad-a-4 border bdr-2 shadow-1">
    {/* target="_blank" rel="noreferrer"> */}
    <Picture/>
  </a>

export default App
