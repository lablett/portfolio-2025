import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faFileLines } from '@fortawesome/free-solid-svg-icons'
import Container from '@Components/Container'
import SectionTitle from '@Components/SectionTitle/SectionTitle'
import './Contact.css'
import CenteredContent from '@Components/CenteredContent'
import SectionBackground from '@Components/SectionBackground/SectionBackground'
import Subtitle from '@/Components/Subtitle'
import { downloadCV } from '@/utils/downloadHandler'
import ContactForm from '@Components/ContactForm/ContactForm'
import { SOCIAL_LINKS } from '@constants/socials'
import { intersectionObserverMargin } from '@constants/navigation'

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: intersectionObserverMargin })
  const socials = [
    {
      name: 'GitHub',
      icon: faGithub,
      url: import.meta.env.VITE_GITHUB_URL,
    },
    {
      name: 'LinkedIn',
      icon: faLinkedin,
      url: import.meta.env.VITE_LINKEDIN_URL,
    },
    {
      name: 'CV',
      icon: faFileLines,
      isCV: true,
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
      className="min-h-screen flex flex-col items-center justify-center align-center relative overflow-hidden"
    >
      <SectionBackground type="contact" />
      <Container>
        <CenteredContent>
          <div className="w-full relative z-10 flex flex-col items-center align-gap-18">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6 }}
          >
            <SectionTitle color="justGreen">
              Get In Touch
            </SectionTitle>
          </motion.div>
          {/* Social links */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="flex flex-row flex-wrap justify-center items-center gap-8 md:gap-32 social-links-container"
          >
            {socials.map((social) => (
              <motion.div
                key={social.name}
                variants={itemVariants}
                className="flex flex-col items-center"
              >
                <div className="neon-hologram-wrapper">
                  {social.isCV ? (
                    <button
                      onClick={downloadCV}
                      className="neon-hologram-btn"
                      title={social.name}
                    >
                      <FontAwesomeIcon
                        icon={social.icon}
                        className="text-4xl"
                      />
                    </button>
                  ) : (
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
                  )}
                </div>
                <div className="text-center" style={{ marginTop: '24px' }}>
                  <Subtitle as='h3' color='neonGreen'>
                    {social.name}
                  </Subtitle>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Form */}
          <ContactForm isInView={isInView} />
          </div>
        </CenteredContent>
      </Container>
    </section>
  )
}

export default Contact
