import { motion } from 'framer-motion'
import { colors, buttonVariants } from '@constants/colors'

const GradientButton = ({
  children,
  onClick,
  delay = 0,
  variant = 'pinkYellow',
  gradient,
  glowColor,
  glowColorHover,
  className = '',
  style = {},
}) => {
  const variantStyles = buttonVariants[variant] || buttonVariants['pinkYellow']
  const finalGradient = gradient || variantStyles.gradient
  const finalGlowColor = glowColor || variantStyles.glowColor
  const finalGlowColorHover = glowColorHover || variantStyles.glowColorHover
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
    >
      <button
        onClick={onClick}
        className={`inline-block uppercase border-4 transition-all duration-300 hover:scale-105 ${className}`}
        style={{
          padding: "0.875rem 2.5rem",
          fontSize: "0.875rem",
          background: finalGradient,
          color: "#1a1a1a",
          borderColor: "#1a1a1a",
          boxShadow: `0 0 40px ${finalGlowColor}`,
          textShadow: `0 0 1.1px ${colors.darkText}`,
          ...style,
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = `0 0 60px ${finalGlowColorHover}`;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = `0 0 40px ${finalGlowColor}`;
        }}
      >
        {children}
      </button>
    </motion.div>
  );
};

export default GradientButton;
