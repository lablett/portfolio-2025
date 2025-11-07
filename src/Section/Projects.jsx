import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Card from '@Components/Card/Card'
import CenteredContent from '@Components/CenteredContent'
import SectionTitle from '@Components/SectionTitle/SectionTitle'
import GradientHeading from '@Components/GradientHeading'
import SectionBackground from '@Components/SectionBackground/SectionBackground'
import { projects as projectsData } from '@/data/projects'
import { intersectionObserverMargin } from '@constants/navigation'

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: intersectionObserverMargin })

  const projects = projectsData

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
      <SectionBackground type="projects" />
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <SectionTitle color="purplePink">
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
                      <GradientHeading size="small" color="multi" as="h3" className="mb-4">
                        {project.title}
                      </GradientHeading>
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
