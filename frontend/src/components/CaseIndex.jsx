import { useEffect, useState } from 'react'

/* Floating "jump to section" index on the right of a case study.
   Collapsed it's a column of numbered dots; hovering opens the labels. */
export default function CaseIndex({ items }) {
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

  return (
    <nav className="cindex" aria-label="Case study sections">
      <p className="cindex-title">
        <span>// index</span>
        <b>
          {String(idx + 1).padStart(2, '0')}/{String(items.length).padStart(2, '0')}
        </b>
      </p>
      <ol>
        {items.map((it, i) => (
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
        ))}
      </ol>
    </nav>
  )
}
