import { gradients } from '@constants/colors'
import './SectionTitle.css'

export const SectionTitle = ({ children, color = 'pinkYellow' }) => {
  return (
    <h2
      className={`section-title ${color}`}
      style={{
        background: gradients[color],
      }}
    >
      {children}
    </h2>
  )
}

export default SectionTitle
