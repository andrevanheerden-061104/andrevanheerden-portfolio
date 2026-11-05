/* Case study content, taken from the Figma case studies.
   Tower of Arithmetic has the full write-up; the others have a short
   version until their full pages are built. */

export const caseStudies = {
  'tower-of-arithmetic': {
    overview: [
      { label: 'Role', value: 'Solo: UX research, UI design & development' },
      { label: 'Timeline', value: '6-week capstone sprint, 2026' },
      { label: 'Platform', value: 'Android & web (React Native + Expo)' },
      { label: 'Stack', value: 'Figma · React Native · Node.js · Supabase · Groq AI' },
    ],
    story: {
      title: 'Knowing the formula is easy. Using it on your own isn’t.',
      text:
        'Tower of Arithmetic started with a simple goal: to help students like me find the joy in learning and practising maths. Practice is often repetitive and boring, so learners lose motivation and stop wanting to learn maths at all. The problem wasn’t the maths itself. It was practising alone, with no guidance and no reason to keep going.',
      stats: [
        { value: '57%', title: 'Freezing at the first step', text: 'know the formula but can’t start the working on paper.' },
        { value: '57%', title: 'Practice feels like a chore', text: 'avoid homework because it feels boring and repetitive.' },
        { value: '86%', title: 'Timers cause panic', text: 'freeze up and make silly mistakes under countdowns.' },
      ],
    },
    process: [
      { stage: 'Discover', text: 'Survey, secondary research, competitor analysis' },
      { stage: 'Define', text: 'Affinity map, persona, problem statement, HMW' },
      { stage: 'Ideate', text: 'Manifesto principles, feature list, user flow' },
      { stage: 'Design', text: 'Wireframes, style guide, final UI in 3 grade modes' },
      { stage: 'Build & test', text: 'React Native app, accounts, AI hints, learner testing' },
      { stage: 'Deploy', text: 'Live web build anyone can play on Vercel' },
    ],
    survey: {
      intro:
        'I surveyed 21 South African learners (Pure Maths & Maths Literacy) about how they practise, where they get stuck, and what would make a maths game worth their time.',
      bars: [
        { q: 'Where they get stuck', label: 'Understand the rules, can’t start', value: 57.1 },
        { q: 'Countdown timers', label: 'Freeze & panic', value: 85.7 },
        { q: 'Feedback after a mistake', label: 'Explain it before the enemy acts', value: 71.4 },
        { q: 'Maths as the action', label: 'Solving the sum casts the spell', value: 71.4 },
      ],
      why:
        'I had access to a large group of former Pure Maths and Maths Literacy students, so a survey gave me the most data and a group I could keep going back to. One student later suggested the dyscalculia mode.',
    },
    secondary: [
      { value: '39%', text: 'of 15-year-olds feel helpless or anxious with maths', src: 'OECD, 2023' },
      { value: '+0.49', text: 'learning boost when learning is gamified, across 19 studies', src: 'Sailer & Homner, 2020' },
      { value: '7×', text: 'longer play when the maths is the gameplay, not a reward between questions', src: 'Habgood & Ainsworth, 2011' },
    ],
    competitors: [
      { name: 'Prodigy Math', gap: 'Maths is a pop-up quiz that interrupts the game, and it stops at Grade 8.', built: 'Kept the RPG world, but made solving the sum the attack itself, up to Grade 11.' },
      { name: 'IXL Math', gap: 'Scores drop after a wrong answer, raising anxiety. No game or story.', built: 'Kept clear progress tracking, but replaced penalties with mid-task hints.' },
      { name: 'Monster Math', gap: 'Fixed question pools get memorised and content runs dry.', built: 'AI-generated, CAPS-aligned questions so runs never repeat.' },
    ],
    persona: {
      name: 'Liam Naidoo, 16',
      meta: 'Grade 10 · Pure Maths · Gamer',
      img: '/work/toa-persona.jpg',
      quote:
        'I know the formulas when the teacher explains them, but as soon as I sit down to do sums on my own, my mind goes completely blank and I freeze up.',
      goals: ['Apply formulas step by step without freezing', 'Practise at his own pace, with no timers', 'Get a hint right when he gets stuck'],
      pains: ['Panics and makes silly errors under countdowns', 'Stuck on homework with no help, so he quits', 'Worksheets feel like a chore with no reward'],
    },
    problem:
      'High school maths students suffer from high levels of maths anxiety (71.5% of 21 students) and freeze during practice. The breakdown isn’t understanding the theory but procedural execution: 57.1% struggle to turn formulas into working on paper.',
    hmw:
      'How might we design a pressure-free, replayable fantasy RPG that turns maths practice into the gameplay itself, with real-time guidance when stuck, so learners can build confidence without anxiety and want to come back again and again?',
    wireflow: '/work/toa-wireflow.jpg',
    wireframes: '/work/toa-wireframes.jpg',
    style: {
      colors: [
        { hex: '#0D0D0D', name: 'Obsidian void' },
        { hex: '#4C33A6', name: 'Mystic violet' },
        { hex: '#F2EA79', name: 'Arcane gold' },
        { hex: '#70468C', name: 'Astral indigo' },
        { hex: '#FDFAF5', name: 'Parchment white' },
        { hex: '#FF9B8F', name: 'Wrong / hurt' },
      ],
      why:
        'My manifesto commits me to accessibility, so it shaped every style choice: a dark “night in the tower” palette with gold as the only bright colour (it always marks what you can tap), WCAG AAA text contrast, and Montserrat for its hard-to-confuse numbers (1, 7, 4, 9), which helps learners with dyslexia and dyscalculia.',
    },
    numbers: [
      { value: '74', label: 'final UI screens' },
      { value: '11', label: 'key features' },
      { value: '16', label: 'maths topics' },
      { value: '61', label: 'Spell School lessons' },
    ],
    features: [
      { title: 'Getting in', text: 'Sign up, log in or play as a guest, then pick your grade.', why: ['An account only needs an email, a username and a grade, so learners start fast and their data stays safe.', 'The grade sets every question to the right CAPS level from the first sum.'] },
      { title: 'Three grade modes', text: 'The grade a learner picks sets one of three modes, so the same tower fits every age.', why: ['Junior (Gr 1–3): picture spell cards, big buttons, counting dots and read-aloud.', 'Intermediate (Gr 4–6): type the answer, pictures on request.', 'Senior (Gr 7–11): solve step by step and type, speak or draw the working.'] },
      { title: 'Learn the tower', text: 'A short tutorial, a hero to choose and a home base to return to.', why: ['The tutorial is as short as possible so learners start playing quickly.', '42.9% said unlocking characters and rewards keeps them playing, so heroes unlock.'] },
      { title: 'Learn, then cast', text: 'Spell School explains the maths before you need it.', why: ['71.4% prefer a worked example before a new topic.', 'Run stats show accuracy per floor, so learners and parents see real growth.'] },
      { title: 'Climb your way', text: 'Choose a dungeon topic, then pick your route up the tower map.', why: ['100% said a maths game should practise what’s already taught in class.', 'The map is generated fresh every run, so nothing gets memorised.'] },
      { title: 'Answer your way', text: 'Every attack is a spell card, and every spell is a sum you type, say or draw.', why: ['57.1% know the formula but can’t start, so the cast sheet shows the sum step by step.', 'Typing, speaking and drawing mean no one is blocked by a single way of answering.'] },
      { title: 'Hints that teach', text: 'A wrong answer gives a clue, a picture or a step-by-step breakdown.', why: ['71.4% want a mistake explained before the enemy acts.', 'Hints appear mid-task and don’t end the turn.'] },
      { title: 'More than battles', text: 'Puzzle doors, traders and campfires between the fights.', why: ['85.7% panic under pressure, so puzzle doors cost no hearts and can be retried calmly.', 'Traders and campfires break up the maths without breaking the game.'] },
      { title: 'Boss & rewards', text: 'A boss guards each tower, then XP, new spells and badges.', why: ['A boss gives learners a real challenge to aim for.', 'Rewards are only earned by playing, never bought (Fair Business).'] },
      { title: 'Your account', text: 'Profile, settings and full control of your data.', why: ['Text size, read-aloud and dyscalculia mode live in settings.', 'Learners can edit details or delete their account (POPIA).'] },
      { title: 'Accessible by design', text: 'Dyscalculia mode, picture hints, handwriting and read-aloud.', why: ['Universal accessibility is built in, not added later.', 'Dyscalculia mode uses larger, well-spaced digits and turns sums into pictures.'] },
    ],
    dev: {
      intro:
        'I built and shipped the app myself. It runs on Android and in any browser, with AI-generated questions and hints proxied through my own backend.',
      stack: [
        { name: 'React Native + Expo', role: 'Cross-platform app, Android APK and web build' },
        { name: 'Node.js + Express', role: 'Backend that keeps the AI API keys off the device' },
        { name: 'Supabase (PostgreSQL)', role: 'Accounts, progress and run stats' },
        { name: 'Groq API · Llama 3', role: 'Fast CAPS-aligned questions, worked solutions and Socratic hints' },
        { name: 'Vercel', role: 'Live web build anyone can play' },
      ],
    },
    conclusion:
      'Learners like Liam know the formulas but freeze when they practise alone, panic under timers and avoid homework that feels like a chore. Tower of Arithmetic makes maths the gameplay itself: every spell is cast by solving a sum, mistakes are met with hints instead of penalties, there are no countdown timers, and learners can type, say or draw their working.',
    learned: [
      'How important accessibility is, and how hard it is to cater for every age and learning style in one app.',
      'How to work with AI: writing clear rules so it gives correct questions and answers and checks working accurately.',
    ],
    moreTime: [
      'Research more learning disabilities that affect maths, and design features for each.',
      'Train the AI to create problems based on each country’s region, school and syllabus.',
    ],
  },

  'next-level': {
    overview: [
      { label: 'Role', value: 'UX research & UI design' },
      { label: 'Focus', value: 'Users with dyspraxia (DCD) & physical disabilities' },
      { label: 'Platform', value: 'Mobile app' },
      { label: 'Tools', value: 'Figma' },
    ],
    challenge:
      'Standard fitness apps rely on fast-paced timers and cluttered layouts that trigger anxiety and cognitive exhaustion. The challenge was a clean, predictable interface that breaks workout tracking into bite-sized steps and adapts to diverse accessibility needs.',
    solution:
      'Next Level is a highly structured, minimalist platform where users complete routines entirely at their own pace. Single-focus exercise screens reduce cognitive load, and large touch targets with clear visual guidance account for fine-motor challenges.',
    conclusion:
      'Users with dyspraxia are held back by sensory overload and too many choices at once, not a lack of motivation. Every decision, from the calm palette to clearly labelled icons, was made to keep the experience predictable and accessible.',
  },

  'herd-link': {
    overview: [
      { label: 'Role', value: 'UX research, AI feature mapping & UI design' },
      { label: 'Focus', value: 'Livestock farmers in low-signal areas' },
      { label: 'Platform', value: 'Smart collar + mobile app' },
      { label: 'Tools', value: 'Figma' },
    ],
    challenge:
      'Livestock farmers need to monitor the health and location of hundreds of animals at once, outdoors, in harsh light and with poor reception. The interface had to turn complex animal data into clear actions without causing alert fatigue.',
    solution:
      'A smart collar paired with a high-contrast app. AI tracks movement and eating habits to find early signs of illness, the app hides normal data and highlights only the animals that need care, and it keeps working offline.',
    conclusion:
      'Farm software works best when it manages by exception. Prioritised, colour-coded alerts, AI diagnoses with confidence ratings and one-handed navigation turn huge amounts of biometric data into quick decisions in the field.',
  },

  'ford-relay': {
    overview: [
      { label: 'Role', value: 'Group project: service design & UI' },
      { label: 'Research', value: 'Staff interviews, 20-person survey, self-testing' },
      { label: 'Platform', value: 'Workshop HMI console + customer app' },
      { label: 'Tools', value: 'Figma' },
    ],
    challenge:
      'Ford’s service journey starts with confidence, but the moment the keys change hands it fractures. 55% of customers get no proactive updates and 70% drop off their car without a clear cost estimate. Status updates depend on staff remembering to call.',
    hmw:
      'How might we relay existing physical workshop events to customers automatically, so transparency is guaranteed by the system rather than dependent on staff memory?',
    solution:
      'An event-driven system built on a shared “Event Spine” of twelve physical states. The Relay Console lets technicians log findings with mandatory photo evidence, and the customer app turns those events into plain-language updates, itemised quotes and honest ETAs.',
    conclusion:
      'Ford Relay doesn’t introduce new technology; it connects Ford’s existing systems to what really happens on the workshop floor. It’s an implementation gap, not a technology gap.',
  },
}
