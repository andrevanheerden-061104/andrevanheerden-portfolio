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
  SiTypescript,
  SiPostgresql,
  SiDocker,
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

/* ---------------------------------------------------------
   Skill tree: three branches on an arc, like a game skill tree.
   inner ring = core skills, outer ring = also used.
   A node is "unlocked" (lit) when it's been used in a real project.
   --------------------------------------------------------- */
const BRANCHES = [
  { id: 'design', label: 'Design', sub: 'UX / UI', from: 183, to: 236 },
  { id: 'front', label: 'Front-end', sub: 'web & mobile', from: 240, to: 300 },
  { id: 'back', label: 'Back-end & AI', sub: 'data & deploy', from: 304, to: 357 },
]

const SKILLS = [
  // design
  { id: 'figma', branch: 'design', tier: 1, name: 'Figma', Icon: SiFigma, color: '#F24E1E', note: 'Where every project starts: flows, wireframes, style guides and clickable prototypes.', used: ['Tower of Arithmetic', 'Next Level', 'Herd Link', 'Ford Relay', 'Absa Village'] },
  { id: 'research', branch: 'design', tier: 1, name: 'UX research', Icon: Research, note: 'Surveys, interviews, competitor analysis, affinity mapping and personas.', used: ['Tower of Arithmetic', 'Ford Relay', 'Next Level', 'Herd Link'] },
  { id: 'ui', branch: 'design', tier: 1, name: 'UI design', Icon: UI, note: 'Accessible, consistent interfaces built on a clear style guide.', used: ['All projects'] },
  { id: 'proto', branch: 'design', tier: 1, name: 'Prototyping', Icon: Proto, note: 'Interactive Figma prototypes for testing flows with real users.', used: ['Ford Relay', 'Next Level', 'Herd Link'] },
  { id: 'wire', branch: 'design', tier: 2, name: 'Wireframing', Icon: Wire, note: 'Low-fi structure first, so problems are solved before colour goes on.', used: ['Tower of Arithmetic', 'Herd Link', 'Ford Relay'] },
  { id: 'a11y', branch: 'design', tier: 2, name: 'Accessibility', Icon: Access, note: 'WCAG contrast, read-aloud, dyscalculia and dyspraxia-friendly patterns.', used: ['Tower of Arithmetic', 'Next Level'] },
  { id: 'service', branch: 'design', tier: 2, name: 'Service design', Icon: Service, note: 'Service blueprints and journey maps across people, systems and screens.', used: ['Ford Relay'] },
  // front-end
  { id: 'react', branch: 'front', tier: 1, name: 'React', Icon: SiReact, color: '#61DAFB', note: 'Component-based web apps, including this portfolio.', used: ['Artifax', 'This portfolio'] },
  { id: 'rn', branch: 'front', tier: 1, name: 'React Native', Icon: SiReact, color: '#61DAFB', note: 'One codebase for Android, iOS and web.', used: ['Tower of Arithmetic', 'Aquastainable'] },
  { id: 'ts', branch: 'front', tier: 1, name: 'TypeScript', Icon: SiTypescript, color: '#3178C6', note: 'Typed front-ends that catch bugs before they ship.', used: ['Artifax', 'Aquastainable'] },
  { id: 'css', branch: 'front', tier: 1, name: 'CSS', Icon: SiCss, color: '#663399', note: 'Responsive layouts, animation and design tokens, like this site.', used: ['This portfolio'] },
  { id: 'html', branch: 'front', tier: 2, name: 'HTML', Icon: SiHtml5, color: '#E34F26', note: 'Semantic, accessible markup.', used: ['This portfolio'] },
  { id: 'js', branch: 'front', tier: 2, name: 'JavaScript', Icon: SiJavascript, color: '#F7DF1E', note: 'The language behind my front-ends and Node back-ends.', used: ['Tower of Arithmetic', 'This portfolio'] },
  { id: 'expo', branch: 'front', tier: 2, name: 'Expo', Icon: SiExpo, color: '#ffffff', note: 'Fast mobile builds, Expo Go testing and APK exports.', used: ['Tower of Arithmetic', 'Aquastainable'] },
  { id: 'tailwind', branch: 'front', tier: 2, name: 'Tailwind', Icon: SiTailwindcss, color: '#38BDF8', note: 'Utility-first styling for fast, consistent UI.', used: ['Artifax'] },
  { id: 'bootstrap', branch: 'front', tier: 2, name: 'Bootstrap', Icon: SiBootstrap, color: '#7952B3', note: 'Grid and components for quick responsive builds.', used: [] },
  // back-end & AI
  { id: 'node', branch: 'back', tier: 1, name: 'Node + Express', Icon: SiNodedotjs, color: '#5FA04E', note: 'REST APIs that keep AI and admin keys off the device.', used: ['Tower of Arithmetic', 'Aquastainable'] },
  { id: 'ai', branch: 'back', tier: 1, name: 'AI APIs (Groq)', Icon: AI, color: '#F55036', note: 'AI questions, hints, reviews and assistants, with code checks around them.', used: ['Tower of Arithmetic', 'Aquastainable'] },
  { id: 'supabase', branch: 'back', tier: 1, name: 'Supabase', Icon: SiSupabase, color: '#3ECF8E', note: 'Postgres, auth, email codes and row-level security.', used: ['Tower of Arithmetic', 'Artifax'] },
  { id: 'firebase', branch: 'back', tier: 1, name: 'Firebase', Icon: SiFirebase, color: '#FFCA28', note: 'Auth and Firestore for document-shaped app data.', used: ['Aquastainable'] },
  { id: 'dotnet', branch: 'back', tier: 2, name: 'C# / .NET', Icon: SiDotnet, color: '#9B7CF5', note: 'ASP.NET Core APIs with Entity Framework.', used: ['Artifax'] },
  { id: 'pg', branch: 'back', tier: 2, name: 'PostgreSQL', Icon: SiPostgresql, color: '#4169E1', note: 'Relational schemas, migrations and queries.', used: ['Artifax', 'Tower of Arithmetic'] },
  { id: 'mysql', branch: 'back', tier: 2, name: 'MySQL', Icon: SiMysql, color: '#4479A1', note: 'Relational databases for coursework systems.', used: [] },
  { id: 'docker', branch: 'back', tier: 2, name: 'Docker', Icon: SiDocker, color: '#2496ED', note: 'Containerised API deploys.', used: ['Artifax'] },
  { id: 'git', branch: 'back', tier: 2, name: 'Git & GitHub', Icon: SiGithub, color: '#ffffff', note: 'Branching, pull requests and a preproduction branch on every build.', used: ['All builds'] },
  { id: 'vercel', branch: 'back', tier: 2, name: 'Vercel', Icon: SiVercel, color: '#ffffff', note: 'Deploying web builds, like this site.', used: ['Tower of Arithmetic', 'Artifax', 'Aquastainable', 'This portfolio'] },
]

/* layout in a 1000 x 600 box, root at the bottom centre */
const W = 1000
const H = 600
const ROOT = { x: 500, y: 572 }
const R_HUB = 140
const R1 = 305
const R2 = [425, 478]
const rad = (d) => (d * Math.PI) / 180
const at = (r, deg) => ({ x: ROOT.x + r * Math.cos(rad(deg)), y: ROOT.y + r * Math.sin(rad(deg)) })

function layout() {
  const nodes = []
  const hubs = []
  BRANCHES.forEach((b) => {
    const mid = (b.from + b.to) / 2
    hubs.push({ ...b, ...at(R_HUB, mid), mid })
    ;[1, 2].forEach((tier) => {
      const list = SKILLS.filter((s) => s.branch === b.id && s.tier === tier)
      const pad = tier === 1 ? 4 : 1
      const span = b.to - b.from - pad * 2
      list.forEach((s, i) => {
        const deg = list.length === 1 ? mid : b.from + pad + (span * i) / (list.length - 1)
        const r = tier === 1 ? R1 : R2[i % 2]
        nodes.push({ ...s, deg, ...at(r, deg) })
      })
    })
  })
  // parents: inner -> hub, outer -> nearest inner in its branch
  nodes.forEach((n) => {
    if (n.tier === 1) n.parent = hubs.find((h) => h.id === n.branch)
    else {
      const inner = nodes.filter((m) => m.branch === n.branch && m.tier === 1)
      n.parent = inner.reduce((a, m) => (Math.abs(m.deg - n.deg) < Math.abs(a.deg - n.deg) ? m : a), inner[0])
    }
  })
  return { nodes, hubs }
}

const { nodes: NODES, hubs: HUBS } = layout()
const lit = (s) => s.used.length > 0
const pct = (v, of) => `${(v / of) * 100}%`

export default function Skills() {
  const [activeId, setActiveId] = useState(null)
  const active = NODES.find((n) => n.id === activeId)
  const path = new Set()
  if (active) {
    path.add(active.id)
    if (active.parent) path.add(active.parent.id)
    if (active.tier === 2) path.add(active.parent.parent.id)
  }
  const shipped = NODES.filter(lit).length

  const Panel = (
    <aside className="st-panel" aria-live="polite">
      {active ? (
        <>
          <p className="st-kicker">{active.tier === 1 ? 'Core skill' : 'Also used'} · {BRANCHES.find((b) => b.id === active.branch).label}</p>
          <h3 style={{ '--c': active.color || 'var(--accent-3)' }}>
            <span className="st-panel-ico"><active.Icon aria-hidden="true" /></span>
            {active.name}
          </h3>
          <p className="st-note">{active.note}</p>
          <p className="st-label">// used in</p>
          {active.used.length ? (
            <ul className="st-chips">{active.used.map((u) => <li key={u}>{u}</li>)}</ul>
          ) : (
            <p className="st-note st-muted">Coursework only so far.</p>
          )}
        </>
      ) : (
        <>
          <p className="st-kicker">Skill tree</p>
          <h3>Hover a skill</h3>
          <p className="st-note">Inner ring = core skills. Outer ring = tools I’ve also used. Lit nodes have been used in a real project.</p>
        </>
      )}
    </aside>
  )

  return (
    <div className={`skilltree ${active ? 'has-active' : ''}`}>
      {Panel}

      <div className="st-stage" onMouseLeave={() => setActiveId(null)}>
        <svg className="st-lines" viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none" aria-hidden="true">
          {[R_HUB, R1, (R2[0] + R2[1]) / 2].map((r) => (
            <path key={r} className="st-ring" d={`M ${ROOT.x - r} ${ROOT.y} A ${r} ${r} 0 0 1 ${ROOT.x + r} ${ROOT.y}`} />
          ))}
          {HUBS.map((h) => (
            <line key={h.id} className={`st-link ${active && active.branch === h.id ? 'on' : ''}`} x1={ROOT.x} y1={ROOT.y} x2={h.x} y2={h.y} />
          ))}
          {NODES.map((n) => (
            <line
              key={n.id}
              className={`st-link ${lit(n) ? '' : 'is-locked'} ${path.has(n.id) ? 'on' : ''}`}
              x1={n.parent.x}
              y1={n.parent.y}
              x2={n.x}
              y2={n.y}
            />
          ))}
        </svg>

        <span className="st-root" style={{ left: pct(ROOT.x, W), top: pct(ROOT.y, H) }} aria-hidden="true">
          <b>A</b>
        </span>

        {HUBS.map((h) => {
          const lab = { design: { x: 92, y: 262 }, front: { x: ROOT.x, y: 22 }, back: { x: 912, y: 262 } }[h.id]
          return (
            <div key={h.id}>
              <span className={`st-hub ${active && active.branch === h.id ? 'on' : ''}`} style={{ left: pct(h.x, W), top: pct(h.y, H) }} aria-hidden="true" />
              <p className={`st-branch is-${h.id}`} style={{ left: pct(lab.x, W), top: pct(Math.max(lab.y, 20), H) }}>
                {h.label}
                <small>{h.sub}</small>
              </p>
            </div>
          )
        })}

        {NODES.map((n) => (
          <button
            key={n.id}
            type="button"
            className={`st-node tier-${n.tier} ${lit(n) ? 'is-lit' : 'is-locked'} ${n.id === activeId ? 'is-active' : ''} ${active && !path.has(n.id) ? 'is-dim' : ''}`}
            style={{ left: pct(n.x, W), top: pct(n.y, H), '--c': n.color || '#c4b5fd' }}
            onMouseEnter={() => setActiveId(n.id)}
            onFocus={() => setActiveId(n.id)}
            onClick={() => setActiveId(n.id)}
            aria-pressed={n.id === activeId}
          >
            <span className="st-ico"><n.Icon aria-hidden="true" /></span>
            <span className="st-name">{n.name}</span>
          </button>
        ))}

        <div className="st-points">
          <span className="pixel">{shipped}</span>
          <small>skills unlocked in real projects</small>
        </div>
      </div>

      {/* phones: the same tree as three branch lists */}
      <div className="st-mobile">
        {BRANCHES.map((b) => (
          <section key={b.id} className={`st-mbranch is-${b.id}`}>
            <h3>{b.label} <small>{b.sub}</small></h3>
            <ul>
              {NODES.filter((n) => n.branch === b.id).map((n) => (
                <li key={n.id}>
                  <button
                    type="button"
                    className={`st-node tier-${n.tier} ${lit(n) ? 'is-lit' : 'is-locked'} ${n.id === activeId ? 'is-active' : ''}`}
                    style={{ '--c': n.color || '#c4b5fd' }}
                    onClick={() => setActiveId(n.id === activeId ? null : n.id)}
                    aria-pressed={n.id === activeId}
                  >
                    <span className="st-ico"><n.Icon aria-hidden="true" /></span>
                    <span className="st-name">{n.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  )
}
