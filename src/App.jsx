import React from 'react'
import "./App.css"
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Project from './components/Project'
import Education from './components/Education'
import OpenSource from './components/OpenSource'

const App = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <Skills/>
      <Project/>
      <Education/>
      <OpenSource/>
    </>
  )
}

export default App