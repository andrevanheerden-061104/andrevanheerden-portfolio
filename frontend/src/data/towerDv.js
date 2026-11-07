/* DV view of the Tower of Arithmetic case study.
   Content comes from the DV300 "New DV presentation" slides and the repo README. */

export const towerDv = {
  links: {
    live: 'https://tower-of-arithmetic.vercel.app',
    repo: 'https://github.com/andrevanheerden-061104/Tower-of-Arithmetic',
    apk: 'https://github.com/andrevanheerden-061104/Tower-of-Arithmetic/releases',
  },
  intro: {
    title: 'I didn’t add a game on top of maths. I made the maths the game.',
    text: 'Every attack, spell and puzzle door is cast by solving a sum. AI writes fresh CAPS questions every run and steps in with a hint the moment a learner gets stuck, so a mistake teaches instead of punishing. I designed it in Figma, then built and shipped it: a React Native app for Android and web, my own Node API, Groq AI and a Supabase database.',
  },
  glance: [
    { value: '6/6', label: 'MVP features delivered' },
    { value: '5', label: 'AI jobs in the game' },
    { value: '25', label: 'automated tests passing' },
    { value: '62', label: 'commits on main' },
  ],
  features: [
    'Sign up with a 6-digit email code, or play as a guest',
    'Three grade modes: Junior, Intermediate and Senior',
    'AI-generated CAPS questions for Grades 1–11',
    'Spell combat: every attack is a sum',
    'Answer by typing, speaking or drawing',
    'AI hints from Orrin, never the answer',
    'Procedural tower map, new every run',
    'Puzzle doors, traders, campfires and mystery rooms',
    'Dyscalculia mode and read-aloud',
    'Saved runs, XP, levels and run stats',
    'Edit profile, change grade, delete account',
    'Works offline on built-in questions if the AI is down',
  ],
  stack: [
    { key: 'expo', name: 'React Native + Expo', role: 'The game, for web and Android', why: 'One codebase for web and Android, tested live on my phone with Expo Go.' },
    { key: 'node', name: 'Node.js + Express', role: 'My own API on Render', why: 'A small server that keeps the Groq key off the phone and checks every AI answer.' },
    { key: 'groq', name: 'Groq', role: 'Questions, hints, speech, handwriting', why: 'Fast enough for turn-based play, on a free tier I already knew.' },
    { key: 'supabase', name: 'Supabase', role: 'PostgreSQL and login', why: 'Relational Postgres with login and privacy rules built in. A better fit than Firebase for progress and stats.' },
    { key: 'vercel', name: 'Vercel + Render', role: 'Website and API hosting', why: 'Free hosting: the website on Vercel, the API on Render.' },
    { key: 'eas', name: 'EAS Build', role: 'Android APK', why: 'Builds the Android APK in the cloud, so anyone can install it.' },
  ],
  arch: {
    nodes: {
      app: { tag: 'Client', name: 'Expo app', text: 'React Native + Expo · one codebase for Android (APK) and web (Vercel)' },
      api: { tag: 'Backend', name: 'Express API', text: 'Node.js on Render · /questions, /hint, /speech, /handwriting, /run-summary' },
      ai: { tag: 'AI', name: 'Groq', text: 'gpt-oss-20b for questions, hints & advice · Whisper for speech · a vision model for drawing' },
      db: { tag: 'Data & login', name: 'Supabase', text: 'Auth (email + 6-digit code) · PostgreSQL with row-level security' },
    },
    links: {
      appApi: 'HTTPS + login token',
      apiAi: 'secret API key',
      apiDb: 'checks the token',
      appDb: 'reads & writes the player’s own rows (RLS)',
    },
    why: 'The Groq key must never be on a phone, so every AI call goes through my server. Calling Groq from the app would be simpler, but anyone could pull the key out of the APK. Player data goes straight to Supabase, because row-level security already limits each player to their own rows.',
  },
  aiJobs: [
    { title: 'Makes the questions', text: 'Fresh CAPS sums for every grade, topic and level.' },
    { title: 'Gives the hints', text: 'Orrin explains the mistake, never the answer.' },
    { title: 'Hears the answer', text: 'Whisper turns speech into maths: “x equals seven” → x = 7.' },
    { title: 'Reads handwriting', text: 'A vision model reads the pen strokes.' },
    { title: 'Writes the run advice', text: 'Code picks the topic to practise; the AI words it.' },
  ],
  trace: {
    q: 'Trace one AI request: what do you send, what comes back, and what does the app do with it?',
    steps: [
      { title: 'The app asks', text: 'POST /api/questions with the grade, topics, sums already used and the login token.' },
      { title: 'The server prepares', text: 'Checks the token and rate limit, then builds the CAPS prompt for that grade.' },
      { title: 'Groq answers', text: 'gpt-oss-20b in JSON mode, cancelled after 30 seconds.' },
      { title: 'My code checks', text: 'Every sum is solved again; wrong or off-topic ones are rejected.' },
      { title: 'The game uses it', text: 'The checked batch is stored for the whole run, so fights never wait.' },
    ],
    file: 'Backend/src/lib/groq.js',
    code: `const body = {
  model: config.groqModel,
  temperature,
  max_tokens: maxTokens,
  response_format: { type: 'json_object' },
  messages: [
    { role: 'system', content: system },
    { role: 'user', content: user },
  ],
};`,
  },
  fail: {
    q: 'What happens when the AI API fails, times out, or returns something unexpected?',
    steps: [
      { title: 'Too slow', text: 'An AbortController cancels the call after 30 seconds and returns a 504.' },
      { title: 'A messy reply', text: 'Retried once, and parseJson() finds the JSON inside extra text. A 429 (busy) is not retried.' },
      { title: 'One bad sum', text: 'Each question is cleaned on its own, so the rest of the batch survives.' },
      { title: 'Total failure', text: 'The app switches to built-in sum makers: set patterns per topic and grade, random numbers and three hints each. Always works, even offline.' },
    ],
    file: 'Backend/src/lib/groq.js',
    code: `} catch (error) {
  if (error.name === 'AbortError')
    throw new AppError(
      'The AI took too long to answer.', 504);
  throw error;
} finally {
  clearTimeout(timer);
}`,
  },
  halluc: {
    q: 'What is a hallucination, and how could it affect your users?',
    steps: [
      { title: 'What it is', text: 'The model states something false with confidence, like a sum with the wrong answer.' },
      { title: 'Why it matters', text: 'A learner would be taught a wrong answer, and marked wrong when they’re right.' },
      { title: 'Code checks the maths', text: 'solve.js works out every answer again; any mismatch is thrown away.' },
      { title: 'Hints and advice checked', text: 'Hints can’t reveal the answer, and Orrin’s advice must match the real results.' },
    ],
    file: 'Backend/src/ai/questions.js',
    code: `// 1. The answer, worked out by code
const solved = solveQuestion({ instruction, display, topic });
if (!solved) return why('cannot be checked by code');

// 2. The AI's answer must match it
if (!close(value, solved.value))
  return why(\`wrong answer (said \${answer})\`);`,
  },
  ethics: [
    {
      title: 'What goes to Groq',
      items: ['Only the grade and the topic', 'The sum, the answer and the working', 'A short voice clip or pen strokes', 'Never names, emails or account IDs'],
    },
    {
      title: 'POPIA · learners are minors',
      items: ['Collect the minimum: username, email, grade, progress', 'Each player only sees their own rows (RLS)', 'Delete account removes every row (cascade)', 'My server keeps no recordings or drawings'],
    },
    {
      title: 'Bias & wrong AI',
      items: ['Whisper can mishear accents, so the app shows what it heard: “Use it” or “Try again”', 'Same confirm step for handwriting', 'Prompts follow CAPS and South African context', 'Code checks every answer, so a wrong AI never marks a learner wrong'],
    },
  ],
  db: {
    tables: [
      { name: 'auth.users', note: 'Supabase Auth', fields: [['PK', 'id'], ['', 'email'], ['', 'password (hashed)']] },
      { name: 'profiles', rel: '1 : 1 with auth.users', fields: [['PK FK', 'id'], ['', 'username · grade'], ['', 'xp · level'], ['', 'highest_floor'], ['', 'runs_completed'], ['', 'settings']] },
      { name: 'character_progress', rel: '1 : many', fields: [['PK FK', 'user_id'], ['PK', 'character_id'], ['', 'level · xp']] },
      { name: 'topic_progress', rel: '1 : many', fields: [['PK FK', 'user_id'], ['PK', 'topic'], ['', 'version'], ['', 'attempts · correct'], ['', 'time · hints']] },
      { name: 'saved_runs', rel: '1 : 0..1', fields: [['PK FK', 'user_id'], ['', 'run (jsonb)']] },
    ],
    note: 'Row-level security: every player can only read and write their own rows. record_answer() and finish_run() update progress in one step. Saved runs were added after the pitch, so a player can continue later.',
  },
  crud: [
    { op: 'Create', items: ['signUp() → Supabase Auth + profile', 'saveRunState() upserts saved_runs', 'record_answer() adds to topic_progress'] },
    { op: 'Read', items: ['loadPlayer() loads profile, characters, topics and the saved run together', 'Home, profile and run stats show it'] },
    { op: 'Update', items: ['updateProfile(): username, grade', 'changePassword()', 'finish_run() adds XP, levels, highest floor'] },
    { op: 'Delete', items: ['deleteSavedRun() when a run ends', 'delete_my_account() → on delete cascade clears every table'] },
  ],
  validation: [
    { where: 'Form', text: 'Name 2–24 letters, a real email, 8+ character password (checkSignup)' },
    { where: 'Database', text: 'CHECK rules, e.g. grade 1–11, XP never below 0' },
    { where: 'Server', text: 'Answers trimmed, strokes checked, uploads capped at 4 MB' },
  ],
  security: [
    { title: 'Login', items: ['Supabase Auth: email + password', 'A 6-digit email code confirms the account', 'Passwords hashed by Supabase (bcrypt); I never see them', 'Session token saved on the device and refreshed'] },
    { title: 'API', items: ['Every call sends the token as a Bearer header', 'auth.js checks it with Supabase', 'Expired → 401 “log in again”', 'No token → guest, with a smaller rate limit'] },
    { title: 'Data', items: ['Row-level security on every table: user_id = auth.uid()', 'Totals change only through safe RPC functions', 'supabase-js sends parameterised queries: no SQL injection'] },
    { title: 'Secrets', items: ['Keys live in .env (git-ignored) and on Render', 'The app only gets EXPO_PUBLIC_ values', 'The Groq key never ships in the APK'] },
  ],
  noLogin: {
    q: 'What happens if I call your API directly without logging in?',
    steps: [
      { title: 'No token → guest', text: 'The AI features still work, at half the rate limit per IP address.' },
      { title: 'Bad token → 401', text: 'Every token is checked with Supabase; expired ones are told to log in again.' },
      { title: 'No player data here', text: 'The API never reads progress; row-level security guards the database.' },
      { title: 'The key stays secret', text: 'The Groq key lives only on Render, never in the app.' },
    ],
    file: 'Backend/src/middleware/auth.js',
    code: `const token = header.startsWith('Bearer ')
  ? header.slice(7).trim() : null;
if (!token) {
  req.guest = true; return next();
}
const user = await userFromToken(token);
if (!user) return res.status(401)
  .json({ error: 'Your login has expired.' });
req.user = user; next();`,
  },
  structure: [
    {
      title: 'App · Tower-of-Arithmetic/src',
      items: [
        ['screens/', 'one folder per screen, with its styles'],
        ['components/', 'shared UI: buttons, text, headers'],
        ['context/', 'PlayerContext: the player’s state everywhere'],
        ['services/', 'every Supabase and API call'],
        ['game/', 'rules, map, questions (no UI, easy to test)'],
        ['theme/', 'colours and type'],
      ],
    },
    {
      title: 'Backend · Backend/src',
      items: [
        ['routes/', 'the five AI endpoints'],
        ['ai/', 'prompts and cleaning per feature'],
        ['lib/', 'Groq, Supabase, errors'],
        ['maths/', 'solver and evaluator'],
        ['middleware/', 'login check and rate limits'],
      ],
    },
  ],
  dry: ['One askForJson() for every AI call', 'One solver checks questions, hints and speech', '25 tests with node --test, using a fake Groq', 'A new developer starts at app.js and routes/ai.js'],
  tests: `$ node --test
✔ ai.test.js
✔ app.test.js
✔ evaluate.test.js
✔ ink.test.js
✔ solve.test.js
ℹ tests 25
ℹ pass 25
ℹ fail 0`,
  mvp: {
    must: ['Player profile & progression', 'Procedural tower floors', 'AI maths engine on Groq', 'Spell-casting combat', 'Puzzle rooms', 'CAPS, Grades 1–11'],
    nice: [
      { ok: true, t: 'More topics: fractions, algebra, data…' },
      { ok: true, t: 'Voice mentor → read-aloud + tutorial voice' },
      { ok: false, t: '1v1 duel arena (future)' },
      { ok: false, t: 'Curriculum toggle (future)' },
    ],
    changed: ['Timed shields → no timers at all', 'Trap rooms → puzzle doors, mystery, trader, campfire', 'Teacher dashboard → learner run stats', 'Llama 3 8B → gpt-oss-20b'],
    added: ['Speak and Draw answers', 'Dyscalculia mode', 'Guest play', 'Android APK'],
    stats: [
      { value: '6/6', label: 'MVP features delivered' },
      { value: '4', label: 'features added beyond the pitch' },
      { value: '4', label: 'changes made on purpose' },
    ],
  },
  feedback: [
    { title: 'Survey · 21 students', text: '86% froze under timers, so every timer went. Most couldn’t start the working, so hints come mid-task.' },
    { title: 'A student’s idea', text: '“What about a dyscalculia mode?” became bigger, spaced numbers, picture models and read-aloud.' },
    { title: 'Feedback on my research', text: 'Led me to gamification studies, so the maths became the gameplay, not a quiz on top.' },
  ],
  git: {
    steps: [
      { title: '62 commits on main', text: 'Steady work since 29 September, with the latest version on main.' },
      { title: 'Branches', text: 'A preproduction branch, and a backup branch before big changes.' },
      { title: 'Secrets out of Git', text: '.env is git-ignored; .env.example shows what to fill in.' },
      { title: 'Deployed', text: 'Web on Vercel · API on Render · database & login on Supabase · APK on GitHub Releases.' },
      { title: 'Next time', text: 'Feature branches, pull requests and clearer commit messages.' },
    ],
    terminal: `$ git branch -a
  backup-10/16
* main
  preproduction
$ git rev-list --count main
62
$ git check-ignore Backend/.env
Backend/.env`,
  },
  aiTools: [
    { title: 'Designed by me', text: 'I designed the whole front end in Figma: every screen, the style guide and the game flow.' },
    { title: 'Coded with AI', text: 'AI coding tools wrote most of the front end and parts of the back end, from my designs and rules.' },
    { title: 'Tested by me', text: 'I tested every feature on my phone and in the browser, backed by 25 automated tests.' },
    { title: 'Checked by me', text: 'I checked the important lines myself: the answer checker, the login check and the database rules.' },
  ],
  challenges: [
    { title: 'The AI got sums wrong', text: 'I rewrote the prompts and the checking system twice. Now code re-solves every question before a player sees it.' },
    { title: 'A server that falls asleep', text: 'The free Render server sleeps, so a fail-safe keeps the game running on its own questions until it wakes up.' },
    { title: 'Smaller fixes', text: 'Uploading voice answers from phones, and the email verification code.' },
  ],
  next: [
    { title: 'Beyond CAPS', text: 'More maths areas and other syllabi.' },
    { title: 'A Junior art style', text: 'A friendlier look for Grades 1–3.' },
    { title: 'More monsters & a 1v1 arena', text: 'New creatures, bosses and duels.' },
    { title: 'Teacher dashboard & Play Store', text: 'Class reports, and publish with EAS Submit.' },
  ],
}
