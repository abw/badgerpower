import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ThemeProvider } from '@abw/react-night-and-day'
import '@/styles/badgerpower.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider storageKey="theme">
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
