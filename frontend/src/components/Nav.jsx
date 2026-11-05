import { useEffect, useState } from 'react'
import { Link } from '../router.jsx'
import { LINKS } from '../data/projects.js'
import { Behance, GitHub, LinkedIn, Arrow } from './Icons.jsx'

const ITEMS = [
  { id: 'top', label: 'Home', to: '/#top' },
  { id: 'about', label: 'About', to: '/#about' },
  { id: 'experience', label: 'Experience', to: '/#experience' },
  { id: 'skills', label: 'Skills', to: '/#skills' },
  { id: 'work', label: 'Work', to: '/#work' },
  { id: 'manifesto', label: 'Manifesto', to: '/#manifesto' },
]

/* sections in page order, and which nav item each one lights up */
const SPY = [
  ['top', 'top'],
  ['about', 'about'],
  ['experience', 'experience'],
  ['skills', 'skills'],
  ['featured', 'work'],
  ['work', 'work'],
  ['manifesto', 'manifesto'],
]

function useActiveSection() {
  const [active, setActive] = useState('top')
  useEffect(() => {
    let raf = 0
    const update = () => {
      raf = 0
      const line = window.innerHeight * 0.35
      let current = 'top'
      for (const [id, nav] of SPY) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= line) current = nav
      }
      // at the very bottom (footer) keep the last section lit
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) current = 'manifesto'
      setActive(current)
    }
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      cancelAnimationFrame(raf)
    }
  }, [])
  return active
}

export default function Nav() {
  const active = useActiveSection()
  return (
    <header className="nav">
      <div className="nav-inner">
        <Link to="/#top" className="logo" aria-label="Andre van Heerden, home">
          <span className="logo-mark">&lt;/&gt;</span>
          <span className="logo-name">andre</span>
        </Link>
        <nav className="nav-links" aria-label="Main">
          {ITEMS.map((it) => (
            <Link
              key={it.id}
              to={it.to}
              className={`nav-link ${active === it.id ? 'is-active' : ''}`}
              aria-current={active === it.id ? 'location' : undefined}
            >
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
            Get in touch <Arrow />
          </a>
        </div>
      </div>
    </header>
  )
}
