import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const PartyModeToggle = () => {
  const [isPartyMode, setIsPartyMode] = useState(false)

  useEffect(() => {
    if (isPartyMode) {
      document.body.classList.add('party-mode')
      // Add rainbow gradient background
      document.body.style.backgroundImage = 'linear-gradient(45deg, #FF6B9D, #FEC84D, #9D7CF5, #76FFA3)'
      document.body.style.backgroundSize = '400% 400%'
      document.body.style.animation = 'gradient-shift 3s ease infinite'
    } else {
      document.body.classList.remove('party-mode')
      document.body.style.backgroundImage = ''
      document.body.style.backgroundSize = ''
      document.body.style.animation = ''
    }
  }, [isPartyMode])

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
      className="fixed bottom-8 right-8 z-50"
    >
      <button
        onClick={() => setIsPartyMode(!isPartyMode)}
        className={`group relative w-16 h-16 rounded-full overflow-hidden transition-all duration-300 ${
          isPartyMode
            ? 'bg-linear-to-r from-hot-pink via-purple to-neon-green animate-pulse-glow scale-110'
            : 'bg-dark-card border-2 border-hot-pink/30 hover:border-hot-pink'
        } hover:scale-110 shadow-2xl`}
        aria-label="Toggle Party Mode"
      >
        <div className="absolute inset-0 flex items-center justify-center">
          {isPartyMode ? (
            <motion.span
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="text-3xl"
            >
              🎉
            </motion.span>
          ) : (
            <span className="text-3xl group-hover:animate-float">🪩</span>
          )}
        </div>

        {/* Pulsing rings for party mode */}
        {isPartyMode && (
          <>
            <motion.div
              animate={{
                scale: [1, 2],
                opacity: [0.5, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeOut"
              }}
              className="absolute inset-0 rounded-full border-4 border-sunshine-yellow"
            />
            <motion.div
              animate={{
                scale: [1, 2],
                opacity: [0.5, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeOut",
                delay: 0.5
              }}
              className="absolute inset-0 rounded-full border-4 border-neon-green"
            />
          </>
        )}
      </button>

      {/* Tooltip */}
      <div className="absolute bottom-20 right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="bg-dark-card border-2 border-hot-pink/50 rounded-lg px-4 py-2 whitespace-nowrap">
          <span className="text-sm font-semibold text-light-text">
            {isPartyMode ? 'Exit Party Mode' : 'Party Mode 🎊'}
          </span>
        </div>
      </div>
    </motion.div>
  )
}

export default PartyModeToggle
