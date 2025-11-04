import ExperienceCard from '../ExperienceCard'
import './ExperienceTimeline.css'

const ExperienceTimeline = () => {
  const experiences = [
    {
      year: '2009',
      title: 'MGeol Geology with Geophysics',
      company: 'University of Leicester',
      location: 'Leicester, UK',
      color: 'neon-green'
    },
    {
      year: '2013',
      title: 'Mine Geologist',
      company: 'First Quantum Minerals',
      location: 'Zambia',
      color: 'neon-green'
    },
    {
      year: '2016',
      title: 'MSc Geospatial Analytics',
      company: 'University College London',
      location: 'London, UK',
      color: 'purple'
    },
    {
      year: '2018',
      title: 'Data Scientist',
      company: 'Anglo American',
      location: 'London, UK',
      color: 'purple'
    },
    {
      year: '2020',
      title: 'Software Engineer',
      company: '60 Decibels',
      location: 'Remote, UK',
      color: 'hot-pink'
    },
    {
      year: '2021',
      title: 'Software Engineer',
      company: 'Olio',
      location: 'Remote, UK',
      color: 'gold'
    }
  ]

  return (
    <div className="experience-timeline">
      <div className="experience-items">
        {experiences.map((exp, index) => (
          <ExperienceCard
            key={index}
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
