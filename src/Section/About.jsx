import { useInView } from 'framer-motion'
import { useRef } from 'react'
import CenteredContent from '@Components/CenteredContent'
import Photo from '@Components/About/Photo'
import Bio from '@Components/About/Bio'
import Skills from '@Components/About/Skills'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      id="about"
      ref={ref}
      className="min-h-[80vh] flex items-center justify-center relative overflow-hidden"
      style={{
        background: `
          repeating-linear-gradient(0deg, transparent, transparent 40px, rgba(255, 107, 157, 0.015) 40px, rgba(255, 107, 157, 0.05) 41px),
          repeating-linear-gradient(90deg, transparent, transparent 40px, rgba(255, 107, 157, 0.015) 40px, rgba(255, 107, 157, 0.05) 41px),
          #0A0614
        `
      }}
    >
      <div className="max-w-6xl w-full px-10 py-32">
        <CenteredContent className="grid md:grid-cols-2 gap-32 items-center relative z-10">
          <Photo isInView={isInView} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <Bio isInView={isInView} />
            <Skills isInView={isInView} />
          </div>
        </CenteredContent>
      </div>
    </section>
  )
}

export default About
