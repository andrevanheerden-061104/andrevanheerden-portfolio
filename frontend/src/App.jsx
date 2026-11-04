import { useEffect, useRef } from 'react'

const LINKS = {
  behance: 'https://www.behance.net/andrevanheerden_1155',
  github: 'https://github.com/andrevanheerden-061104',
  email: 'andre.jjvanheerden@gmail.com',
}

const COMING = [
  {
    no: '01',
    title: 'UX Case Studies',
    text: 'Research, personas, flows and wireframes through to final UI.',
  },
  {
    no: '02',
    title: 'Websites & Apps',
    text: 'Live web and mobile builds in React, React Native and Node.',
  },
  {
    no: '03',
    title: 'Process & Experiments',
    text: 'Hackathon work, AI-assisted builds and design explorations.',
  },
]

function BehanceIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M8.2 11.4c.9-.4 1.4-1.2 1.4-2.2C9.6 7.2 8.1 6.3 6 6.3H1v11.4h5.2c2.2 0 3.9-1.1 3.9-3.3 0-1.4-.7-2.6-1.9-3ZM3.4 8.2h2.3c.9 0 1.6.3 1.6 1.2 0 .9-.6 1.3-1.5 1.3H3.4V8.2Zm2.5 7.6H3.4v-3.1h2.6c1 0 1.7.4 1.7 1.6 0 1.1-.8 1.5-1.8 1.5ZM15.9 8.9c-2.6 0-4.3 1.9-4.3 4.4 0 2.6 1.6 4.4 4.3 4.4 2 0 3.4-.9 4-2.9h-2.1c-.2.7-1 1.1-1.8 1.1-1.3 0-2-.7-2.1-2.1h6.1c.2-2.7-1.3-4.9-4.1-4.9Zm-2 3.5c.1-1.1.8-1.8 1.9-1.8 1.1 0 1.7.7 1.8 1.8h-3.7ZM13.7 6.6h4.6v1.2h-4.6z"
      />
    </svg>
  )
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 1.5a10.5 10.5 0 0 0-3.3 20.5c.5.1.7-.2.7-.5v-1.8c-2.9.6-3.5-1.4-3.5-1.4-.5-1.2-1.2-1.5-1.2-1.5-.9-.7.1-.6.1-.6 1 .1 1.6 1.1 1.6 1.1.9 1.6 2.5 1.1 3.1.9.1-.7.4-1.1.6-1.4-2.3-.3-4.8-1.2-4.8-5.2 0-1.1.4-2.1 1.1-2.8-.1-.3-.5-1.4.1-2.8 0 0 .9-.3 2.9 1.1a10 10 0 0 1 5.3 0c2-1.4 2.9-1.1 2.9-1.1.6 1.4.2 2.5.1 2.8.7.7 1.1 1.7 1.1 2.8 0 4-2.5 4.9-4.8 5.2.4.3.7 1 .7 1.9v2.9c0 .3.2.6.7.5A10.5 10.5 0 0 0 12 1.5Z"
      />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.5 6.5h17v11h-17zM3.5 7l8.5 6.5L20.5 7"
      />
    </svg>
  )
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M7 17 17 7M9 7h8v8"
      />
    </svg>
  )
}

/* Twinkling star field drawn on a canvas behind everything */
function Stars() {
  const ref = useRef(null)

  useEffect(() => {
    const canvas = ref.current
    const ctx = canvas.getContext('2d')
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let stars = []
    let raf

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      const count = Math.round((window.innerWidth * window.innerHeight) / 5200)
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        r: Math.random() * 1.1 + 0.2,
        a: Math.random() * 0.6 + 0.2,
        s: Math.random() * 0.02 + 0.004,
        p: Math.random() * Math.PI * 2,
      }))
    }

    const draw = (t = 0) => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)
      for (const st of stars) {
        const tw = reduce ? 1 : 0.6 + 0.4 * Math.sin(st.p + t * st.s * 0.06)
        ctx.globalAlpha = st.a * tw
        ctx.fillStyle = '#dfe6ff'
        ctx.beginPath()
        ctx.arc(st.x, st.y, st.r, 0, Math.PI * 2)
        ctx.fill()
      }
      if (!reduce) raf = requestAnimationFrame(draw)
    }

    resize()
    draw()
    window.addEventListener('resize', resize)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas ref={ref} className="stars" aria-hidden="true" />
}

export default function App() {
  return (
    <div className="page">
      <Stars />
      <div className="vignette" aria-hidden="true" />

      <header className="top">
        <a className="brand" href="/" aria-label="Andre van Heerden — home">
          <span className="brand-mark" aria-hidden="true" />
          <span className="brand-name">Andre van Heerden</span>
        </a>
        <p className="top-meta">
          <span className="dot" aria-hidden="true" />
          Pretoria, South Africa
        </p>
      </header>

      <main className="hero">
        <div className="eclipse" aria-hidden="true">
          <div className="corona" />
          <div className="moon" />
        </div>

        <div className="hero-copy">
          <p className="kicker">Portfolio under construction</p>
          <h1 className="title" aria-label="Coming soon">
            <span>Coming</span> <span>Soon</span>
          </h1>
          <p className="lede">
            A new home for my work as a <strong>UX/UI designer &amp; developer</strong>.
            Case studies, live websites and app builds, all in one place,
            from first research to final interface.
          </p>

          <div className="ctas">
            <a className="btn btn-primary" href={LINKS.behance} target="_blank" rel="noreferrer">
              View case studies on Behance <ArrowIcon />
            </a>
            <a className="btn btn-ghost" href={LINKS.github} target="_blank" rel="noreferrer">
              Code on GitHub <ArrowIcon />
            </a>
          </div>
        </div>
      </main>

      <section className="coming" aria-label="What's coming">
        {COMING.map((c) => (
          <article className="card" key={c.no}>
            <span className="card-no">{c.no}</span>
            <h2>{c.title}</h2>
            <p>{c.text}</p>
          </article>
        ))}
      </section>

      <nav className="rail" aria-label="Find me elsewhere">
        <span className="rail-label">Find me</span>
        <span className="rail-line" aria-hidden="true" />
        <a href={LINKS.behance} target="_blank" rel="noreferrer" aria-label="Behance" title="Behance">
          <BehanceIcon />
        </a>
        <a href={LINKS.github} target="_blank" rel="noreferrer" aria-label="GitHub" title="GitHub">
          <GitHubIcon />
        </a>
        <a href={`mailto:${LINKS.email}`} aria-label="Email" title="Email">
          <MailIcon />
        </a>
      </nav>

      <footer className="bottom">
        <a className="mail" href={`mailto:${LINKS.email}`}>
          {LINKS.email}
        </a>
        <p>© {new Date().getFullYear()} Andre van Heerden</p>
      </footer>
    </div>
  )
}
