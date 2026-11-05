import { Link } from '../router.jsx'
import { LINKS } from '../data/projects.js'
import { Behance, GitHub, LinkedIn, Arrow } from './Icons.jsx'

const ITEMS = [
  { label: 'Home', to: '/#top' },
  { label: 'About', to: '/#about' },
  { label: 'Experience', to: '/#experience' },
  { label: 'Skills', to: '/#skills' },
  { label: 'Work', to: '/#work' },
  { label: 'Manifesto', to: '/#manifesto' },
]

export default function Nav() {
  return (
    <header className="nav">
      <div className="nav-inner">
        <Link to="/#top" className="logo" aria-label="Andre van Heerden, home">
          <span className="logo-mark">&lt;/&gt;</span>
          <span className="logo-name">andre</span>
        </Link>
        <nav className="nav-links" aria-label="Main">
          {ITEMS.map((it) => (
            <Link key={it.label} to={it.to} className="nav-link">
              {it.label}
            </Link>
          ))}
        </nav>
        <div className="nav-right">
          <a className="nav-icon" href={LINKS.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <GitHub />
          </a>
          <a className="nav-icon" href={LINKS.behance} target="_blank" rel="noreferrer" aria-label="Behance">
            <Behance />
          </a>
          <a className="nav-icon" href={LINKS.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <LinkedIn />
          </a>
          <a className="btn btn-primary btn-sm" href={`mailto:${LINKS.email}`}>
            Hire me <Arrow />
          </a>
        </div>
      </div>
    </header>
  )
}
