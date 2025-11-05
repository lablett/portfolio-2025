import { gradients, colors } from '@constants/colors'

/**
 * SectionTitle Component
 *
 * Displays section headings with gradient outlines and optional scanline fill.
 *
 * @param {React.ReactNode} children - The title text
 * @param {string} color - Gradient color scheme ('pinkYellow', 'greenPurple', 'yellowOrange', 'purplePink', 'greenYellow', 'multi')
 * @param {string} variant - Rendering style ('gradient' = CSS fill, 'scanline' = SVG with scanlines)
 *
 * @example
 * // CSS gradient fill (original)
 * <SectionTitle color="greenPurple">Contact</SectionTitle>
 *
 * // SVG with neon glow and scanlines
 * <SectionTitle variant="scanline" color="greenPurple">Contact</SectionTitle>
 *
 * See SECTIONTITLE_USAGE.md for detailed documentation
 */

// Gradient color mappings for SVG
const gradientConfigs = {
  pinkYellow: {
    start: colors.hotPink,
    end: colors.gold,
  },
  greenPurple: {
    start: colors.neonGreen,
    end: colors.purple,
  },
  yellowOrange: {
    start: colors.gold,
    end: colors.hotPink,
  },
  purplePink: {
    start: colors.purple,
    end: colors.hotPink,
  },
  greenYellow: {
    start: colors.neonGreen,
    end: colors.gold,
  },
  multi: {
    start: colors.gold,
    end: colors.neonGreen,
  },
}

export const SectionTitle = ({ children, color = 'pinkYellow', variant = 'gradient' }) => {
  const config = gradientConfigs[color] || gradientConfigs.pinkYellow

  // For SVG variant with scanlines
  if (variant === 'scanline') {
    const uniqueId = `${color}-${Math.random().toString(36).substr(2, 9)}`

    return (
      <div style={{ marginBottom: '3rem', display: 'inline-block', width: '100%' }}>
        <svg
          viewBox="0 0 1000 200"
          style={{
            width: '100%',
            height: 'auto',
            maxWidth: '100%',
            display: 'block',
          }}
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            {/* Gradient stroke - 135deg angle matching design system */}
            <linearGradient
              id={`grad-${uniqueId}`}
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" style={{ stopColor: config.start, stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: config.end, stopOpacity: 1 }} />
            </linearGradient>

            {/* Scanline pattern - horizontal lines with 2px visible, 2px gap */}
            <pattern
              id={`scanlines-${uniqueId}`}
              patternUnits="userSpaceOnUse"
              width="4"
              height="4"
            >
              <line
                x1="0"
                y1="0"
                x2="4"
                y2="0"
                stroke="rgba(0, 0, 0, 0.25)"
                strokeWidth="2"
              />
            </pattern>

            {/* Neon glow filter */}
            <filter id={`glow-${uniqueId}`}>
              <feGaussianBlur stdDeviation="3" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Scanline fill - text with scanline pattern */}
          <text
            x="500"
            y="140"
            fontSize="120"
            fontWeight="900"
            textAnchor="middle"
            dominantBaseline="middle"
            fill={`url(#scanlines-${uniqueId})`}
            fontFamily="system-ui, -apple-system, sans-serif"
            letterSpacing="-2"
            style={{ textTransform: 'uppercase' }}
            filter={`url(#glow-${uniqueId})`}
          >
            {children}
          </text>

          {/* Gradient stroke outline - same text overlaid with stroke only */}
          <text
            x="500"
            y="140"
            fontSize="120"
            fontWeight="900"
            textAnchor="middle"
            dominantBaseline="middle"
            fill="none"
            stroke={`url(#grad-${uniqueId})`}
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            fontFamily="system-ui, -apple-system, sans-serif"
            letterSpacing="-2"
            style={{ textTransform: 'uppercase' }}
            filter={`url(#glow-${uniqueId})`}
          >
            {children}
          </text>
        </svg>
      </div>
    )
  }

  // Default CSS gradient variant (original behavior)
  return (
    <h2
      style={{
        fontSize: '5rem',
        fontWeight: 900,
        textTransform: 'uppercase',
        letterSpacing: '-0.03em',
        marginBottom: '3rem',
        background: gradients[color],
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundSize: '200% 200%',
        display: 'inline-block',
      }}
    >
      {children}
    </h2>
  )
}

export default SectionTitle
