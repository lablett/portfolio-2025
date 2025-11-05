import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Container from '@Components/Container'
import SectionWrapper from '@Components/SectionWrapper'
import SectionTitle from '@Components/SectionTitle/SectionTitle'
import SkillsList from '@Components/SkillsList'

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      id="skills"
      ref={ref}
      className="min-h-[75vh] flex flex-col items-center justify-center py-20 relative overflow-hidden"
    >
      {/* Background decoration */}
      {/* <div className="absolute top-1/4 left-10 w-72 h-72 bg-gold/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-purple/10 rounded-full blur-3xl" /> */}

      <Container>
        <div className="max-w-6xl w-full relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <SectionTitle color="green-yellow">
              Tech Stack
            </SectionTitle>
          </motion.div>
          <SectionWrapper>
            <SkillsList isInView={isInView} />
          </SectionWrapper>
        </div>
      </Container>
    </section>
  )
}

export default Skills
