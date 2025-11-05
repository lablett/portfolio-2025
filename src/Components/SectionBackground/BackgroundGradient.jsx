/**
 * BackgroundGradient - Gradient layer (layer 1)
 * Renders radial or linear gradients specific to each section type
 */
const BackgroundGradient = ({ type }) => (
  <div className={`section-bg-gradient section-bg-gradient-${type}`} />
)

export default BackgroundGradient
