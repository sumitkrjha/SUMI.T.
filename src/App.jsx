import React from 'react'
import "./App.css"
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Project from './components/Project'

const App = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <Skills/>
      <Project/>
    </>
  )
}

export default App