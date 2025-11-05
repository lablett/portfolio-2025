// Primary color palette
export const colors = {
  hotPink: '#FF6B9D',
  neonGreen: '#76FFA3',
  gold: '#FEC84D',
  purple: '#9D7CF5',
  darkBg: '#0A0614',
}

// Helper function to convert hex to rgba
const colorWithAlpha = (hex, alpha = 0.9) => {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  return `rgba(${r}, ${g}, ${b}, ${alpha})`
}

// All gradients in one place
export const gradients = {
  // Multi-color gradients
  multi: `linear-gradient(135deg, ${colors.gold}, ${colors.hotPink}, ${colors.neonGreen})`,

  // Two-color gradients (camelCase)
  yellowOrange: `linear-gradient(135deg, ${colors.gold}, ${colors.hotPink})`,
  greenPurple: `linear-gradient(135deg, ${colors.neonGreen}, ${colors.purple})`,
  pinkYellow: `linear-gradient(135deg, ${colors.hotPink}, ${colors.gold})`,

  // Three-color gradients (camelCase)
  purplePink: `linear-gradient(135deg, ${colors.purple}, ${colors.hotPink}, ${colors.gold})`,
  greenYellow: `linear-gradient(135deg, ${colors.neonGreen}, ${colors.gold}, ${colors.hotPink})`,

  // Vertical gradients (scrollbar)
  scrollbar: `linear-gradient(180deg, ${colors.hotPink}, ${colors.purple})`,
  scrollbarHover: `linear-gradient(180deg, ${colors.gold}, ${colors.neonGreen})`,
}

// Button variants with gradients and glow colors
export const buttonVariants = {
  'pink-yellow': {
    gradient: `linear-gradient(135deg, ${colors.hotPink}, ${colors.gold})`,
    glowColor: colorWithAlpha(colors.hotPink, 0.5),
    glowColorHover: colorWithAlpha(colors.hotPink, 0.8),
  },
  'green-purple': {
    gradient: `linear-gradient(135deg, ${colors.neonGreen}, ${colors.purple})`,
    glowColor: colorWithAlpha(colors.neonGreen, 0.5),
    glowColorHover: colorWithAlpha(colors.neonGreen, 0.8),
  },
}

// Background masks
export const backgroundMasks = {
  hero: `linear-gradient(to bottom, ${colors.darkBg} 0%, transparent 0%, transparent 83.33%, ${colors.darkBg} 100%)`,
}

// Complex background gradients
export const backgroundGradients = {
  // Image card background
  imageCardBg: `linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)`,
}

export const backgrounds = {
  hero: `
    radial-gradient(circle at 20% 80%, ${colorWithAlpha(colors.hotPink, 0.3)} 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, ${colorWithAlpha(colors.neonGreen, 0.3)} 0%, transparent 50%),
    radial-gradient(circle at 40% 40%, ${colorWithAlpha(colors.gold, 0.3)} 0%, transparent 50%),
    ${colors.darkBg}
  `,
  about:`
    repeating-linear-gradient(0deg, transparent, transparent 40px, ${colorWithAlpha(colors.hotPink, 0.05)} 40px, ${colorWithAlpha(colors.hotPink, 0.05)} 41px),
    repeating-linear-gradient(90deg, transparent, transparent 40px, ${colorWithAlpha(colors.hotPink, 0.05)} 40px, ${colorWithAlpha(colors.hotPink, 0.05)} 41px),
    ${colors.darkBg}
  `,
  experience: `
    radial-gradient(circle at 50% 50%, ${colorWithAlpha(colors.neonGreen, 0.25)} 0%, ${colorWithAlpha(colors.neonGreen, 0.12)} 30%, transparent 60%),
    radial-gradient(circle at 30% 35%, ${colorWithAlpha(colors.gold, 0.08)} 0%, transparent 35%),
    radial-gradient(circle at 70% 65%, ${colorWithAlpha(colors.hotPink, 0.08)} 0%, transparent 35%),
    ${colors.darkBg}
  `,
}

export const gridPattern = `
    repeating-linear-gradient(0deg, transparent, transparent 40px, rgba(255, 255, 255, 0.03) 40px, rgba(255, 255, 255, 0.03) 41px),
    repeating-linear-gradient(90deg, transparent, transparent 40px, rgba(255, 255, 255, 0.03) 40px, rgba(255, 255, 255, 0.03) 41px)
  `

export { colorWithAlpha }
