import { useEffect, useRef } from 'react'
import { Link } from '../router.jsx'
import { projects, LINKS } from '../data/projects.js'
import { ArrowLeft, Heart } from './Icons.jsx'

/* Nav used on project pages: back to the project list, then every
   project as a tab so you can hop between case studies directly. */
export default function ProjectNav({ current }) {
  const listRef = useRef(null)
  // on small screens the list scrolls sideways: keep the current project visible
  useEffect(() => {
    const el = listRef.current?.querySelector('.is-active')
    el?.scrollIntoView({ inline: 'center', block: 'nearest' })
  }, [current])

  return (
    <header className="nav pnav">
      <Link to="/#work" className="pnav-back">
        <ArrowLeft />
        <span>All projects</span>
      </Link>
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
  )
}
