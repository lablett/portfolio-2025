import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import './Experience.css'
import SectionTitle from './SectionTitle/SectionTitle'
import SectionWrapper from './SectionWrapper/SectionWrapper'
import ExperienceTimeline from './ExperienceTimeline/ExperienceTimeline'

const Experience = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      id="experience"
      ref={ref}
      className="min-h-[50vh] flex flex-col items-center justify-center py-20 px-6 relative overflow-hidden"
    >
      {/* Background decoration */}
      {/* <div className="absolute top-1/4 left-10 w-72 h-72 bg-gold/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-purple/10 rounded-full blur-3xl" /> */}

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6 }}
      >
        <SectionTitle color='yellow-orange'>
          Experience
        </SectionTitle>
      </motion.div>

      <SectionWrapper>
        <ExperienceTimeline />
      </SectionWrapper>
    </section>
  )
}

export default Experience
