import AnimatedImage from '@Components/AnimatedImage'
import { colors } from '@constants/colors'
import { animationDelays } from '@constants/animations'

const Photo = ({ isInView }) => {
  return (
    <AnimatedImage
      src="/src/assets/green.png"
      alt="Profile"
      borderColor={colors.hotPink}
      isInView={isInView}
      delay={animationDelays.photo}
    />
  )
}

export default Photo
