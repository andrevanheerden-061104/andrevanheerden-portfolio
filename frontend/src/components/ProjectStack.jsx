import { Fragment } from 'react'
import { Link, navigate } from '../router.jsx'
import { TRACKS, byTrack, trackLabel, projects } from '../data/projects.js'
import PhoneSpread from './Phones.jsx'
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

/* Folder-style project cards that stack as you scroll (position: sticky).
   Gaps are spacer divs, not margins: a sticky element's margin counts
   against its container and made the stack leave too early. */
export default function ProjectStack({ track }) {
  const list = byTrack(track)
  const total = String(projects.length).padStart(2, '0')
  return (
    <div className="stack" style={{ '--count': list.length }}>
      {list.map((p, i) => {
        const no = String(projects.indexOf(p) + 1).padStart(2, '0')
        return (
          <Fragment key={p.slug}>
            {i > 0 && <div className="stack-gap" aria-hidden="true" />}
            <article
              className="folder"
              style={{ '--i': i, '--bg': p.theme.bg, '--ink': p.theme.ink, '--hi': p.theme.hi }}
            >
              <div className="folder-tab">
                <span className="folder-tab-no">{no}</span> {p.slug}
              </div>
              <div className="folder-body">
                <div className="folder-bar">
                  <span className="dots" aria-hidden="true"><i /><i /><i /></span>
                  <span className="folder-path">
                    ~/projects/<b>{p.slug}</b>
                  </span>
                  <span className="folder-index">
                    {no} / {total}
                  </span>
                </div>
                <div className="folder-main">
                  <div className="folder-copy">
                    <p className="folder-kind">
                      <span className="folder-track">{trackLabel(p)}</span>
                      {p.kind}
                    </p>
                    <h3 className="folder-title">{p.title}</h3>
                    <p className="folder-tagline">// {p.tagline}</p>
                    <ul className="glance">
                      <li>
                        <span className="glance-k">problem</span>
                        <span className="glance-v">{p.glance.problem}</span>
                      </li>
                      <li>
                        <span className="glance-k">built</span>
                        <span className="glance-v">{p.glance.built}</span>
                      </li>
                      <li>
                        <span className="glance-k">my role</span>
                        <span className="glance-v">{p.glance.role}</span>
                      </li>
                    </ul>
                    <dl className="folder-meta">
                      <div><dt>sector</dt><dd>{p.sector}</dd></div>
                      <div><dt>year</dt><dd>{p.year}</dd></div>
                      <div><dt>team</dt><dd>{p.group ? 'Group' : 'Solo'}</dd></div>
                      <div><dt>status</dt><dd className={p.live ? 'is-live' : ''}>{p.glance.status}</dd></div>
                    </dl>
                    <Link to={`/work/${p.slug}`} className="folder-link">
                      Open case study <Arrow />
                    </Link>
                  </div>
                  <Link to={`/work/${p.slug}`} className="folder-media" tabIndex={-1} aria-hidden="true">
                    <span className="folder-media-label">preview.app</span>
                    <PhoneSpread screens={p.screens} variant="trio" interactive={false} />
                  </Link>
                </div>
              </div>
            </article>
          </Fragment>
        )
      })}
      <div className="stack-hold" aria-hidden="true" />
    </div>
  )
}
