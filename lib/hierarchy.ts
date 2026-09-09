export interface HierarchyDivision {
  name: string;
  roles: string[];
}

export const TEAM_HIERARCHY: HierarchyDivision[] = [
  {
    name: 'C-Suite',
    roles: [
      'Founder & CEO',
      'Co-Founder & CTO',
      'Chief Operating Officer (COO)'
    ]
  },
  {
    name: 'Research Division',
    roles: [
      'Research Intern',
      'Research Engineer',
      'Senior Research Engineer',
      'Lead Researcher'
    ]
  },
  {
    name: 'Blockchain / Distributed Systems',
    roles: [
      'Blockchain Intern',
      'Blockchain Engineer',
      'Senior Blockchain Engineer',
      'Lead Blockchain Architect'
    ]
  },
  {
    name: 'Cryptography',
    roles: [
      'Cryptography Intern',
      'Cryptography Engineer',
      'Senior Cryptography Engineer',
      'Lead Cryptography Architect'
    ]
  },
  {
    name: 'Quantum Computing',
    roles: [
      'Quantum Intern',
      'Quantum Engineer',
      'Senior Quantum Engineer',
      'Lead Quantum Architect'
    ]
  },
  {
    name: 'AI / ML',
    roles: [
      'AI / ML Intern',
      'AI / ML Engineer',
      'Senior AI / ML Engineer',
      'Lead AI Architect'
    ]
  },
  {
    name: 'Full-Stack & Product Engineering',
    roles: [
      'Full Stack Intern',
      'Full Stack Engineer',
      'Senior Full Stack Engineer',
      'Lead Engineer',
      'Infrastructure Engineer'
    ]
  },
  {
    name: 'Product & Design',
    roles: [
      'Design Intern',
      'Product Designer',
      'Senior Product Designer',
      'Product Manager',
      'Senior Product Manager',
      'Lead Product Architect'
    ]
  },
  {
    name: 'Growth & Marketing',
    roles: [
      'Growth Intern',
      'Marketing Executive',
      'Senior Marketing Executive',
      'Lead — Growth & Marketing'
    ]
  },
  {
    name: 'Sales',
    roles: [
      'Sales Intern',
      'Sales Executive',
      'Senior Sales Executive',
      'Account Executive',
      'Lead — Sales'
    ]
  },
  {
    name: 'Operations & Finance',
    roles: [
      'Operations Associate',
      'Finance Manager',
      'Legal / Compliance Counsel'
    ]
  }
];
