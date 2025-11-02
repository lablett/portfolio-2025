import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const projects = [
    {
      title: 'Project One',
      company: 'Company Name',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Built scalable solutions that impacted thousands of users.',
      techStack: ['React', 'TypeScript', 'Python', 'Docker'],
      gradient: 'from-hot-pink to-gold',
    },
    {
      title: 'Project Two',
      company: 'Company Name',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Developed innovative features that improved user engagement and system performance.',
      techStack: ['React Native', 'Ruby', 'Git'],
      gradient: 'from-purple to-hot-pink',
    },
    {
      title: 'Project Three',
      company: 'Company Name',
      description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum. Created robust architectures and implemented best practices across the codebase.',
      techStack: ['React', 'Python', 'CSS', 'HTML'],
      gradient: 'from-gold to-neon-green',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <section
      id="projects"
      ref={ref}
      className="min-h-screen flex items-center justify-center py-20 px-6 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-hot-pink/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple/10 rounded-full blur-3xl" />

      <div className="max-w-7xl w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            My{' '}
            <span className="bg-gradient-to-r from-hot-pink via-purple to-gold bg-clip-text text-transparent">
              Work
            </span>
          </h2>
          <p className="text-xl text-light-text/70">
            Projects I've contributed to in my professional journey
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              className="group"
            >
              <div className={`relative bg-dark-card border-2 border-light-text/10 group-hover:border-${project.gradient.split(' ')[0].replace('from-', '')}/50 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-electric-purple/20`}>
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Project image placeholder */}
                  <div className={`relative bg-linear-to-br ${project.gradient} p-1`}>
                    <div className="aspect-video bg-dark-bg/80 flex items-center justify-center">
                      <div className="text-8xl opacity-50">🖼️</div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-white/50 text-sm">Project Screenshot</span>
                      </div>
                    </div>
                  </div>

                  {/* Project details */}
                  <div className="p-8 flex flex-col justify-center">
                    <div className="mb-2">
                      <span className="text-sm text-sunshine-yellow font-semibold uppercase tracking-wider">
                        {project.company}
                      </span>
                    </div>

                    <h3 className={`text-3xl font-bold mb-4 bg-linear-to-r ${project.gradient} bg-clip-text text-transparent`}>
                      {project.title}
                    </h3>

                    <p className="text-light-text/70 mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-4 py-2 bg-light-text/5 border border-light-text/20 rounded-full text-sm font-medium text-light-text/90 hover:bg-light-text/10 hover:border-hot-pink/50 transition-all duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Hover gradient overlay */}
                <div className={`absolute inset-0 bg-linear-to-r ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`} />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
