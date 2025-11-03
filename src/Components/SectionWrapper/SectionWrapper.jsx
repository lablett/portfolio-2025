const SectionWrapper = ({ children, className = '' }) => {
  return (
    <div className={`max-w-6xl w-full relative z-10 ${className}`}>
      {children}
    </div>
  )
}

export default SectionWrapper
