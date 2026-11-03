export const sections = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About Me' },
  { id: 'dj', label: 'DJ Simply Natasha' },
  { id: 'creative-projects', label: 'Creative Projects' },
  { id: 'work-with-me', label: 'Work With Me' },
  { id: 'contact', label: 'Contact' },
] as const

export type SectionId = (typeof sections)[number]['id']
