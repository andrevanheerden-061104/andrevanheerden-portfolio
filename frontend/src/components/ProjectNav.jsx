import { useEffect, useRef, useState } from 'react'
import { Link } from '../router.jsx'
import { projects, LINKS, trackLabel } from '../data/projects.js'
import { ArrowLeft, Heart } from './Icons.jsx'

/* Nav on project pages.
   Desktop: back button + every project as a tab.
   Phone: back button + a menu button that opens a side drawer of projects. */
export default function ProjectNav({ current }) {
  const [open, setOpen] = useState(false)
  const listRef = useRef(null)
  const cur = projects.find((p) => p.slug === current)

  useEffect(() => {
    const el = listRef.current?.querySelector('.is-active')
    el?.scrollIntoView({ inline: 'center', block: 'nearest' })
    setOpen(false)
  }, [current])

  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <header className="nav pnav">
        <Link to="/#work" className="pnav-back" aria-label="Back to all projects">
          <ArrowLeft />
          <span>All projects</span>
        </Link>

        <button
          type="button"
          className="pnav-menu"
          aria-label="Choose a project"
          aria-expanded={open}
          aria-controls="project-drawer"
          onClick={() => setOpen(true)}
        >
          <span className="burger" aria-hidden="true"><i /><i /><i /></span>
        </button>
        {cur && (
          <button type="button" className="pnav-current" onClick={() => setOpen(true)} style={{ '--bg': cur.theme.bg }}>
            <span className="pnav-dot" aria-hidden="true" />
            <span className="pnav-current-name">{cur.title}</span>
          </button>
        )}

        <nav className="pnav-list" aria-label="Projects" ref={listRef}>
          {projects.map((p) => (
            <Link
              key={p.slug}
              to={`/work/${p.slug}`}
              className={`pnav-item ${current === p.slug ? 'is-active' : ''}`}
              style={{ '--bg': p.theme.bg, '--ink': p.theme.ink }}
              aria-current={current === p.slug ? 'page' : undefined}
            >
              <span className="pnav-dot" aria-hidden="true" />
              {p.title}
            </Link>
          ))}
        </nav>

        <a className="nav-contact" href={`mailto:${LINKS.email}`}>
          <Heart />
          <span>Contact</span>
        </a>
      </header>

      <div className={`drawer-scrim ${open ? 'is-open' : ''}`} onClick={() => setOpen(false)} aria-hidden="true" />
      <aside
        id="project-drawer"
        className={`drawer ${open ? 'is-open' : ''}`}
        aria-label="Projects"
        aria-hidden={!open}
      >
        <div className="drawer-head">
          <span className="drawer-path">~/projects</span>
          <button type="button" className="drawer-close" onClick={() => setOpen(false)} aria-label="Close menu" tabIndex={open ? 0 : -1}>
            ✕
          </button>
        </div>
        <ul className="drawer-list">
          {projects.map((p, i) => (
            <li key={p.slug}>
              <Link
                to={`/work/${p.slug}`}
                className={`drawer-item ${current === p.slug ? 'is-active' : ''}`}
                style={{ '--bg': p.theme.bg }}
                onClick={() => setOpen(false)}
                tabIndex={open ? 0 : -1}
              >
                <span className="drawer-no">{String(i + 1).padStart(2, '0')}</span>
                <span className="drawer-text">
                  <b>{p.title}</b>
                  <small>
                    {trackLabel(p)} · {p.kind}
                  </small>
                </span>
                <span className="pnav-dot" aria-hidden="true" />
              </Link>
            </li>
          ))}
        </ul>
        <Link to="/#work" className="drawer-all" onClick={() => setOpen(false)} tabIndex={open ? 0 : -1}>
          <ArrowLeft /> Back to all projects
        </Link>
      </aside>
    </>
  )
}
