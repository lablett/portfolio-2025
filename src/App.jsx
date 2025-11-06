import './App.css'
import Hero from '@Section/Hero'
import About from '@Section/About'
import Skills from '@Section/Skills'
import Experience from '@/Section/Experience'
import Projects from '@Section/Projects'
import Contact from '@Section/Contact/Contact'
import Footer from '@Components/Footer/Footer'
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
      <Footer />
      {/* <PartyModeToggle /> */}
    </>
  )
}

export default App
