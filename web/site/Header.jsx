import React from 'react'
import { Toggle } from '@abw/react-night-and-day'
import Menu from './Menu.jsx'

const Header = () =>
  <header>
    <div className="conform-tablet">
      <div className="flex space middle">
        <div>
          <a href="/">BadgerPower</a>
        </div>
        <div className="flex gap-4 middle">
          <Menu/>
          <Toggle/>
        </div>
      </div>
    </div>
  </header>

export default Header