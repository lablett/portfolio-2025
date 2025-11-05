const BodyText = ({
  children,
  className = '',
}) => {
  return (
    <p
      className={`body-text ${className}`}
      style={{
        color: '#D0D0D0',
        fontSize: '1rem',
        lineHeight: '1.9',
        margin: 0,
        marginBottom: '30px',
      }}
    >
      {children}
    </p>
  )
}

export default BodyText
