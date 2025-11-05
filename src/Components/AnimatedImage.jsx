import { motion } from 'framer-motion'
import { backgroundGradients, colorWithAlpha } from '@constants/colors'

const AnimatedImage = ({
  src,
  alt,
  borderColor,
  containerClassName = 'flex justify-center',
  isInView = true,
  delay = 0.1,
}) => {
  const glowColor = colorWithAlpha(borderColor, 0.9)
  const scanlineColor = colorWithAlpha(borderColor, 0.08)

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
            background: backgroundGradients.imageCardBg,
            boxShadow: `
              0 0 80px ${glowColor},
              inset 0 0 40px ${colorWithAlpha(borderColor, 0.15)}
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
