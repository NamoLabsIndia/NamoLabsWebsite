export interface TeamMember {
  id: string;
  role: string;
  division: string;
  name: string;
  email: string;
  startDate: string;
  source: 'application' | 'custom';
}
