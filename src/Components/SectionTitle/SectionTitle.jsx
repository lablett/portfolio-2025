import { gradients } from '@constants/colors'

export const SectionTitle = ({ children, color = 'pinkYellow' }) => {
  return (
    <h2
      style={{
        fontSize: '5rem',
        fontWeight: 900,
        textTransform: 'uppercase',
        letterSpacing: '-0.03em',
        marginBottom: '3rem',
        background: gradients[color],
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundSize: '200% 200%',
        display: 'inline-block',
      }}
    >
      {children}
    </h2>
  )
}

export default SectionTitle
