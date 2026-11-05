import { useEffect } from 'react'
import { Link } from '../router.jsx'
import { getProject, trackLabel, LINKS } from '../data/projects.js'
import { caseStudies } from '../data/caseStudies.js'
import { Arrow } from '../components/Icons.jsx'
import PhoneSpread from '../components/Phones.jsx'
import WireFlow from '../components/WireFlow.jsx'

function SectionHead({ kicker, title }) {
  return (
    <header className="cs-head">
      <p className="hand cs-kicker">{kicker}</p>
      <h2 className="cs-title">{title}</h2>
    </header>
  )
}

function Hero({ p }) {
  return (
    <section className="cs-hero" style={{ '--bg': p.theme.bg, '--ink': p.theme.ink, '--accent': p.theme.accent }}>
      <div className="cs-hero-copy">
        <p className="cs-kind">
          <span className="cs-kind-dot" aria-hidden="true" /> {trackLabel(p)} · {p.kind}
        </p>
        <h1 className="pixel cs-name">{p.title.toUpperCase()}</h1>
        <p className="cs-tagline">{p.tagline}</p>
        <p className="cs-summary">{p.summary}</p>
        <ul className="cs-tags">
          {p.tags.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
        <p className="folder-meta cs-meta">
          <span className="dot" aria-hidden="true" /> {p.year} · {p.sector}
          {p.group ? ' · Group project' : ''}
        </p>
      </div>
      <div className="cs-hero-phones">
        <span className="cs-blob" aria-hidden="true" />
        <PhoneSpread screens={p.screens} variant="hero" label={`${p.title} app screens`} />
      </div>
    </section>
  )
}

function Overview({ items }) {
  return (
    <dl className="cs-overview">
      {items.map((o) => (
        <div key={o.label}>
          <dt>{o.label}</dt>
          <dd>{o.value}</dd>
        </div>
      ))}
    </dl>
  )
}

function Why({ children, label = 'Why this choice' }) {
  return (
    <aside className="why-note">
      <span className="hand why-label">{label}</span>
      <p>{children}</p>
    </aside>
  )
}

function TowerCaseStudy({ cs, p }) {
  return (
    <>
      <section className="cs-section">
        <SectionHead kicker="the story behind the problem" title={cs.story.title} />
        <div className="cs-two">
          <p className="cs-lead">{cs.story.text}</p>
          <div className="stat-stack">
            {cs.story.stats.map((s, i) => (
              <article key={s.title} className={`stat-card tilt-${i}`}>
                <span className="stat-value">{s.value}</span>
                <div>
                  <h3>{s.title}</h3>
                  <p>of 21 learners {s.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cs-section">
        <SectionHead kicker="my process" title="From first idea to deployment" />
        <ol className="process">
          {cs.process.map((s, i) => (
            <li key={s.stage} className={`process-step ps-${i % 4}`}>
              <span className="process-no">Stage {String(i + 1).padStart(2, '0')}</span>
              <h3>{s.stage}</h3>
              <p>{s.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="cs-section">
        <SectionHead kicker="discover · research 01" title="Survey insights" />
        <div className="cs-two">
          <div>
            <p className="big-number pixel">21</p>
            <p className="cs-lead">{cs.survey.intro}</p>
            <Why label="why a survey?">{cs.survey.why}</Why>
          </div>
          <div className="bars">
            {cs.survey.bars.map((b) => (
              <div key={b.q} className="bar">
                <p className="bar-q">{b.q}</p>
                <div className="bar-row">
                  <div className="bar-track">
                    <div className="bar-fill" style={{ width: `${b.value}%` }} />
                  </div>
                  <span className="bar-value">{b.value}%</span>
                </div>
                <p className="bar-label">{b.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cs-section">
        <SectionHead kicker="research 02 & 03" title="What the literature and competitors said" />
        <div className="secondary">
          {cs.secondary.map((s) => (
            <article key={s.value} className="sec-card">
              <span className="pixel sec-value">{s.value}</span>
              <p>{s.text}</p>
              <small>{s.src}</small>
            </article>
          ))}
        </div>
        <div className="competitors">
          {cs.competitors.map((c, i) => (
            <article key={c.name} className="comp-card">
              <span className="comp-no">0{i + 1}</span>
              <h3>{c.name}</h3>
              <p className="comp-gap"><b>The gap:</b> {c.gap}</p>
              <p className="comp-built"><b>How I built on it:</b> {c.built}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="cs-section">
        <SectionHead kicker="define · who I designed for" title={`Meet ${cs.persona.name.split(' ')[0]}`} />
        <div className="persona">
          <figure className="polaroid persona-pol">
            <span className="tape tape-blue" />
            <img src={cs.persona.img} alt="Persona photo of Liam, a Grade 10 learner" />
            <figcaption className="hand">
              {cs.persona.name}
              <br />
              <small>{cs.persona.meta}</small>
            </figcaption>
          </figure>
          <div className="persona-body">
            <blockquote className="persona-quote">“{cs.persona.quote}”</blockquote>
            <div className="persona-lists">
              <div>
                <h3>Goals</h3>
                <ul>{cs.persona.goals.map((g) => <li key={g}>{g}</li>)}</ul>
              </div>
              <div>
                <h3>Frustrations</h3>
                <ul>{cs.persona.pains.map((g) => <li key={g}>{g}</li>)}</ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cs-section">
        <SectionHead kicker="define" title="The problem" />
        <p className="cs-lead narrow">{cs.problem}</p>
        <div className="hmw">
          <span className="hand hmw-label">How might we…</span>
          <p>{cs.hmw}</p>
        </div>
      </section>

      <section className="cs-section">
        <SectionHead kicker="ideate · experience planning" title="Wire flow" />
        <p className="cs-lead narrow">Every route through the app, from opening it for the first time to beating the boss. Each lane is one part of the journey: read it left to right.</p>
        <WireFlow />
      </section>

      <section className="cs-section">
        <SectionHead kicker="plan" title="Wireframes first" />
        <div className="cs-two">
          <PhoneSpread
            screens={cs.wireframes}
            variant="quad"
            label="Greyscale wireframes: sign up, choose grade, combat and tower map"
          />
          <div>
            <p className="cs-lead">Key flows were planned as 45+ wireframes to check structure, interactions and content before any colour went on, giving one base template for all three grade modes.</p>
            <div className="style-block">
              <p className="hand cs-kicker">style overview</p>
              <ul className="swatches">
                {cs.style.colors.map((c) => (
                  <li key={c.hex}>
                    <span className="swatch" style={{ background: c.hex }} />
                    <b>{c.name}</b>
                    <small>{c.hex}</small>
                  </li>
                ))}
              </ul>
              <Why label="why these styles?">{cs.style.why}</Why>
            </div>
          </div>
        </div>
      </section>

      <section className="cs-section">
        <SectionHead kicker="design · final UI" title="Features & why" />
        <dl className="numbers">
          {cs.numbers.map((n) => (
            <div key={n.label}>
              <dt className="pixel">{n.value}</dt>
              <dd>{n.label}</dd>
            </div>
          ))}
        </dl>
        <div className="features">
          {cs.features.map((f, i) => (
            <article key={f.title} className={`feature-row ${i % 2 ? 'is-flipped' : ''}`}>
              <div className="feature-shot">
                <PhoneSpread
                  screens={[1, 2, 3].map((k) => `/screens/f${String(i + 1).padStart(2, '0')}-${k}.jpg`)}
                  variant={i % 2 ? 'trio-r' : 'trio'}
                  label={`${f.title} screens`}
                />
              </div>
              <div className="feature-text">
                <span className="feature-no pixel">{String(i + 1).padStart(2, '0')}</span>
                <h3>{f.title}</h3>
                <p className="feature-desc">{f.text}</p>
                <ul>
                  {f.why.map((w) => (
                    <li key={w}>{w}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="cs-section dev-section">
        <SectionHead kicker="DV · how I built it" title="From Figma to a live app" />
        <p className="cs-lead narrow">{cs.dev.intro}</p>
        <ul className="stack-list">
          {cs.dev.stack.map((s) => (
            <li key={s.name}>
              <b>{s.name}</b>
              <span>{s.role}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="cs-section">
        <SectionHead kicker="the summit" title="Tower cleared" />
        <p className="cs-lead narrow">{cs.conclusion}</p>
        <div className="reflect">
          <div className="note note-green">
            <h3>What I learned</h3>
            <ul>{cs.learned.map((l) => <li key={l}>{l}</li>)}</ul>
          </div>
          <div className="note note-yellow">
            <h3>If I had more time</h3>
            <ul>{cs.moreTime.map((l) => <li key={l}>{l}</li>)}</ul>
          </div>
        </div>
        <div className="play-cta" style={{ '--bg': p.theme.bg, '--accent': p.theme.accent }}>
          <div>
            <p className="hand">try it yourself!</p>
            <h3>Play the live prototype</h3>
            <p>Works in any browser on Android, iPhone or desktop. Sign up or play as a guest.</p>
          </div>
          <a className="btn-accent" href={p.live} target="_blank" rel="noreferrer">
            tower-of-arithmetic.vercel.app <Arrow />
          </a>
        </div>
      </section>
    </>
  )
}

function ShortCaseStudy({ cs }) {
  return (
    <>
      <section className="cs-section">
        <SectionHead kicker="the design challenge" title="What needed solving" />
        <p className="cs-lead narrow">{cs.challenge}</p>
        {cs.hmw && (
          <div className="hmw">
            <span className="hand hmw-label">How might we…</span>
            <p>{cs.hmw}</p>
          </div>
        )}
      </section>
      <section className="cs-section">
        <SectionHead kicker="the solution" title="What I designed" />
        <p className="cs-lead narrow">{cs.solution}</p>
      </section>
      <section className="cs-section">
        <SectionHead kicker="looking back" title="Conclusion" />
        <p className="cs-lead narrow">{cs.conclusion}</p>
        <div className="play-cta soon">
          <div>
            <p className="hand">full case study coming to this site soon</p>
            <h3>Read the full case study on Behance</h3>
            <p>Research, blueprints, wireframes and every final screen.</p>
          </div>
          <a className="btn-dark" href={LINKS.behance} target="_blank" rel="noreferrer">
            Open Behance <Arrow />
          </a>
        </div>
      </section>
    </>
  )
}

export default function ProjectPage({ slug }) {
  const p = getProject(slug)
  useEffect(() => {
    document.title = p ? `${p.title} · Andre van Heerden` : 'Not found · Andre van Heerden'
    return () => {
      document.title = 'Andre van Heerden · UX/UI Designer & Developer'
    }
  }, [p])

  if (!p) {
    return (
      <section className="not-found">
        <h1 className="pixel">404</h1>
        <p className="hand">this page wandered off…</p>
        <Link to="/" className="btn-dark">Back home</Link>
      </section>
    )
  }

  const cs = caseStudies[slug]

  return (
    <article className="cs">
      <Hero p={p} />
      <Overview items={cs.overview} />
      {slug === 'tower-of-arithmetic' ? <TowerCaseStudy cs={cs} p={p} /> : <ShortCaseStudy cs={cs} />}
    </article>
  )
}
