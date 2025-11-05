import { useInView } from 'framer-motion'
import { useRef } from 'react'
import CenteredContent from '@Components/CenteredContent'
import Photo from '@Components/About/Photo'
import Bio from '@Components/About/Bio'
import Skills from '@Components/About/Skills'
import SectionBackground from '@Components/SectionBackground/SectionBackground'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      id="about"
      ref={ref}
      className="min-h-[80vh] flex flex-col items-center justify-center relative overflow-hidden"
    >
      <SectionBackground type="about" />
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
