import React from 'react'
import './App.css'
import Home from './pages/Home'
import Blog from './pages/Blog'
import {  BrowserRouter as Router,  Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div className="container">
    <Router>
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/blog/:id" element={<Blog/>} />
    </Routes>
    </Router>
    </div>
  )
}

export default App
