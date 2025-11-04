import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import './Experience.css'
import SectionTitle from './SectionTitle/SectionTitle'
import SectionWrapper from './SectionWrapper/SectionWrapper'
import ExperienceCard from './ExperienceCard'

const Experience = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const experiences = [
    {
      year: '2009',
      title: 'MGeol Geology with Geophysics',
      company: 'University of Leicester',
      location: 'Leicester, UK',
      color: 'neon-green'
    },
    {
      year: '2013',
      title: 'Mine Geologist',
      company: 'First Quantum Minerals',
      location: 'Zambia',
      color: 'neon-green'
    },
    {
      year: '2016',
      title: 'MSc Geospatial Analytics',
      company: 'University College London',
      location: 'London, UK',
      color: 'purple'
    },
    {
      year: '2018',
      title: 'Data Scientist',
      company: 'Anglo American',
      location: 'London, UK',
      color: 'purple'
    },
    {
      year: '2020',
      title: 'Software Engineer',
      company: '60 Decibels',
      location: 'Remote, UK',
      color: 'hot-pink'
    },
    {
      year: '2021',
      title: 'Software Engineer',
      company: 'Olio',
      location: 'Remote, UK',
      color: 'gold'
    }
  ]

  return (
    <section
      id="skills"
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
        <div className="experience-timeline">
          <div className="experience-timeline-line"></div>
          <div className="experience-items">
            {experiences.map((exp, index) => (
              <ExperienceCard
                key={index}
                year={exp.year}
                title={exp.title}
                company={exp.company}
                location={exp.location}
                color={exp.color}
                index={index}
              />
            ))}
          </div>
        </div>
      </SectionWrapper>
    </section>
  )
}

export default Experience
