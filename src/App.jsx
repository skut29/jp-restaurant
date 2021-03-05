import React, { useState } from 'react'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Menu from './components/Menu/Menu'
import Footer from './components/Footer/Footer'
import './App.css'

function App() {

  return (
    <div className="App">
      <Header />
      <Hero />
      <Menu />
      <Footer />
    </div>
  )
}

export default App
