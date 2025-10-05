import React, { useEffect, useState } from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Loader from './components/Loading'

const App = () => {
const [Loading,setLoading]= useState(true);

useEffect(()=>{
  const timer = setTimeout(()=>{
    setLoading(false);
  },2000);
  return(()=>{
    clearTimeout(timer);
  })
})

if(Loading)
  return <Loader/>

  return (
    <div className='header'>

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