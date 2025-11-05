import { motion } from 'framer-motion'

// Helper function to convert hex color to rgba
const hexToRgba = (hex, alpha = 0.9) => {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  return `rgba(${r}, ${g}, ${b}, ${alpha})`
}

const AnimatedImage = ({
  src,
  alt,
  borderColor,
  containerClassName = 'flex justify-center',
  isInView = true,
  delay = 0.1,
}) => {
  const glowColor = hexToRgba(borderColor, 0.9)
  const scanlineColor = hexToRgba(borderColor, 0.08)

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
      transition={{ duration: 0.6, delay }}
      className={containerClassName}
    >
      <motion.div
        animate={{ y: [-30, 0, -30] }}
        transition={{ duration: 5, ease: "easeInOut", repeat: Infinity }}
        className="relative"
      >
        <div
          className="aspect-square w-full max-w-sm border-4 flex items-center justify-center text-6xl overflow-hidden relative"
          style={{
            borderColor,
            background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
            boxShadow: `
              0 0 80px ${glowColor},
              inset 0 0 40px ${hexToRgba(borderColor, 0.15)}
            `
          }}
        >
          {/* Scanline effect */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `repeating-linear-gradient(0deg, transparent, transparent 2px, ${scanlineColor} 2px, ${scanlineColor} 4px)`
            }}
          />
          <img
            src={src}
            alt={alt}
            className="aspect-square object-cover w-full h-full relative z-10"
          />
        </div>
      </motion.div>
    </motion.div>
  )
}

export default AnimatedImage
