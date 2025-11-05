import './SectionBackground.css'
import BackgroundColor from './BackgroundColor'
import BackgroundGradient from './BackgroundGradient'
import BackgroundPattern from './BackgroundPattern'
import BackgroundScanline from './BackgroundScanline'
import BackgroundMask from './BackgroundMask'

/**
 * SectionBackground - Centralized background component for all sections
 * Composes multiple background layers in proper z-index order:
 * 1. Color (back)
 * 2. Gradient
 * 3. Pattern
 * 4. Scanline
 * 5. Mask (front)
 *
 * @param {string} type - Background type: 'hero', 'about', 'experience', 'projects', 'contact', 'skills'
 */
const SectionBackground = ({ type = 'default' }) => (
  <div className="section-bg">
    <BackgroundColor type={type} />
    <BackgroundGradient type={type} />
    <BackgroundPattern type={type} />
    <BackgroundScanline type={type} />
    <BackgroundMask type={type} />
  </div>
)

export default SectionBackground
