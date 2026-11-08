/* Artifax DV case study. Content from the DV300 presentation slides,
   the speech cards and the repo README. */

export const artifax = {
  overview: [
    { label: 'Team', value: 'Five Open Window students' },
    { label: 'My role', value: 'Frontend: crafting, blueprints, users, API hooks, tests' },
    { label: 'Stack', value: 'React + TypeScript · ASP.NET Core · PostgreSQL' },
    { label: 'Status', value: 'Live web app · Vercel + Render' },
  ],
  links: {
    live: 'https://artifax-tau.vercel.app',
    repo: 'https://github.com/andrevanheerden-061104/Artifax',
    team: 'https://github.com/I-Know-What-You-Committed-Last-Summer/Artifax',
  },
  intro: {
    title: 'An inventory system that keeps two warehouses honest.',
    text: 'Artifax tracks base materials and crafted items across two warehouses, runs timed crafting jobs, and gives admins and employees different access. Five of us built it: three on the ASP.NET Core API and two on the React frontend. I built the crafting, blueprints, user management, the API hooks, the Jest tests and the Electron build, then kept improving it on my own fork after hand-in until it became a hosted web app.',
  },
  glance: [
    { value: '5', label: 'team members, 1 repo' },
    { value: '2', label: 'warehouses, scoped by the API' },
    { value: '116', label: 'automated tests (39 Jest + 77 xUnit)' },
    { value: '358', label: 'commits' },
  ],
  brief:
    'Build a simple, highly reliable inventory system with a .NET API for at least two warehouses: track base materials and the items crafted from them, run timed crafting orders, and give admins and employees different access.',
  team: [
    { initials: 'AV', name: 'Andre van Heerden', me: true, area: 'Frontend', role: 'Crafting, blueprints, user management, API hooks, Jest tests and the Electron build' },
    { initials: 'MO', name: 'Mario Ojo', area: 'Frontend', role: 'Inventory, login and UI' },
    { initials: 'OL', name: 'Onthatile Lesufi', area: 'Backend', role: 'Controllers, CORS and README' },
    { initials: 'KB', name: 'Kai Barker', area: 'Backend', role: 'Models, migrations and 2FA' },
    { initials: 'DC', name: 'Dhiali Chetty', area: 'Backend', role: 'Orders, production timer and tests' },
  ],
  workflow:
    'Each of us worked on our own branch and merged through a PreProduction branch, so main always stayed stable and deployable.',
  features: [
    {
      title: 'Login & email code',
      text: 'Password first, then a 6-digit code that Supabase emails you.',
      img: '/work/afx-login.jpg',
      why: [
        'The second step is an emailed code, so nobody has to install an authenticator app.',
        'Demo buttons let reviewers jump straight into Warehouse 1 or Warehouse 2.',
      ],
    },
    {
      title: 'Dashboard',
      text: 'Low-stock warnings, active crafts and the queue at a glance.',
      img: '/work/afx-dashboard.jpg',
      why: [
        'Warnings are sorted most urgent first, with out-of-stock, critical and low counts.',
        'The crafting queue shows every active job with its progress and time left.',
      ],
    },
    {
      title: 'Inventory',
      text: 'Every item per warehouse, with search, category filters and restocking.',
      img: '/work/afx-inventory.jpg',
      why: [
        'Category colours and icons make long stock lists easy to scan.',
        'Status pills flag low stock in the row itself, and Restock materials is one click away.',
      ],
    },
    {
      title: 'Active jobs & queue',
      text: 'Up to three crafting jobs run per warehouse; the rest wait in the queue.',
      img: '/work/afx-jobs.jpg',
      why: [
        'Jobs can be paused, cancelled or expedited to double the crafting speed.',
        'Cancelling a job refunds its materials to stock, so the numbers stay correct.',
      ],
    },
    {
      title: 'Blueprints & crafting',
      text: 'Pick a blueprint, set the amount and the app checks the materials first.',
      img: '/work/afx-blueprint.jpg',
      why: [
        'Need / have bars show exactly which materials are short before you craft.',
        'A searchable blueprint list with stock and “can craft” counts on every card.',
      ],
    },
    {
      title: 'New blueprint',
      text: 'Create or edit a recipe: name, category, craft time, price and its materials.',
      img: '/work/afx-new-blueprint.jpg',
      why: [
        'Category cards with icons set the colour the item uses everywhere in the app.',
        'A searchable material picker and a live material cost help price the item.',
      ],
    },
    {
      title: 'Order history',
      text: 'Every completed and cancelled order, searchable and filterable.',
      img: '/work/afx-history.jpg',
      why: [
        'Filter by status and category, sort newest first, and open any order for details.',
        'Each row shows who crafted it and in which warehouse.',
      ],
    },
    {
      title: 'Analytics (admin)',
      text: 'Production activity, most-crafted items and a material forecast.',
      img: '/work/afx-analytics.jpg',
      why: [
        'KPI tiles for units crafted, output value, production time and completion rate.',
        'The material forecast shows what to reorder first, based on the last 30 days.',
      ],
    },
    {
      title: 'User management (admin)',
      text: 'Admins add, edit and remove staff, and set their role and warehouse.',
      img: '/work/afx-users.jpg',
      why: [
        'Filter by everyone, admins or employees, and search by name, email or warehouse.',
        'A user’s warehouse decides which stock they can see and craft from.',
      ],
    },
    {
      title: 'Light and dark',
      text: 'The whole tablet UI works in both themes.',
      img: '/work/afx-dashboard-light.jpg',
      why: [
        'Warehouses are bright or dim; staff pick whichever is easier to read.',
        'Both themes share the same category colours, so nothing changes meaning.',
      ],
    },
  ],
  stack: [
    { key: 'react', name: 'React + TypeScript', role: 'Frontend', why: 'Tailwind + DaisyUI, React Router and Axios hooks, shown in a tablet frame.' },
    { key: 'dotnet', name: 'ASP.NET Core (.NET 10)', role: 'Backend API', why: 'EF Core + Npgsql. A controller per resource, session login and role checks.' },
    { key: 'pg', name: 'PostgreSQL · Supabase', role: 'Database', why: 'Relational data: items, recipes, stock per warehouse, orders and users.' },
    { key: 'supabase', name: 'Supabase email codes', role: 'Login', why: 'A 6-digit code by email is the second step of every login.' },
    { key: 'docker', name: 'Vercel · Render · Docker', role: 'Hosting', why: 'Frontend on Vercel, the API in a Docker container on Render.' },
    { key: 'tests', name: 'Jest · xUnit · Moq', role: 'Testing', why: 'Jest on the frontend; xUnit with Moq and an in-memory database on the API.' },
  ],
  tools: ['TypeScript', 'C#', 'SQL', 'Tailwind CSS', 'DaisyUI', 'React Router', 'Axios', 'Chart.js', 'Entity Framework Core', 'BCrypt', 'Swagger', 'Insomnia', 'GitHub Actions', 'Electron (original build)', 'Figma'],
  db: {
    tables: [
      { name: 'Branches', note: 'the warehouses', fields: [['PK', 'BranchID'], ['', 'BranchName']] },
      { name: 'Employees', rel: 'many : 1 Branches', fields: [['PK', 'EmployeeId'], ['', 'Email · Name'], ['', 'PasswordHash (bcrypt)'], ['FK', 'BranchId'], ['', 'Level: Admin / Employee']] },
      { name: 'Items', note: 'materials + crafted', fields: [['PK', 'ItemID'], ['', 'ItemName · Category'], ['', 'ProductionTime'], ['', 'Price']] },
      { name: 'ItemIngredients', rel: 'the blueprint recipe', fields: [['PK', 'ItemIngredientID'], ['FK', 'ProductID → Items'], ['FK', 'IngredientID → Items'], ['', 'IngredientQuantity']] },
      { name: 'BranchItemCapacities', rel: 'stock per warehouse', fields: [['PK', 'BranchItemCapacityID'], ['FK', 'BranchID'], ['FK', 'ItemID'], ['', 'ItemQuantity']] },
      { name: 'Orders', rel: 'crafting jobs', fields: [['PK', 'OrderID'], ['FK', 'ItemID · EmployeeID'], ['FK', 'BranchID · SourceBranchID'], ['', 'Quantity · Status'], ['', 'TotalTime · TimeElapsed'], ['', 'OrderExpedite']] },
      { name: 'OrderHistories', rel: 'many : 1 Orders', fields: [['PK', 'OrderHistoryID'], ['FK', 'OrderID'], ['', 'PreviousStatus → NewStatus'], ['FK', 'ChangedByEmployeeID'], ['', 'ChangeReason']] },
    ],
    note: 'Seven PostgreSQL tables, mapped with EF Core. A blueprint is an item that points at other items through ItemIngredients, so base materials and crafted items share one table. Stock lives per warehouse in BranchItemCapacities, and every status change is logged in OrderHistories. I added SourceBranchID on my fork so admins can craft from one warehouse into another.',
  },
  git: {
    steps: [
      { title: '358 commits, five contributors', text: 'Each of us worked on our own branch: Andre, Mario, Kai, Dee, plus Backend and Frontend.' },
      { title: 'PreProduction before main', text: 'Work merged into PreProduction first, then into main once it was tested.' },
      { title: 'Secrets out of Git', text: '.env is git-ignored; .env.example lists every variable to fill in.' },
      { title: 'Original deployment', text: 'GitHub Actions built the API into a Docker image for Render; Electron packaged the frontend as a Windows app.' },
      { title: 'My fork', text: 'The frontend on Vercel with an /api rewrite to the Docker API on Render, and the database on Supabase.' },
    ],
    terminal: `$ git branch -r
  upstream/Andre
  upstream/Backend
  upstream/Dee
  upstream/Frontend
  upstream/Kai
  upstream/Mario
$ git rev-list --count main
358
$ git check-ignore Backend/.env
Backend/.env`,
  },
  arch: {
    app: { tag: 'Client', name: 'React app', text: 'Tablet UI. Sends the session cookie and the chosen warehouse.' },
    api: { tag: 'Backend', name: '.NET API', text: 'Checks the session and role, then scopes every query to a warehouse.' },
    auth: { tag: 'Auth', name: 'Supabase', text: 'Sends and verifies the 6-digit login code.' },
    db: { tag: 'Data', name: 'PostgreSQL', text: 'Items, recipes, stock per warehouse, orders and users.' },
    links: { appApi: 'session cookie + warehouse', apiAuth: 'verify code', apiDb: 'EF Core · scoped queries' },
    why: 'The server decides which warehouse you can touch. Employees are locked to their own warehouse by the API, not just hidden in the UI, so even editing the request can’t reach another warehouse’s stock. Admins can switch, craft from one warehouse into another, or view all warehouses read-only.',
  },
  crud: [
    { op: 'Create', items: ['Items and blueprints', 'Crafting orders (materials deducted)', 'Users'] },
    { op: 'Read', items: ['Stock per warehouse', 'Queue and order history', 'Analytics'] },
    { op: 'Update', items: ['Stock and restocking', 'Recipes', 'Roles'] },
    { op: 'Delete', items: ['Orders (stock refunded)', 'Users', 'Blueprints'] },
  ],
  security: [
    'Email + 6-digit code login',
    'Admin and employee roles',
    'Warehouse scope enforced by the API',
    'Secrets only in .env and on Render',
  ],
  quality: [
    '39 Jest tests on the frontend',
    '77 xUnit tests on the controllers, all passing',
    'Moq + EF in-memory database',
    'Swagger & Insomnia to check the API',
  ],
  changes: [
    { from: 'Electron', to: 'Web', title: 'Deployment', text: 'Opens from a link in a tablet frame. No download, works on any device.' },
    { from: 'Authenticator', to: 'Email code', title: 'Login', text: 'No authenticator app to install. Supabase sends and checks the code.' },
    { from: 'Shared', to: 'Scoped', title: 'Warehouses', text: 'Staff locked to one warehouse; admins switch or craft across. Fits the brief.' },
    { from: 'Stack trace', to: 'Message', title: 'Errors', text: 'Clear toasts instead of raw errors, and a proper message if the database is down.' },
    { from: 'Basic', to: 'Redesigned', title: 'UI / UX', text: 'Category colours & icons, KPI tiles, pagination and a searchable material picker.' },
  ],
  demo: [
    { title: 'Log in with the email code', text: 'Password first, then the 6-digit code Supabase emails you.' },
    { title: 'Read the dashboard', text: 'Stock warnings, active crafts and the queue for your warehouse.' },
    { title: 'Craft a blueprint', text: 'Pick Control Module, set the amount; the app checks the materials.' },
    { title: 'Expedite, then cancel', text: 'Double one job’s speed, cancel another and watch the stock refund.' },
    { title: 'Switch warehouse as admin', text: 'Admins move between warehouses; employees can’t.' },
    { title: 'Analytics & users', text: 'Production insights and user management, admin only.' },
  ],
  challenges: [
    { title: 'Merging five people’s work', text: 'A branch per member and a PreProduction branch kept main stable.' },
    { title: 'Keeping stock correct', text: 'The API checks and deducts materials on craft, and refunds them on cancel.' },
    { title: 'Moving off Electron', text: 'Rewired login, CORS and sessions for Vercel, Render and Supabase.' },
  ],
  learned: [
    'Agree on the API early when working in a team.',
    'Enforce rules like warehouse access on the server, not only in the UI.',
  ],
  next: ['Barcode scanning', 'Low-stock email alerts', 'More warehouses', 'A mobile view for the warehouse floor'],
}
