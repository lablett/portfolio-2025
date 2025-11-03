import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Card from './Card/Card'
import SectionWrapper from './SectionWrapper/SectionWrapper'
import SectionTitle from './SectionTitle/SectionTitle'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      id="about"
      ref={ref}
      className="min-h-screen flex items-center justify-center py-20 px-6 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-hot-pink/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-neon-green/10 rounded-full blur-3xl" />

      <SectionWrapper>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle color='yellow-orange'>
            About Me
          </SectionTitle>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card type='photo' borderColor='pink'>
              {/* Profile image */}
              <img
                src="/src/assets/profile-photo-transparent.png"
                alt="Profile"
                className="aspect-square object-cover w-full h-full"
              />
            </Card>
          </motion.div>

          {/* About text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <Card borderColor="green" className="p-6 bg-light-bg/50 backdrop-blur-md">
              {'Software engineer with commercial experience building web and mobile applications, building on a broader technical background of geology and data science. I care about code quality, user experience, and working with great teams to solve meaningful problems. Seeking a remote-first role with a collaborative, purpose-driven organisation.'}
            </Card>
          </motion.div>
        </div>
      </SectionWrapper>
    </section>
  )
}

export default About
