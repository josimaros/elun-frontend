import React,{useState} from 'react'
import {theme,darkTheme, globalStyles} from '../stitches.config'
import { Routes, Route } from 'react-router-dom'

//IMPORTS PAGES
import Dashboard from './pages/Dashboard'

function App() {
  const [useTheme,setUseTheme] = useState('theme-default')

  globalStyles()

  return (
    <div className={['App'].join(' ')}>
      <Routes>
        <Route index path='/' element={<Dashboard />} />
      </Routes>
    </div>
  )
}

export default App
