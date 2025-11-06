const colorMap = {
  'green': '#76FFA3',
  'gold': '#FEC84D',
  'purple': '#9D7CF5',
  'pink': '#FF6B9D',
}

const Subtitle = ({
  children,
  color = 'green',
  className = '',
  as = 'h2',
  style = {},
}) => {
  const textColor = colorMap[color] || colorMap['green']
  const Element = as

  return (
    <Element
      className={`subtitle ${className}`}
      style={{
        color: textColor,
        textShadow: "0 0 20px rgba(118, 255, 163, 0.5)",
        textTransform: 'uppercase',
        letterSpacing: '0.15em',
        marginBottom: '30px',
        ...style,
      }}
    >
      {children}
    </Element>
  )
}

export default Subtitle
