import { useEffect, useMemo, useState } from 'react'

/* Floating "jump to section" index on the left of a case study.
   Sections are grouped (Research, Planning…). Collapsed it's a column of
   numbered squares; hovering opens the group and section names. */
export default function CaseIndex({ groups }) {
  const items = useMemo(() => groups.flatMap((g) => g.items), [groups])
  const [active, setActive] = useState(items[0]?.id)

  useEffect(() => {
    let raf = 0
    const update = () => {
      raf = 0
      const line = window.innerHeight * 0.35
      let cur = items[0]?.id
      for (const it of items) {
        const el = document.getElementById(it.id)
        if (el && el.getBoundingClientRect().top <= line) cur = it.id
      }
      setActive(cur)
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
  }, [items])

  const go = (e, id) => {
    e.preventDefault()
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    // mouse clicks shouldn't leave the index stuck open
    if (e.detail > 0) e.currentTarget.blur()
  }

  const idx = Math.max(0, items.findIndex((i) => i.id === active))
  let n = 0

  return (
    <nav className="cindex" aria-label="Case study sections">
      <p className="cindex-title">
        <span className="cindex-name">INDEX</span>
        <b>
          {String(idx + 1).padStart(2, '0')}/{String(items.length).padStart(2, '0')}
        </b>
      </p>
      {groups.map((g) => {
        const groupActive = g.items.some((it) => it.id === active)
        return (
          <div key={g.group} className={`cindex-group ${groupActive ? 'is-current' : ''}`}>
            <p className="cindex-group-name">{g.group}</p>
            <ol>
              {g.items.map((it) => {
                const i = n++
                return (
                  <li key={it.id}>
                    <a
                      href={`#${it.id}`}
                      onClick={(e) => go(e, it.id)}
                      className={`cindex-link ${it.id === active ? 'is-active' : ''} ${i < idx ? 'is-done' : ''}`}
                      aria-current={it.id === active ? 'location' : undefined}
                    >
                      <span className="cindex-no">{String(i + 1).padStart(2, '0')}</span>
                      <span className="cindex-label">{it.label}</span>
                    </a>
                  </li>
                )
              })}
            </ol>
          </div>
        )
      })}
    </nav>
  )
}
