import { motion } from 'framer-motion'
import { colors } from '@constants/colors'
import { animationDelays, transitionDuration } from '@constants/animations'
import './About.css'
import Subtitle from '../Subtitle'

const skillsList = ['React', 'JavaScript', 'TypeScript', 'Ruby', 'Python', 'HTML', 'CSS', 'SQL', 'iOS', 'Android',  'Git', 'GitHub', 'Docker']

const Skills = ({ isInView }) => {
  return (
    <div>
      <Subtitle as='h3' color='green'>
        Technologies
      </Subtitle>
      <div className="skills-grid">
        {skillsList.map((skill, index) => (
          <motion.div
            key={skill}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: transitionDuration.skills, delay: animationDelays.skillsBase + index * animationDelays.skillsIncrement }}
            className="skill-tag"
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Skills
