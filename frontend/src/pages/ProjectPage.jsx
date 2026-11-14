import { useEffect, useMemo, useState } from 'react'
import { Link } from '../router.jsx'
import { getProject, trackLabel, LINKS } from '../data/projects.js'
import { caseStudies } from '../data/caseStudies.js'
import { Arrow } from '../components/Icons.jsx'
import PhoneSpread from '../components/Phones.jsx'
import Words from '../components/Words.jsx'
import CaseIndex from '../components/CaseIndex.jsx'
import { SiFigma } from 'react-icons/si'
import { SectionHead, Why } from '../components/CaseBits.jsx'
import CertViewer from '../components/CertViewer.jsx'
import ArtifaxDv, { ARTIFAX_OVERVIEW } from './ArtifaxDv.jsx'
import AquaDv, { AQUA_OVERVIEW } from './AquaDv.jsx'
import TowerDv from './TowerDv.jsx'
import { JourneyMap, Blueprint } from '../components/ServiceMaps.jsx'
import VideoPlayer from '../components/VideoPlayer.jsx'

function Hero({ p }) {
  return (
    <section className="cs-hero" style={{ '--bg': p.theme.bg, '--ink': p.theme.ink, '--accent': p.theme.accent }}>
      <div className="cs-hero-copy">
        <p className="cs-kind">
          <span className="cs-kind-dot" aria-hidden="true" /> {trackLabel(p)} · {p.kind}
        </p>
        <h1 className={`pixel cs-name ${p.title.length > 12 ? 'is-long' : ''}`}>{p.title.toUpperCase()}</h1>
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
      {p.desktop ? (
        <div className="cs-hero-phones cs-hero-tabs">
          <span className="cs-blob" aria-hidden="true" />
          {p.screens.map((src, i) => (
            <figure key={src} className={`tab-frame hero-tab hero-tab-${i}`}>
              <img src={src} alt={`${p.title} screen`} />
            </figure>
          ))}
        </div>
      ) : (
        <div className="cs-hero-phones">
          <span className="cs-blob" aria-hidden="true" />
          <PhoneSpread screens={p.screens} variant="hero" label={`${p.title} app screens`} />
        </div>
      )}
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
    '--site-accent': '#a6d22e', '--accent-2': '#bfe93f', '--accent-3': '#d9f58a',
    '--accent-deep': '#7fa31c', '--accent-deeper': '#4d6410',
    '--acc-rgb': '166, 210, 46', '--acc2-rgb': '191, 233, 63', '--on-accent': '#141a05',
  },

  'absa-village': {
    '--site-accent': '#dc0037', '--accent-2': '#ff4d6d', '--accent-3': '#ff9aae',
    '--accent-deep': '#b50232', '--accent-deeper': '#77021e',
    '--acc-rgb': '220, 0, 55', '--acc2-rgb': '255, 77, 109',
  },
  artifax: {
    '--site-accent': '#3b82f6', '--accent-2': '#60a5fa', '--accent-3': '#a5c8ff',
    '--accent-deep': '#2563eb', '--accent-deeper': '#1e3a8a',
    '--acc-rgb': '59, 130, 246', '--acc2-rgb': '96, 165, 250',
  },
  aquastainable: {
    '--site-accent': '#2e8ca6', '--accent-2': '#4fb3cf', '--accent-3': '#9ad8ea',
    '--accent-deep': '#1f6a80', '--accent-deeper': '#0f3d4b',
    '--acc-rgb': '46, 140, 166', '--acc2-rgb': '79, 179, 207',
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
    items: [
      ...(cs.videos ? [{ id: 'video', label: 'Watch' }] : []),
      cs.story ? { id: 'story', label: 'The story' } : { id: 'brief', label: 'The brief' },
      ...(cs.team ? [{ id: 'team', label: 'The team' }] : []),
      { id: 'process', label: 'Process' },
    ],
  })
  const research = []
  if (cs.survey) research.push({ id: 'survey', label: 'Survey' })
  research.push({ id: 'research', label: cs.secondary ? 'Literature & competitors' : 'Research' })
  if (cs.audit) research.push({ id: 'audit', label: 'App audit' })
  if (cs.insights) research.push({ id: 'insights', label: 'Key insights' })
  if (cs.journey) research.push({ id: 'journey', label: 'Journey map' })
  if (cs.blueprints) research.push({ id: 'blueprint', label: 'Current blueprint' })
  ;(cs.boards || []).filter((b) => b.group === 'Research').forEach((b) => research.push({ id: b.id, label: b.label }))
  if (cs.strategy) research.push({ id: 'strategy', label: 'Strategy' })
  if (cs.featureMap) research.push({ id: 'featuremap', label: 'Feature mapping' })
  if (cs.ai) research.push({ id: 'ai', label: 'AI functionality' })
  if (cs.persona) research.push({ id: 'persona', label: 'Persona' })
  research.push({ id: 'problem', label: 'Problem & HMW' })
  g.push({ group: 'Research', items: research })
  const ideate = (cs.boards || []).filter((b) => b.group === 'Ideate').map((b) => ({ id: b.id, label: b.label }))
  if (cs.blueprints) ideate.unshift({ id: 'future', label: 'Future blueprint' })
  if (cs.opportunities) ideate.push({ id: 'opportunities', label: 'Opportunities' })
  if (ideate.length) g.push({ group: 'Ideate', items: ideate })
  const plan = (cs.boards || []).filter((b) => b.group === 'Plan').map((b) => ({ id: b.id, label: b.label }))
  if (cs.styles) plan.push({ id: 'styles', label: 'Style guides' })
  if (cs.wireflow) plan.push({ id: 'wireflow', label: 'Wire flow' })
  if (cs.wireframes) plan.push({ id: 'wireframes', label: 'Wireframes & style' })
  if (cs.posters) plan.push({ id: 'posters', label: 'Campaign posters' })
  if (!cs.wireframes && cs.style) plan.push({ id: 'style', label: 'Style' })
  if (plan.length) g.push({ group: cs.posters ? 'Design' : 'Planning', items: plan })
  g.push({
    group: cs.posters ? 'Solution' : 'Design',
    items: cs.featureGroups ? cs.featureGroups.map((fg) => ({ id: fg.id, label: fg.title })) : [{ id: 'features', label: 'Features' }],
  })
  g.push({ group: 'Wrap-up', items: [...(cs.outcome ? [{ id: 'outcome', label: 'Outcome' }] : []), { id: 'conclusion', label: 'Conclusion' }] })
  return g
}

function Videos({ videos, title }) {
  const main = videos.find((v) => v.main) || videos[0]
  const more = videos.filter((v) => v !== main)
  return (
    <section id="video" className="cs-section">
      <SectionHead kicker={`watch · ${main.label}`} title={more.length ? 'See it in action' : `${title} in a minute`} />
      <div className="vp-main">
        <VideoPlayer src={main.src} poster={main.poster} title={main.title} />
      </div>
      {more.length > 0 && (
        <div className="cs-video-more">
          {more.map((v) => (
            <VideoPlayer
              key={v.src}
              src={v.src}
              poster={v.poster}
              title={v.title}
              caption={<><b>{v.title}</b> // {v.label}</>}
            />
          ))}
        </div>
      )}
    </section>
  )
}

function Board({ b }) {
  return (
    <section id={b.id} className="cs-section">
      <SectionHead kicker={b.kicker} title={b.title} />
      <div className={b.why ? 'cs-two' : ''}>
        <p className={`cs-lead ${b.why ? '' : 'narrow'}`}><Words>{b.text}</Words></p>
        {b.why && <Why label="why this method?">{b.why}</Why>}
      </div>
      <figure className={`board-fig ${b.tall ? 'is-tall' : ''}`}>
        <img src={b.img} alt={b.alt} loading="lazy" />
      </figure>
    </section>
  )
}

function FeatureText({ f, i }) {
  return (
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
  )
}

function UxCaseStudy({ cs, p, slug, onSwitch }) {
  const index = useMemo(() => uxIndex(cs), [cs])
  const first = cs.persona ? cs.persona.short || cs.persona.name.split(' ')[0] : ''
  const boardsOf = (grp) => (cs.boards || []).filter((b) => b.group === grp).map((b) => <Board key={b.id} b={b} />)
  return (
    <>
      <CaseIndex groups={index} />

      {cs.videos && <Videos videos={cs.videos} title={p.title} />}

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
          {cs.award && (
            <div className="award-banner">
              <span className="award-medal pixel" aria-hidden="true">2</span>
              <div>
                <b>{cs.award.title}</b>
                <p>{cs.award.text}</p>
              </div>
              {cs.award.cert && (
                <CertViewer pdf={cs.award.pdf} img={cs.award.cert} title="My certificate of recognition" className="award-cert">
                  View certificate
                </CertViewer>
              )}
            </div>
          )}
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

      {cs.team && (
        <section id="team" className="cs-section">
          <SectionHead kicker="the people" title="The team" />
          {cs.team.members ? (
            <>
              <ul className="afx-team fr-team">
                {cs.team.members.map((m) => (
                  <li key={m.name} className={`comp-card ${m.me ? 'is-me' : ''}`}>
                    <span className="afx-avatar">{m.initials}</span>
                    <div>
                      <h3>
                        {m.name}
                        {m.me && <small> (me)</small>}
                      </h3>
                      <p className="afx-area">// {cs.team.label} · {m.area}</p>
                      {m.role && <p>{m.role}</p>}
                    </div>
                  </li>
                ))}
              </ul>
              {cs.team.note && <Why label="how we worked">{cs.team.note}</Why>}
            </>
          ) : (
          <>
          <div className="team-photos">
            {cs.team.photos.map((ph) => (
              <figure key={ph.src} className="team-photo">
                <img src={ph.src} alt={ph.alt} loading="lazy" />
                <figcaption>// {ph.caption}</figcaption>
              </figure>
            ))}
          </div>
          <div className="team-names">
            <span className="team-label">{cs.team.label}</span>
            <ul>
              {cs.team.names.map((n) => (
                <li key={n} className={n === 'Andre' ? 'is-me' : ''}>
                  {n}
                  {n === 'Andre' && <small> (me)</small>}
                </li>
              ))}
            </ul>
          </div>
          </>
          )}
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

      {cs.audit && (
        <section id="audit" className="cs-section">
          <SectionHead kicker="discover · app audit" title={cs.audit.title} />
          <p className="cs-lead narrow"><Words>{cs.audit.intro}</Words></p>
          <div className="audit-screens">
            {cs.audit.screens.map((sc) => (
              <figure key={sc.src} className="audit-phone">
                <img src={sc.src} alt={sc.alt} loading="lazy" />
                <figcaption>{sc.caption}</figcaption>
              </figure>
            ))}
          </div>
          <div className="audit-rewards-head">
            <span className="audit-tag">Absa app today</span>
            <h3>{cs.audit.rewardsTitle}</h3>
          </div>
          <div className="audit-rewards">
            {cs.audit.rewards.map((r) => (
              <article key={r.title} className="reward-card">
                <div className="reward-img">
                  <img src={r.img} alt="" loading="lazy" />
                  <span className="reward-chip">{r.chip}</span>
                </div>
                <div className="reward-body">
                  <h4>{r.title}</h4>
                  <p>{r.text}</p>
                </div>
              </article>
            ))}
          </div>
          <Why label="what we took from it">{cs.audit.why}</Why>
        </section>
      )}

      {cs.strategy && (
        <section id="strategy" className="cs-section">
          <SectionHead kicker="ideate · the solution" title={cs.strategy.title} />
          <p className="cs-lead narrow"><Words>{cs.strategy.intro}</Words></p>
          <ol className="strategy">
            {cs.strategy.steps.map((st, i) => (
              <li key={st.tag} className="comp-card">
                <span className="strategy-tag">0{i + 1} · {st.tag}</span>
                <h3>{st.title}</h3>
                <p><Words>{st.text}</Words></p>
              </li>
            ))}
          </ol>
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

      {cs.insights && (
        <section id="insights" className="cs-section">
          <SectionHead kicker="define · synthesis" title={cs.insights.title} />
          <div className="secondary fr-insights">
            {cs.insights.items.map((c) => (
              <article key={c.title} className="sec-card">
                <span className="pixel sec-value">{c.value}</span>
                <h3 className="sec-title">{c.title}</h3>
                <p>{c.text}</p>
              </article>
            ))}
          </div>
          {cs.insights.synthesis && <Why label="the big reframe">{cs.insights.synthesis}</Why>}
        </section>
      )}

      {boardsOf('Research')}

      {cs.journey && <JourneyMap data={cs.journey} />}
      {cs.blueprints && <Blueprint id="blueprint" bp={cs.blueprints.current} why={cs.blueprintWhy} />}

      {cs.persona && (
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
              <h3 className="persona-quote-title">
                {cs.persona.quoteLabel
                  ? cs.persona.quoteLabel.charAt(0).toUpperCase() + cs.persona.quoteLabel.slice(1)
                  : 'In their words'}
              </h3>
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
      )}

      <section id="problem" className="cs-section">
        <SectionHead kicker="define" title="The problem" />
        <p className="cs-lead narrow"><Words>{cs.problem}</Words></p>
        <div className="hmw">
          <span className="hmw-label">How might we…</span>
          <p><Words>{cs.hmw}</Words></p>
        </div>
      </section>

      {boardsOf('Ideate')}
      {cs.blueprints && <Blueprint id="future" bp={cs.blueprints.future} />}

      {cs.opportunities && (
        <section id="opportunities" className="cs-section">
          <SectionHead kicker="ideate · where to act" title="Design opportunities" />
          <ol className="dv-ai-jobs fr-opps">
            {cs.opportunities.map((o, i) => (
              <li key={o.title}>
                <span className="pixel">{String(i + 1).padStart(2, '0')}</span>
                <h3>{o.title}</h3>
                <p>{o.text}</p>
              </li>
            ))}
          </ol>
        </section>
      )}

      {boardsOf('Plan')}

      {cs.styles && (
        <section id="styles" className="cs-section">
          <SectionHead kicker="design · two contexts, one system" title="Style guides" />
          <p className="cs-lead narrow"><Words>{cs.styles.intro}</Words></p>
          <ul className="swatches fr-swatches">
            {cs.styles.colors.map((c) => (
              <li key={c.hex}>
                <span className="swatch" style={{ background: c.hex }} />
                <b>{c.name}</b>
                <small>{c.hex}</small>
              </li>
            ))}
          </ul>
          <div className="fr-styles">
            {cs.styles.items.map((st) => (
              <figure key={st.label} className="board-fig">
                <img src={st.img} alt={`${st.label} style guide`} loading="lazy" />
                <figcaption>
                  <b>{st.label}</b> // {st.note}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      )}

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

      {cs.wireframes && (
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
      )}

      {cs.posters && (
        <section id="posters" className="cs-section">
          <SectionHead kicker="design · #ABSAVillage" title="Campaign posters" />
          <p className="cs-lead narrow"><Words>{cs.posters.intro}</Words></p>
          <div className="poster-row">
            {cs.posters.items.map((src) => (
              <figure key={src} className="poster-card">
                <img src={src} alt="#ABSAVillage event poster" loading="lazy" />
              </figure>
            ))}
          </div>
        </section>
      )}

      {!cs.wireframes && cs.style && (
        <section id="style" className="cs-section">
          <SectionHead kicker={`style · ${cs.style.font}`} title="Designed in Absa’s system" />
          <div className="cs-two">
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
        </section>
      )}

      {cs.featureGroups ? (
        cs.featureGroups.map((fg, gi) => (
          <section key={fg.id} id={fg.id} className="cs-section">
            <SectionHead kicker={fg.kicker} title={fg.title} />
            <p className="cs-lead narrow"><Words>{fg.intro}</Words></p>
            {gi === 0 && cs.numbers && (
              <dl className="numbers">
                {cs.numbers.map((n) => (
                  <div key={n.label}>
                    <dt className="pixel">{n.value}</dt>
                    <dd>{n.label}</dd>
                  </div>
                ))}
              </dl>
            )}
            <div className={fg.tablet ? 'afx-features' : 'features'}>
              {fg.features.map((f, i) =>
                fg.tablet ? (
                  <article key={f.title} className={`afx-feature ${i % 2 ? 'is-flipped' : ''}`}>
                    <figure className="tab-frame">
                      <img src={f.img} alt={`${p.title} ${f.title} screen`} loading="lazy" />
                    </figure>
                    <FeatureText f={f} i={i} />
                  </article>
                ) : (
                  <article key={f.title} className={`feature-row ${i % 2 ? 'is-flipped' : ''}`}>
                    <div className="feature-shot">
                      <PhoneSpread screens={f.screens} variant={i % 2 ? 'trio-r' : 'trio'} label={`${f.title} screens`} />
                    </div>
                    <FeatureText f={f} i={i} />
                  </article>
                ),
              )}
            </div>
          </section>
        ))
      ) : (
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
      )}

      {cs.outcome && (
        <section id="outcome" className="cs-section">
          <SectionHead kicker="wrapping up · outcome" title={cs.outcome.title} />
          <div className="outcome-grid">
            <CertViewer pdf={cs.award.pdf} img={cs.award.cert} title="My certificate of recognition" className="outcome-cert">
              <img src={cs.award.cert} alt="My certificate of recognition for 2nd place" loading="lazy" />
              <span>View certificate</span>
            </CertViewer>
            <div className="outcome-copy">
              <p className="outcome-lead">{cs.outcome.text}</p>
              <p className="outcome-sub">{cs.outcome.sub}</p>
              <div className="outcome-team">
                <span>{cs.team.label}</span>
                {cs.team.names.map((n) => (
                  <b key={n} className={n === 'Andre' ? 'is-me' : ''}>{n === 'Andre' ? 'Andre (me)' : n}</b>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      <section id="conclusion" className="cs-section">
        <SectionHead kicker={cs.story ? 'the summit' : 'looking back'} title={cs.story ? 'Tower cleared' : 'Conclusion'} />
        <p className="cs-lead narrow"><Words>{cs.conclusion}</Words></p>
        {cs.mockup && (
          <figure className="mockup-fig">
            <img src={cs.mockup} alt={`${p.title} final mock-up`} loading="lazy" />
          </figure>
        )}
        {cs.mockups && (
          <div className="fr-mocks">
            {cs.mockups.map((src) => (
              <figure key={src} className="board-fig">
                <img src={src} alt={`${p.title} mock-up`} loading="lazy" />
              </figure>
            ))}
          </div>
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
          <div className="cta-pair">
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
            <div className="play-cta soon">
              <div>
                <p className="hand">// see more</p>
                <h3>The full case study and code</h3>
                <p>See the presentation on Behance, read the code on GitHub, or open the Figma file.</p>
              </div>
              <div className="cta-stack">
                {cs.links?.behance && (
                  <a className="btn-accent" href={cs.links.behance} target="_blank" rel="noreferrer">
                    View on Behance <Arrow />
                  </a>
                )}
                {cs.links?.github && (
                  <a className="btn-ghost" href={cs.links.github} target="_blank" rel="noreferrer">
                    Code on GitHub <Arrow />
                  </a>
                )}
                {cs.links?.figma && (
                  <a className="btn-ghost" href={cs.links.figma} target="_blank" rel="noreferrer">
                    <SiFigma aria-hidden="true" /> Figma file <Arrow />
                  </a>
                )}
              </div>
            </div>
          </div>
        ) : cs.noCta ? null : (
          <div className="play-cta soon">
            <div>
              <p className="hand">// see more</p>
              <h3>{cs.links?.behance && cs.links?.prototype2 ? 'Every screen and both prototypes' : cs.links?.behance ? 'Every screen and the clickable prototype' : cs.links?.prototype2 ? 'Click through both prototypes' : 'See the full design file'}</h3>
              <p>
                {cs.links?.behance && cs.links?.prototype2
                  ? 'See the full presentation on Behance, or click through the FordPass add-on and the Relay Console yourself.'
                  : cs.links?.behance
                  ? 'Try the prototype yourself, see the full presentation on Behance, or open the Figma file.'
                  : cs.links?.prototype2
                    ? 'Try the FordPass add-on and the Relay Console yourself, or open the team’s Figma file with all the research.'
                    : 'Research, presentation slides, style tile and every screen, in the team’s Figma file.'}
              </p>
            </div>
            <div className="cta-stack">
              {cs.links?.behance && (
                <a className="btn-accent" href={cs.links.behance} target="_blank" rel="noreferrer">
                  View on Behance <Arrow />
                </a>
              )}
              {cs.links?.prototype && (
                <a className={cs.links.behance ? 'btn-ghost' : 'btn-accent'} href={cs.links.prototype} target="_blank" rel="noreferrer">
                  {cs.links.prototype2 ? 'App prototype' : 'Prototype link'} <Arrow />
                </a>
              )}
              {cs.links?.prototype2 && (
                <a className="btn-ghost" href={cs.links.prototype2} target="_blank" rel="noreferrer">
                  Console prototype <Arrow />
                </a>
              )}
              {cs.links?.figma && (
                <a className="btn-ghost" href={cs.links.figma} target="_blank" rel="noreferrer">
                  <SiFigma aria-hidden="true" /> Figma file <Arrow />
                </a>
              )}
            </div>
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

  const cs = caseStudies[slug] || {}
  const full = Boolean(cs.persona || cs.featureGroups)

  return (
    <article className={`cs ${hasDv ? 'has-toggle' : ''}`}>
      <Hero p={p} />
      <Overview items={slug === 'artifax' ? ARTIFAX_OVERVIEW : slug === 'aquastainable' ? AQUA_OVERVIEW : cs.overview} />
      {slug === 'artifax' ? (
        <ArtifaxDv key="afx" p={p} />
      ) : slug === 'aquastainable' ? (
        <AquaDv key="aq" p={p} />
      ) : hasDv && view === 'dv' ? (
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
