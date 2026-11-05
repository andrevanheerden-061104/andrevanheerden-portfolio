import {
  SiFigma,
  SiHtml5,
  SiCss,
  SiJavascript,
  SiReact,
  SiExpo,
  SiBootstrap,
  SiVite,
  SiNodedotjs,
  SiExpress,
  SiSupabase,
  SiPostgresql,
  SiMysql,
  SiGit,
  SiGithub,
  SiVercel,
} from 'react-icons/si'

/* Small line icons for the design skills (no brand logo exists for these) */
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
const AI = () => <L d="M12 3l1.8 4.7L18.5 9.5l-4.7 1.8L12 16l-1.8-4.7L5.5 9.5l4.7-1.8zM19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8z" />

export const SKILL_GROUPS = [
  {
    id: 'design',
    title: 'UX / UI design',
    tag: 'ux',
    items: [
      { name: 'Figma', Icon: SiFigma, color: '#F24E1E' },
      { name: 'User research', Icon: Research },
      { name: 'Wireframing', Icon: Wire },
      { name: 'Prototyping', Icon: Proto },
      { name: 'Accessibility', Icon: Access },
      { name: 'Service design', Icon: Service },
    ],
  },
  {
    id: 'front',
    title: 'Front-end',
    tag: 'dv',
    items: [
      { name: 'HTML', Icon: SiHtml5, color: '#E34F26' },
      { name: 'CSS', Icon: SiCss, color: '#663399' },
      { name: 'JavaScript', Icon: SiJavascript, color: '#F7DF1E' },
      { name: 'React', Icon: SiReact, color: '#61DAFB' },
      { name: 'React Native', Icon: SiReact, color: '#61DAFB' },
      { name: 'Expo', Icon: SiExpo, color: '#ffffff' },
      { name: 'Bootstrap', Icon: SiBootstrap, color: '#7952B3' },
      { name: 'Vite', Icon: SiVite, color: '#9E7BFF' },
    ],
  },
  {
    id: 'back',
    title: 'Back-end & data',
    tag: 'dv',
    items: [
      { name: 'Node.js', Icon: SiNodedotjs, color: '#5FA04E' },
      { name: 'Express', Icon: SiExpress, color: '#ffffff' },
      { name: 'Supabase', Icon: SiSupabase, color: '#3ECF8E' },
      { name: 'PostgreSQL', Icon: SiPostgresql, color: '#4169E1' },
      { name: 'MySQL', Icon: SiMysql, color: '#4479A1' },
    ],
  },
  {
    id: 'tools',
    title: 'AI & tools',
    tag: 'dv',
    items: [
      { name: 'AI APIs (Groq)', Icon: AI, color: '#F55036' },
      { name: 'Git', Icon: SiGit, color: '#F05032' },
      { name: 'GitHub', Icon: SiGithub, color: '#ffffff' },
      { name: 'Vercel', Icon: SiVercel, color: '#ffffff' },
    ],
  },
]

/* Icon row for the hero */
export const HERO_ICONS = [SiFigma, SiHtml5, SiCss, SiJavascript, SiReact, SiNodedotjs, SiSupabase, SiGit].map(
  (Icon, i) => ({ Icon, key: i })
)

export default function Skills() {
  return (
    <div className="skills-grid">
      {SKILL_GROUPS.map((g) => (
        <article key={g.id} className={`skill-card sk-${g.id}`}>
          <header className="skill-head">
            <h3>{g.title}</h3>
            <span className="skill-tag">{g.tag === 'ux' ? 'UX' : 'DV'}</span>
          </header>
          <ul className="skill-icons">
            {g.items.map(({ name, Icon, color }) => (
              <li key={name} className="skill-item">
                <span className="skill-ico" style={{ '--c': color || 'var(--accent-2)' }}>
                  <Icon aria-hidden="true" />
                </span>
                <span className="skill-name">{name}</span>
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  )
}
