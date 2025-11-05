import './App.css'
import Hero from '@Section/Hero'
import About from '@Section/About'
import Skills from '@Section/Skills'
import Experience from '@Section/Experience/Experience'
import Projects from '@Section/Projects'
import Contact from '@Section/Contact/Contact'
import PartyModeToggle from '@Components/PartyModeToggle'

function App() {
  return (
    <>
      <Hero />
      <About />
      {/* <Skills /> */}
      <Experience />
      {/* <Projects /> */}
      <Contact />
      <PartyModeToggle />
    </>
  )
}

export default App
