import { Link } from '../router.jsx'
import { LINKS } from '../data/projects.js'
import { Star, Person, Grid, Diamond, Heart, Behance, GitHub, LinkedIn } from './Icons.jsx'

export default function Nav({ active = 'home' }) {
  const items = [
    { id: 'home', label: 'Home', to: '/#top', Icon: Star },
    { id: 'about', label: 'About', to: '/#about', Icon: Person },
    { id: 'work', label: 'Work', to: '/#work', Icon: Grid },
    { id: 'manifesto', label: 'Manifesto', to: '/#manifesto', Icon: Diamond },
  ]
  return (
    <header className="nav">
      <Link to="/#top" className="nav-logo" aria-label="Andre van Heerden, home">
        <span>A</span>
      </Link>
      <nav className="nav-links" aria-label="Main">
        {items.map(({ id, label, to, Icon }) => (
          <Link key={id} to={to} className={`nav-link ${active === id ? 'is-active' : ''}`}>
            <Icon />
            <span>{label}</span>
          </Link>
        ))}
      </nav>
      <div className="nav-right">
        <a className="nav-social s-yellow" href={LINKS.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
          <LinkedIn />
        </a>
        <a className="nav-social s-pink" href={LINKS.behance} target="_blank" rel="noreferrer" aria-label="Behance">
          <Behance />
        </a>
        <a className="nav-social s-green" href={LINKS.github} target="_blank" rel="noreferrer" aria-label="GitHub">
          <GitHub />
        </a>
        <a className="nav-contact" href={`mailto:${LINKS.email}`}>
          <Heart />
          <span>Contact</span>
        </a>
      </div>
    </header>
  )
}
