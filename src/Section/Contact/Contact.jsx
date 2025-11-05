import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import Container from '@Components/Container'
import SectionTitle from '@Components/SectionTitle/SectionTitle'
import GradientButton from '@Components/GradientButton'
import './Contact.css'
import CenteredContent from '@Components/CenteredContent'
import SectionBackground from '@Components/SectionBackground/SectionBackground'

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const socials = [
    {
      name: 'GitHub',
      icon: faGithub,
      url: 'https://github.com/lablett',
    },
    {
      name: 'LinkedIn',
      icon: faLinkedin,
      url: 'https://linkedin.com/in/lucilleablett',
    },
    {
      name: 'Email',
      icon: faEnvelope,
      url: 'mailto:your.email@example.com',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15
      }
    }
  }

  return (
    <section
      id="contact"
      ref={ref}
      className="flex flex-col items-center justify-center py-10 px-6 relative overflow-hidden"
    >
      <SectionBackground type="contact" />
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle color="justGreen">
            Get In Touch
          </SectionTitle>
        </motion.div>
        <CenteredContent>
          <div className="max-w-4xl w-full relative z-10 flex flex-col items-center gap-16">

          {/* Social links */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="flex flex-wrap justify-center gap-32"
          >
            {socials.map((social) => (
              <motion.div
                key={social.name}
                variants={itemVariants}
              >
                <div className="neon-hologram-wrapper">
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="neon-hologram-btn"
                    title={social.name}
                  >
                    <FontAwesomeIcon
                      icon={social.icon}
                      className="text-4xl"
                    />
                  </a>
                </div>
                <div className="text-xs font-semibold text-light-text uppercase tracking-wider text-center mt-3">
                  {social.name}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Download CV button */}
          <GradientButton
            variant='greenPurple'
            onClick={console.log('click!')}
            delay={0.4}
          >
            Download CV
          </GradientButton>
          </div>
        </CenteredContent>
      </Container>
    </section>
  )
}

export default Contact
