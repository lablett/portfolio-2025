const BodyText = ({
  children,
  className = '',
}) => {
  // Split the text by double newlines and render each paragraph separately
  const paragraphs = typeof children === 'string' ? children.split('\n\n') : [children]

  return (
    <div className={className}>
      {paragraphs.map((paragraph, index) => (
        <p
          key={index}
          style={{
            color: '#D0D0D0',
            fontSize: '1rem',
            lineHeight: '1.6',
            margin: 0,
            marginBottom: '30px',
          }}
        >
          {paragraph}
        </p>
      ))}
    </div>
  )
}

export default BodyText
