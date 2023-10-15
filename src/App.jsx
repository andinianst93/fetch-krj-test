import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home, Post, SinglePost } from './pages'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Post />}></Route>
        <Route path='/:id' element={<SinglePost />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
