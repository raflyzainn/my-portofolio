export interface ExperienceEntry {
  id: string;
  role: string;
  company: string;
  period: string;
  location?: string;
  summary: string;
}

export interface SkillTag {
  label: string;
  primary: boolean;
}

export interface SkillCategory {
  name: string;
  skills: SkillTag[];
}

export interface ProjectEntry {
  id: string;
  name: string;
  year: string;
  description: string;
  tags: { label: string; primary: boolean }[];
  href?: string;
}

export interface ContactLink {
  platform: 'email' | 'linkedin' | 'github';
  url: string;
  icon: string;
}

export const professionalExperiences: ExperienceEntry[] = [
  {
    "id": 'pertamina',
    "role": 'Information Technology Intern',
    "company": 'Pertamina Foundation',
    "period": 'Aug 2026 - Present',
    "location": 'Jakarta, ID',
    "summary": 'Placed in the function human capital and business support',
  },
  {
    id: 'kompas',
    role: 'Software Engineer Intern',
    company: 'Kompas.id',
    period: 'Feb 2026 - Jun 2026',
    location: 'Jakarta, ID',
    summary: 'Delivered 20+ feature enhancements and built a B2B admin dashboard for keyword management.',
  },
  {
    id: 'maqdis',
    role: 'Frontend Developer Intern',
    company: 'Maqdis Academy',
    period: 'Oct 2025 - Jan 2026',
    location: 'Jakarta, ID',
    summary: 'Developed an internal admin dashboard using Next.js for managing travel packages and users.',
  },
  {
    id: 'webmaster',
    role: 'Web Master',
    company: 'Faculty of DIS, Telkom University',
    period: 'Jul 2025 - Aug 2025',
    location: 'Bandung, ID',
    summary: 'Maintained and enhanced the faculty website with web scraping and data processing.',
  },
  {
    id: 'kemenkop',
    role: 'Software Engineer Intern',
    company: 'Ministry of Cooperatives',
    period: 'Jun 2025 - Aug 2025',
    location: 'Jakarta, ID',
    summary: 'Rebuilt the Ministry website with React.js and developed a data collection platform using next.js and laravel.',
  },
  {
    id: 'humic',
    role: 'Frontend Developer Intern',
    company: 'HUMIC Engineering',
    period: 'Feb 2025 - May 2025',
    location: 'Bandung, ID',
    summary: 'Developed an AI-powered eye disease detection web application using React.js.',
  },
  {
    id: 'mbc',
    role: 'Research Assistant',
    company: 'MBC Laboratory, Telkom University',
    period: 'Oct 2024 - Jan 2026',
    location: 'Bandung, ID',
    summary: 'Conducted research on GIS and web-based technologies using QGIS.',
  },
];

export const organizationalExperiences: ExperienceEntry[] = [
  {
    id: 'cci',
    role: 'Front End Study Group Member',
    company: 'Central Computer Improvement',
    period: 'Jan 2025 - Jan 2026',
    summary: 'Learned front-end development with HTML, CSS, JavaScript and Next.js through peer coding sessions.',
  },
  {
    id: 'anniv',
    role: 'Vice Head of Event Division',
    company: 'Anniv Insight 2024, Telkom University',
    period: 'Nov 2024 - Dec 2024',
    summary: 'Led planning of a thematic anniversary event with American high school concept.',
  },
  {
    id: 'interestfest',
    role: 'Public Relations Committee',
    company: 'Interestfest 2024, Telkom University',
    period: 'Aug 2024 - Dec 2024',
    summary: 'Acted as liaison between committee and academic departments for event communication.',
  },
  {
    id: 'himasi',
    role: 'Entrepreneurship & Business Division Staff',
    company: 'S1 Informatics Student Association',
    period: 'Jun 2024 - Feb 2025',
    summary: 'Planned and executed student entrepreneurship programs and managed merchandise sales.',
  },
  {
    id: 'gdsc',
    role: 'Google Developer Student Club (Web Development)',
    company: 'Telkom University',
    period: 'Sep 2023 - Nov 2024',
    summary: 'Learned JavaScript, CSS, HTML and collaborated on community web projects.',
  },
  {
    id: 'informatics-league',
    role: 'Logistics Committee',
    company: 'Informatics League 2023, Telkom University',
    period: 'Sep 2023 - Dec 2023',
    summary: 'Set up live streaming for esports tournaments and managed logistics flow.',
  },
  {
    id: 'hello-world',
    role: 'Logistics Committee',
    company: 'Hello World 2023, Telkom University',
    period: 'Jun 2023 - Sep 2023',
    summary: 'Coordinated with vendors and internal teams for smooth event operations.',
  },
];

export const skillCategories: SkillCategory[] = [
  {
    name: 'Frontend — Languages',
    skills: [
      { label: 'TypeScript', primary: true },
      { label: 'JavaScript', primary: true },
      { label: 'HTML', primary: true },
      { label: 'CSS', primary: true },
      { label: 'Dart', primary: false },
    ],
  },
  {
    name: 'Frontend — Frameworks & Libraries',
    skills: [
      { label: 'Next.js', primary: true },
      { label: 'Vue', primary: true },
      { label: 'React', primary: true },
      { label: 'Nuxt', primary: false },
      { label: 'Angular', primary: false },
      { label: 'SvelteKit', primary: false },
      { label: 'Flutter', primary: false },
    ],
  },
  {
    name: 'Frontend — Styling',
    skills: [
      { label: 'Tailwind CSS', primary: true },
      { label: 'Bootstrap', primary: false },
    ],
  },
  {
    name: 'Backend — Languages',
    skills: [
      { label: 'TypeScript', primary: true },
      { label: 'Go', primary: true },
      { label: 'Python', primary: false },
      { label: 'JavaScript', primary: false },
    ],
  },
  {
    name: 'Backend — Frameworks',
    skills: [
      { label: 'Laravel', primary: true },
      { label: 'Express', primary: true },
      { label: 'Gin', primary: false },
    ],
  },
  {
    name: 'Backend — Databases',
    skills: [
      { label: 'MySQL', primary: true },
      { label: 'PostgreSQL', primary: true },
      { label: 'PocketBase', primary: false },
      { label: 'MongoDB', primary: false },
      { label: 'Microsoft SQL Server', primary: false },
    ],
  },
  {
    name: 'Tools',
    skills: [
      { label: 'Git', primary: true },
      { label: 'GitHub', primary: true },
      { label: 'Microsoft Azure DevOps', primary: false },
      { label: 'Figma', primary: false },
      { label: 'Jira', primary: false },
      { label: 'Trello', primary: false },
      { label: 'Vercel', primary: false },
    ],
  },
];

export const projects: ProjectEntry[] = [
  {
    id: 'intellisight',
    name: 'AI Eye Disease Screening',
    year: '2025',
    description: 'Upload eye photo, AI flags conditions, doctor verifies.',
    tags: [
      { label: 'React', primary: true },
      { label: 'Node', primary: true },
    ],
    href: 'https://intellisight.humicprototyping.com/',
  },
  {
    id: 'connectserves',
    name: 'ConnectServes',
    year: '2025',
    description: 'Two-sided services marketplace: providers list, customers book.',
    tags: [
      { label: 'Flask', primary: true },
      { label: 'HTML', primary: false },
      { label: 'CSS', primary: false },
    ],
    href: 'https://github.com/raflyzainn/ConnectServes',
  },
  {
    id: 'edumap',
    name: 'EduMap Bandung',
    year: '2025',
    description: 'HS accreditation across Bandung Regency with interactive map.',
    tags: [
      { label: 'Flask', primary: true },
      { label: 'QGIS', primary: true },
      { label: 'HTML', primary: false },
      { label: 'SQL', primary: false },
    ],
    href: 'https://github.com/raflyzainn/webgis-2-data-sma-',
  },
  {
    id: 'odsform',
    name: 'ODSForm',
    year: '2025',
    description: 'Digital form system for cooperative data at the Ministry of Cooperatives.',
    tags: [
      { label: 'Laravel', primary: true },
      { label: 'Next.js', primary: true },
      { label: 'MySQL', primary: false },
      { label: 'OAuth SSO', primary: false },
    ],
    href: 'https://odsform.kop.go.id/',
  },
  {
    id: 'b2b-kompas',
    name: 'Kompas B2B Dashboard',
    year: '2025',
    description: 'Admin dashboard for managing B2B keywords and related data for Kompas business.',
    tags: [
      { label: 'Vue', primary: true },
      { label: 'Nuxt', primary: true },
    ],
    href: 'https://b2b.kompaskita.com/login',
  },
  {
    id: 'kompas-sub',
    name: 'Kompas Subscription Page',
    year: '2025',
    description: 'Subscription page for Kompas.id.',
    tags: [
      { label: 'Vue', primary: true },
      { label: 'Nuxt', primary: true },
    ],
    href: 'https://kompas.id/berlangganan',
  },
];

export const contacts: ContactLink[] = [
  {
    platform: 'email',
    url: 'mailto:raflyzainn@gmail.com',
    icon: 'ti-mail',
  },
  {
    platform: 'linkedin',
    url: 'https://linkedin.com/in/raflyzainn',
    icon: 'ti-brand-linkedin',
  },
  {
    platform: 'github',
    url: 'https://github.com/raflyzainn',
    icon: 'ti-brand-github',
  },
];
