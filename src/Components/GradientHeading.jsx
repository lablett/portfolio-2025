const gradientMap = {
  'multi': 'linear-gradient(135deg, #FEC84D, #FF6B9D, #76FFA3)',
  'yellow-orange': 'linear-gradient(135deg, #FEC84D, #FF6B9D)',
  'purple-pink': 'linear-gradient(135deg, #9D7CF5, #FF6B9D, #FEC84D)',
  'green-yellow': 'linear-gradient(135deg, #76FFA3, #FEC84D, #FF6B9D)',
  'green-purple': 'linear-gradient(135deg, #76FFA3, #9D7CF5)',
}

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
  const gradient = gradientMap[color] || gradientMap['multi']
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
