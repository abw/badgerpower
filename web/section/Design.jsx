import React        from 'react'
import CardLink     from '@/site/CardLink.jsx'
import BadgerCSS    from '@/svg/badger-css.svg?react'
import BadgerColor  from '@/svg/badger-color.svg?react'
import { Tiles }    from '@abw/badger-react-ui'

const Design = () =>
  <>
    <div className="full-width conform-tablet orange bgc-60 bgd-50 mar-t-12 mar-b-4">
      <h1 className="font-mono x3">Design &amp; UI</h1>
    </div>
    <h2 className="mar-b-1">Design Systems</h2>
    <div className="small fgc-50">Tools for the discerning web designer</div>

    <Tiles gap="4" minWidth="256px" className="mar-v-6">
      <CardLink href="/badger-css/" Picture={BadgerCSS}/>
      <CardLink href="/badger-color/" Picture={BadgerColor}/>
    </Tiles>
  </>

export default Design