/**
 * BackgroundMask - Fade mask layer (layer 4, front-most)
 * Renders fade/blend effects like top/bottom fading
 */
const BackgroundMask = ({ type }) => (
  <div className={`section-bg-mask section-bg-mask-${type}`} />
)

export default BackgroundMask
