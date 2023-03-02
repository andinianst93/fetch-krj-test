import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home, Post, SinglePost } from './pages'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/post' element={<Post />}></Route>
        <Route path='post/:id' element={<SinglePost />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
