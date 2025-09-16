import React from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>

      <NavBar />
      <Hero/> 
      <About/>
      <Skills />
      <Projects />
      <Services />
      <Contact />
      <Footer />
    </div>
  )
}

export default App