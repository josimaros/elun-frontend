import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import SideBarProvider from './providers/sideBarContext'
import ThemeProvider from './providers/themeContext'
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <SideBarProvider>
        <ThemeProvider>
        <App />
        </ThemeProvider>
      </SideBarProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
