import { gradients } from '@constants/colors'

const sizeMap = {
  'small': {
    fontSize: '1.5rem',
    fontWeight: 900,
    marginBottom: '0.5rem',
  },
  'medium': {
    fontSize: '3.2rem',
    fontWeight: 900,
    marginBottom: '15px',
  },
  'large': {
    fontSize: '5rem',
    fontWeight: 900,
    marginBottom: '3rem',
  },
}

const GradientHeading = ({
  children,
  size = 'large',
  color = 'multi',
  className = '',
  as = 'h1',
}) => {
  const gradient = gradients[color] || gradients['multi']
  const sizeStyles = sizeMap[size] || sizeMap['large']
  const Element = as

  return (
    <Element
      className={`${className}`}
      style={{
        ...sizeStyles,
        background: gradient,
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        textTransform: 'uppercase',
        letterSpacing: '-0.03em',
        lineHeight: 1.1,
        display: 'inline-block',
      }}
    >
      {children}
    </Element>
  )
}

export default GradientHeading
