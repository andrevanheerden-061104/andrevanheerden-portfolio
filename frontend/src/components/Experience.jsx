import { Fragment, useEffect, useRef, useState } from 'react'
import Words from './Words.jsx'

/* From Andre's CV, oldest first so you scroll forward through time */
const ITEMS = [
  {
    type: 'edu',
    year: '2018',
    date: '2018 – 2022',
    title: 'National Senior Certificate',
    org: 'High school, Hartbeespoort',
    meta: 'Matric',
    text: 'Maths, English, Afrikaans, Arts, Geography and Engineering Graphics & Design (EGD): the mix of logic and visual design that pointed me towards UX.',
    tags: ['Maths', 'EGD', 'Arts'],
    path: 'education/matric',
  },
  {
    type: 'edu',
    year: '2023',
    date: '2023 – Now',
    title: 'BA: User Experience Design & Interactive Development',
    org: 'Open Window Institute, Pretoria',
    meta: 'Final year',
    text: 'Website, web and mobile app design and development: Figma, HTML, CSS, JavaScript, C# and React. Capstone: Tower of Arithmetic, designed and shipped as a live app.',
    tags: ['Figma', 'React', 'C#', 'UX research'],
    path: 'education/open-window',
  },
  {
    type: 'work',
    year: 'Apr 26',
    date: 'Apr – Oct 2026',
    title: 'UX / AI Generalist Intern',
    org: 'Sand Dollar Design',
    meta: '6-month internship',
    text: 'Conducted end-to-end UX research and interface design while critically evaluating emerging AI tools to inform design workflows and commercial decisions. Integrated AI-assisted development into my process, built and shipped live digital products, and produced two full portfolio case studies.',
    tags: ['UX research', 'UI design', 'AI tools', 'Shipped products'],
    path: 'work/sand-dollar-design',
  },
  {
    type: 'award',
    year: 'Sep 26',
    date: '16 Sep 2026',
    title: '2nd place · ABSA Hackathon',
    org: 'ABSA South Africa',
    meta: 'Gauteng universities',
    text: 'Co-designed and pitched rapid UX solutions in a five-person Open Window team to solve real-world design challenges, earning second place among university teams in the Gauteng region.',
    tags: ['Rapid UX', 'Team of 5', 'Pitching'],
    path: 'awards/absa-hackathon',
  },
]

/* degrees between entries on the wheel */
const STEP = 32

const LABEL = { work: 'WORK', award: 'AWARD', edu: 'EDUCATION' }

/* Cards stick and stack as you scroll (like the project folders);
   the timeline on the left tracks which entry is on top. */
export default function Experience() {
  const [active, setActive] = useState(0)
  const cards = useRef([])

  useEffect(() => {
    let raf = 0
    const update = () => {
      raf = 0
      let a = 0
      cards.current.forEach((el, i) => {
        if (!el) return
        const stickTop = parseFloat(getComputedStyle(el).top) || 0
        if (el.getBoundingClientRect().top <= stickTop + 2) a = i
      })
      setActive(a)
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

  // scroll position where card i has just docked
  const dockY = (i) => {
    const el = cards.current[i]
    if (!el) return null
    const spacer = i > 0 ? el.previousElementSibling : null
    const start = spacer
      ? spacer.getBoundingClientRect().bottom
      : el.parentElement.getBoundingClientRect().top // first card: top of the stack
    const stickTop = parseFloat(getComputedStyle(el).top) || 0
    return Math.round(start + window.scrollY - stickTop + 4)
  }

  const jump = (i) => {
    const y = dockY(i)
    if (y != null) window.scrollTo({ top: y, behavior: 'smooth' })
  }

  // when scrolling stops between two cards, glide to the nearest one
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined
    let t = 0
    const settle = () => {
      const docks = ITEMS.map((_, i) => dockY(i))
      if (docks.some((d) => d == null)) return
      const y = window.scrollY
      // only inside the stacking range; entering or leaving the section stays free
      if (y < docks[0] || y > docks[docks.length - 1]) return
      const nearest = docks.reduce((a, b) => (Math.abs(b - y) < Math.abs(a - y) ? b : a))
      if (Math.abs(nearest - y) > 6) window.scrollTo({ top: nearest, behavior: 'smooth' })
    }
    const onScroll = () => {
      clearTimeout(t)
      t = setTimeout(settle, 220)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      clearTimeout(t)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <div className="xp2" style={{ '--n': ITEMS.length }}>
      <nav className="xp-wheel" aria-label="Experience timeline">
        <div className="xp-wheel-dial" style={{ '--rot': `${-active * STEP}deg` }}>
          <span className="xp-wheel-circle" aria-hidden="true" />
          {ITEMS.map((it, i) => (
            <button
              key={it.title}
              type="button"
              className={`xp-wi xp-${it.type} ${i === active ? 'is-active' : ''} ${i < active ? 'is-done' : ''}`}
              style={{ '--a': `${i * STEP}deg` }}
              onClick={() => jump(i)}
              aria-current={i === active ? 'step' : undefined}
              aria-label={`${it.date}: ${it.title}`}
            >
              <span className="xp-wi-dot" aria-hidden="true" />
              <span className="xp-wi-label" aria-hidden="true">
                <span className="xp-wi-short pixel">{it.year}</span>
                <span className="xp-wi-big">
                  <b className="pixel">{it.date}</b>
                  <small>[{LABEL[it.type]}]</small>
                </span>
              </span>
            </button>
          ))}
        </div>
        <p className="xp-rail-count">
          {String(active + 1).padStart(2, '0')} / {String(ITEMS.length).padStart(2, '0')}
        </p>
      </nav>

      <div className="xp-stack">
        {ITEMS.map((it, i) => (
          <Fragment key={it.title}>
            {i > 0 && <div className="xp-gap" aria-hidden="true" />}
            <article
              ref={(el) => (cards.current[i] = el)}
              className={`xp-card2 xp-${it.type} ${i < active ? 'is-behind' : ''}`}
              style={{ '--i': i }}
            >
              <div
                className="xp-bar"
                onClick={i < active ? () => jump(i) : undefined}
                title={i < active ? 'Back to this card' : undefined}
              >
                <span className="dots" aria-hidden="true"><i /><i /><i /></span>
                <span className="xp-path">~/{it.path}</span>
                <span className="xp-badge">[{LABEL[it.type]}]</span>
              </div>
              <div className="xp-content">
                <p className="xp-when">{it.date}</p>
                <h3>{it.title}</h3>
                <p className="xp-org">
                  {it.org} <span>· {it.meta}</span>
                </p>
                <p className="xp-text">
                  <Words>{it.text}</Words>
                </p>
                <ul className="xp-tags">
                  {it.tags.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </div>
            </article>
          </Fragment>
        ))}
        <div className="xp-hold" aria-hidden="true" />
      </div>
    </div>
  )
}
