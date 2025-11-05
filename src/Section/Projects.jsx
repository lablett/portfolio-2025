import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Card from '@Components/Card/Card'
import CenteredContent from '@Components/CenteredContent'
import SectionTitle from '@Components/SectionTitle/SectionTitle'

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const projects = [
    {
      title: 'Project One',
      techStack: ['React', 'TypeScript', 'Python'],
      borderColor: 'pink',
    },
    {
      title: 'Project Two',
      techStack: ['React Native', 'Ruby', 'Git'],
      borderColor: 'green',
    },
    {
      title: 'Project Three',
      techStack: ['React', 'Python', 'CSS'],
      borderColor: 'yellow',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <section
      id="projects"
      ref={ref}
      className="min-h-screen flex flex-col items-center justify-center py-20 px-6 relative overflow-hidden"
    >
      {/* Scanning line effect */}
      <div
        className="absolute pointer-events-none"
        style={{ top: 0, left: 0, right: 0, height: '120vh' }}>
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-light-text/10"
          style={{ animation: 'scanVertical 4s linear infinite', animationDelay: '2s' }}
        />
      </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <SectionTitle color="purple-pink">
            Work
          </SectionTitle>
        </motion.div>


        <CenteredContent>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
            >
              <Card borderColor={project.borderColor}>
                <div className="flex flex-col h-full">
                  {/* Image placeholder - 60% height */}
                  <div className="h-60 bg-linear-to-br from-hot-pink/20 to-purple/20 flex items-center justify-center overflow-hidden mb-6">
                    <div className="text-6xl opacity-40">🖼️</div>
                  </div>

                  {/* Project info - 40% height */}
                  <div className="flex flex-col justify-between flex-1">
                    <div>
                      <h3 className="text-2xl font-bold text-light-text mb-4 uppercase tracking-wider">
                        {project.title}
                      </h3>
                    </div>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-light-text/10 border border-light-text/20 text-xs font-medium text-light-text/90 uppercase tracking-wide"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </CenteredContent>
    </section>
  )
}

export default Projects
