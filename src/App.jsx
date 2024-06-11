import { useState } from 'react'

import { NavbarDefault } from './components/NavbarDefault'
import Hero from './components/Hero'
import  Navbar from '../src/components/Navbar'
import Benefits from './components/Benefits'
import Menu from './components/Menu'
import Login from './pages/Login'
import Testimonials from './pages/Testimonials'
import Footer from './pages/Footer'



function App() {

  return (
    <>
    <Navbar/>
    {/* <NavbarDefault/> */}
    {/* <Hero/> */}
    <Benefits/>
    <Testimonials/>
    {/* <Menu/> */}
    <Footer/>
    </>
  )
}

export default App
