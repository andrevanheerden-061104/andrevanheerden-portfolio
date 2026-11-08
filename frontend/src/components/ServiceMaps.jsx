import { SectionHead, Why } from './CaseBits.jsx'
import Words from './Words.jsx'

/* Emotion curve: one point per column, mood 1 (low) to 5 (high). */
function MoodLine({ points, labels }) {
  const n = points.length
  const W = 1000
  const H = 120
  const x = (i) => ((i + 0.5) / n) * W
  const y = (m) => H - 14 - ((m - 1) / 4) * (H - 28)
  const d = points.map((m, i) => `${i ? 'L' : 'M'}${x(i).toFixed(1)},${y(m).toFixed(1)}`).join(' ')
  return (
    <div className="sm-mood" style={{ '--cols': n }}>
      <svg viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none" aria-hidden="true">
        <line x1="0" x2={W} y1={y(3)} y2={y(3)} className="sm-mood-mid" />
        <path d={d} className="sm-mood-path" vectorEffect="non-scaling-stroke" />
      </svg>
      <div className="sm-mood-dots">
        {points.map((m, i) => (
          <span key={i} className={`sm-dot mood-${m}`} style={{ left: `${((i + 0.5) / n) * 100}%`, top: `${(y(m) / H) * 100}%` }}>
            <b>{labels[i]}</b>
          </span>
        ))}
      </div>
    </div>
  )
}

export function JourneyMap({ data }) {
  const ph = data.phases
  return (
    <section id="journey" className="cs-section">
      <SectionHead kicker="define · emotion over time" title="The customer journey" />
      <div className="cs-two">
        <p className="cs-lead">
          <Words>We mapped a yearly service from the warning light to driving away. It shows where the service feels broken from the customer’s side, even when the internal process looks fine.</Words>
        </p>
        <Why label="scenario">{data.scenario}</Why>
      </div>
      <div className="sm-scroll">
        <div className="sm-journey" style={{ '--cols': ph.length }}>
          <span className="sm-rowlabel">Phase</span>
          {ph.map((p, i) => (
            <div key={p.name} className="sm-phase">
              <i>{String(i + 1).padStart(2, '0')}</i> {p.name}
            </div>
          ))}
          <span className="sm-rowlabel">Actions</span>
          {ph.map((p) => <div key={p.name} className="sm-cell">{p.action}</div>)}
          <span className="sm-rowlabel">Touchpoint</span>
          {ph.map((p) => <div key={p.name} className="sm-cell sm-muted">{p.touch}</div>)}
          <span className="sm-rowlabel">Thinking</span>
          {ph.map((p) => <div key={p.name} className="sm-cell sm-quote">“{p.thought}”</div>)}
          <span className="sm-rowlabel">Feeling</span>
          <div className="sm-span">
            <MoodLine points={ph.map((p) => p.mood)} labels={ph.map((p) => p.feeling)} />
          </div>
          <span className="sm-rowlabel">Owner</span>
          {ph.map((p) => <div key={p.name} className="sm-cell sm-owner">{p.owner}</div>)}
          <span className="sm-rowlabel">Opportunity</span>
          {ph.map((p) => (
            <div key={p.name} className={`sm-cell ${p.opp ? 'sm-opp' : 'sm-muted'}`}>{p.opp || '—'}</div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Blueprint({ id, bp, why }) {
  const n = bp.stages.length
  return (
    <section id={id} className="cs-section">
      <SectionHead kicker={bp.kicker} title={bp.title} />
      <div className={why ? 'cs-two' : ''}>
        <p className={`cs-lead ${why ? '' : 'narrow'}`}><Words>{bp.intro}</Words></p>
        {why && <Why label="why a blueprint?">{why}</Why>}
      </div>
      <ul className="sm-legend">
        {Object.entries(bp.legend).map(([k, v]) => (
          <li key={k}><span className={`sm-key st-${k}`} /> {v}</li>
        ))}
      </ul>
      <div className="sm-scroll">
        <div className="sm-bp" style={{ '--cols': n }}>
          <span className="sm-rowlabel">Stage</span>
          {bp.stages.map((s, i) => (
            <div key={s} className="sm-phase">
              <i>{String(i + 1).padStart(2, '0')}</i> {s}
            </div>
          ))}
          {bp.rows.slice(0, 1).map((r) => (
            <Row key={r.label} r={r} />
          ))}
          <span className="sm-rowlabel">Feeling</span>
          <div className="sm-span">
            <MoodLine points={bp.feelings.map((f) => f[1])} labels={bp.feelings.map((f) => f[0])} />
          </div>
          {bp.rows.slice(1).map((r, i) => (r.line ? (
            <div key={r.line + i} className="sm-line"><span>{r.line}</span></div>
          ) : (
            <Row key={r.label} r={r} />
          )))}
        </div>
      </div>
      <p className="sm-hint">// scroll sideways to see all {n} stages</p>
    </section>
  )
}

function Row({ r }) {
  return (
    <>
      <span className="sm-rowlabel">{r.label}</span>
      {r.cells.map((c, i) => {
        const [text, st] = Array.isArray(c) ? c : [c, '']
        return (
          <div key={i} className={`sm-cell ${st ? `st-${st}` : ''} ${r.pain ? 'sm-pain' : ''}`}>
            {text}
          </div>
        )
      })}
    </>
  )
}
