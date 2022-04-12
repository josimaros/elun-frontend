import React,{useState} from 'react'
import {theme,darkTheme, globalStyles} from '../stitches.config'
import { Routes, Route } from 'react-router-dom'
import {useTheme} from './providers/themeContext'

//IMPORTS PAGES
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Register from './pages/Register'
import Produtos from './pages/Produtos'
import Category from './pages/Category'
import BotMessages from './pages/Bot/Mensagens'

function App() {
  const {isDark,setIsDark} = useTheme();

  globalStyles()

  return (
    <div className={['App', isDark && darkTheme].join(' ')}>
      <Routes>
        <Route path='/'>
          <Route index element={<Login />} />
          <Route path='products' element={<Produtos />} />
          <Route path='categories' element={<Category />} />
          <Route path='register' element={<Register />} />
          <Route path='dashboard' element={<Dashboard />} />
          <Route path="/bot">
            <Route path='messages' element={<BotMessages />} />
          </Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App
