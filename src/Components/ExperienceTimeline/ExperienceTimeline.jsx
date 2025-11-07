import ExperienceCard from '@Components/ExperienceCard/ExperienceCard'
import { experiences } from '@/data/experiences'
import './ExperienceTimeline.css'

const ExperienceTimeline = () => {
  const experienceList = experiences

  return (
    <div className="experience-timeline">
      <div className="experience-items flex flex-row max-sm:flex-col">
        {experienceList.map((exp, index) => (
          <ExperienceCard
            key={exp.year}
            year={exp.year}
            title={exp.title}
            company={exp.company}
            location={exp.location}
            color={exp.color}
            index={index}
          />
        ))}
      </div>
    </div>
  )
}

export default ExperienceTimeline
