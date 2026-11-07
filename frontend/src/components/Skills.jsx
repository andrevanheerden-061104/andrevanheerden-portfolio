import { useState } from 'react'
import {
  SiFigma,
  SiHtml5,
  SiCss,
  SiJavascript,
  SiReact,
  SiExpo,
  SiBootstrap,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiDotnet,
  SiSupabase,
  SiFirebase,
  SiMysql,
  SiPhpmyadmin,
  SiGit,
  SiGithub,
  SiVercel,
} from 'react-icons/si'

/* line icons for skills that have no brand logo */
const L = ({ d }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d={d} fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)
const Research = () => <L d="M11 18a7 7 0 1 0 0-14 7 7 0 0 0 0 14zM20 20l-4-4" />
const Wire = () => <L d="M4 4h16v16H4zM4 9h16M9 9v11" />
const Proto = () => <L d="M7 3h10a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zM11 18h2" />
const Access = () => <L d="M12 5.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM5 8l7 1.5L19 8M12 9.5V14l-3 6M12 14l3 6" />
const Service = () => <L d="M3 12h4l3-7 4 14 3-7h4" />
const UI = () => <L d="M3 5h18v14H3zM3 9h18M7 13h5M7 16h3" />
const SQL = () => <L d="M4 6c0-1.7 3.6-3 8-3s8 1.3 8 3-3.6 3-8 3-8-1.3-8-3zM4 6v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" />
const AI = () => <L d="M12 3l1.8 4.7L18.5 9.5l-4.7 1.8L12 16l-1.8-4.7L5.5 9.5l4.7-1.8zM19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8z" />

/* groups decide what lights up together */
const GROUP_LABEL = {
  design: 'UX / UI design',
  web: 'Web front-end',
  react: 'React ecosystem',
  server: 'Back-end',
  data: 'Databases',
  ship: 'Version control & deploy',
  ai: 'AI features',
}

const SKILLS = [
  { id: 'figma', name: 'Figma', Icon: SiFigma, color: '#F24E1E', groups: ['design'], note: 'Where every project starts: flows, wireframes, style guides and clickable prototypes.', used: ['Tower of Arithmetic', 'Next Level', 'Herd Link', 'Ford Relay'] },
  { id: 'ui', name: 'UI design', Icon: UI, groups: ['design'], note: 'Accessible, consistent interfaces built on a clear style guide.', used: ['All projects'] },
  { id: 'research', name: 'UX research', Icon: Research, groups: ['design'], note: 'Surveys, interviews, competitor analysis, affinity mapping and personas.', used: ['Tower of Arithmetic', 'Ford Relay'] },
  { id: 'wire', name: 'Wireframing', Icon: Wire, groups: ['design'], note: 'Low-fi structure first, so interaction problems are solved before colour goes on.', used: ['Tower of Arithmetic', 'Herd Link'] },
  { id: 'proto', name: 'Prototyping', Icon: Proto, groups: ['design'], note: 'Interactive Figma prototypes for testing flows with real users.', used: ['All projects'] },
  { id: 'a11y', name: 'Accessibility', Icon: Access, groups: ['design', 'web'], note: 'WCAG contrast, read-aloud, dyscalculia and dyspraxia-friendly patterns.', used: ['Tower of Arithmetic', 'Next Level'] },
  { id: 'service', name: 'Service design', Icon: Service, groups: ['design'], note: 'Service blueprints and journey maps across people, systems and screens.', used: ['Ford Relay'] },

  { id: 'html', name: 'HTML', Icon: SiHtml5, color: '#E34F26', groups: ['web'], note: 'Semantic, accessible markup.', used: ['Websites & coursework'] },
  { id: 'css', name: 'CSS', Icon: SiCss, color: '#663399', groups: ['web'], note: 'Responsive layouts, animation and design tokens, like this site.', used: ['This portfolio'] },
  { id: 'js', name: 'JavaScript', Icon: SiJavascript, color: '#F7DF1E', groups: ['web', 'react', 'server'], note: 'The language behind my front-end and Node back-ends.', used: ['Tower of Arithmetic', 'This portfolio'] },
  { id: 'tailwind', name: 'Tailwind', Icon: SiTailwindcss, color: '#38BDF8', groups: ['web'], note: 'Utility-first styling for fast, consistent UI.', used: ['Web projects'] },
  { id: 'bootstrap', name: 'Bootstrap', Icon: SiBootstrap, color: '#7952B3', groups: ['web'], note: 'Grid and components for quick responsive builds.', used: ['Coursework sites'] },

  { id: 'react', name: 'React', Icon: SiReact, color: '#61DAFB', groups: ['react', 'web'], note: 'Component-based web apps, including this portfolio.', used: ['This portfolio'] },
  { id: 'rn', name: 'React Native', Icon: SiReact, color: '#61DAFB', groups: ['react', 'ai'], note: 'One codebase for Android and web.', used: ['Tower of Arithmetic'] },
  { id: 'expo', name: 'Expo', Icon: SiExpo, color: '#ffffff', groups: ['react'], note: 'Fast mobile builds, Expo Go testing and APK exports.', used: ['Tower of Arithmetic'] },

  { id: 'node', name: 'Node.js', Icon: SiNodedotjs, color: '#5FA04E', groups: ['server', 'ai'], note: 'APIs and a secure proxy that keeps AI keys off the device.', used: ['Tower of Arithmetic'] },
  { id: 'express', name: 'Express', Icon: SiExpress, color: '#ffffff', groups: ['server'], note: 'Lightweight REST routes on top of Node.', used: ['Tower of Arithmetic'] },
  { id: 'csharp', name: 'C#', Icon: SiDotnet, color: '#9B7CF5', groups: ['server', 'data'], note: 'Object-oriented back-end work from my degree.', used: ['Coursework'] },

  { id: 'supabase', name: 'Supabase', Icon: SiSupabase, color: '#3ECF8E', groups: ['data', 'server', 'ai'], note: 'Postgres, auth and run stats for learners.', used: ['Tower of Arithmetic'] },
  { id: 'firebase', name: 'Firebase', Icon: SiFirebase, color: '#FFCA28', groups: ['data'], note: 'Realtime data and auth for app prototypes.', used: ['App projects'] },
  { id: 'sql', name: 'SQL', Icon: SQL, color: '#c4b5fd', groups: ['data', 'server'], note: 'Designing relational schemas and writing queries.', used: ['Database management'] },
  { id: 'mysql', name: 'MySQL', Icon: SiMysql, color: '#4479A1', groups: ['data'], note: 'Relational databases for login and logistics systems.', used: ['Coursework'] },
  { id: 'pma', name: 'phpMyAdmin', Icon: SiPhpmyadmin, color: '#F89C0E', groups: ['data'], note: 'Managing MySQL databases visually.', used: ['Coursework'] },

  { id: 'ai', name: 'AI APIs (Groq)', Icon: AI, color: '#F55036', groups: ['ai'], note: 'Generated questions, worked solutions and Socratic hints with Llama 3.', used: ['Tower of Arithmetic'] },
  { id: 'git', name: 'Git', Icon: SiGit, color: '#F05032', groups: ['ship'], note: 'Branching and version control on every build.', used: ['All builds'] },
  { id: 'github', name: 'GitHub', Icon: SiGithub, color: '#ffffff', groups: ['ship'], note: 'Repos, collaboration and portfolio code.', used: ['All builds'] },
  { id: 'vercel', name: 'Vercel', Icon: SiVercel, color: '#ffffff', groups: ['ship', 'react'], note: 'Deploying web builds, like this site.', used: ['Tower of Arithmetic', 'This portfolio'] },
]

const related = (a, b) => a.id !== b.id && a.groups.some((g) => b.groups.includes(g))

/* brand colours show on hover in the hero */
export const HERO_ICONS = [
  [SiFigma, 'Figma', '#F24E1E'],
  [SiHtml5, 'HTML', '#E34F26'],
  [SiCss, 'CSS', '#2F8BE6'],
  [SiJavascript, 'JavaScript', '#F7DF1E'],
  [SiReact, 'React', '#61DAFB'],
  [SiNodedotjs, 'Node.js', '#5FA04E'],
  [SiSupabase, 'Supabase', '#3ECF8E'],
  [SiGit, 'Git', '#F05032'],
].map(([Icon, name, color], i) => ({ Icon, name, color, key: i }))

export default function Skills() {
  const [activeId, setActiveId] = useState(null)
  const active = SKILLS.find((s) => s.id === activeId)
  const rel = active ? SKILLS.filter((s) => related(s, active)) : []

  return (
    <div className={`toolkit ${active ? 'has-active' : ''}`}>
      <div className="toolkit-bar">
        <span className="dots" aria-hidden="true"><i /><i /><i /></span>
        <span className="toolkit-path">~/andre/toolkit</span>
        <span className="toolkit-count">{SKILLS.length} tools</span>
      </div>

      <div className="toolkit-body">
        <ul className="tk-grid" onMouseLeave={() => setActiveId(null)}>
          {SKILLS.map((s) => {
            const state = !active ? '' : s.id === active.id ? 'is-active' : related(s, active) ? 'is-related' : 'is-dim'
            return (
              <li key={s.id}>
                <button
                  type="button"
                  className={`tk-item ${state}`}
                  style={{ '--c': s.color || '#c4b5fd' }}
                  onMouseEnter={() => setActiveId(s.id)}
                  onFocus={() => setActiveId(s.id)}
                  onClick={() => setActiveId(s.id)}
                  aria-pressed={s.id === activeId}
                >
                  <span className="tk-ico">
                    <s.Icon aria-hidden="true" />
                  </span>
                  <span className="tk-name">{s.name}</span>
                </button>
              </li>
            )
          })}
        </ul>

        <aside className="tk-panel" aria-live="polite">
          {active ? (
            <>
              <p className="tk-cmd">
                <span className="prompt">$</span> inspect {active.name.toLowerCase()}
              </p>
              <div className="tk-head" style={{ '--c': active.color || '#c4b5fd' }}>
                <span className="tk-big">
                  <active.Icon aria-hidden="true" />
                </span>
                <div>
                  <h3>{active.name}</h3>
                  <p>{active.groups.map((g) => GROUP_LABEL[g]).join(' · ')}</p>
                </div>
              </div>
              <p className="tk-note">{active.note}</p>
              <p className="tk-label">// used in</p>
              <ul className="tk-chips">
                {active.used.map((u) => (
                  <li key={u}>{u}</li>
                ))}
              </ul>
              <p className="tk-label">// works with ({rel.length})</p>
              <ul className="tk-chips is-related">
                {rel.map((r) => (
                  <li key={r.id}>{r.name}</li>
                ))}
              </ul>
            </>
          ) : (
            <>
              <p className="tk-cmd">
                <span className="prompt">$</span> toolkit --help
              </p>
              <h3 className="tk-idle-title">Hover a tool</h3>
              <p className="tk-note">
                Everything connected to it lights up: hover Figma to see the design process, React to
                see the mobile stack, Supabase to see the data layer.
              </p>
              <dl className="tk-summary">
                <div><dt>{SKILLS.filter((s) => s.groups.includes('design')).length}</dt><dd>design skills</dd></div>
                <div><dt>{SKILLS.filter((s) => !s.groups.includes('design') || s.groups.length > 1).length}</dt><dd>dev tools</dd></div>
                <div><dt>1</dt><dd>shipped app</dd></div>
              </dl>
              <span className="tk-cursor" aria-hidden="true" />
            </>
          )}
        </aside>
      </div>
    </div>
  )
}
