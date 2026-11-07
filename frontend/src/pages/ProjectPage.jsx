import { useEffect, useMemo, useState } from 'react'
import { Link } from '../router.jsx'
import { getProject, trackLabel, LINKS } from '../data/projects.js'
import { caseStudies } from '../data/caseStudies.js'
import { Arrow } from '../components/Icons.jsx'
import PhoneSpread from '../components/Phones.jsx'
import Words from '../components/Words.jsx'
import CaseIndex from '../components/CaseIndex.jsx'
import { SectionHead, Why } from '../components/CaseBits.jsx'
import TowerDv from './TowerDv.jsx'

function Hero({ p }) {
  return (
    <section className="cs-hero" style={{ '--bg': p.theme.bg, '--ink': p.theme.ink, '--accent': p.theme.accent }}>
      <div className="cs-hero-copy">
        <p className="cs-kind">
          <span className="cs-kind-dot" aria-hidden="true" /> {trackLabel(p)} · {p.kind}
        </p>
        <h1 className="pixel cs-name">{p.title.toUpperCase()}</h1>
        <p className="cs-tagline">// {p.tagline}</p>
        <p className="cs-summary"><Words>{p.summary}</Words></p>
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

/* Each case study page takes its project's colour in place of the purple.
   Values are set on <html> so the nav, index and buttons follow too. */
const THEMES = {
  'next-level': {
    '--site-accent': '#10b981', '--accent-2': '#34d399', '--accent-3': '#6ee7b7',
    '--accent-deep': '#059669', '--accent-deeper': '#03624c',
    '--acc-rgb': '16, 185, 129', '--acc2-rgb': '52, 211, 153',
  },
  'herd-link': {
    '--site-accent': '#eab308', '--accent-2': '#f2c230', '--accent-3': '#fde68a',
    '--accent-deep': '#ca8a04', '--accent-deeper': '#854d0e',
    '--acc-rgb': '234, 179, 8', '--acc2-rgb': '242, 194, 48', '--on-accent': '#1a1708',
  },
  'ford-relay': {
    '--site-accent': '#3b6cf0', '--accent-2': '#7aa2ff', '--accent-3': '#bfd0ff',
    '--accent-deep': '#2350d8', '--accent-deeper': '#142f8a',
    '--acc-rgb': '59, 108, 240', '--acc2-rgb': '122, 162, 255',
  },
}

function useProjectTheme(slug) {
  useEffect(() => {
    const vars = THEMES[slug]
    if (!vars) return undefined
    const root = document.documentElement
    Object.entries(vars).forEach(([k, v]) => root.style.setProperty(k, v))
    root.dataset.theme = slug
    return () => {
      Object.keys(vars).forEach((k) => root.style.removeProperty(k))
      delete root.dataset.theme
    }
  }, [slug])
}

/* Build the floating index from the sections a case study actually has. */
function uxIndex(cs) {
  const g = []
  g.push({
    group: 'Overview',
    items: [cs.story ? { id: 'story', label: 'The story' } : { id: 'brief', label: 'The brief' }, { id: 'process', label: 'Process' }],
  })
  const research = []
  if (cs.survey) research.push({ id: 'survey', label: 'Survey' })
  research.push({ id: 'research', label: cs.secondary ? 'Literature & competitors' : 'Research' })
  if (cs.featureMap) research.push({ id: 'featuremap', label: 'Feature mapping' })
  if (cs.ai) research.push({ id: 'ai', label: 'AI functionality' })
  research.push({ id: 'persona', label: 'Persona' }, { id: 'problem', label: 'Problem & HMW' })
  g.push({ group: 'Research', items: research })
  const plan = []
  if (cs.wireflow) plan.push({ id: 'wireflow', label: 'Wire flow' })
  plan.push({ id: 'wireframes', label: 'Wireframes & style' })
  g.push({ group: 'Planning', items: plan })
  g.push({ group: 'Design', items: [{ id: 'features', label: 'Features' }] })
  g.push({ group: 'Wrap-up', items: [{ id: 'conclusion', label: 'Conclusion' }] })
  return g
}

function UxCaseStudy({ cs, p, slug, onSwitch }) {
  const index = useMemo(() => uxIndex(cs), [cs])
  const first = cs.persona.name.split(' ')[0]
  return (
    <>
      <CaseIndex groups={index} />

      {cs.story ? (
        <section id="story" className="cs-section">
          <SectionHead kicker="the story behind the problem" title={cs.story.title} />
          <div className="cs-two">
            <p className="cs-lead"><Words>{cs.story.text}</Words></p>
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
      ) : (
        <section id="brief" className="cs-section">
          <SectionHead kicker="the brief" title="Challenge, problem, solution" />
          <div className="brief-grid">
            {cs.brief.map((b, i) => (
              <article key={b.label} className="comp-card brief-card">
                <span className="comp-no">0{i + 1}</span>
                <h3>{b.label}</h3>
                <p><Words>{b.text}</Words></p>
              </article>
            ))}
          </div>
        </section>
      )}

      <section id="process" className="cs-section">
        <SectionHead kicker="my process" title={cs.story ? 'From first idea to deployment' : 'From research to prototype'} />
        <ol className="process">
          {cs.process.map((s, i) => (
            <li key={s.stage} className="process-step">
              <span className="process-node" aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div className="process-card">
                <span className="process-no">stage_{String(i + 1).padStart(2, '0')}</span>
                <h3>{s.stage}</h3>
                <p>{s.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {cs.survey && (
        <section id="survey" className="cs-section">
          <SectionHead kicker="discover · research 01" title="Survey insights" />
          <div className="cs-two">
            <div>
              <p className="big-number pixel">21</p>
              <p className="cs-lead"><Words>{cs.survey.intro}</Words></p>
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
      )}

      {cs.secondary ? (
        <section id="research" className="cs-section">
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
      ) : (
        <section id="research" className="cs-section">
          <SectionHead kicker="discover · secondary research" title={cs.research.title} />
          <div className="cs-two">
            <p className="cs-lead"><Words>{cs.research.intro}</Words></p>
            <Why label="why this research?">{cs.research.why}</Why>
          </div>
          <div className="secondary research-cards">
            {cs.research.cards.map((c) => (
              <article key={c.title} className="sec-card">
                <span className="pixel sec-value">{c.value}</span>
                <h3 className="sec-title">{c.title}</h3>
                <p>{c.text}</p>
                {c.tags && (
                  <ul className="sec-tags">
                    {c.tags.map((t) => <li key={t}>{t}</li>)}
                  </ul>
                )}
              </article>
            ))}
          </div>
        </section>
      )}

      {cs.featureMap && (
        <section id="featuremap" className="cs-section">
          <SectionHead kicker="ideate · features & functions" title="Feature mapping" />
          <p className="cs-lead narrow"><Words>{cs.featureMap.intro}</Words></p>
          <div className={`fmap ${cs.featureMap.rows[0].access ? 'has-access' : ''}`} role="table" aria-label="Feature mapping">
            <div className="fmap-row fmap-head" role="row">
              <span role="columnheader">User need / pain point</span>
              <span role="columnheader">Feature</span>
              <span role="columnheader">Function</span>
              {cs.featureMap.rows[0].access && <span role="columnheader">Accessibility</span>}
            </div>
            {cs.featureMap.rows.map((r, i) => (
              <div key={r.feature} className="fmap-row" role="row">
                <span role="cell" className="fmap-need">{r.need}</span>
                <span role="cell" className="fmap-feature">
                  <i>{String(i + 1).padStart(2, '0')}</i> {r.feature}
                </span>
                <span role="cell">{r.fn}</span>
                {r.access && <span role="cell">{r.access}</span>}
              </div>
            ))}
          </div>
        </section>
      )}

      {cs.ai && (
        <section id="ai" className="cs-section">
          <SectionHead kicker="ideate · AI logic" title={cs.ai.title} />
          <p className="cs-lead narrow"><Words>{cs.ai.text}</Words></p>
          <ol className="ai-flow">
            {cs.ai.steps.map((s, i) => (
              <li key={s}>
                <span>{String(i + 1).padStart(2, '0')}</span>
                {s}
              </li>
            ))}
          </ol>
        </section>
      )}

      <section id="persona" className="cs-section">
        <SectionHead kicker="define · who I designed for" title={`Meet ${first}`} />
        <div className="persona">
          <figure className="polaroid persona-pol">
            <span className="tape tape-blue" />
            <img src={cs.persona.img} alt={cs.persona.alt || `Persona photo of ${first}`} />
            <figcaption className="hand">
              {cs.persona.name}
              <br />
              <small>{cs.persona.meta}</small>
            </figcaption>
          </figure>
          <div className="persona-body">
            <blockquote className="persona-quote">
              {cs.persona.quoteLabel && <span className="why-label">// {cs.persona.quoteLabel}</span>}
              <Words>{cs.persona.quoteLabel ? cs.persona.quote : `“${cs.persona.quote}”`}</Words>
            </blockquote>
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
            {cs.persona.extra && (
              <div className="persona-extra">
                <span className="why-label">// {cs.persona.extra.label}</span>
                <ul>{cs.persona.extra.items.map((g) => <li key={g}>{g}</li>)}</ul>
              </div>
            )}
          </div>
        </div>
      </section>

      <section id="problem" className="cs-section">
        <SectionHead kicker="define" title="The problem" />
        <p className="cs-lead narrow"><Words>{cs.problem}</Words></p>
        <div className="hmw">
          <span className="hmw-label">How might we…</span>
          <p><Words>{cs.hmw}</Words></p>
        </div>
      </section>

      {cs.wireflow && (
        <section id="wireflow" className="cs-section">
          <SectionHead kicker="ideate · experience planning" title="Wire flow" />
          <p className="cs-lead narrow">
            <Words>Every route through the app, from opening it for the first time to beating the boss. The colours show each part of the journey; the key at the top explains the symbols.</Words>
          </p>
          <figure className="wireflow-fig">
            <img src={cs.wireflow} alt={`Full wire flow of ${p.title}`} loading="lazy" />
          </figure>
        </section>
      )}

      <section id="wireframes" className="cs-section">
        <SectionHead kicker="plan" title="Wireframes first" />
        <div className="cs-two">
          <PhoneSpread screens={cs.wireframes} variant="iso" label={`Greyscale wireframes of ${p.title}`} />
          <div>
            <p className="cs-lead"><Words>{cs.wireframesText}</Words></p>
            <div className="style-block">
              <p className="hand cs-kicker">style overview{cs.style.font ? ` · ${cs.style.font}` : ''}</p>
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

      <section id="features" className="cs-section">
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
                  screens={f.screens || [1, 2, 3].map((k) => `/screens/f${String(i + 1).padStart(2, '0')}-${k}.jpg`)}
                  variant={i % 2 ? 'trio-r' : 'trio'}
                  label={`${f.title} screens`}
                />
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

      <section id="conclusion" className="cs-section">
        <SectionHead kicker={cs.story ? 'the summit' : 'looking back'} title={cs.story ? 'Tower cleared' : 'Conclusion'} />
        <p className="cs-lead narrow"><Words>{cs.conclusion}</Words></p>
        {cs.mockup && (
          <figure className="mockup-fig">
            <img src={cs.mockup} alt={`${p.title} final mock-up`} loading="lazy" />
          </figure>
        )}
        <div className="reflect">
          <div className="note note-green">
            <span className="note-ico" aria-hidden="true">✓</span>
            <h3>What I learned</h3>
            <ul>{cs.learned.map((l) => <li key={l}>{l}</li>)}</ul>
          </div>
          <div className="note note-yellow">
            <span className="note-ico" aria-hidden="true">+</span>
            <h3>{cs.story ? 'If I had more time' : 'What’s next'}</h3>
            <ul>{cs.moreTime.map((l) => <li key={l}>{l}</li>)}</ul>
          </div>
        </div>
        {p.live ? (
          <div className="play-cta" style={{ '--bg': p.theme.bg, '--accent': p.theme.accent }}>
            <div>
              <p className="hand">// try it yourself</p>
              <h3>Play the live prototype</h3>
              <p>Works in any browser on Android, iPhone or desktop. Want to see how it’s built? <button type="button" className="text-link" onClick={onSwitch}>Switch to the DV view</button>.</p>
            </div>
            <a className="btn-accent" href={p.live} target="_blank" rel="noreferrer">
              {p.live.replace('https://', '')} <Arrow />
            </a>
          </div>
        ) : (
          <div className="play-cta soon">
            <div>
              <p className="hand">// see more</p>
              <h3>Every screen and the clickable prototype</h3>
              <p>The full Figma presentation, prototype and mock-ups are on my Behance.</p>
            </div>
            <a className="btn-accent" href={LINKS.behance} target="_blank" rel="noreferrer">
              Open Behance <Arrow />
            </a>
          </div>
        )}
      </section>
    </>
  )
}

function ShortCaseStudy({ cs }) {
  return (
    <>
      <section className="cs-section">
        <SectionHead kicker="the design challenge" title="What needed solving" />
        <p className="cs-lead narrow"><Words>{cs.challenge}</Words></p>
        {cs.hmw && (
          <div className="hmw">
            <span className="hmw-label">How might we…</span>
            <p><Words>{cs.hmw}</Words></p>
          </div>
        )}
      </section>
      <section className="cs-section">
        <SectionHead kicker="the solution" title="What I designed" />
        <p className="cs-lead narrow"><Words>{cs.solution}</Words></p>
      </section>
      <section className="cs-section">
        <SectionHead kicker="looking back" title="Conclusion" />
        <p className="cs-lead narrow"><Words>{cs.conclusion}</Words></p>
        <div className="play-cta soon">
          <div>
            <p className="hand">// full case study coming soon</p>
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

/* Floating pill at the bottom of the screen: UX case study ↔ DV build. */
function ViewToggle({ view, setView }) {
  return (
    <div className="view-toggle" role="tablist" aria-label="Case study view">
      <span className={`vt-thumb ${view === 'dv' ? 'is-dv' : ''}`} aria-hidden="true" />
      <button type="button" role="tab" aria-selected={view === 'ux'} className={view === 'ux' ? 'is-on' : ''} onClick={() => setView('ux')}>
        <span className="vt-tag">UX</span> Case study
      </button>
      <button type="button" role="tab" aria-selected={view === 'dv'} className={view === 'dv' ? 'is-on' : ''} onClick={() => setView('dv')}>
        <span className="vt-tag">DV</span> How I built it
      </button>
    </div>
  )
}

function useView(enabled) {
  const read = () => (enabled && new URLSearchParams(window.location.search).get('view') === 'dv' ? 'dv' : 'ux')
  const [view, setViewState] = useState(read)
  const setView = (v) => {
    if (v === view) return
    setViewState(v)
    const url = new URL(window.location.href)
    if (v === 'dv') url.searchParams.set('view', 'dv')
    else url.searchParams.delete('view')
    window.history.replaceState({}, '', url.pathname + url.search)
    // land at the start of the content, not halfway down the other view
    const top = document.querySelector('.cs-overview')
    if (top && top.getBoundingClientRect().top < 0) {
      window.scrollTo({ top: top.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' })
    }
  }
  return [view, setView]
}

export default function ProjectPage({ slug }) {
  const p = getProject(slug)
  const hasDv = slug === 'tower-of-arithmetic'
  const [view, setView] = useView(hasDv)
  useProjectTheme(slug)

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
  const full = Boolean(cs.persona)

  return (
    <article className={`cs ${hasDv ? 'has-toggle' : ''}`}>
      <Hero p={p} />
      <Overview items={cs.overview} />
      {hasDv && view === 'dv' ? (
        <TowerDv key="dv" p={p} onSwitch={() => setView('ux')} />
      ) : full ? (
        <UxCaseStudy key="ux" cs={cs} p={p} slug={slug} onSwitch={() => setView('dv')} />
      ) : (
        <ShortCaseStudy cs={cs} />
      )}
      {hasDv && <ViewToggle view={view} setView={setView} />}
    </article>
  )
}
