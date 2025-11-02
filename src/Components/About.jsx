import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      id="about"
      ref={ref}
      className="min-h-screen flex items-center justify-center py-20 px-6 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-hot-pink/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-neon-green/10 rounded-full blur-3xl" />

      <div className="max-w-6xl w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-12 text-center">
            About{' '}
            <span className="bg-gradient-to-r from-hot-pink via-gold to-purple bg-clip-text text-transparent">
              Me
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-hot-pink to-purple rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-50" />
            <div className="relative bg-dark-card rounded-2xl overflow-hidden border-2 border-hot-pink/30 group-hover:border-neon-green/50 transition-all duration-300">
              {/* Placeholder for profile image */}
              <div className="aspect-square bg-gradient-to-br from-hot-pink/20 via-purple/20 to-gold/20 flex items-center justify-center">
                <div className="text-6xl">📸</div>
              </div>
            </div>
          </motion.div>

          {/* About text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <p className="text-lg md:text-xl text-light-text/80 leading-relaxed">
              [Your bio goes here! This is where you'll share your story, background, and what drives you as a developer.]
            </p>
            <p className="text-lg md:text-xl text-light-text/80 leading-relaxed">
              [Add more about your passions, interests in tech, and what makes you unique. Don't forget to mention your love for nature, raves, and creative expression!]
            </p>
            <p className="text-lg md:text-xl text-light-text/80 leading-relaxed">
              [Maybe mention your neurodivergent perspective and how it enhances your problem-solving abilities and creative approach to development.]
            </p>

            {/* Fun facts or highlights */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="bg-dark-card border-2 border-gold/30 rounded-xl p-4 hover:border-gold hover:scale-105 transition-all duration-300">
                <div className="text-3xl mb-2">🎨</div>
                <div className="text-sm text-gold font-semibold">Creative Coder</div>
              </div>
              <div className="bg-dark-card border-2 border-neon-green/30 rounded-xl p-4 hover:border-neon-green hover:scale-105 transition-all duration-300">
                <div className="text-3xl mb-2">🌿</div>
                <div className="text-sm text-neon-green font-semibold">Nature Lover</div>
              </div>
              <div className="bg-dark-card border-2 border-hot-pink/30 rounded-xl p-4 hover:border-hot-pink hover:scale-105 transition-all duration-300">
                <div className="text-3xl mb-2">🎵</div>
                <div className="text-sm text-hot-pink font-semibold">Rave Enthusiast</div>
              </div>
              <div className="bg-dark-card border-2 border-purple/30 rounded-xl p-4 hover:border-purple hover:scale-105 transition-all duration-300">
                <div className="text-3xl mb-2">🧠</div>
                <div className="text-sm text-purple font-semibold">Neurodivergent</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
