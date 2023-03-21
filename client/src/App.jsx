import React from 'react'
import { Home, CreatePost } from './pages'
import { BrowserRouter, Link, Router } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <Home />
      <CreatePost />
    </BrowserRouter>
  )
}

export default App
