import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import SectionTitle from '@Components/SectionTitle/SectionTitle'
import CenteredContent from '@Components/CenteredContent'
import ExperienceTimeline from '@Components/ExperienceTimeline/ExperienceTimeline'
import Container from '@Components/Container'
import SectionBackground from '@Components/SectionBackground/SectionBackground'
import { intersectionObserverMargin } from '@constants/navigation'

const Experience = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: intersectionObserverMargin })

  return (
      <section
        id="experience"
        ref={ref}
        className="flex flex-col items-center justify-center relative overflow-hidden"
      >
      <SectionBackground type="experience" />
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
        <SectionTitle as='h2' color='justGreen'>
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
