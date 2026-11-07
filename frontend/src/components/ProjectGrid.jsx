import { useRef } from 'react'
import { Link } from '../router.jsx'
import { projects, devProjects } from '../data/projects.js'
import { openOnClick } from './ProjectStack.jsx'
import { Barcode } from './IdBadge.jsx'
import { Arrow } from './Icons.jsx'

/* Homepage work grid: two sections, UX design and Development.
   Each project is a "project pass" styled like the hanging ID badge:
   lanyard slot, header strip, cover, barcode footer, tilt + holo shine. */

const COVERS = {
  'tower-of-arithmetic': '/work/cover-toa.jpg',
  'next-level': '/work/cover-next-level.jpg',
  'herd-link': '/work/cover-herd-link.jpg',
}

function PassCard({ p, to, external, cta, badge, index, line, tags }) {
  const ref = useRef(null)
  const cover = COVERS[p.slug]
  const style = { '--pc': p.theme.bg, '--pi': p.theme.ink, '--ph': p.theme.hi }

  const onMove = (e) => {
    const el = ref.current
    if (!el || window.matchMedia('(hover: none)').matches) return
    const r = el.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width
    const y = (e.clientY - r.top) / r.height
    el.style.setProperty('--ry', `${(x - 0.5) * 8}deg`)
    el.style.setProperty('--rx', `${(0.5 - y) * 6}deg`)
    el.style.setProperty('--mx', `${x * 100}%`)
    el.style.setProperty('--my', `${y * 100}%`)
  }
  const onLeave = () => {
    const el = ref.current
    if (!el) return
    el.style.setProperty('--ry', '0deg')
    el.style.setProperty('--rx', '0deg')
  }

  const open = external
    ? (e) => {
        if (e.target.closest('a, button')) return
        window.open(to, '_blank', 'noopener')
      }
    : openOnClick(to)

  const no = String(index + 1).padStart(2, '0')

  return (
    <div className="pass-hang">
      <span className="pass-clip" aria-hidden="true" />
      <article ref={ref} className="pass is-clickable" style={style} onClick={open} onMouseMove={onMove} onMouseLeave={onLeave}>
        <span className="pass-slot" aria-hidden="true" />
        <header className="pass-head">
          <span className="pass-no">{no}</span>
          <span className="pass-head-text">
            <b>PROJECT PASS</b>
            <small>{p.kind}</small>
          </span>
          <span className="pass-id">{badge || p.year}</span>
        </header>

        <div className="pass-cover">
          {cover ? (
            <img src={cover} alt={`${p.title} cover`} loading="lazy" />
          ) : (
            <div className="pass-cover-blank" aria-hidden="true">
              <span className="pixel">{p.title.toUpperCase()}</span>
            </div>
          )}
        </div>

        <div className="pass-body">
          <h3>{p.title}</h3>
          <p className="pass-line">{line || (p.glance ? p.glance.problem : p.summary)}</p>
          <ul className="pass-tags">
            {(tags || p.tags).slice(0, 3).map((t) => (
              <li key={t}>{t}</li>
            ))}
            {p.group && <li>Group project</li>}
          </ul>
        </div>

        <footer className="pass-foot">
          <Barcode text={p.slug.toUpperCase()} height={20} />
          {external ? (
            <a className="pass-cta" href={to} target="_blank" rel="noreferrer">
              {cta} <Arrow />
            </a>
          ) : (
            <Link className="pass-cta" to={to}>
              {cta} <Arrow />
            </Link>
          )}
        </footer>
        <span className="pass-shine" aria-hidden="true" />
      </article>
    </div>
  )
}

/* Every card says "View case study"; the DV filter sends Tower of Arithmetic
   straight to its DV view. */
function cardsFor(filter) {
  const cards = []
  const ux = projects.filter((p) => p.tracks.includes('ux'))
  const dvTracked = projects.filter((p) => p.tracks.includes('dv'))
  if (filter === 'dv') {
    dvTracked.forEach((p) =>
      cards.push({
        p,
        to: `/work/${p.slug}?view=dv`,
        badge: 'LIVE',
        line: 'Expo app, my own Node API, Groq AI and Supabase, deployed for Android and web.',
        tags: ['React Native', 'Node.js', 'Supabase'],
      })
    )
  } else {
    ux.forEach((p) => cards.push({ p, to: `/work/${p.slug}`, badge: p.tracks.includes('dv') ? 'UX + DV' : 'UX' }))
  }
  if (filter !== 'ux') {
    devProjects.forEach((p) => cards.push({ p, to: p.repo, external: true, badge: 'DV' }))
  }
  return cards
}

export function countFor(filter) {
  return cardsFor(filter).length
}

export default function ProjectGrid({ filter = 'all' }) {
  const cards = cardsFor(filter)
  return (
    <div className="pgrid pgrid-3" key={filter}>
      {cards.map((c, i) => (
        <PassCard key={c.p.slug} index={i} cta="VIEW CASE STUDY" {...c} />
      ))}
    </div>
  )
}
