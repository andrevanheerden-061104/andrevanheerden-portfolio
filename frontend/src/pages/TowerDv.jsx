
import { towerDv as dv } from '../data/towerDv.js'
import { SectionHead, Why } from '../components/CaseBits.jsx'
import CaseIndex from '../components/CaseIndex.jsx'
import Words from '../components/Words.jsx'
import { Arrow } from '../components/Icons.jsx'
import { SiReact, SiNodedotjs, SiSupabase, SiVercel, SiExpo, SiGithub, SiAndroid } from 'react-icons/si'

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
  supabase: { icon: <SiSupabase />, color: '#3ECF8E' },
  vercel: { icon: <SiVercel />, color: '#ffffff' },
  eas: { icon: <SiExpo />, color: '#ffffff' },
}

const NODE_ICON = {
  app: STACK.expo,
  api: STACK.node,
  ai: STACK.groq,
  db: STACK.supabase,
}

export const TOWER_DV_INDEX = [
  {
    group: 'Overview',
    items: [
      { id: 'dv-intro', label: 'The build' },
      { id: 'dv-stack', label: 'Tech stack' },
      { id: 'dv-arch', label: 'Architecture' },
    ],
  },
  {
    group: 'AI',
    items: [
      { id: 'dv-ai', label: 'What the AI does' },
      { id: 'dv-trace', label: 'Tracing a request' },
      { id: 'dv-fail', label: 'When the AI fails' },
      { id: 'dv-halluc', label: 'Hallucinations' },
      { id: 'dv-ethics', label: 'Ethics & privacy' },
    ],
  },
  {
    group: 'Data & security',
    items: [
      { id: 'dv-db', label: 'Database' },
      { id: 'dv-crud', label: 'CRUD & validation' },
      { id: 'dv-security', label: 'Security & login' },
    ],
  },
  {
    group: 'Code & process',
    items: [
      { id: 'dv-code', label: 'Code & tests' },
      { id: 'dv-mvp', label: 'MVP vs delivered' },
      { id: 'dv-git', label: 'Git & deployment' },
      { id: 'dv-aitools', label: 'AI coding tools' },
    ],
  },
  {
    group: 'Wrap-up',
    items: [{ id: 'dv-reflect', label: 'Challenges & next' }],
  },
]

function Code({ file, code }) {
  return (
    <figure className="code-card">
      <figcaption>
        <span className="code-dots" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
        {file}
      </figcaption>
      <pre>
        <code>
          {code.split('\n').map((line, i) => (
            <span key={i} className="code-line">
              <span className="code-no" aria-hidden="true">{i + 1}</span>
              {line || ' '}
            </span>
          ))}
        </code>
      </pre>
    </figure>
  )
}

export function Steps({ steps }) {
  return (
    <ol className="dv-steps">
      {steps.map((s, i) => (
        <li key={s.title}>
          <span className="dv-step-no">{i + 1}</span>
          <div>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
          </div>
        </li>
      ))}
    </ol>
  )
}

/* A question from the DV300 brief, answered with steps + the real code. */
function QA({ id, kicker, data }) {
  return (
    <section id={id} className="cs-section">
      <SectionHead kicker={kicker} title={data.title || data.q} />
      <div className="dv-qa">
        <Steps steps={data.steps} />
        <Code file={data.file} code={data.code} />
      </div>
    </section>
  )
}

function ArchNode({ k }) {
  const n = dv.arch.nodes[k]
  const ico = NODE_ICON[k]
  return (
    <div className={`arch-node arch-${k}`} style={{ '--c': ico.color }}>
      <span className="arch-tag">{n.tag}</span>
      <span className="stack-ico" aria-hidden="true">{ico.icon}</span>
      <b>{n.name}</b>
      <small>{n.text}</small>
    </div>
  )
}

function ArchLink({ label, dir = 'h', className = '', mobilePrefix }) {
  return (
    <div className={`arch-link arch-link-${dir} ${className}`}>
      <span className="arch-line" aria-hidden="true" />
      <span className="arch-label">
        {mobilePrefix && <b className="arch-mprefix">{mobilePrefix} </b>}
        {label}
      </span>
    </div>
  )
}

export default function TowerDv({ onSwitch }) {
  return (
    <>
      <CaseIndex groups={TOWER_DV_INDEX} />

      <section id="dv-intro" className="cs-section">
        <SectionHead kicker="DV · the build" title={dv.intro.title} />
        <div className="cs-two">
          <div>
            <p className="cs-lead"><Words>{dv.intro.text}</Words></p>
            <p className="dv-switch-note">
              Looking for the research, persona and design process?{' '}
              <button type="button" className="text-link" onClick={onSwitch}>
                Switch to the UX case study
              </button>
              .
            </p>
            <div className="dv-links">
              <a className="btn-accent" href={dv.links.live} target="_blank" rel="noreferrer">
                Play it live <Arrow />
              </a>
              <a className="btn-ghost dv-link" href={dv.links.repo} target="_blank" rel="noreferrer">
                <SiGithub aria-hidden="true" /> Source code
              </a>
              <a className="btn-ghost dv-link" href={dv.links.apk} target="_blank" rel="noreferrer">
                <SiAndroid aria-hidden="true" /> Android APK
              </a>
            </div>
          </div>
          <dl className="numbers dv-glance">
            {dv.glance.map((n) => (
              <div key={n.label}>
                <dt className="pixel">{n.value}</dt>
                <dd>{n.label}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="dv-features">
          <p className="hand cs-kicker">what the app does</p>
          <ul>
            {dv.features.map((f, i) => (
              <li key={f}>
                <span>{String(i + 1).padStart(2, '0')}</span>
                {f}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="dv-stack" className="cs-section">
        <SectionHead kicker="technical walkthrough" title="The tech stack, and why" />
        <div className="dv-stack">
          {dv.stack.map((s) => (
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
      </section>

      <section id="dv-arch" className="cs-section">
        <SectionHead kicker="architecture" title="How it fits together" />
        <div className="arch" role="img" aria-label="Architecture: the Expo app calls the Express API with a login token; the API calls Groq with a secret key and checks the token with Supabase; the app reads and writes the player's own rows in Supabase directly.">
          <ArchNode k="app" />
          <ArchLink label={dv.arch.links.appApi} className="arch-l1" />
          <ArchNode k="api" />
          <ArchLink label={dv.arch.links.apiAi} className="arch-l2" />
          <ArchNode k="ai" />
          <ArchLink label={dv.arch.links.appDb} dir="v" className="arch-l3" mobilePrefix="Expo app → Supabase:" />
          <ArchLink label={dv.arch.links.apiDb} dir="v" className="arch-l4" />
          <ArchNode k="db" />
        </div>
        <Why label="why this shape?">{dv.arch.why}</Why>
      </section>

      <section id="dv-ai" className="cs-section">
        <SectionHead kicker="AI implementation" title="What the AI does" />
        <p className="cs-lead narrow">
          <Words>The AI does five jobs. Without it, the game would just be a fixed quiz.</Words>
        </p>
        <ol className="dv-ai-jobs">
          {dv.aiJobs.map((j, i) => (
            <li key={j.title}>
              <span className="pixel">{i + 1}</span>
              <h3>{j.title}</h3>
              <p>{j.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <QA id="dv-trace" kicker="AI · question 1" data={{ ...dv.trace, title: 'Tracing one AI request' }} />
      <QA id="dv-fail" kicker="AI · question 2" data={{ ...dv.fail, title: 'When the AI fails' }} />
      <QA id="dv-halluc" kicker="AI · question 3" data={{ ...dv.halluc, title: 'Hallucinations: never mark a right answer wrong' }} />

      <section id="dv-ethics" className="cs-section">
        <SectionHead kicker="AI ethics" title="Ethics & privacy for young learners" />
        <div className="dv-cols">
          {dv.ethics.map((c) => (
            <article key={c.title} className="comp-card">
              <h3>{c.title}</h3>
              <ul className="dv-list">{c.items.map((t) => <li key={t}>{t}</li>)}</ul>
            </article>
          ))}
        </div>
      </section>

      <section id="dv-db" className="cs-section">
        <SectionHead kicker="data model" title="The database" />
        <div className="erd">
          {dv.db.tables.map((t, i) => (
            <article key={t.name} className={`erd-table erd-${i}`}>
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
          <span className="erd-wire erd-wire-a" aria-hidden="true" />
          <p className="erd-note">
            <span className="why-label">// supabase · postgresql</span>
            {dv.db.note}
          </p>
        </div>
      </section>

      <section id="dv-crud" className="cs-section">
        <SectionHead kicker="CRUD in the code" title="Create, read, update, delete" />
        <div className="dv-crud">
          {dv.crud.map((c) => (
            <article key={c.op} className="comp-card">
              <span className="crud-op">{c.op}</span>
              <ul className="dv-list mono">{c.items.map((t) => <li key={t}>{t}</li>)}</ul>
            </article>
          ))}
        </div>
        <div className="dv-validate">
          <p className="hand cs-kicker">validation in three places</p>
          <div>
            {dv.validation.map((v) => (
              <p key={v.where}>
                <b>{v.where}</b>
                {v.text}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section id="dv-security" className="cs-section">
        <SectionHead kicker="security & authentication" title="Login, tokens and secrets" />
        <div className="dv-crud">
          {dv.security.map((c) => (
            <article key={c.title} className="comp-card">
              <span className="crud-op">{c.title}</span>
              <ul className="dv-list">{c.items.map((t) => <li key={t}>{t}</li>)}</ul>
            </article>
          ))}
        </div>
        <div className="dv-qa dv-qa-sub">
          <div>
            <p className="hand cs-kicker">“{dv.noLogin.q}”</p>
            <Steps steps={dv.noLogin.steps} />
          </div>
          <Code file={dv.noLogin.file} code={dv.noLogin.code} />
        </div>
      </section>

      <section id="dv-code" className="cs-section">
        <SectionHead kicker="code quality" title="Code structure & tests" />
        <div className="dv-structure">
          {dv.structure.map((col) => (
            <article key={col.title} className="comp-card">
              <h3 className="mono-title">{col.title}</h3>
              <ul className="tree">
                {col.items.map(([dir, t]) => (
                  <li key={dir}>
                    <code>{dir}</code>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
          <div className="dv-tests">
            <ul className="dv-list">{dv.dry.map((t) => <li key={t}>{t}</li>)}</ul>
            <Code file="Terminal · Backend" code={dv.tests} />
          </div>
        </div>
      </section>

      <section id="dv-mvp" className="cs-section">
        <SectionHead kicker="process & reflection" title="MVP vs what I delivered" />
        <dl className="numbers">
          {dv.mvp.stats.map((n) => (
            <div key={n.label}>
              <dt className="pixel">{n.value}</dt>
              <dd>{n.label}</dd>
            </div>
          ))}
        </dl>
        <div className="mvp-grid">
          <article className="comp-card">
            <h3>Must have (pitch)</h3>
            <ul className="check-list">{dv.mvp.must.map((t) => <li key={t} className="is-ok">{t}</li>)}</ul>
          </article>
          <article className="comp-card">
            <h3>Nice to have</h3>
            <ul className="check-list">
              {dv.mvp.nice.map((t) => (
                <li key={t.t} className={t.ok ? 'is-ok' : 'is-no'}>{t.t}</li>
              ))}
            </ul>
          </article>
          <article className="comp-card">
            <h3>Changed on purpose</h3>
            <ul className="check-list">{dv.mvp.changed.map((t) => <li key={t} className="is-change">{t}</li>)}</ul>
          </article>
          <article className="comp-card">
            <h3>Added</h3>
            <ul className="check-list">{dv.mvp.added.map((t) => <li key={t} className="is-ok">{t}</li>)}</ul>
          </article>
        </div>
        <div className="dv-feedback">
          <p className="hand cs-kicker">feedback that changed it</p>
          <Steps steps={dv.feedback} />
        </div>
      </section>

      <section id="dv-git" className="cs-section">
        <SectionHead kicker="workflow" title="Git & deployment" />
        <div className="dv-qa">
          <Steps steps={dv.git.steps} />
          <Code file="Terminal · Tower-of-Arithmetic" code={dv.git.terminal} />
        </div>
      </section>

      <section id="dv-aitools" className="cs-section">
        <SectionHead kicker="code ownership" title="Where AI coding tools helped" />
        <p className="cs-lead narrow">
          <Words>Honest answer: I designed it, AI tools helped write the code, and I tested and checked it.</Words>
        </p>
        <ol className="dv-ai-jobs dv-owner">
          {dv.aiTools.map((j, i) => (
            <li key={j.title}>
              <span className="pixel">{i + 1}</span>
              <h3>{j.title}</h3>
              <p>{j.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section id="dv-reflect" className="cs-section">
        <SectionHead kicker="the summit" title="Challenges & what comes next" />
        <div className="reflect">
          <div className="note note-green">
            <span className="note-ico" aria-hidden="true">!</span>
            <h3>Challenges I solved</h3>
            <ul>
              {dv.challenges.map((c) => (
                <li key={c.title}>
                  <b>{c.title}.</b> {c.text}
                </li>
              ))}
            </ul>
          </div>
          <div className="note note-yellow">
            <span className="note-ico" aria-hidden="true">+</span>
            <h3>What comes next</h3>
            <ul>
              {dv.next.map((c) => (
                <li key={c.title}>
                  <b>{c.title}.</b> {c.text}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="play-cta">
          <div>
            <p className="hand">// try it yourself</p>
            <h3>Play it, install it, or read the code</h3>
            <p>Works in any browser. The Android APK is on GitHub Releases, and the README explains how to run it locally.</p>
          </div>
          <div className="dv-links">
            <a className="btn-accent" href={dv.links.live} target="_blank" rel="noreferrer">
              tower-of-arithmetic.vercel.app <Arrow />
            </a>
            <a className="btn-ghost dv-link" href={dv.links.repo} target="_blank" rel="noreferrer">
              <SiGithub aria-hidden="true" /> GitHub
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

