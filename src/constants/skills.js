/**
 * Skills and technology stack
 */

import { faReact, faPython, faGitAlt, faGithub, faHtml5, faCss3Alt, faDocker, faApple, faAndroid, faJsSquare } from '@fortawesome/free-brands-svg-icons'
import { faCode, faGem, faDatabase } from '@fortawesome/free-solid-svg-icons'
import { colors } from './colors'

export const skillsWithIcons = [
  { name: 'React', icon: faReact, color: colors.hotPink },
  { name: 'JavaScript', icon: faJsSquare, color: colors.gold },
  { name: 'TypeScript', icon: faCode, color: colors.purple },
  { name: 'iOS', icon: faApple, color: colors.gold },
  { name: 'Android', icon: faAndroid, color: colors.neonGreen },
  { name: 'Ruby', icon: faGem, color: colors.hotPink },
  { name: 'Python', icon: faPython, color: colors.gold },
  { name: 'PostgreSQL', icon: faDatabase, color: colors.purple },
  { name: 'Git', icon: faGitAlt, color: colors.neonGreen },
  { name: 'GitHub', icon: faGithub, color: colors.neonGreen },
  { name: 'HTML', icon: faHtml5, color: colors.hotPink },
  { name: 'CSS', icon: faCss3Alt, color: colors.purple },
  { name: 'Docker', icon: faDocker, color: colors.purple },
]

// Simple list of skill names for display in About section
export const skillsNames = [
  'React',
  'JavaScript',
  'TypeScript',
  'Ruby',
  'Python',
  'HTML',
  'CSS',
  'SQL',
  'iOS',
  'Android',
  'Git',
  'GitHub',
  'Docker',
]

export default {
  skillsWithIcons,
  skillsNames,
}
