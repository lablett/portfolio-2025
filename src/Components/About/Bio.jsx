import { motion } from 'framer-motion'
import GradientHeading from '@Components/GradientHeading'
import Subtitle from '@Components/Subtitle'
import BodyText from '@Components/BodyText'
import { bioData } from '@constants/bio'
import { animationDelays, transitionDuration } from '@constants/animations'

const Bio = ({ isInView }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
      transition={{ duration: transitionDuration.standard, delay: animationDelays.bio }}
      style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
    >
      <div>
        <GradientHeading size="medium" color="multi">
          {bioData.name}
        </GradientHeading>
        <Subtitle color="green" style={{fontSize: '24px', lineHeight: '0.9', marginBottom: '18px'}}>
          {bioData.title}
        </Subtitle>
      </div>
      <BodyText>
        {bioData.description}
      </BodyText>
    </motion.div>
  )
}

export default Bio
