import { aquastainable as a } from '../data/aquastainable.js'
import { SectionHead, Why } from '../components/CaseBits.jsx'
import CaseIndex from '../components/CaseIndex.jsx'
import Words from '../components/Words.jsx'
import PhoneSpread from '../components/Phones.jsx'
import { Arrow } from '../components/Icons.jsx'
import { SiReact, SiNodedotjs, SiFirebase, SiCloudinary, SiRender, SiGithub } from 'react-icons/si'

const AiIcon = () => (
  <svg viewBox="0 0 24 24">
    <path
      d="M12 3l1.8 4.7L18.5 9.5l-4.7 1.8L12 16l-1.8-4.7L5.5 9.5l4.7-1.8zM19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8z"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinejoin="round"
    />
  </svg>
)

const STACK = {
  expo: { icon: <SiReact />, color: '#61DAFB' },
  node: { icon: <SiNodedotjs />, color: '#5FA04E' },
  groq: { icon: <AiIcon />, color: '#F55036' },
  firebase: { icon: <SiFirebase />, color: '#FFCA28' },
  cloud: { icon: <SiCloudinary />, color: '#5b8cff' },
  render: { icon: <SiRender />, color: '#ffffff' },
}

const NODE = { app: STACK.expo, api: STACK.node, ai: STACK.groq, db: STACK.firebase }

const INDEX = [
  { group: 'Overview', items: [{ id: 'aq-intro', label: 'The project' }, { id: 'aq-brief', label: 'Brief & problem' }] },
  {
    group: 'The app',
    items: [
      { id: 'aq-gestures', label: 'No buttons' },
      { id: 'aq-features', label: 'Features' },
    ],
  },
  {
    group: 'How it’s built',
    items: [
      { id: 'aq-stack', label: 'Tech stack' },
      { id: 'aq-arch', label: 'Architecture & AI' },
      { id: 'aq-db', label: 'Database' },
      { id: 'aq-data', label: 'Data, security & tests' },
    ],
  },
  {
    group: 'Wrap-up',
    items: [
      { id: 'aq-changes', label: 'After hand-in' },
      { id: 'aq-reflect', label: 'Reflection' },
    ],
  },
]

function Node({ k }) {
  const n = a.arch[k]
  const ico = NODE[k]
  return (
    <div className={`arch-node arch-${k}`} style={{ '--c': ico.color }}>
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

export default function AquaDv({ p }) {
  return (
    <>
      <CaseIndex groups={INDEX} />

      <section id="aq-intro" className="cs-section">
        <SectionHead kicker="DV · term 3 · solo project" title={a.intro.title} />
        <div className="cs-two">
          <div>
            <p className="cs-lead"><Words>{a.intro.text}</Words></p>
            <div className="dv-links">
              <a className="btn-accent" href={a.links.video} target="_blank" rel="noreferrer">
                Watch the demo <Arrow />
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

      <section id="aq-brief" className="cs-section">
        <SectionHead kicker="the brief & the problem" title="Three cards, one hobby" />
        <div className="hmw">
          <span className="hmw-label">The brief</span>
          <p><Words>{a.brief}</Words></p>
        </div>
        <p className="cs-lead aq-problem"><Words>{a.problem.text}</Words></p>
        <div className="secondary aq-stats">
          {a.problem.stats.map((s) => (
            <article key={s.title} className="sec-card">
              <span className="pixel sec-value">{s.value}</span>
              <h3 className="sec-title">{s.title}</h3>
              <p>{s.text}</p>
              <small>{s.src}</small>
            </article>
          ))}
        </div>
      </section>

      <section id="aq-gestures" className="cs-section">
        <SectionHead kicker="design · the big rule" title="No buttons, just gestures" />
        <ol className="dv-ai-jobs aq-gestures">
          {a.gestures.map((g, i) => (
            <li key={g.title}>
              <span className="pixel">{String(i + 1).padStart(2, '0')}</span>
              <h3>{g.title}</h3>
              <p>{g.text}</p>
            </li>
          ))}
        </ol>
        <Why label="why it mattered">A constraint like this forces you to design the interaction before the screen. A hold with a ripple and haptics is slower than a tap on purpose, so deleting a tank can never happen by accident.</Why>
      </section>

      <section id="aq-features" className="cs-section">
        <SectionHead kicker="the app" title="Your tank, explained" />
        <div className="features">
          {a.features.map((f, i) => (
            <article key={f.title} className={`feature-row ${i % 2 ? 'is-flipped' : ''}`}>
              <div className="feature-shot">
                <PhoneSpread screens={f.screens} variant={i % 2 ? 'trio-r' : 'trio'} label={`${f.title} screens`} />
              </div>
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

      <section id="aq-stack" className="cs-section">
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

      <section id="aq-arch" className="cs-section">
        <SectionHead kicker="how it works" title="The AI only sees your tank" />
        <div className="arch arch-afx" role="img" aria-label="Architecture: the Expo app sends a Firebase token to the Express API, which builds prompts for Groq from your own tank and reads and writes Firestore with Firebase Admin.">
          <Node k="app" />
          <Link_ label={a.arch.links.appApi} cls="arch-l1" />
          <Node k="api" />
          <Link_ label={a.arch.links.apiAi} cls="arch-l2" />
          <Node k="ai" />
          <Link_ label={a.arch.links.apiDb} dir="v" cls="arch-l4" />
          <Node k="db" />
        </div>
        <Why label="the key decision">{a.arch.why}</Why>
        <ol className="dv-ai-jobs aq-ai">
          {a.ai.map((j, i) => (
            <li key={j.title}>
              <span className="pixel">AI_{String(i + 1).padStart(2, '0')}</span>
              <h3>{j.title}</h3>
              <p>{j.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section id="aq-db" className="cs-section">
        <SectionHead kicker="data model" title="Everything lives inside the tank" />
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
            <span className="why-label">// firestore · nested collections</span>
            {a.db.note}
          </p>
        </div>
      </section>

      <section id="aq-data" className="cs-section">
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
            <h3>Images stay out of the database</h3>
            <p>Photos go to Cloudinary first and only the URL is saved. Image and base64 fields are also stripped before anything is sent to the AI, which keeps prompts small and fast.</p>
          </article>
        </div>
      </section>

      <section id="aq-changes" className="cs-section">
        <SectionHead kicker="after hand-in" title="What I changed, and why" />
        <div className="aq-before">
          {a.before.map((src) => (
            <figure key={src} className="aq-before-fig">
              <img src={src} alt="Aquastainable at hand-in, before the redesign" loading="lazy" />
              <figcaption>// at hand-in</figcaption>
            </figure>
          ))}
        </div>
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

      <section id="aq-reflect" className="cs-section">
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
              <p className="hand">// see it working</p>
              <h3>Watch the demo video</h3>
              <p>A short walkthrough of every gesture: sign-in, tanks, compatibility, water tests and the assistant.</p>
            </div>
            <a className="btn-accent" href={a.links.video} target="_blank" rel="noreferrer">
              Play the demo <Arrow />
            </a>
          </div>
          <div className="play-cta soon">
            <div>
              <p className="hand">// see more</p>
              <h3>The code behind it</h3>
              <p>The full repo, with the README, API reference, data model and how the AI prompts work.</p>
            </div>
            <div className="cta-stack">
              <a className="btn-accent" href={a.links.repo} target="_blank" rel="noreferrer">
                <SiGithub aria-hidden="true" /> Code on GitHub <Arrow />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export const AQUA_OVERVIEW = a.overview
