import React from 'react'
import NavBar from './components/NavBar'
import Home from './components/Home'
import SocialLinks from './components/SocialLinks'
import About from './components/About'
import Projects from './components/Projects'
import Toolkit from './components/Toolkit'

function App() {
  return (
  <div>
    <NavBar />
    <Home />
    <About />
    <Projects />
    <Toolkit />

    <SocialLinks />
  </div>
  )
}

export default App
