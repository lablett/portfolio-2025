import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import './Experience.css'
import SectionTitle from '@Components/SectionTitle/SectionTitle'
import CenteredContent from '@Components/CenteredContent'
import ExperienceTimeline from '@Components/ExperienceTimeline/ExperienceTimeline'
import Container from '@Components/Container'
import SectionBackground from '@Components/SectionBackground/SectionBackground'

const Experience = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
      <section
        id="experience"
        ref={ref}
        className="min-h-screen flex flex-col items-center justify-center py-10 relative overflow-hidden"
      >
      <SectionBackground type="experience" />
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
        <SectionTitle color='yellowOrange'>
            Experience
          </SectionTitle>
        </motion.div>

        <CenteredContent>
          <ExperienceTimeline />
        </CenteredContent>
      </Container>
    </section>
  )
}

export default Experience
