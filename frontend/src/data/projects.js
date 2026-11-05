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
    slug: 'next-level',
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
    screens: ['/screens/nl-dash.jpg', '/screens/nl-splash.jpg', '/screens/nl-workout.jpg'],
  },
  {
    slug: 'herd-link',
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
