/*
  All portfolio projects live here.
  - tracks: which filter a project shows under ('ux', 'dv' or both)
  - kind:   the plain-language category shown on the card
  - blurb:  one short sentence on what the product is, shown under the card title
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
    blurb: 'An AI-powered maths learning game where every move in a turn-based RPG is a sum to solve.',
    summary:
      'A turn-based fantasy RPG for Grades 1–11 where every action is powered by solving a maths problem, with AI hints instead of penalties and no countdown timers.',
    kind: 'AI maths learning app',
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
    blurb: 'A banking concept for young parents: a Sprout account that grows with the child, plus community events.',
    summary:
      'Our Absa Design Hackathon solution: win the 0–30 market by reaching parents first, with a Sprout account that grows with the child, #ABSAVillage parenting events, and a TeenSprout account that teaches money skills.',
    kind: 'Banking concept · hackathon',
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
    blurb: 'A fitness app that builds workouts around each user’s physical disabilities, with calm, timer-free screens.',
    summary:
      'An adaptive fitness app that builds workouts around each user’s physical disabilities, with calm single-focus screens, no countdown timers and speech-to-text.',
    kind: 'Accessible fitness app',
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
    blurb: 'A smart collar and app that spot early signs of illness in cattle and keep working with no signal.',
    summary:
      'An AI-assisted smart collar and high-contrast app that spots early signs of illness, flags broken water points and keeps working in signal dead zones.',
    kind: 'Smart livestock collar + app',
    sector: 'AgriTech',
    tracks: ['ux'],
    year: '2026',
    tags: ['AI health alerts', 'Smart collar', 'Offline-ready'],
    theme: { bg: '#bfe93f', ink: '#141a05', accent: '#141a05', hi: '#bfe93f' },
    screens: ['/screens/herd-herd.jpg', '/screens/herd-login.jpg', '/screens/herd-map.jpg'],
  },
  {
    slug: 'ford-relay',
    glance: { problem: 'Customers hear nothing once the keys are handed over', built: 'Workshop console + FordPass add-on on one event spine', role: 'Service design & UI (team of 4)', status: 'Two prototypes' },
    title: 'Ford Relay',
    tagline: 'Service without the hassle.',
    blurb: 'A service system that gives Ford owners live workshop updates, so nobody has to remember to call.',
    summary:
      'An event-driven service design system for Ford dealerships: a workshop HMI console and a customer app that read from the same live timeline, so updates never depend on staff memory.',
    kind: 'Service design system',
    sector: 'Automotive',
    tracks: ['ux'],
    year: '2026',
    group: true,
    tags: ['Service blueprint', 'HMI console', 'FordPass add-on'],
    theme: { bg: '#2350d8', ink: '#ffffff', accent: '#ffffff', hi: '#7aa2ff' },
    screens: ['/work/ford/app-relay.jpg', '/work/ford/app-book.jpg', '/work/ford/app-finding.jpg'],
  },
  {
    slug: 'artifax',
    glance: { problem: 'Two warehouses tracking stock and crafting by hand', built: 'React + ASP.NET Core inventory & crafting web app', role: 'Frontend dev (team of 5)', status: 'Live web app' },
    title: 'Artifax',
    tagline: 'Craft it, track it, restock it.',
    blurb: 'An inventory and crafting web app that keeps stock right across two warehouses.',
    summary:
      'An inventory and crafting manager for a business with two warehouses: track base materials and crafted items, run timed crafting jobs, and give admins and employees different access. Built as a team with a React frontend and an ASP.NET Core API.',
    kind: 'Inventory & crafting web app',
    sector: 'Operations',
    tracks: ['dv'],
    year: '2026',
    group: true,
    desktop: true,
    live: 'https://artifax-tau.vercel.app',
    tags: ['React + TypeScript', 'ASP.NET Core', 'PostgreSQL'],
    theme: { bg: '#2563eb', ink: '#ffffff', accent: '#ffffff', hi: '#7cb4ff' },
    screens: ['/work/afx-dashboard-light.jpg', '/work/afx-dashboard.jpg'],
  },
  {
    slug: 'aquastainable',
    glance: { problem: 'Beginners can’t read their tank water', built: 'Buttonless React Native app with an AI fish assistant', role: 'Solo: design & full-stack dev', status: 'Working app' },
    title: 'Aquastainable',
    tagline: 'Healthier tanks, happier fish.',
    blurb: 'A buttonless aquarium-care app with an AI assistant that helps keep your fish healthy.',
    summary:
      'A buttonless aquarium-care app: manage tanks, log water tests, check fish compatibility and ask an AI assistant when something goes wrong. Every action is a hold, a swipe or the camera.',
    kind: 'Aquarium-care app',
    sector: 'Pets & hobbies',
    tracks: ['dv'],
    year: '2026',
    live: 'https://aquastainable.vercel.app',
    tags: ['React Native + Expo', 'Express', 'Firebase', 'Groq AI'],
    theme: { bg: '#2e8ca6', ink: '#ffffff', accent: '#ffffff', hi: '#9ad8ea' },
    screens: ['/work/aqua/home.jpg', '/work/aqua/tank.jpg', '/work/aqua/water.jpg'],
  },
]

export const trackLabel = (p) =>
  p.tracks.length > 1 ? 'UX + DV' : p.tracks[0] === 'dv' ? 'DV' : 'UX'

export const byTrack = (track) =>
  track === 'all' ? projects : projects.filter((p) => p.tracks.includes(track))

export const getProject = (slug) => projects.find((p) => p.slug === slug)

/* Development-only projects (no case study page yet): they open their repo. */
export const devProjects = []
