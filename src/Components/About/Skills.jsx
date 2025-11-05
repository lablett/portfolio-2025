import { motion } from 'framer-motion'
import { colors } from '@constants/colors'
import { animationDelays, transitionDuration } from '@constants/animations'
import './About.css'

const skillsList = ['React', 'JavaScript', 'TypeScript', 'iOS', 'Android', 'Ruby', 'Python', 'PostgreSQL', 'Git', 'GitHub', 'HTML', 'CSS', 'Docker']

const Skills = ({ isInView }) => {
  return (
    <div>
      <div className="skills-label">
        Technologies
      </div>
      <div className="skills-grid">
        {skillsList.map((skill, index) => (
          <motion.div
            key={skill}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: transitionDuration.skills, delay: animationDelays.skillsBase + index * animationDelays.skillsIncrement }}
            className="skill-tag"
            whileHover={{
              boxShadow: `0 0 30px ${colors.neonGreen}`,
              scale: 1.05
            }}
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Skills
