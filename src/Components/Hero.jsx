import { motion } from 'framer-motion'

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: `
          radial-gradient(circle at 20% 80%, rgba(255, 107, 157, 0.3) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(118, 255, 163, 0.3) 0%, transparent 50%),
          radial-gradient(circle at 40% 40%, rgba(254, 200, 77, 0.3) 0%, transparent 50%),
          #1a1a1a
        `
      }}
    >
      {/* Scanning line effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute left-0 right-0 h-0.5 bg-light-text/10"
          style={{ animation: 'scan 4s linear infinite' }}
        />
      </div>

      {/* Grid overlay for depth */}
      <div
        className="absolute inset-0 opacity-100 pointer-events-none"
        style={{
          backgroundImage: `
            repeating-linear-gradient(0deg, transparent, transparent 40px, rgba(255, 255, 255, 0.03) 40px, rgba(255, 255, 255, 0.03) 41px),
            repeating-linear-gradient(90deg, transparent, transparent 40px, rgba(255, 255, 255, 0.03) 40px, rgba(255, 255, 255, 0.03) 41px)
          `
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1
            className="font-black uppercase"
            style={{
              fontSize: 'clamp(3rem, 12vw, 7rem)',
              lineHeight: '0.9',
              letterSpacing: '-0.05em',
              marginBottom: '1rem',
              background: 'linear-gradient(135deg, #FF6B9D, #FEC84D, #76FFA3, #FF6B9D)',
              backgroundSize: '200% 200%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              animation: 'gradient-shift 3s ease infinite',
              textShadow: '0 0 60px rgba(255, 107, 157, 0.5)'
            }}
          >
            Lucille Ablett
          </h1>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-black uppercase"
          style={{
            fontSize: '2rem',
            letterSpacing: '0.1em',
            marginBottom: '3rem',
            color: '#76FFA3',
            textShadow: '0 0 20px rgba(118, 255, 163, 0.5)'
          }}
        >
          Full-Stack Engineer
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <button
            onClick={scrollToAbout}
            className="inline-block font-black uppercase border-4 transition-all duration-300 hover:scale-105"
            style={{
              padding: '1.5rem 4rem',
              fontSize: '1.5rem',
              letterSpacing: '0.1em',
              background: 'linear-gradient(135deg, #FF6B9D, #FEC84D)',
              color: '#1a1a1a',
              borderColor: '#1a1a1a',
              boxShadow: '0 0 40px rgba(255, 107, 157, 0.5)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 0 60px rgba(255, 107, 157, 0.8)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0 0 40px rgba(255, 107, 157, 0.5)'
            }}
          >
            About Me
          </button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div
            className="w-6 h-10 border-2 rounded-full flex justify-center pt-2"
            style={{
              borderColor: '#76FFA3',
              boxShadow: '0 0 20px rgba(118, 255, 163, 0.4)'
            }}
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full"
              style={{
                backgroundColor: '#76FFA3',
                boxShadow: '0 0 10px rgba(118, 255, 163, 0.8)'
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
