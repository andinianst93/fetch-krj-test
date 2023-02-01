import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Post from './pages/post'
import './App.css'

function App() {
 

  return (
    <BrowserRouter>
    <Routes>
    
   
      <Route path='/post' element={<Post />}></Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App
