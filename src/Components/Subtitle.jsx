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
  style = {},
}) => {
  const textColor = colorMap[color] || colorMap['green']

  return (
    <h2
      className={`subtitle ${className}`}
      style={{
        color: textColor,
        fontSize: '1.1rem',
        fontWeight: 700,
        textTransform: 'uppercase',
        letterSpacing: '0.15em',
        marginBottom: '30px',
        ...style,
      }}
    >
      {children}
    </h2>
  )
}

export default Subtitle
