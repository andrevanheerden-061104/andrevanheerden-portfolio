/*
  All portfolio projects live here.
  - tracks: which filter a project shows under ('ux', 'dv' or both)
  - kind:   the plain-language category shown on the card
  - theme:  card colours (bg = folder colour, ink = text colour)
  To add a project, copy one object and change the values.
*/

export const LINKS = {
  email: 'andre.jjvanheerden@gmail.com',
  behance: 'https://www.behance.net/andrevanheerden_1155',
  github: 'https://github.com/andrevanheerden-061104',
  linkedin: 'https://www.linkedin.com/in/andre-vanheerden-8692853b5',
}

export const TRACKS = {
  all: { label: 'All work', short: 'All' },
  ux: { label: 'UX / UI design', short: 'UX' },
  dv: { label: 'Development', short: 'DV' },
}

export const projects = [
  {
    slug: 'tower-of-arithmetic',
    glance: { problem: 'Learners freeze when they practise maths alone', built: 'A maths RPG where every spell is a sum, with AI hints', role: 'Research, UI design & full build', status: 'Live on Vercel' },
    title: 'Tower of Arithmetic',
    tagline: 'Every spell is an equation.',
    summary:
      'A turn-based fantasy RPG for Grades 1–11 where every action is powered by solving a maths problem, with AI hints instead of penalties and no countdown timers.',
    kind: 'AI learning app',
    sector: 'EdTech',
    tracks: ['ux', 'dv'],
    featured: true,
    year: '2026',
    tags: ['AI hints', 'CAPS-aligned', 'Dyscalculia-friendly', 'Built & deployed'],
    theme: { bg: '#4c33a6', ink: '#ffffff', accent: '#f2ea79', hi: '#a78bfa' },
    hero: '/work/toa-hero.jpg',
    screens: ['/screens/toa-cast.jpg', '/screens/toa-home.jpg', '/screens/toa-draw.jpg'],
    live: 'https://tower-of-arithmetic.vercel.app',
  },
  {
    slug: 'absa-village',
    glance: { problem: 'Banks compete for young customers at 18, when loyalty is already set', built: 'Sprout family account, #ABSAVillage events and TeenSprout', role: 'UX strategy & UI (team of 5)', status: '2nd place · Absa Hackathon' },
    title: 'Absa Village',
    tagline: 'It takes a village.',
    summary:
      'Our Absa Design Hackathon solution: win the 0–30 market by reaching parents first, with a Sprout account that grows with the child, #ABSAVillage parenting events, and a TeenSprout account that teaches money skills.',
    kind: 'Hackathon · banking strategy',
    sector: 'FinTech',
    tracks: ['ux'],
    year: '2026',
    group: true,
    tags: ['2nd place', 'Service design', 'Banking app'],
    theme: { bg: '#dc0037', ink: '#ffffff', accent: '#ffffff', hi: '#ff5c7f' },
    screens: ['/screens/abs-discounts.jpg', '/screens/abs-welcome.jpg', '/screens/abs-poster-parents.jpg'],
  },
  {
    slug: 'next-level',
    glance: { problem: 'Fitness apps overwhelm users with dyspraxia', built: 'Calm, self-paced workouts with speech-to-text', role: 'UX research & UI design', status: 'Prototype' },
    title: 'Next Level',
    tagline: 'Fitness at your own pace.',
    summary:
      'An adaptive fitness app that builds workouts around each user’s physical disabilities, with calm single-focus screens, no countdown timers and speech-to-text.',
    kind: 'Accessibility app',
    sector: 'Health & fitness',
    tracks: ['ux'],
    year: '2026',
    tags: ['Dyspraxia-friendly', 'Self-paced', 'Speech-to-text'],
    theme: { bg: '#11a06a', ink: '#05231a', accent: '#05231a', hi: '#34d399' },
    screens: ['/screens/nl-home.jpg', '/screens/nl-splash.jpg', '/screens/nl-workout.jpg'],
  },
  {
    slug: 'herd-link',
    glance: { problem: 'Farmers can’t spot sick animals in huge herds', built: 'AI smart collar + high-contrast, offline-ready app', role: 'AI feature mapping & UI design', status: 'Prototype' },
    title: 'Herd Link',
    tagline: 'Every animal, at a glance.',
    summary:
      'An AI-assisted smart collar and high-contrast app that spots early signs of illness, flags broken water points and keeps working in signal dead zones.',
    kind: 'AI-assisted wearable',
    sector: 'AgriTech',
    tracks: ['ux'],
    year: '2026',
    tags: ['AI health alerts', 'Smart collar', 'Offline-ready'],
    theme: { bg: '#f2c230', ink: '#1a1708', accent: '#1a1708', hi: '#f2c230' },
    screens: ['/screens/herd-herd.jpg', '/screens/herd-login.jpg', '/screens/herd-map.jpg'],
  },
  {
    slug: 'ford-relay',
    glance: { problem: 'Customers hear nothing once the keys are handed over', built: 'Live service timeline fed by workshop events', role: 'Service design & UI (group)', status: 'Prototype' },
    title: 'Ford Relay',
    tagline: 'Service without the hassle.',
    summary:
      'An event-driven service design system for Ford dealerships: a workshop HMI console and a customer app that read from the same live timeline, so updates never depend on staff memory.',
    kind: 'Service design',
    sector: 'Automotive',
    tracks: ['ux'],
    year: '2026',
    group: true,
    tags: ['Service blueprint', 'HMI console', 'Mobile app'],
    theme: { bg: '#2350d8', ink: '#ffffff', accent: '#ffffff', hi: '#7aa2ff' },
    screens: ['/screens/ford-home.jpg', '/screens/ford-active.jpg', '/screens/ford-evidence.jpg'],
  },
]

export const trackLabel = (p) =>
  p.tracks.length > 1 ? 'UX + DV' : p.tracks[0] === 'dv' ? 'DV' : 'UX'

export const byTrack = (track) =>
  track === 'all' ? projects : projects.filter((p) => p.tracks.includes(track))

export const getProject = (slug) => projects.find((p) => p.slug === slug)

/* Development-only projects (no case study page yet): they open their repo. */
export const devProjects = [
  {
    slug: 'aquastainable',
    title: 'Aquastainable',
    tagline: 'Aquarium care, in one place.',
    summary:
      'A freshwater aquarium-care app: manage tanks, log water tests, check fish compatibility, and ask an AI assistant when something goes wrong.',
    kind: 'Mobile app · AI assistant',
    year: '2026',
    tags: ['React Native', 'TypeScript', 'Express', 'Firebase', 'Groq AI'],
    theme: { bg: '#2f6f86', ink: '#ffffff', hi: '#7cc4d8' },
    cover: '/work/aqua-cover.jpg',
    repo: 'https://github.com/andrevanheerden/Aquastainable',
  },
  {
    slug: 'artifax',
    title: 'Artifax',
    tagline: 'Inventory without the chaos.',
    summary:
      'A desktop inventory system for warehouses: stock across locations, a crafting queue, low-stock alerts and role-based access. Built as a team.',
    kind: 'Desktop app',
    year: '2026',
    tags: ['React', '.NET', 'PostgreSQL', 'Docker', 'Electron'],
    theme: { bg: '#2a4a7f', ink: '#ffffff', hi: '#8fb0e8' },
    cover: '/work/artifax-cover.jpg',
    repo: 'https://github.com/andrevanheerden-061104/Artifax',
    group: true,
  },
]
