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
      alt: 'Persona photo of Liam, a Grade 10 learner',
      quote:
        'I know the formulas when the teacher explains them, but as soon as I sit down to do sums on my own, my mind goes completely blank and I freeze up.',
      goals: ['Apply formulas step by step without freezing', 'Practise at his own pace, with no timers', 'Get a hint right when he gets stuck'],
      pains: ['Panics and makes silly errors under countdowns', 'Stuck on homework with no help, so he quits', 'Worksheets feel like a chore with no reward'],
    },
    problem:
      'High school maths students suffer from high levels of maths anxiety (71.5% of 21 students) and freeze during practice. The breakdown isn’t understanding the theory but procedural execution: 57.1% struggle to turn formulas into working on paper.',
    hmw:
      'How might we design a pressure-free, replayable fantasy RPG that turns maths practice into the gameplay itself, with real-time guidance when stuck, so learners can build confidence without anxiety and want to come back again and again?',
    wireflow: '/work/toa-wireflow.webp',
    wireframesText:
      'Key flows were planned as 45+ wireframes to check structure, interactions and content before any colour went on, giving one base template for all three grade modes.',
    wireframes: ['/screens/wf-signup.jpg', '/screens/wf-grade.jpg', '/screens/wf-combat.jpg', '/screens/wf-path.jpg'],
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

  'absa-village': {
    overview: [
      { label: 'Event', value: 'Absa Design Hackathon 2026 · 2nd place' },
      { label: 'Team', value: 'Five Open Window students' },
      { label: 'My role', value: 'UX strategy, UI screens & campaign posters' },
      { label: 'Tools', value: 'Figma · Absa design system' },
    ],
    award: {
      title: '2nd place among Gauteng university teams',
      text: 'Absa Design Hackathon: Team Challenge 2026, hosted by the Africa Design Office on 16 September 2026.',
    },
    brief: [
      {
        label: 'The challenge',
        text: 'Absa asked university teams to design a way to attract new customers aged 0 to 30, and keep the young customers it already has, using its brand, design system and a backwards design thinking process.',
      },
      {
        label: 'Our insight',
        text: 'Most young people bank where their parents bank, and it can take decades for someone to switch. Banks don’t really win young customers one by one: they inherit them. So the moment loyalty begins is parenthood.',
      },
      {
        label: 'Our solution',
        text: 'Reach the youth through the people they trust most. Win new and expecting parents with a Sprout account and real support, build a community around them with #ABSAVillage, and grow the child into their own TeenSprout account.',
      },
    ],
    process: [
      { stage: 'Brief', text: 'Absa challenge: attract and keep the 0–30 market' },
      { stage: 'Research', text: 'Desk research on youth banking & competitors' },
      { stage: 'Work backwards', text: 'Backwards design thinking to the root moment' },
      { stage: 'Define', text: 'Persona: an expecting young family' },
      { stage: 'Design', text: 'App screens & campaign posters in Absa’s style' },
      { stage: 'Pitch', text: 'Live pitch to Absa’s design team · 2nd place' },
    ],
    research: {
      title: 'To get to the youth, get to who they trust most',
      intro:
        'We started from the brief and kept asking “why?” until we hit the root. Why do young people stay with a bank? Mostly because it’s the bank their parents chose: their parents open their first account there, and by the time they’re adults they’ve grown up with that brand.',
      cards: [
        { value: '59%', title: 'Share their parents’ bank', text: 'of youth aged 18 to 24 bank with the same bank as their parents.' },
        { value: '~30 yrs', title: 'Before people switch', text: 'Research suggests it can take up to three decades for someone to change banks.' },
        { value: '0', title: 'Banks supporting parents', text: 'Banks offer products to families, but none act as a real support system through parenthood.' },
      ],
      why: 'Waiting until a learner is 16 means competing with years of familiarity and brand loyalty. Working backwards showed us the real starting point is before the child is even born.',
    },
    team: {
      label: 'Open Window team',
      names: ['Andre', 'Danae', 'Emma', 'Caden', 'Melissa'],
      photos: [
        { src: '/work/abs-team-board.jpg', alt: 'The team holding the Attract, Engage, Retain board covered in sticky notes', caption: 'Mapping attract → engage → retain on the day' },
        { src: '/work/abs-team-win.jpg', alt: 'The team celebrating with their second-place prizes', caption: 'Prize giving: 2nd place' },
      ],
    },
    strategy: {
      title: 'Attract, engage, retain',
      intro: 'One journey that follows the family from pregnancy to the child’s first adult account.',
      steps: [
        { tag: 'Attract', title: 'Get the parents', text: 'New and expecting parents verify their parenting journey and unlock the Sprout account in the Absa app, with partner vouchers and discounts on the things they suddenly spend a lot on (a newborn can need around 300 nappies a month).' },
        { tag: 'Engage', title: 'Build the trust', text: '#ABSAVillage: events and resources on pregnancy, parenting, child safety, birth support and family finances, with childcare at selected events and drives like breastmilk donation. The village grows as the family grows.' },
        { tag: 'Retain', title: 'Inherit generations', text: 'At the right age Sprout branches into TeenSprout, a training-wheels account that teaches money skills. By 18, Absa isn’t a random bank asking them to sign up: it’s been part of their life all along.' },
      ],
    },
    persona: {
      name: 'The Dlamini family',
      short: 'the Dlaminis',
      meta: 'Sipho & Lerato, 32 · Teachers · Centurion',
      img: '/work/abs-persona.jpg',
      alt: 'Persona photo of Sipho and Lerato, a young expecting couple',
      quote:
        'Expecting their first child while feeling isolated from family and local support, they feel under-supported by their current bank and want a partner that helps them build long-term stability and community.',
      quoteLabel: 'their story',
      goals: ['Build a local support network', 'Secure their child’s financial future', 'Get trusted parenting guidance'],
      pains: [
        'The steep learning curve of parenthood',
        'Rising costs of childcare, education and health cover',
        'A bank that isn’t supporting them on this new journey',
      ],
    },
    problem:
      'Banks compete for young customers when they turn 16 or 18, but by then loyalty is already set by the bank their parents chose. At the same time, new parents face huge costs and feel alone, and no bank shows up for them as a real support system.',
    hmw:
      'How might we make Absa part of a family’s “village” from before the child is born, so parents feel supported today and their children grow up choosing Absa as their own bank?',
    posters: {
      intro:
        '#ABSAVillage events live in the Absa app and on social. We designed event posters in Absa’s brand: the red arc frames a real moment, and every event pairs a family activity with a short, practical money talk.',
      items: ['/screens/abs-poster-parents.jpg', '/screens/abs-poster-milk.jpg', '/screens/abs-poster-funday.jpg', '/screens/abs-poster-parkrun.jpg'],
    },
    style: {
      font: 'Source Sans (Absa)',
      colors: [
        { hex: '#DC0037', name: 'Passion' },
        { hex: '#B50232', name: 'Power' },
        { hex: '#FF780F', name: 'Energy' },
        { hex: '#131010', name: 'Enrich' },
        { hex: '#F8F6F6', name: 'Grey 04' },
        { hex: '#FFFFFF', name: 'Serene' },
      ],
      why: 'We worked inside Absa’s own design guidelines so the screens could ship in the existing app: Passion red for actions, Energy orange for warmth in the family illustrations, and AA contrast throughout. Building into an app parents already use meant no new download.',
    },
    numbers: [
      { value: '2nd', label: 'place, Gauteng universities' },
      { value: '3', label: 'stages: attract, engage, retain' },
      { value: '4', label: 'event posters' },
      { value: '0–30', label: 'age range covered' },
    ],
    features: [
      { title: 'Open a Sprout account', text: 'A new account type in the Absa app, opened before the baby arrives.', screens: ['/screens/abs-choose.jpg', '/screens/abs-welcome.jpg', '/screens/abs-discounts.jpg'], why: ['Sprout sits next to the accounts parents already know, so there’s nothing new to download.', 'One flat monthly fee (R7,50) that stays the same at every age.'] },
      { title: 'Benefits that grow with your child', text: 'Partner vouchers and discounts that change with each stage of childhood.', screens: ['/screens/abs-welcome.jpg', '/screens/abs-discounts.jpg', '/screens/abs-choose.jpg'], why: ['Starts with what new parents spend most on: nappies, baby essentials, pharmacy and formula.', 'A running total shows what the family has saved, so the value is visible every time they open the app.'] },
      { title: '#ABSAVillage events', text: 'Parenting events and resources, booked from the app.', screens: ['/screens/abs-poster-parents.jpg', '/screens/abs-poster-funday.jpg', '/screens/abs-poster-milk.jpg'], why: ['Pregnancy talks, family fun days and donation drives build trust a discount can’t buy.', 'Each event pairs something for the family with a short money talk from an Absa expert.'] },
      { title: 'TeenSprout: learn money safely', text: 'A simulated account where teens practise budgeting with Absa Bucks.', screens: ['/screens/abs-teen.jpg', '/screens/abs-budget.jpg', '/screens/abs-poster-parkrun.jpg'], why: ['Teens split their money into rent, essentials, savings and spending, then get tips to improve.', 'When they’re ready, the move to a real Absa account feels natural, not like starting over.'] },
    ],
    mockup: null,
    noCta: true,
    conclusion:
      'Absa Village reframes youth banking: don’t compete for customers at 18, be there 18 years earlier. By attracting parents when they need support most, engaging them as part of their village, and growing the child into TeenSprout, Absa builds generational, inherited trust. The idea placed second among university teams in Gauteng.',
    learned: [
      'Working backwards from the brief led us to a root cause no other team targeted: parents, not youth.',
      'How to design quickly inside a real company’s design system and pitch the idea, not just the screens.',
    ],
    moreTime: [
      'Test the Sprout sign-up and verification flow with real expecting parents.',
      'Design the in-app event booking and milestone tracker, and model the partner rewards.',
    ],
  },

  'next-level': {
    overview: [
      { label: 'Role', value: 'Solo: UX research & UI design' },
      { label: 'Focus', value: 'Users with dyspraxia (DCD) & physical disabilities' },
      { label: 'Platform', value: 'Mobile app (iPhone 17 frame)' },
      { label: 'Tools', value: 'Figma · Quicksand · interactive prototype' },
    ],
    brief: [
      {
        label: 'Design challenge',
        text: 'Standard fitness apps rely on fast-paced timers and cluttered layouts that trigger anxiety and cognitive exhaustion. The challenge was a clean, predictable interface that breaks workout tracking into bite-sized steps and adapts to diverse accessibility needs.',
      },
      {
        label: 'The problem',
        text: 'Systems that demand rapid responses, complex planning and precise motor skills put severe strain on users with dyspraxia, especially when context is hidden or layouts shift. That lack of flexibility strips away the independence needed to keep a fitness routine.',
      },
      {
        label: 'The solution',
        text: 'A structured, minimalist app where routines are completed entirely at the user’s own pace. Single-focus exercise screens lower cognitive load, and big touch targets with clear visual guidance account for fine-motor challenges.',
      },
    ],
    process: [
      { stage: 'Discover', text: 'Secondary research on dyspraxia & digital platforms' },
      { stage: 'Define', text: 'Persona, pain points, problem & HMW' },
      { stage: 'Ideate', text: 'Feature mapping against user needs' },
      { stage: 'Plan', text: 'Mid-fi wireframes & linear wire flow' },
      { stage: 'Design', text: 'AA style guide & final UI screens' },
      { stage: 'Prototype', text: 'Clickable Figma prototype of every flow' },
    ],
    research: {
      title: 'Designing for dyspraxia',
      intro:
        'The secondary research looked at how people living with dyspraxia navigate digital platforms day to day. Cluttered layouts, hidden navigation and countdown timers directly trigger cognitive fatigue and anxiety, while calm, predictable layouts with single-focus tasks and larger touch targets dramatically reduce the strain.',
      cards: [
        { value: '01', title: 'Clutter overloads', text: 'Busy dashboards with sets, reps, weights and graphs on one screen overwhelm users on the gym floor.' },
        { value: '02', title: 'Timers cause panic', text: 'Rigid countdowns cause mental exhaustion and physical clumsiness mid-set.' },
        { value: '03', title: 'Hidden context gets lost', text: 'Hidden menus and shifting layouts make users lose their place in a routine.' },
      ],
      why: 'Flexible, inclusive design keeps users safe and in control of their own routine. The research gave me concrete rules: one task per screen, nothing hidden, no clocks, and big targets.',
    },
    featureMap: {
      intro:
        'Every feature started from a real pain point. By filtering out high-risk movements and turning exercises into clear, single-focus steps, the interface prevents cognitive overload and sensory fatigue.',
      rows: [
        { need: 'Busy tracking dashboards cause sensory overload on the gym floor.', feature: 'Single-focus exercise layouts', fn: 'One gym movement per screen before moving forward.', access: 'Lowers cognitive load and keeps the user calm.' },
        { need: 'Hidden data or menus make users lose their place.', feature: 'Unhidden visual anchors', fn: 'All instructions, sets and weights stay openly on screen.', access: 'Prevents working-memory fatigue mid-workout.' },
        { need: 'Rigid countdown timers trigger anxiety and coordination mistakes.', feature: 'Self-paced training', fn: 'A manual “Complete” button logs each set, with no clocks.', access: 'Removes time pressure so reps are done safely.' },
        { need: 'Long profile setup and medical forms cause mental fatigue.', feature: 'Linear onboarding', fn: 'One question per screen: gender, age, weight, disability…', access: 'Never asks the user to remember past answers.' },
      ],
    },
    persona: {
      name: 'Mike Smith, 28',
      meta: 'Employed part-time · Free State',
      img: '/work/nl-persona.jpg',
      alt: 'Persona photo of Mike, a 28-year-old gym-goer',
      quote:
        'A calm, self-paced fitness platform that adapts routines around his coordination limits and removes the cognitive fatigue from his gym routine.',
      quoteLabel: 'core need',
      goals: [
        'Structured, predictable routines without unsafe multi-step moves',
        'Log progress at his own pace, never rushed by a timer',
        'Get through a workout start to finish on his own',
      ],
      pains: [
        'Forgets the order and form of complex movements',
        'Panics and gets clumsy when a countdown starts',
        'Loses track of the plan on a busy gym floor',
        'Overwhelmed by dashboards showing everything at once',
      ],
      extra: {
        label: 'coping strategies & desired tech',
        items: [
          'Pre-workout checklists so the water bottle, keys and towel are packed',
          'Clean screens that isolate one exercise step at a time',
          'Massive touch targets and speech-to-text for motor slips',
        ],
      },
    },
    problem:
      'Mike loves the gym, but his dyspraxia brings coordination and organisational barriers. Fitness apps built on fast timers, cluttered metrics and complex multi-step exercises trigger anxiety and spatial confusion, so simple workouts become overwhelming and he abandons his routine.',
    hmw:
      'How might we design an adaptive fitness interface that uses calm, single-focus steps to accommodate diverse disabilities, particularly dyspraxia, so users can manage physical routines independently without cognitive or physical exhaustion?',
    wireframes: ['/screens/nlwf-signin.jpg', '/screens/nlwf-mic.jpg', '/screens/nlwf-home.jpg', '/screens/nlwf-reminders.jpg'],
    wireframesText:
      'The mid-fidelity wireframes map a strictly linear, low-stress journey: screen-by-screen onboarding that opens into a clean, single-focus workout view, with big touch targets, visible anchors and optional speech-to-text pop-ups.',
    style: {
      font: 'Quicksand',
      colors: [
        { hex: '#03624C', name: 'Primary green' },
        { hex: '#05231A', name: 'Deep forest' },
        { hex: '#E4E7EC', name: 'Soft off-white' },
        { hex: '#2F80ED', name: 'Info' },
        { hex: '#27AE60', name: 'Success' },
        { hex: '#FFB01F', name: 'Warning' },
      ],
      why: 'Muted sage greens on dark backgrounds reduce the “visual vibration” that causes sensory overload, while white headings on dark green keep an AA contrast rating. Quicksand is friendly and rounded with generous line spacing, and every icon has a text label.',
    },
    numbers: [
      { value: '6', label: 'linear onboarding steps' },
      { value: '0', label: 'countdown timers' },
      { value: 'AA', label: 'contrast rating' },
      { value: '1', label: 'task per screen' },
    ],
    features: [
      { title: 'Sign in, hands-free', text: 'A calm brand splash, then sign in by typing or by voice.', screens: ['/screens/nl-splash.jpg', '/screens/nl-signin.jpg', '/screens/nl-mic.jpg'], why: ['Every field has a mic button, so fine-motor slips never block someone from logging in.', 'The speech pop-up shows it’s listening, then fills the field for the user to check.'] },
      { title: 'One question at a time', text: 'Onboarding asks for gender, age, weight, disability and workout type, one screen each.', screens: ['/screens/nl-gender.jpg', '/screens/nl-disability.jpg', '/screens/nl-type.jpg'], why: ['Isolated questions with large text and huge buttons remove the overload of a long form.', 'The disability step filters as you type and explains each condition, so workouts adapt safely.'] },
      { title: 'Today at a glance', text: 'The home screen shows rank, today’s routine and a gentle nudge if a workout is unfinished.', screens: ['/screens/nl-calendar.jpg', '/screens/nl-home.jpg', '/screens/nl-reminder.jpg'], why: ['Warm-up and main sets are grouped and always visible, so users never lose their place.', 'The calendar shows training days and consistency without punishing missed ones.'] },
      { title: 'Single-focus workouts', text: 'One exercise at a time, with clear sets, written steps and a short video.', screens: ['/screens/nl-workout.jpg', '/screens/nl-exercise.jpg', '/screens/nl-calendar.jpg'], why: ['Finished moves turn green and upcoming ones fade back, so the next step is obvious.', 'Sets are logged with a “Finished” button, never a stopwatch.'] },
      { title: 'Pack-the-bag checklist', text: 'A reminder time and an editable checklist for gym essentials.', screens: ['/screens/nl-reminder.jpg', '/screens/nl-home.jpg', '/screens/nl-userdata.jpg'], why: ['Based on a coping strategy from the research: checklists offload memory before leaving home.', 'Items can be ticked, edited, deleted or added with big, clearly labelled controls.'] },
      { title: 'Progress, not pressure', text: 'A gamified rank, level and streak heatmap, plus editable personal data.', screens: ['/screens/nl-profile.jpg', '/screens/nl-userdata.jpg', '/screens/nl-home.jpg'], why: ['Rank and XP reward showing up, keeping motivation high without competition.', 'Users can change their goal, weight or weekly target at any time.'] },
    ],
    mockup: '/work/nl-mock.jpg',
    links: {
      behance: 'https://www.behance.net/gallery/250895233/Next-Level-Term-1-Assignment-Accessible-Workout-App',
      prototype: 'https://www.figma.com/proto/eEEdDgwRSovwDP1xC0xOOU/Andre-van-Heerden-241155-Research-Handover---Sensemaking?node-id=171-643&starting-point-node-id=171%3A631&scaling=scale-down&content-scaling=fixed&page-id=171%3A171',
    },
    conclusion:
      'Next Level helps users with dyspraxia manage their daily workouts by giving them a predictable, calm and structured digital space. A minimalist UI reduces cognitive load, and persistent navigation with clear task segmentation builds the confidence needed for long-term independence.',
    learned: [
      'Users with dyspraxia are held back by sensory overload and too many choices, not a lack of motivation.',
      'How to turn neurodiversity research into practical design rules, from colour to icon labels.',
    ],
    moreTime: [
      'User testing with neurodivergent people to validate the task-segmentation flow.',
      'Haptic feedback and audio cues for users with motor coordination challenges.',
    ],
  },

  'herd-link': {
    overview: [
      { label: 'Role', value: 'Solo: UX research, AI feature mapping & UI design' },
      { label: 'Focus', value: 'Livestock farmers in low-signal areas' },
      { label: 'Platform', value: 'Smart collar + mobile app' },
      { label: 'Tools', value: 'Figma · Inter · interactive prototype' },
    ],
    brief: [
      {
        label: 'Design challenge',
        text: 'Farmers need to monitor the health and location of hundreds of animals at once, outdoors and in harsh conditions. The challenge was an easy interface for the Herd Link wearable that turns complex animal data into clear actions without causing alert fatigue.',
      },
      {
        label: 'The problem',
        text: 'A sick animal or a broken water trough is hard to spot in a massive herd before it becomes a crisis. Physical checks take too long, and typical farm software fails in remote fields with poor reception and bright sunlight.',
      },
      {
        label: 'The solution',
        text: 'A smart collar paired with a high-contrast app. AI tracks movement and eating habits to find early signs of illness, the app hides normal data and highlights only the animals that need care, and it keeps working without internet.',
      },
    ],
    process: [
      { stage: 'Discover', text: 'Wearables & agri-tech secondary research' },
      { stage: 'Define', text: 'Persona, pain points, problem & HMW' },
      { stage: 'Ideate', text: 'Feature mapping & AI logic mapping' },
      { stage: 'Plan', text: 'User flows & mid-fi wireframes' },
      { stage: 'Design', text: 'High-contrast style guide & final UI' },
      { stage: 'Prototype', text: 'Clickable Figma prototype & mock-ups' },
    ],
    research: {
      title: 'What the wearables taught me',
      intro:
        'I studied leading consumer and medical wearables, then existing agricultural ones, to see how AI turns biometric data into insights a person can act on, and what breaks when you take that into a field.',
      cards: [
        { value: '01', title: 'Consumer & medical', text: 'Oura Ring, WHOOP 4.0, Ray-Ban Meta and Neuralink: personal baselines, colour-coded status and quiet audio cues guide behaviour without overload.', tags: ['Oura', 'WHOOP 4.0', 'Ray-Ban Meta', 'Neuralink'] },
        { value: '02', title: 'Agricultural', text: 'Halter, Allflex SenseHub and Moocall: the system must work in total signal dead zones and harsh weather.', tags: ['Halter', 'SenseHub', 'Moocall'] },
        { value: '03', title: 'Manage by exception', text: 'The big insight: hide normal behaviour and surface only critical anomalies, so busy farmers aren’t buried in alerts.', tags: ['Alert fatigue', 'Offline'] },
      ],
      why: 'Secondary research let me learn from products that already process millions of data points, and the agri-tech review showed the real constraints of a farm: no signal, mud, glare and no time.',
    },
    featureMap: {
      intro:
        'Herd Link’s features translate complex biological and environmental data into simple, scannable farm actions. Each one answers a specific pain point.',
      rows: [
        { need: 'Track operations and each animal’s biometrics effortlessly.', feature: 'Farm, herd & cow monitoring', fn: 'Live heart rate, respiration, temperature, rumination, activity and sleep.' },
        { need: 'Overwhelmed by data when searching for sick animals.', feature: 'Filtered data alerts', fn: 'A prioritised list of what is wrong with which cow, hiding healthy data.' },
        { need: 'Can’t confidently diagnose without medical expertise.', feature: 'AI diagnosis & confidence', fn: 'A probable diagnosis with a clear percentage confidence rating.' },
        { need: 'Hard to find animals or issues across huge pastures.', feature: 'Live map tracking', fn: 'Herds, points of interest and live alerts on a satellite map.' },
        { need: 'Holding a phone one-handed during manual labour.', feature: '3-way navigation', fn: 'Move the nav bar to the bottom, left or right of the screen.' },
        { need: 'Syncing hardware in the mud is fiddly.', feature: 'Easy connect tap', fn: 'Tap the phone to a collar to pair it and load its profile.' },
        { need: 'False alarms from the AI misreading normal movement.', feature: 'Resolve AI learning', fn: 'Feedback on resolved alerts corrects and trains the model.' },
        { need: 'Unnoticed water or food shortages.', feature: 'POI anomaly detection', fn: 'Cows clustered at a trough with zero drinking vibrations fires an alert.' },
        { need: 'Slow reaction to regional disease outbreaks.', feature: 'Location-based sensitivity', fn: 'Local disease news raises the AI’s sensitivity to matching symptoms.' },
        { need: 'Animals escaping or wandering into danger.', feature: 'Virtual fencing', fn: 'Draw digital camp fences; a breach triggers a high-priority alarm.' },
      ],
    },
    ai: {
      title: 'How the AI watches the herd',
      text: 'The collar streams movement, jaw vibrations and body temperature. The AI compares each animal against its own history and against the rest of the herd, so it can spot early illness or distress. When it finds an anomaly it filters out the normal background data and sends one direct, prioritised alert to the farmer’s phone.',
      steps: ['Collar senses', 'Compare to baseline & herd', 'Detect anomaly', 'Prioritised alert', 'Farmer resolves → AI learns'],
    },
    persona: {
      name: 'Pieter Botha, 40',
      meta: 'Livestock farmer · Free State',
      img: '/work/hl-persona.jpg',
      alt: 'Persona photo of Pieter, a livestock farmer crouching in a field with cattle',
      quote: 'Early identification of herd illnesses and camp supply issues.',
      quoteLabel: 'core need',
      goals: [
        'Spot illness days before physical symptoms appear',
        'Catch broken water troughs and supply issues instantly',
        'Only be alerted when a cow genuinely needs care',
        'A system that works in signal dead zones',
      ],
      pains: [
        'Finding a sick cow or empty trough too late',
        'Hundreds of unorganised graphs instead of clear actions',
        'Frequent false alarms that cry wolf',
        'Fiddly pairing setups out in the mud',
      ],
      extra: {
        label: 'assistive technology',
        items: [
          'Private LoRa radio towers keep tracking and alerts syncing with no internet',
          'High-contrast dark layouts that fight outdoor glare',
          'Left- or right-handed side navigation for one-handed use',
        ],
      },
    },
    problem:
      'Pieter works remote fields under harsh sun where standard software fails without a signal. He is exhausted from manual labour and can’t detect the early, subtle signs of disease or empty water troughs across thousands of hectares.',
    hmw:
      'How might we design a livestock management interface that translates massive amounts of animal behavioural data into clear, prioritised alerts, enabling a busy farmer to make rapid health decisions in harsh, low-connectivity outdoor environments?',
    wireframes: ['/screens/hlwf-signup.jpg', '/screens/hlwf-signin.jpg', '/screens/hlwf-home.jpg', '/screens/hlwf-map.jpg'],
    wireframesText:
      'Black-and-white wireframes set the layout and logic before any styling: the onboarding path, the main farm dashboard and the interactive camp map, making sure health alerts were prioritised from the very start.',
    style: {
      font: 'Inter',
      colors: [
        { hex: '#1A1A1A', name: 'Primary' },
        { hex: '#FEFFF9', name: 'Secondary' },
        { hex: '#BFE93F', name: 'Success' },
        { hex: '#00C0FE', name: 'Info' },
        { hex: '#F56E0F', name: 'Warning' },
        { hex: '#E30022', name: 'Error' },
      ],
      why: 'A high-contrast dark theme counters harsh outdoor glare, and bright status colours make urgency readable at a glance: red is an emergency, orange is imminent, blue is lower priority. Inter keeps numbers and labels sharp, with a 2-column grid and 30px margins.',
    },
    numbers: [
      { value: '10', label: 'mapped features' },
      { value: '4', label: 'alert urgency levels' },
      { value: '3', label: 'nav bar positions' },
      { value: 'Offline', label: 'works without signal' },
    ],
    features: [
      { title: 'Set up & connect', text: 'Sign up, add your farm, then pair a collar by tapping it with your phone.', screens: ['/screens/hl-signup.jpg', '/screens/hl-farm.jpg', '/screens/hl-collar.jpg'], why: ['Farm name and location calibrate local tracking and POI alerts from day one.', 'Tap-to-pair replaces fiddly sync menus when your hands are full of mud.'] },
      { title: 'The farm at a glance', text: 'A mini-map, live biometrics, herd activity and alerts on one dashboard.', screens: ['/screens/hl-alerts.jpg', '/screens/hl-home.jpg', '/screens/hl-cow.jpg'], why: ['Regional news and POI issues are visible without changing screens.', 'Herd activity sets a baseline so anomalies stand out before they spread.'] },
      { title: 'Alerts by urgency', text: 'Every alert is colour-coded, with an AI summary and confidence rating.', screens: ['/screens/hl-alertfilter.jpg', '/screens/hl-alerts.jpg', '/screens/hl-poi.jpg'], why: ['Management by exception: healthy animals stay out of the list.', 'Red, orange and blue glow tells urgency apart even in bright sun.'] },
      { title: 'Search & filter', text: 'Quick-filter chips for cattle, herds, POIs and alerts.', screens: ['/screens/hl-herds.jpg', '/screens/hl-alertfilter.jpg', '/screens/hl-poi.jpg'], why: ['Narrow hundreds of animals down to the one you need in seconds.', 'Herd cards show camp, head count and active alerts before you tap in.'] },
      { title: 'Every cow’s vitals', text: 'Sleep, heart rate, respiration, temperature, rumination and posture.', screens: ['/screens/hl-home.jpg', '/screens/hl-cow.jpg', '/screens/hl-resolve.jpg'], why: ['Metric cards turn orange on dangerous spikes and stay green when stable.', 'Regional disease radar adds context right next to the animal.'] },
      { title: 'Live map & POIs', text: 'A satellite view of camps, herds, water points and alerts.', screens: ['/screens/hl-map.jpg', '/screens/hl-mappoi.jpg', '/screens/hl-resolve.jpg'], why: ['Tapping a POI shows the alert in place, with resolve one tap away.', 'Camps show grazing levels; virtual fences flag breaches immediately.'] },
      { title: 'Resolve & teach the AI', text: 'Log what really happened: fixed, false alarm, or more context.', screens: ['/screens/hl-poi.jpg', '/screens/hl-resolve.jpg', '/screens/hl-cow.jpg'], why: ['Every resolved alert trains the model, cutting repeat false alarms.', 'Big, clear choices make it quick to log from the field.'] },
      { title: 'Navigation your way', text: 'Put the nav bar at the bottom, left or right.', screens: ['/screens/hl-navswitch.jpg', '/screens/hl-sidenav.jpg', '/screens/hl-map.jpg'], why: ['One-handed use while working in the yard or driving machinery.', 'Left- and right-handed layouts respect how each farmer holds a phone.'] },
    ],
    mockup: '/work/hl-mock.jpg',
    links: {
      behance: 'https://www.behance.net/gallery/250895821/Herd-Link-Term-2-Assignment-Livestock-Monitoring',
      prototype: 'https://www.figma.com/proto/MxgHyJU8zFwg5sKUeluY2x/AI-Assisted-Wearable-Technology?node-id=216-311&starting-point-node-id=216%3A311&scaling=scale-down&content-scaling=fixed&page-id=216%3A310',
    },
    conclusion:
      'Herd Link tackles monitoring hundreds of animals in harsh, low-connectivity conditions. Pairing a smart collar with a high-contrast app filters out normal behaviour and shows only the animals and infrastructure that need attention, so farmers can make quick, confident decisions in the field.',
    learned: [
      'Farm software works best when it manages by exception: prioritised, colour-coded alerts beat graphs.',
      'AI needs to show its confidence and learn from feedback, or farmers stop trusting it.',
    ],
    moreTime: [
      'Smarter AI that predicts health trends and highlights risks even earlier.',
      'AR overlays for field navigation, vet notifications in emergencies, and a light mode for bright sun.',
    ],
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
