import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import SideBarProvider from './providers/sideBarContext'
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <SideBarProvider>
        <App />
      </SideBarProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
