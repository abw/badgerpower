import React from 'react'
import Design           from '../section/Design.jsx'
import Javascript       from '../section/Javascript.jsx'
import Perl             from '../section/Perl.jsx'
import ProWork          from '../section/ProWork.jsx'
import OtherSites       from '../section/OtherSites.jsx'
import Hero from '../section/Hero.jsx'
import Intro from '../section/Intro.jsx'

const Content = () =>
  <>
    <div className="conform-tablet has-svgs">
      <Hero/>
      <Intro/>
      <Design/>
      <Javascript/>
      <Perl/>
      <ProWork/>
      <OtherSites/>

    </div>
  </>

export default Content