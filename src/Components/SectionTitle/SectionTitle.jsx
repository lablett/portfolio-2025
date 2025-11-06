import { colors } from '@constants/colors'
import './SectionTitle.css'
import Subtitle from '../Subtitle'

export const SectionTitle = ({ children, color = 'justGreen' }) => {
  const colorMap = {
    green: colors.neonGreen,
    gold: colors.gold,
    purple: colors.purple,
    pink: colors.hotPink,
  }

  const textColor = colorMap[color] || colorMap['green']

  return (
    <div className="section-title-wrapper">
      <Subtitle as='h2'
        className="section-title"
        style={{
          color: textColor,
          textShadow: `0 0 20px ${textColor}99, 0 0 40px ${textColor}66, 0 0 50px rgba(157, 124, 245, 0.3)`,
        }}
      >
        {children}
      </Subtitle>
    </div>
  )
}

export default SectionTitle
