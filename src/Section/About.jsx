import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { colors } from '@constants/colors'
import CenteredContent from '@Components/CenteredContent'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const skills = ['React', 'JavaScript', 'TypeScript', 'iOS', 'Android', 'Ruby', 'Python', 'PostgreSQL', 'Git', 'GitHub', 'HTML', 'CSS', 'Docker']

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
          {/* Photo Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex justify-center"
          >
            <motion.div
              animate={{ y: [-30, 0, -30] }}
              transition={{ duration: 5, ease: "easeInOut", repeat: Infinity }}
              className="relative"
            >
              <div
                className="aspect-square w-full max-w-sm border-4 flex items-center justify-center text-6xl overflow-hidden relative"
                style={{
                  borderColor: colors.hotPink,
                  background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
                  boxShadow: `
                    0 0 80px rgba(255, 107, 157, 0.9),
                    inset 0 0 40px rgba(255, 107, 157, 0.15)
                  `
                }}
              >
                {/* Scanline effect */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255, 107, 157, 0.08) 2px, rgba(255, 107, 157, 0.08) 4px)'
                  }}
                />
                <img
                  src="/src/assets/profile-photo-transparent.png"
                  alt="Profile"
                  className="aspect-square object-cover w-full h-full relative z-10"
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
          >
            <div>
              <h1
                style={{
                  fontSize: '3.2rem',
                  fontWeight: 900,
                  textTransform: 'uppercase',
                  marginBottom: '15px',
                  background: 'linear-gradient(135deg, #FEC84D, #FF6B9D, #76FFA3)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  letterSpacing: '-0.03em',
                  lineHeight: 1.1
                }}
              >
                Lucille Ablett
              </h1>
              <h2
                style={{
                  color: '#76FFA3',
                  fontSize: '1.1rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.15em',
                  marginBottom: '30px'
                }}
              >
                Full Stack Developer
              </h2>
            </div>

            <p style={{ color: '#D0D0D0', fontSize: '1rem', lineHeight: '1.9', marginBottom: '30px', margin: 0 }}>
              I'm a software engineer specializing in full-stack development. My mission is to create technology that matters—products that are both beautiful and purposeful, from the frontend to the backend.
            </p>

            {/* Technologies Section */}
            <div>
              <div
                style={{
                  color: '#FEC84D',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  marginBottom: '15px'
                }}
              >
                Technologies
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.05 }}
                    style={{
                      padding: '10px 16px',
                      background: 'rgba(76, 255, 163, 0.1)',
                      border: '2px solid #76FFA3',
                      color: '#76FFA3',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      boxShadow: '0 0 15px rgba(118, 255, 163, 0.3)',
                      cursor: 'pointer'
                    }}
                    whileHover={{
                      boxShadow: '0 0 30px rgba(118, 255, 163, 0.6)',
                      scale: 1.05
                    }}
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </CenteredContent>
      </div>
    </section>
  )
}

export default About
