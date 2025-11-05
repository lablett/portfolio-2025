import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import './Experience.css'
import SectionTitle from '@Components/SectionTitle/SectionTitle'
import CenteredContent from '@Components/CenteredContent'
import ExperienceTimeline from '@Components/ExperienceTimeline/ExperienceTimeline'
import Container from '@Components/Container'
import ExperienceBG from '@Components/ExperienceBG/ExperienceBG'

const Experience = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <div className="relative">
      <ExperienceBG />
      <section
        id="experience"
        ref={ref}
        className="min-h-screen flex flex-col items-center justify-center py-20 relative z-10"
      >
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
        <SectionTitle color='yellow-orange'>
            Experience
          </SectionTitle>
        </motion.div>

        <CenteredContent>
          <ExperienceTimeline />
        </CenteredContent>
      </Container>
    </section>
    </div>
  )
}

export default Experience
