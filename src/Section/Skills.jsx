import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Container from '@Components/Container'
import CenteredContent from '@Components/CenteredContent'
import SectionTitle from '@Components/SectionTitle/SectionTitle'
import SkillsList from '@Components/SkillsList'
import SectionBackground from '@Components/SectionBackground/SectionBackground'
import { intersectionObserverMargin } from '@constants/navigation'

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: intersectionObserverMargin })

  return (
    <section
      id="skills"
      ref={ref}
      className="min-h-[75vh] flex flex-col items-center justify-center py-20 relative overflow-hidden"
    >
      <SectionBackground type="skills" />
      <Container>
        <div className="max-w-6xl w-full relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <SectionTitle color="greenYellow">
              Tech Stack
            </SectionTitle>
          </motion.div>
          <CenteredContent>
            <SkillsList isInView={isInView} />
          </CenteredContent>
        </div>
      </Container>
    </section>
  )
}

export default Skills
