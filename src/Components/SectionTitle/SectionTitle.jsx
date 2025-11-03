const gradientMap = {
  'yellow-orange': 'linear-gradient(135deg, #FEC84D, #FF6B9D)',
  'purple-pink': 'linear-gradient(135deg, #9D7CF5, #FF6B9D, #FEC84D)',
  'green-yellow': 'linear-gradient(135deg, #76FFA3, #FEC84D, #FF6B9D)',
}

export const SectionTitle = ({ children, color = 'pink-yellow' }) => {
  return (
    <h2 
      style={{
        fontSize: '5rem',
        fontWeight: 900,
        textTransform: 'uppercase',
        letterSpacing: '-0.03em',
        marginBottom: '3rem',
        background: gradientMap[color],
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
