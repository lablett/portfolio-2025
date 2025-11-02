import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact, faPython, faGitAlt, faHtml5, faCss3Alt, faDocker } from '@fortawesome/free-brands-svg-icons'
import { faCode } from '@fortawesome/free-solid-svg-icons'

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const skills = [
    { name: 'React', icon: faReact, color: 'text-purple' },
    { name: 'React Native', icon: faReact, color: 'text-hot-pink' },
    { name: 'TypeScript', icon: faCode, color: 'text-gold' },
    { name: 'Python', icon: faPython, color: 'text-neon-green' },
    { name: 'Ruby', icon: faCode, color: 'text-hot-pink' },
    { name: 'Git', icon: faGitAlt, color: 'text-neon-green' },
    { name: 'HTML', icon: faHtml5, color: 'text-gold' },
    { name: 'CSS', icon: faCss3Alt, color: 'text-purple' },
    { name: 'Docker', icon: faDocker, color: 'text-neon-green' },
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
    hidden: { opacity: 0, y: 30, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  }

  return (
    <section
      id="skills"
      ref={ref}
      className="min-h-screen flex items-center justify-center py-20 px-6 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-gold/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-purple/10 rounded-full blur-3xl" />

      <div className="max-w-6xl w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            My{' '}
            <span className="bg-gradient-to-r from-hot-pink via-gold to-purple bg-clip-text text-transparent">
              Tech Stack
            </span>
          </h2>
          <p className="text-xl text-light-text/70">
            Technologies I love working with
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-hot-pink/20 to-purple/20 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300 opacity-0 group-hover:opacity-100" />

              <div className="relative bg-dark-card border-2 border-light-text/10 group-hover:border-hot-pink/50 rounded-2xl p-8 flex flex-col items-center justify-center gap-4 transition-all duration-300 hover:shadow-2xl hover:shadow-purple/20">
                <FontAwesomeIcon
                  icon={skill.icon}
                  className={`text-6xl ${skill.color} group-hover:animate-float transition-all duration-300`}
                />
                <span className="text-lg font-semibold text-light-text/90 group-hover:text-light-text transition-colors">
                  {skill.name}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
