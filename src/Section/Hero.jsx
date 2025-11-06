import { motion } from 'framer-motion'
import GradientButton from '@Components/GradientButton'
import Subtitle from '@Components/Subtitle'
import SectionBackground from '@Components/SectionBackground/SectionBackground'

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
      <section
          id='hero'
          className='relative h-[120vh] flex items-center justify-center'
      >
          <SectionBackground type="hero" />
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
              <Subtitle as='h2' color="green" className='text-6xl' style={{ marginBottom: "3rem" }}>
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
