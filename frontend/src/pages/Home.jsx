import { useEffect, useRef } from 'react'
import { Link } from '../router.jsx'
import { LINKS, TRACKS, getProject, byTrack, trackLabel, projects } from '../data/projects.js'
import ProjectStack, { TrackFilter, openOnClick } from '../components/ProjectStack.jsx'
import PhoneSpread from '../components/Phones.jsx'
import Skills, { HERO_ICONS } from '../components/Skills.jsx'
import Experience from '../components/Experience.jsx'
import Words from '../components/Words.jsx'
import IdBadge from '../components/IdBadge.jsx'
import { Arrow, Mail } from '../components/Icons.jsx'

const PRINCIPLES = [
  {
    no: '01',
    title: 'User value drives success',
    text: 'A product has to solve a real problem first. Trust and retention build a business; short-term exploitation burns it.',
  },
  {
    no: '02',
    title: 'Build with users, not assumptions',
    text: 'Users are co-designers. Surveys, testing and their lived experience shape every stage.',
  },
  {
    no: '03',
    title: 'Profit is fine. Dark patterns aren’t.',
    text: 'Subscriptions and targets are valid when the product delivers real value and respects privacy.',
  },
  {
    no: '04',
    title: 'Accessible by default',
    text: 'Dyscalculia modes, read-aloud, calm screens: access is designed in from the start, never bolted on.',
  },
]

/* "// label" + big heading used by every section */
export function SectionTitle({ label, children, center = false }) {
  return (
    <header className={`sec-title ${center ? 'is-center' : ''}`}>
      <p className="sec-label">
        <span className="tag">&lt;h2&gt;</span> {label}
      </p>
      <h2 className="pixel">{children}</h2>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-grid-bg" aria-hidden="true" />
      <div className="hero-copy">
        <p className="hero-status">
          <span className="live-dot" aria-hidden="true" /> Open to junior UX/UI &amp; front-end roles
        </p>
        <h1 className="hero-title">
          <span className="hero-hi">Hi, I’m</span> <span className="accent-text">Andre</span>
          <span className="hero-role">UX/UI designer &amp; developer</span>
        </h1>
        <p className="hero-lede">
          <Words>I’m passionate about user experience and, above all,</Words> <em>UI design</em>
          <Words>, and I bring my designs to life as a front-end developer.</Words>
        </p>
        <div className="hero-ctas">
          <Link className="btn btn-primary" to="/#work">
            View my work <Arrow />
          </Link>
          <a className="btn btn-outline" href={`mailto:${LINKS.email}`}>
            <Mail /> Email me
          </a>
        </div>
        <div className="hero-stack">
          <p className="mono-label">// tools I work with</p>
          <ul>
            {HERO_ICONS.map(({ Icon, key }) => (
              <li key={key}>
                <Icon aria-hidden="true" />
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="hero-visual">
        <span className="hero-glow" aria-hidden="true" />
        <span className="hero-dots" aria-hidden="true" />
        <IdBadge />
      </div>
    </section>
  )
}

function About() {
  const stats = [
    { value: '4', label: 'Case studies', sub: 'UX, AI, service design' },
    { value: '1', label: 'App built & live', sub: 'Tower of Arithmetic' },
    { value: '2nd', label: 'ABSA Hackathon 2026', sub: 'Gauteng universities' },
    { value: '6 mo', label: 'UX & AI internship', sub: 'Sand Dollar Design' },
  ]
  return (
    <section className="section about" id="about">
      <div className="about-copy">
        <SectionTitle label="about me">WHO I AM</SectionTitle>
        <p>
          <Words>I’m a UX/UI designer and front-end developer in my final year at Open Window in Pretoria. I design by a principle I call</Words>{' '}
          <strong><Words>symbiotic design:</Words></strong>{' '}
          <Words>when a product genuinely makes life easier for the people using it, they keep coming back, and that’s what makes it work for the business too. No dark patterns, no tricks.</Words>
        </p>
        <p>
          <Words>I love designing interfaces that look good and feel effortless, then building them so they work just as well in the browser as they did in Figma. Outside of work you’ll find me gaming and watching anime, which is where projects like a maths RPG come from.</Words>
        </p>
      </div>
      <dl className="stats">
        {stats.map((s) => (
          <div key={s.label} className="stat">
            <dt className="pixel">{s.value}</dt>
            <dd>
              <b>{s.label}</b>
              <span>{s.sub}</span>
            </dd>
          </div>
        ))}
      </dl>
    </section>
  )
}

/* Keeps a section's title pinned while its cards stack underneath:
   measures the title so the cards know where to dock. */
function useStickyHead() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const set = () => el.parentElement.style.setProperty('--head-h', `${el.offsetHeight}px`)
    set()
    const ro = new ResizeObserver(set)
    ro.observe(el)
    return () => ro.disconnect()
  }, [])
  return ref
}

function ExperienceSection() {
  const head = useStickyHead()
  return (
    <section className="section has-sticky-head" id="experience">
      <div className="sticky-head" ref={head}>
        <SectionTitle label="experience">WORK EXPERIENCE</SectionTitle>
      </div>
      <Experience />
    </section>
  )
}

function SkillsSection() {
  return (
    <section className="section" id="skills">
      <SectionTitle label="skills">MY TOOLKIT</SectionTitle>
      <p className="sec-intro">
        <Words>Design and development under one roof: I can research and design an experience, then build and ship it. The tools are connected, so hover one to see what it works with.</Words>
      </p>
      <Skills />
    </section>
  )
}

function Featured() {
  const p = getProject('tower-of-arithmetic')
  return (
    <section className="section" id="featured">
      <SectionTitle label="featured work">FEATURED</SectionTitle>
      <article
        className="feature is-clickable"
        style={{ '--pc': p.theme.bg, '--pa': p.theme.accent }}
        onClick={openOnClick(`/work/${p.slug}`)}
      >
        <div className="feature-copy">
          <p className="chip-row">
            <span className="chip chip-solid">{trackLabel(p)}</span>
            <span className="chip">{p.kind}</span>
            <span className="chip">{p.year}</span>
          </p>
          <h3>{p.title}</h3>
          <p className="feature-tagline">// {p.tagline}</p>
          <p className="feature-summary"><Words>{p.summary}</Words></p>
          <dl className="feature-stats">
            <div><dt>21</dt><dd>learners surveyed</dd></div>
            <div><dt>74</dt><dd>final UI screens</dd></div>
            <div><dt>3</dt><dd>grade modes</dd></div>
            <div><dt>Live</dt><dd>deployed build</dd></div>
          </dl>
          <div className="feature-ctas">
            <Link to={`/work/${p.slug}`} className="btn btn-primary">
              Read the case study <Arrow />
            </Link>
            <a href={p.live} target="_blank" rel="noreferrer" className="btn btn-outline">
              Play it live <Arrow />
            </a>
          </div>
        </div>
        <Link to={`/work/${p.slug}`} className="feature-phones" aria-label={`${p.title} case study`}>
          <PhoneSpread screens={p.screens} variant="hero" label={`${p.title} app screens`} />
        </Link>
      </article>
    </section>
  )
}

function Work({ track }) {
  const count = byTrack(track).length
  const head = useStickyHead()
  return (
    <section className="section work has-sticky-head" id="work">
      <div className="work-head sticky-head" ref={head}>
        <SectionTitle label="projects">ALL PROJECTS</SectionTitle>
        <div className="work-filter">
          <TrackFilter track={track} />
          <p className="mono-label">
            // showing {count} of {projects.length} · {TRACKS[track].label}
          </p>
        </div>
      </div>
      <ProjectStack track={track} />
    </section>
  )
}

function Manifesto() {
  return (
    <section className="section manifesto" id="manifesto">
      <SectionTitle label="manifesto" center>
        SYMBIOTIC DESIGN
      </SectionTitle>
      <p className="manifesto-quote">
        <Words>“I design for both sides of the screen. When people genuinely enjoy using a product, they come back, and that’s what makes a business grow.”</Words>
      </p>
      <div className="principles">
        {PRINCIPLES.map((pr) => (
          <article key={pr.no} className="principle">
            <span className="principle-no pixel">{pr.no}</span>
            <h3>{pr.title}</h3>
            <p><Words>{pr.text}</Words></p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default function Home({ track }) {
  return (
    <>
      <Hero />
      <About />
      <ExperienceSection />
      <SkillsSection />
      <Featured />
      <Work track={track} />
      <Manifesto />
    </>
  )
}
