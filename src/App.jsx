import './App.css'
import Hero from '@Section/Hero'
import About from '@Section/About'
import Experience from '@/Section/Experience'
import Projects from '@Section/Projects'
import Contact from '@Section/Contact/Contact'
import Footer from '@Components/Footer/Footer'

function App() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      {/* <Projects /> */}
      <Contact />
      <Footer />
    </>
  )
}

export default App
