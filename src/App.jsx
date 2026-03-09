import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from './components/Hero'
import AppNavbar from './components/Navbar'
import './App.css'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experiences from './components/Experiences'
import Contact from './components/Contact'

function App() {
  return (
    <>
        <AppNavbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experiences />
        <Contact />

    </>
  );
}

export default App
