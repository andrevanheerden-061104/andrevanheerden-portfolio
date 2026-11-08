import { artifax as a } from '../data/artifax.js'
import { SectionHead, Why } from '../components/CaseBits.jsx'
import CaseIndex from '../components/CaseIndex.jsx'
import Words from '../components/Words.jsx'
import { Arrow } from '../components/Icons.jsx'
import { Steps, Code } from './TowerDv.jsx'
import { SiReact, SiDotnet, SiPostgresql, SiSupabase, SiDocker, SiJest, SiGithub } from 'react-icons/si'

const STACK = {
  react: { icon: <SiReact />, color: '#61DAFB' },
  dotnet: { icon: <SiDotnet />, color: '#8f6fff' },
  pg: { icon: <SiPostgresql />, color: '#6fa8dc' },
  supabase: { icon: <SiSupabase />, color: '#3ECF8E' },
  docker: { icon: <SiDocker />, color: '#2496ED' },
  tests: { icon: <SiJest />, color: '#e2526a' },
}

const NODE = { app: STACK.react, api: STACK.dotnet, auth: STACK.supabase, db: STACK.pg }

const INDEX = [
  { group: 'Overview', items: [{ id: 'afx-intro', label: 'The project' }, { id: 'afx-team', label: 'Brief & team' }] },
  { group: 'The app', items: [{ id: 'afx-features', label: 'One screen per job' }] },
  {
    group: 'How it’s built',
    items: [
      { id: 'afx-stack', label: 'Tech stack' },
      { id: 'afx-arch', label: 'Architecture' },
      { id: 'afx-db', label: 'Database' },
      { id: 'afx-data', label: 'Data, security & tests' },
      { id: 'afx-git', label: 'Git & deployment' },
    ],
  },
  {
    group: 'Wrap-up',
    items: [
      { id: 'afx-changes', label: 'After hand-in' },
      { id: 'afx-reflect', label: 'Reflection' },
    ],
  },
]

function Node({ k }) {
  const n = a.arch[k]
  const ico = NODE[k]
  return (
    <div className={`arch-node arch-${k === 'auth' ? 'ai' : k}`} style={{ '--c': ico.color }}>
      <span className="arch-tag">{n.tag}</span>
      <span className="stack-ico" aria-hidden="true">{ico.icon}</span>
      <b>{n.name}</b>
      <small>{n.text}</small>
    </div>
  )
}

function Link_({ label, dir = 'h', cls }) {
  return (
    <div className={`arch-link arch-link-${dir} ${cls}`}>
      <span className="arch-line" aria-hidden="true" />
      <span className="arch-label">{label}</span>
    </div>
  )
}

export default function ArtifaxDv({ p }) {
  return (
    <>
      <CaseIndex groups={INDEX} />

      <section id="afx-intro" className="cs-section">
        <SectionHead kicker="DV · group project" title={a.intro.title} />
        <div className="cs-two">
          <div>
            <p className="cs-lead"><Words>{a.intro.text}</Words></p>
            <div className="dv-links">
              <a className="btn-accent" href={a.links.live} target="_blank" rel="noreferrer">
                Open the live app <Arrow />
              </a>
              <a className="btn-ghost dv-link" href={a.links.repo} target="_blank" rel="noreferrer">
                <SiGithub aria-hidden="true" /> Source code
              </a>
            </div>
          </div>
          <dl className="numbers dv-glance">
            {a.glance.map((n) => (
              <div key={n.label}>
                <dt className="pixel">{n.value}</dt>
                <dd>{n.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section id="afx-team" className="cs-section">
        <SectionHead kicker="the brief & the team" title="A team of five, one repo" />
        <div className="afx-brief">
          <div className="hmw">
            <span className="hmw-label">The brief</span>
            <p><Words>{a.brief}</Words></p>
          </div>
        </div>
        <ul className="afx-team">
          {a.team.map((m) => (
            <li key={m.name} className={`comp-card ${m.me ? 'is-me' : ''}`}>
              <span className="afx-avatar">{m.initials}</span>
              <div>
                <h3>
                  {m.name}
                  {m.me && <small> (me)</small>}
                </h3>
                <p className="afx-area">// {m.area}</p>
                <p>{m.role}</p>
              </div>
            </li>
          ))}
        </ul>
        <Why label="how we worked">{a.workflow}</Why>
      </section>

      <section id="afx-features" className="cs-section">
        <SectionHead kicker="the app" title="One screen per job" />
        <div className="afx-features">
          {a.features.map((f, i) => (
            <article key={f.title} className={`afx-feature ${i % 2 ? 'is-flipped' : ''}`}>
              <figure className="tab-frame">
                <img src={f.img} alt={`Artifax ${f.title} screen`} loading="lazy" />
              </figure>
              <div className="feature-text">
                <span className="feature-no pixel">{String(i + 1).padStart(2, '0')}</span>
                <h3>{f.title}</h3>
                <p className="feature-desc">// {f.text}</p>
                <ul>
                  {f.why.map((w) => (
                    <li key={w}><Words>{w}</Words></li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="afx-stack" className="cs-section">
        <SectionHead kicker="built with" title="The tech stack, and why" />
        <div className="dv-stack">
          {a.stack.map((s) => (
            <article key={s.key} className="dv-stack-card" style={{ '--c': STACK[s.key].color }}>
              <span className="stack-ico" aria-hidden="true">{STACK[s.key].icon}</span>
              <div>
                <h3>{s.name}</h3>
                <p className="dv-stack-role">// {s.role}</p>
                <p>{s.why}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="afx-tools">
          <span className="why-label">// languages & tools</span>
          <ul className="cs-tags">{a.tools.map((t) => <li key={t}>{t}</li>)}</ul>
        </div>
      </section>

      <section id="afx-arch" className="cs-section">
        <SectionHead kicker="how it works" title="The server decides the warehouse" />
        <div className="arch arch-afx" role="img" aria-label="Architecture: the React app sends a session cookie and warehouse to the .NET API, which verifies login codes with Supabase and runs scoped queries against PostgreSQL.">
          <Node k="app" />
          <Link_ label={a.arch.links.appApi} cls="arch-l1" />
          <Node k="api" />
          <Link_ label={a.arch.links.apiAuth} cls="arch-l2" />
          <Node k="auth" />
          <Link_ label={a.arch.links.apiDb} dir="v" cls="arch-l4" />
          <Node k="db" />
        </div>
        <Why label="the key decision">{a.arch.why}</Why>
      </section>

      <section id="afx-db" className="cs-section">
        <SectionHead kicker="data model" title="The database" />
        <div className="erd erd-afx">
          {a.db.tables.map((t) => (
            <article key={t.name} className="erd-table">
              <header>
                <b>{t.name}</b>
                {t.note && <small>{t.note}</small>}
              </header>
              <ul>
                {t.fields.map(([k, f]) => (
                  <li key={f}>
                    <span className={`erd-key ${k ? 'is-key' : ''}`}>{k}</span>
                    {f}
                  </li>
                ))}
              </ul>
              {t.rel && <span className="erd-rel">{t.rel}</span>}
            </article>
          ))}
          <p className="erd-note">
            <span className="why-label">// postgresql · ef core</span>
            {a.db.note}
          </p>
        </div>
      </section>

      <section id="afx-data" className="cs-section">
        <SectionHead kicker="under the hood" title="Data, security & testing" />
        <div className="dv-crud">
          {a.crud.map((c) => (
            <article key={c.op} className="comp-card">
              <span className="crud-op">{c.op}</span>
              <ul className="dv-list">{c.items.map((t) => <li key={t}>{t}</li>)}</ul>
            </article>
          ))}
        </div>
        <div className="dv-cols afx-cols">
          <article className="comp-card">
            <h3>Security</h3>
            <ul className="dv-list">{a.security.map((t) => <li key={t}>{t}</li>)}</ul>
          </article>
          <article className="comp-card">
            <h3>Quality</h3>
            <ul className="dv-list">{a.quality.map((t) => <li key={t}>{t}</li>)}</ul>
          </article>
          <article className="comp-card afx-stock">
            <h3>Stock stays correct</h3>
            <p>Creating an order deducts its materials in the API, and cancelling it refunds them. The frontend never edits stock directly, so two people crafting at once can’t push a warehouse below zero.</p>
          </article>
        </div>
      </section>

      <section id="afx-git" className="cs-section">
        <SectionHead kicker="workflow" title="Git & deployment" />
        <div className="dv-qa">
          <Steps steps={a.git.steps} />
          <Code file="Terminal · Artifax" code={a.git.terminal} />
        </div>
      </section>

      <section id="afx-changes" className="cs-section">
        <SectionHead kicker="after hand-in" title="What I changed on my own fork, and why" />
        <ol className="dv-ai-jobs afx-changes">
          {a.changes.map((c) => (
            <li key={c.title}>
              <span className="afx-change-tag">{c.title}</span>
              <h3>
                {c.from} <span aria-hidden="true">→</span> {c.to}
              </h3>
              <p>{c.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section id="afx-reflect" className="cs-section">
        <SectionHead kicker="reflection" title="What I learned" />
        <div className="reflect">
          <div className="note note-green">
            <span className="note-ico" aria-hidden="true">!</span>
            <h3>Challenges</h3>
            <ul>
              {a.challenges.map((c) => (
                <li key={c.title}>
                  <b>{c.title}.</b> {c.text}
                </li>
              ))}
            </ul>
          </div>
          <div className="note note-yellow">
            <span className="note-ico" aria-hidden="true">✓</span>
            <h3>What I learned</h3>
            <ul>{a.learned.map((l) => <li key={l}>{l}</li>)}</ul>
            <h3 className="afx-next">Next</h3>
            <ul>{a.next.map((l) => <li key={l}>{l}</li>)}</ul>
          </div>
        </div>

        <div className="cta-pair">
          <div className="play-cta" style={{ '--bg': p.theme.bg }}>
            <div>
              <p className="hand">// try it yourself</p>
              <h3>Open the live web app</h3>
              <p>Runs in any browser, shown in a tablet frame. No download needed.</p>
            </div>
            <a className="btn-accent" href={a.links.live} target="_blank" rel="noreferrer">
              artifax-tau.vercel.app <Arrow />
            </a>
          </div>
          <div className="play-cta soon">
            <div>
              <p className="hand">// see more</p>
              <h3>The code behind it</h3>
              <p>My improved fork, and the original team repo with the full README and test reports.</p>
            </div>
            <div className="cta-stack">
              <a className="btn-accent" href={a.links.repo} target="_blank" rel="noreferrer">
                <SiGithub aria-hidden="true" /> My fork on GitHub <Arrow />
              </a>
              <a className="btn-ghost" href={a.links.team} target="_blank" rel="noreferrer">
                Original team repo <Arrow />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export const ARTIFAX_OVERVIEW = a.overview
