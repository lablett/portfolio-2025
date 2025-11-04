const SectionWrapper = ({ children, className = '' }) => {
  return (
    <div className={`max-w-8xl mx-auto relative z-10 ${className}`}>
      {children}
    </div>
  )
}

export default SectionWrapper
