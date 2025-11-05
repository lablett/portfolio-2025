/**
 * BackgroundPattern - Pattern layer (layer 2)
 * Renders grid or static scanline patterns
 */
const BackgroundPattern = ({ type }) => (
  <div className={`section-bg-pattern section-bg-pattern-${type}`} />
)

export default BackgroundPattern
