/**
 * BackgroundColor - Color layer (layer 0, back-most)
 * Sets the base background color for a section
 */
const BackgroundColor = ({ type }) => (
  <div className={`section-bg-color section-bg-color-${type}`} />
)

export default BackgroundColor
