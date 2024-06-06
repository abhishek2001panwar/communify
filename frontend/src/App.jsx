import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import { Route, Routes } from 'react-router-dom'
import Contact from './components/Contact'
import Business from './components/Bussines'

function App() {
  return (
    <div>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/bussines" element={<Business />} />



    </Routes>

    </div>

  )
}

export default App