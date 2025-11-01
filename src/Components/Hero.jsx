import { motion } from 'framer-motion'

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-linear-to-br from-energy-orange/20 via-electric-purple/20 to-spring-green/20 animate-gradient-shift bg-size-[400%_400%]" />

      {/* Floating orbs */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-sunshine-yellow/30 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-electric-purple/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyber-aqua/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            Hi, my name is{' '}
            <span className="bg-linear-to-r from-energy-orange via-sunshine-yellow to-electric-purple bg-clip-text text-transparent">
              Lucille
            </span>
          </h1>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl md:text-5xl font-semibold mb-12 text-light-text/90"
        >
          I'm a Full-Stack Engineer
        </motion.h2>

        <motion.button
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          onClick={scrollToAbout}
          className="group relative px-8 py-4 text-lg font-semibold bg-linear-to-r from-energy-orange to-electric-purple rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-electric-purple/50"
        >
          <span className="relative z-10">Find out more</span>
          <div className="absolute inset-0 bg-linear-to-r from-sunshine-yellow to-spring-green opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </motion.button>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-energy-orange rounded-full flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-energy-orange rounded-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
