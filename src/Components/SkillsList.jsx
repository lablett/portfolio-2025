import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact, faPython, faGitAlt, faGithub, faHtml5, faCss3Alt, faDocker, faApple, faAndroid, faJsSquare } from '@fortawesome/free-brands-svg-icons'
import { faCode, faGem, faDatabase } from '@fortawesome/free-solid-svg-icons'
import { colors } from '@constants/colors'

const skillsList = [
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

const SkillsList = ({ isInView }) => {
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
    <div className="max-w-6xl w-full relative z-10">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="flex flex-wrap gap-5 justify-center"
      >
        {skillsList.map((skill) => (
          <motion.div
            key={skill.name}
            variants={itemVariants}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
            className="flex flex-col items-center gap-2.5 cursor-pointer px-3 py-4"
          >
            <motion.div
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
              style={{
                fontSize: '3rem',
                color: skill.color,
                filter: 'drop-shadow(0 0 8px rgba(255, 107, 157, 0.3))',
              }}
            >
              <FontAwesomeIcon icon={skill.icon} />
            </motion.div>
            <span className="text-xs font-semibold text-light-text/90">
              {skill.name}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default SkillsList
