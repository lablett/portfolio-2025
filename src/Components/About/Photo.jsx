import AnimatedImage from '@Components/AnimatedImage'
import { colors } from '@constants/colors'
import { animationDelays } from '@constants/animations'
import greenImage from '@/assets/green.png'

const Photo = ({ isInView }) => {
  return (
    <AnimatedImage
      src={greenImage}
      alt="Profile"
      borderColor={colors.hotPink}
      isInView={isInView}
      delay={animationDelays.photo}
    />
  )
}

export default Photo
