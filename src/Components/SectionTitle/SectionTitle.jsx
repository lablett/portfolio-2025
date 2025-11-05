import { gradients } from '@constants/colors'
import './SectionTitle.css'

export const SectionTitle = ({ children, color = 'pinkYellow' }) => {
  return (
    <div className="section-title-wrapper">
      <h2
        className={`section-title ${color}`}
        style={{
          backgroundImage: gradients[color],
        }}
      >
        {children}
      </h2>
    </div>
  )
}

export default SectionTitle
