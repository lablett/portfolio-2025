const SectionWrapper = ({ children, className = '' }) => {
  return (
    <div className={`mx-auto relative z-10 ${className}`}>
      {children}
    </div>
  )
}

export default SectionWrapper
