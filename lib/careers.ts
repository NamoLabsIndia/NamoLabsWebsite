export type Department = 'Engineering' | 'AI & Research' | 'Research Program' | 'Adjacent' | 'Early Career' | 'Always Open'

export interface Role {
  slug: string
  title: string
  department: Department
  location: string
  type: 'Full-time' | 'Internship' | 'Open'
  mode: 'Remote' | 'Hybrid' | 'On-site'
  overview: string
  responsibilities: string[]
  requirements: string[]
  niceToHave: string[]
  techStack: string[]
  compensation: string
}

export const ROLES: Role[] = [
  {
    slug: 'open-application',
    title: 'Open Application',
    department: 'Always Open',
    location: 'Remote',
    type: 'Open',
    mode: 'Remote',
    overview: "Don't see a role that fits? We're always interested in exceptional people.",
    responsibilities: [],
    requirements: [
      'Exceptional depth in at least one domain relevant to Namo Labs',
      'A track record of shipping or publishing — show us your work',
      'Clear written communication',
    ],
    niceToHave: [],
    techStack: [],
    compensation: 'Discussed based on role and fit.',
  },
  {
    slug: 'hr-intern',
    title: 'HR Intern',
    department: 'Adjacent',
    location: 'Remote',
    type: 'Internship',
    mode: 'Remote',
    overview: 'Join our team as an HR Intern and help shape the culture at a deep-tech engineering firm.',
    responsibilities: [
      'Assist in full-cycle recruitment processes and talent sourcing.',
      'Help organize employee engagement initiatives.',
      'Maintain HR records and coordinate onboarding/offboarding.',
    ],
    requirements: [
      'Strong communication and interpersonal skills.',
      'Interest in HR and organizational behavior.',
    ],
    niceToHave: [],
    techStack: [],
    compensation: 'Discussed based on role and fit.',
  },
  {
    slug: 'blockchain-engineer',
    title: 'Blockchain Engineer',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-time',
    mode: 'Remote',
    overview: 'Build and maintain blockchain infrastructure at Namo Labs.',
    responsibilities: [],
    requirements: [],
    niceToHave: [],
    techStack: [],
    compensation: 'Discussed based on role and fit.',
  },
  {
    slug: 'blockchain-intern',
    title: 'Blockchain Intern',
    department: 'Early Career',
    location: 'Remote',
    type: 'Internship',
    mode: 'Remote',
    overview: 'Learn and contribute to blockchain projects at Namo Labs.',
    responsibilities: [],
    requirements: [],
    niceToHave: [],
    techStack: [],
    compensation: 'Discussed based on role and fit.',
  },
  {
    slug: 'full-stack-engineer',
    title: 'Full Stack Engineer',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-time',
    mode: 'Remote',
    overview: 'Build full-stack applications and infrastructure.',
    responsibilities: [],
    requirements: [],
    niceToHave: [],
    techStack: [],
    compensation: 'Discussed based on role and fit.',
  },
  {
    slug: 'full-stack-intern',
    title: 'Full Stack Intern',
    department: 'Early Career',
    location: 'Remote',
    type: 'Internship',
    mode: 'Remote',
    overview: 'Learn and contribute to full-stack projects.',
    responsibilities: [],
    requirements: [],
    niceToHave: [],
    techStack: [],
    compensation: 'Discussed based on role and fit.',
  },
  {
    slug: 'ai-ml-engineer',
    title: 'AI / ML Engineer',
    department: 'AI & Research',
    location: 'Remote',
    type: 'Full-time',
    mode: 'Remote',
    overview: 'Build and deploy AI/ML systems at Namo Labs.',
    responsibilities: [],
    requirements: [],
    niceToHave: [],
    techStack: [],
    compensation: 'Discussed based on role and fit.',
  },
  {
    slug: 'research-intern',
    title: 'Research Intern',
    department: 'Research Program',
    location: 'Remote',
    type: 'Internship',
    mode: 'Remote',
    overview: 'Contribute to cutting-edge research at Namo Labs.',
    responsibilities: [],
    requirements: [],
    niceToHave: [],
    techStack: [],
    compensation: 'Discussed based on role and fit.',
  },
]
