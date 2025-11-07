import { motion } from 'framer-motion'
import { intersectionObserverMargin } from '@constants/navigation'
import './ExperienceCard.css'

const colorMap = {
  'neon-green': '#76FFA3',
  'purple': '#9D7CF5',
  'hot-pink': '#FF6B9D',
  'gold': '#FEC84D',
}

const ExperienceCard = ({
  year,
  title,
  company,
  location,
  color = 'neon-green',
  index = 0,
}) => {
  const borderColor = colorMap[color] || colorMap['neon-green']

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
      },
    },
  }

  return (
    <motion.div
      className="experience-item"
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: intersectionObserverMargin }}
    >
      <div
        className="experience-year"
        style={{ color: borderColor }}
      >
        {year}
      </div>
      <div
        className="experience-card"
        style={{
          '--bracket-color': borderColor,
        }}>
        <div
          className="experience-bracket-tl"
          style={{ borderColor }}
        />
        <div
          className="experience-bracket-tr"
          style={{ borderColor }}
        />
        <div className="experience-top-left">
          <div
            className="experience-title"
            style={{ color: borderColor }}
          >
            {title}
          </div>
          <div className="experience-company">
            {company}
          </div>
        </div>
        <div className="experience-location">
          {location}
        </div>
        <div
          className="experience-bracket-bl"
          style={{ borderColor }}
        />
        <div
          className="experience-bracket-br"
          style={{ borderColor }}
        />
      </div>
    </motion.div>
  )
}

export default ExperienceCard
