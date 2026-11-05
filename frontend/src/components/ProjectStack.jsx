import { Link, navigate } from '../router.jsx'
import { TRACKS, byTrack, trackLabel } from '../data/projects.js'
import { Arrow } from './Icons.jsx'

export function TrackFilter({ track }) {
  return (
    <div className="track-filter" role="group" aria-label="Filter projects">
      {Object.entries(TRACKS).map(([id, t]) => (
        <button
          key={id}
          type="button"
          className={`track-btn ${track === id ? 'is-on' : ''}`}
          aria-pressed={track === id}
          onClick={() => navigate(id === 'all' ? '/' : `/${id}`)}
        >
          {t.label}
        </button>
      ))}
    </div>
  )
}

/* Folder-style project cards. Each card is position: sticky, so as you
   scroll the next folder slides up over the previous one, and every
   folder's tab stays visible in a row along the top. */
export default function ProjectStack({ track }) {
  const list = byTrack(track)
  return (
    <div className="stack" style={{ '--count': list.length }}>
      {list.map((p, i) => (
        <article
          key={p.slug}
          className="folder"
          style={{ '--i': i, '--bg': p.theme.bg, '--ink': p.theme.ink, '--accent': p.theme.accent }}
        >
          <div className="folder-tab">
            <span aria-hidden="true">✦</span> Project {String(i + 1).padStart(2, '0')}
          </div>
          <div className="folder-body">
            <div className="folder-copy">
              <p className="folder-meta">
                <span className="dot" aria-hidden="true" />
                {p.year} · {p.sector}
                {p.group ? ' · Group project' : ''}
              </p>
              <h3 className="folder-title">{p.title}</h3>
              <p className="folder-tagline">{p.tagline}</p>
              <p className="folder-summary">{p.summary}</p>
              <Link to={`/work/${p.slug}`} className="folder-link">
                View project <Arrow />
              </Link>
              <div className="folder-chips">
                <span className="chip chip-track">{trackLabel(p)}</span>
                <span className="chip">{p.kind}</span>
              </div>
            </div>
            <Link to={`/work/${p.slug}`} className="folder-media" tabIndex={-1} aria-hidden="true">
              <span className="tape tape-l" />
              <span className="tape tape-r" />
              <img src={p.card} alt="" loading="lazy" />
            </Link>
          </div>
        </article>
      ))}
    </div>
  )
}
