import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import SectionTitle from './SectionTitle/SectionTitle'
import './Contact.css'

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const socials = [
    {
      name: 'GitHub',
      icon: faGithub,
      url: 'https://github.com/yourusername',
    },
    {
      name: 'LinkedIn',
      icon: faLinkedin,
      url: 'https://linkedin.com/in/yourusername',
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
      className="min-h-screen flex items-center justify-center py-20 px-6 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-1/3 right-20 w-96 h-96 bg-hot-pink/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/3 left-20 w-80 h-80 bg-purple/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />

      <div className="max-w-4xl w-full relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle color="green-purple">
            Connect
          </SectionTitle>
        </motion.div>

        {/* Social links */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-wrap justify-center gap-32 mb-16"
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
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <a
            href="/path-to-your-cv.pdf"
            download
            className="group inline-block relative px-8 py-4 text-lg font-semibold bg-linear-to-r from-hot-pink to-purple rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple/50"
          >
            <span className="relative z-10">Download CV</span>
            <div className="absolute inset-0 bg-linear-to-r from-gold to-neon-green opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
        </motion.div>

        {/* Fun closing message */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-light-text/50 text-sm"
        >
          Built with 💚 and vibrant energy
        </motion.p>
      </div>
    </section>
  )
}

export default Contact
