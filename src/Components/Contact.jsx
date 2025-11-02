import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const socials = [
    {
      name: 'GitHub',
      icon: faGithub,
      url: 'https://github.com/yourusername',
      color: 'hover:text-neon-green',
      bgColor: 'group-hover:border-neon-green',
    },
    {
      name: 'LinkedIn',
      icon: faLinkedin,
      url: 'https://linkedin.com/in/yourusername',
      color: 'hover:text-purple',
      bgColor: 'group-hover:border-purple',
    },
    {
      name: 'Email',
      icon: faEnvelope,
      url: 'mailto:your.email@example.com',
      color: 'hover:text-gold',
      bgColor: 'group-hover:border-gold',
    },
    {
      name: 'Twitter',
      icon: faTwitter,
      url: 'https://twitter.com/yourusername',
      color: 'hover:text-hot-pink',
      bgColor: 'group-hover:border-hot-pink',
    },
    {
      name: 'Instagram',
      icon: faInstagram,
      url: 'https://instagram.com/yourusername',
      color: 'hover:text-gold',
      bgColor: 'group-hover:border-gold',
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
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Let's{' '}
            <span className="bg-gradient-to-r from-hot-pink via-purple to-gold bg-clip-text text-transparent">
              Connect
            </span>
          </h2>
          <p className="text-xl text-light-text/70 mb-16 max-w-2xl mx-auto">
            I'm always open to new opportunities, collaborations, and conversations.
            Feel free to reach out!
          </p>
        </motion.div>

        {/* Social links */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-wrap justify-center gap-6 mb-16"
        >
          {socials.map((social) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              whileHover={{ scale: 1.1, rotate: [0, -10, 10, 0] }}
              whileTap={{ scale: 0.95 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-linear-to-br from-hot-pink/20 to-purple/20 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300 opacity-0 group-hover:opacity-100" />

              <div className={`relative bg-dark-card border-2 border-light-text/10 ${social.bgColor} rounded-2xl p-6 transition-all duration-300 hover:shadow-2xl`}>
                <FontAwesomeIcon
                  icon={social.icon}
                  className={`text-5xl text-light-text/70 ${social.color} transition-all duration-300`}
                />
                <div className="mt-3 text-sm font-semibold text-light-text/80 group-hover:text-light-text transition-colors">
                  {social.name}
                </div>
              </div>
            </motion.a>
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
