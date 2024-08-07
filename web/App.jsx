import React        from 'react'
import Header       from './site/Header.jsx'
import Content      from './site/Content.jsx'
import Footer       from './site/Footer.jsx'
import { useTheme } from '@abw/react-night-and-day'

export const App = () => {
  const { theme } = useTheme()

  return (
    <div id="site" data-theme={theme}>
      <Header/>
      <Content/>
      <Footer/>
    </div>
  )
}

export default App
