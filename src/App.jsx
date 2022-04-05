import React,{useState} from 'react'
import {theme,darkTheme, globalStyles} from '../stitches.config'
import { Routes, Route } from 'react-router-dom'

//IMPORTS PAGES
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'

function App() {
  const [useTheme,setUseTheme] = useState('theme-default')

  globalStyles()

  return (
    <div className={['App'].join(' ')}>
      <Routes>
        <Route path='/'>
          <Route index path='/' element={<Login />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
