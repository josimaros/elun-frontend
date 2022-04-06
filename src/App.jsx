import React,{useState} from 'react'
import {theme,darkTheme, globalStyles} from '../stitches.config'
import { Routes, Route } from 'react-router-dom'

//IMPORTS PAGES
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Register from './pages/Register'
import Produtos from './pages/Produtos'

function App() {
  const [useTheme,setUseTheme] = useState('theme-default')

  globalStyles()

  return (
    <div className={['App'].join(' ')}>
      <Routes>
        <Route path='/'>
          <Route index element={<Login />} />
          <Route path='products' element={<Produtos />} />
          <Route path='categories' element={<Produtos />} />
          <Route path='register' element={<Register />} />
          <Route path='dashboard' element={<Dashboard />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
