import React from 'react'
import { DropdownMenu } from '@abw/badger-react-ui'

export const menuOptions = [
  { heading: 'Design & UI' },
  { url: '/badger-css/',          text: 'Badger CSS' },
  { url: '/badger-color/',        text: 'Badger Color' },
  { heading: 'Javascript - Front End' },
  { url: '/badger-react-ui/',     text: 'Badger React UI' },
  { url: '/badger-form/',         text: 'Badger Form' },
  { url: '/badger-icon/',         text: 'Badger Icon' },
  { heading: 'Javascript - Back End' },
  { url: '/badger-js/',           text: 'Badger JS' },
  { url: '/badger-database/',     text: 'Badger Database' },
  { url: '/badger-filesystem/',   text: 'Badger Filesystem' },
  { heading: 'Javascript - Isomorphic' },
  { url: '/badger-utils/',        text: 'Badger Utils' },
  { url: '/badger-timestamp/',    text: 'Badger Timestamp' },
  { heading: 'Javascript - Other' },
  { url: '/react-context/',       text: 'React Context' },
  { url: '/react-night-and-day/', text: 'React Night and Day' },
  { url: '/react-one-louder/',    text: 'React One Louder' },
  { heading: 'Perl' },
  { url: 'https://perl.badgerpower.com/',           text: 'Badgerpower Web Site' },
  { url: 'https://github.com/abw/badger/',          text: 'Badger Repository' },
  { url: 'https://github.com/abw/badger-database/', text: 'Badger::Database Repository' },
  { heading: 'Professional Work' },
  { url: 'https://completelyretail.co.uk/', text: 'Completely Retail' },
  { url: 'https://lensesforhire.co.uk/',    text: 'Lenses For Hire' },
  { url: 'https://wardray-premise.com/',    text:'Wardray Premise' },
  { heading: 'Other Sites' },
  { url: '/spinal-tapsum/', text: 'Spinal Tapsum' },
  { url: 'https://tt2.org/', text: 'Perl Template Toolkit' },
  { url: 'https://wardley.org/', text: 'Personal web site' },
  { url: 'https://wordley.wardley.org/', text: 'Wordley word search' },
]

const Menu = () => {
  const onSelect = option => {
    console.log(`select:`, option)
    window.open(option.url, '_blank')
  }
  return (
    <DropdownMenu
      text='Menu'
      iconLeft="angle-right"
      iconLeftRotate={90}
      options={menuOptions}
      onSelect={onSelect}
      optionClass="item no-hover indent-1"
      triggerClass="trigger no-focus"
      openOnHover right
    />
  )
}

export default Menu

/*
export const menuOptions = [
  { heading: 'Design & UI' },
  { url: '/badger-css/',          text: 'Badger CSS' },
  { url: '/badger-color/',        text: 'Badger Color' },
  { heading: 'Javascript - Front End' },
  { url: '/badger-react-ui/',     text: 'Badger React UI' },
  { url: '/badger-form/',         text: 'Badger Form' },
  { url: '/badger-icon/',         text: 'Badger Icon' },
  { heading: 'Javascript - Back End' },
  { url: '/badger-js/',           text: 'Badger JS' },
  { url: '/badger-database/',     text: 'Badger Database' },
  { url: '/badger-filesystem/',   text: 'Badger Filesystem' },
  { heading: 'Javascript - Isomorphic' },
  { url: '/badger-utils/',        text: 'Badger Utils' },
  { url: '/badger-timestamp/',    text: 'Badger Timestamp' },
  { heading: 'Javascript - Other' },
  { url: '/react-context/',       text: 'React Context' },
  { url: '/react-night-and-day/', text: 'React Night and Day' },
  { url: '/react-one-louder/',    text: 'React One Louder' },
]

*/