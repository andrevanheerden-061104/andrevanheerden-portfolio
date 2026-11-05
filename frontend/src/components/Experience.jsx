import { Fragment, useEffect, useRef, useState } from 'react'
import Words from './Words.jsx'

/* From Andre's CV, oldest first so you scroll forward through time */
const ITEMS = [
  {
    type: 'edu',
    year: '2021',
    date: '2018 – 2021',
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
    date: '2023 – Present',
    title: 'BA: User Experience Design & Interactive Development',
    org: 'Open Window Institute, Pretoria',
    meta: 'Final year',
    text: 'Website, web and mobile app design and development: Figma, HTML, CSS, JavaScript, C# and React. Capstone: Tower of Arithmetic, designed and shipped as a live app.',
    tags: ['Figma', 'React', 'C#', 'UX research'],
    path: 'education/open-window',
  },
  {
    type: 'work',
    year: 'Apr 2026',
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
    year: 'Sep 2026',
    date: '16 Sep 2026',
    title: '2nd place · ABSA Hackathon',
    org: 'ABSA South Africa',
    meta: 'Gauteng universities',
    text: 'Co-designed and pitched rapid UX solutions in a five-person Open Window team to solve real-world design challenges, earning second place among university teams in the Gauteng region.',
    tags: ['Rapid UX', 'Team of 5', 'Pitching'],
    path: 'awards/absa-hackathon',
  },
]

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

  const jump = (i) => {
    const el = cards.current[i]
    if (!el) return
    // scroll to where this card has just docked
    const spacer = el.previousElementSibling
    const target = spacer ? spacer.getBoundingClientRect().bottom + window.scrollY : el.offsetTop
    const stickTop = parseFloat(getComputedStyle(el).top) || 0
    window.scrollTo({ top: target - stickTop + 4, behavior: 'smooth' })
  }

  const progress = ITEMS.length > 1 ? active / (ITEMS.length - 1) : 1

  return (
    <div className="xp2" style={{ '--n': ITEMS.length }}>
      <nav className="xp-rail" aria-label="Experience timeline">
        <div className="xp-rail-line" aria-hidden="true">
          <span style={{ height: `${progress * 100}%` }} />
        </div>
        <ol>
          {ITEMS.map((it, i) => (
            <li key={it.title}>
              <button
                type="button"
                className={`xp-step xp-${it.type} ${i === active ? 'is-active' : ''} ${i < active ? 'is-done' : ''}`}
                onClick={() => jump(i)}
                aria-current={i === active ? 'step' : undefined}
              >
                <span className="xp-dot" aria-hidden="true" />
                <span className="xp-step-year">{it.year}</span>
                <span className="xp-step-type">[{LABEL[it.type]}]</span>
              </button>
            </li>
          ))}
        </ol>
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
              <div className="xp-bar">
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
