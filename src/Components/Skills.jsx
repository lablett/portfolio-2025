import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact, faPython, faGitAlt, faGithub, faHtml5, faCss3Alt, faDocker, faApple, faAndroid, faJsSquare } from '@fortawesome/free-brands-svg-icons'
import { faCode, faGem, faDatabase } from '@fortawesome/free-solid-svg-icons'
import SectionTitle from './SectionTitle/SectionTitle'
import { colors } from '../constants/colors'

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const skills = [
    { name: 'React', icon: faReact, color: colors.hotPink },
    { name: 'JavaScript', icon: faJsSquare, color: colors.gold },
    { name: 'TypeScript', icon: faCode, color: colors.purple },
    { name: 'iOS', icon: faApple, color: colors.gold },
    { name: 'Android', icon: faAndroid, color: colors.neonGreen },
    { name: 'Ruby', icon: faGem, color: colors.hotPink },
    { name: 'Python', icon: faPython, color: colors.gold },
    { name: 'PostgreSQL', icon: faDatabase, color: colors.purple },
    { name: 'Git', icon: faGitAlt, color: colors.neonGreen },
    { name: 'GitHub', icon: faGithub, color: colors.neonGreen },
    { name: 'HTML', icon: faHtml5, color: colors.hotPink },
    { name: 'CSS', icon: faCss3Alt, color: colors.purple },
    { name: 'Docker', icon: faDocker, color: colors.purple },
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
          <SectionTitle color="green-yellow">
            Tech Stack
          </SectionTitle>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-wrap gap-5 justify-center"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              className="flex flex-col items-center gap-2.5 transition-all duration-300 hover:scale-110"
            >
              <div
                className="transition-all duration-300 hover:scale-125"
                style={{
                  fontSize: '3rem',
                  color: skill.color,
                  filter: 'drop-shadow(0 0 8px rgba(255, 107, 157, 0.3))',
                }}
              >
                <FontAwesomeIcon icon={skill.icon} />
              </div>
              <span className="text-xs font-semibold text-light-text/90">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
