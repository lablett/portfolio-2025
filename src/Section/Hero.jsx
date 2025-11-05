import { motion } from 'framer-motion'
import GradientButton from '@Components/GradientButton'
import Subtitle from '@Components/Subtitle'
import { backgrounds, backgroundMasks, gridPattern } from '@constants/colors'

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
      <section
          id='hero'
          className='relative h-[120vh] flex items-center justify-center'
          style={{
              background: backgrounds.hero,
          }}
      >
          {/* Top/bottom fade overlay */}
          <div
              className='absolute pointer-events-none'
              style={{
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: backgroundMasks.hero,
              }}
          />
          {/* Scanning line effect */}
          <div
              className='absolute pointer-events-none'
              style={{ top: 0, left: 0, right: 0, height: "120vh" }}
          >
              <div
                  className='absolute left-0 right-0 h-0.5 bg-light-text/10'
                  style={{ animation: "scanHorizontal 4s linear infinite" }}
              />
          </div>

          {/* Grid overlay for depth */}
          <div
              className='absolute opacity-100 pointer-events-none'
              style={{
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "120vh",
                  backgroundImage: gridPattern,
              }}
          />

          {/* Content */}
          <div
            className='text-center px-6'
            style={{
                position: "absolute",
                top: "50vh",
                left: "50%",
                transform: "translate(-50%, -50%)",
                zIndex: 10,
                width: "100%",
                maxWidth: "6xl",
            }}
          >
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
            >
              <h1
                  className='font-black uppercase'
                  style={{
                      fontSize: "clamp(3rem, 12vw, 7rem)",
                      lineHeight: "0.9",
                      letterSpacing: "-0.05em",
                      marginBottom: "1rem",
                      background:
                          "linear-gradient(135deg, #FF6B9D, #FEC84D, #76FFA3, #FF6B9D)",
                      backgroundSize: "200% 200%",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      animation: "gradient-shift 3s ease infinite",
                      textShadow: "0 0 60px rgba(255, 107, 157, 0.5)",
                  }}
              >
                  Lucille Ablett
              </h1>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Subtitle color="green" className='text-2xl' style={{ textShadow: "0 0 20px rgba(118, 255, 163, 0.5)", marginBottom: "3rem" }}>
                Software Engineer
              </Subtitle>
            </motion.div>

            <GradientButton onClick={scrollToAbout} delay={0.4}>
              About Me
            </GradientButton>
          </div>
      </section>
  );
}

export default Hero
