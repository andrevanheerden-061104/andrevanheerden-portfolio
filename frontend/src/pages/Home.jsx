import { Link } from '../router.jsx'
import { LINKS, TRACKS, getProject, byTrack, trackLabel } from '../data/projects.js'
import ProjectStack, { TrackFilter } from '../components/ProjectStack.jsx'
import { Arrow, Target, Flower, Mail } from '../components/Icons.jsx'

const SKILLS = [
  { label: 'UX Research', color: 'yellow', icon: '🔍' },
  { label: 'UI Design', color: 'green', icon: '🎨' },
  { label: 'Prototyping', color: 'pink', icon: '🧩' },
  { label: 'Front-end Dev', color: 'blue', icon: '💻' },
  { label: 'Accessibility', color: 'green', icon: '♿' },
  { label: 'Service Design', color: 'yellow', icon: '🗺️' },
]

const PRINCIPLES = [
  {
    no: '01',
    title: 'User value drives success',
    text: 'A product has to solve a real problem first. Trust and retention build a business; short-term exploitation burns it.',
    color: 'yellow',
  },
  {
    no: '02',
    title: 'Build with users, not assumptions',
    text: 'Users are co-designers. Surveys, testing and their lived experience shape every stage.',
    color: 'green',
  },
  {
    no: '03',
    title: 'Profit is fine. Dark patterns aren’t.',
    text: 'Subscriptions and targets are valid when the product delivers real value and respects privacy.',
    color: 'pink',
  },
  {
    no: '04',
    title: 'Accessible by default',
    text: 'Dyscalculia modes, read-aloud, calm screens: access is designed in from the start, never bolted on.',
    color: 'blue',
  },
]

function Hero() {
  return (
    <section className="hero" id="top">
      <img className="avatar avatar-l" src="/me/avatar-1.jpg" alt="" />
      <img className="avatar avatar-r" src="/me/avatar-2.jpg" alt="" />

      <div className="name-wrap">
        <p className="hand my-name">
          my name is
          <svg viewBox="0 0 60 10" aria-hidden="true">
            <path d="M2 4c10-3 20 3 30 0s18-2 26 1M8 8c10-2 22 2 40 0" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
          </svg>
        </p>
        <span className="sticky-pill pill-mint pill-tl">User first</span>
        <span className="sticky-pill pill-cream pill-tr">Business smart</span>

        <h1 className="name-box">
          <span className="handle h1" />
          <span className="handle h2" />
          <span className="handle h3" />
          <span className="handle h4" />
          <span className="pixel">ANDRE</span>
          <span className="sr-only"> van Heerden, UX/UI designer and developer</span>
        </h1>

        <span className="sticky-note note-yellow note-bl">UX/UI Designer &amp; Dev</span>
        <span className="sticky-note note-mint note-br">Pretoria, ZA</span>
        <svg className="arrow-doodle arrow-bl" viewBox="0 0 40 30" aria-hidden="true">
          <path d="M4 26C12 20 22 12 34 5M34 5l-8 1M34 5l-2 8" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
        <svg className="arrow-doodle arrow-br" viewBox="0 0 40 30" aria-hidden="true">
          <path d="M36 26C28 20 18 12 6 5M6 5l8 1M6 5l2 8" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
        <p className="status">
          <span className="dot" aria-hidden="true" /> Andre van Heerden · open to new work &amp; good problems
        </p>
      </div>

      <h2 className="headline">
        I design software that benefits <span className="nowrap">both user <span className="doodle"><Target /></span></span>{' '}
        <span className="nowrap">and company. <span className="doodle"><Flower /></span></span>
      </h2>

      <div className="hero-ctas">
        <a className="btn-dark" href={`mailto:${LINKS.email}`}>
          <span className="btn-ico"><Mail /></span> Contact me
        </a>
        <Link className="btn-paper" to="/#work">
          See my work <Arrow />
        </Link>
      </div>
    </section>
  )
}

function About() {
  return (
    <section className="about" id="about">
      <svg className="divider" viewBox="0 0 1200 60" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0 58C300 6 900 6 1200 58" fill="none" stroke="#bdbab2" strokeWidth="1.2" />
      </svg>
      <p className="hand side-label">about me!</p>

      <figure className="polaroid pol-l">
        <span className="tape tape-blue" />
        <span className="tape tape-yellow" />
        <img src="/me/andre-mountains.jpg" alt="Andre in a suit at golden hour, mountains behind him" />
        <figcaption className="hand">that’s me! · 2026</figcaption>
      </figure>
      <figure className="polaroid pol-r">
        <span className="tape tape-blue" />
        <span className="tape tape-yellow" />
        <img src="/me/andre-dog.jpg" alt="Andre holding a dachshund" />
        <figcaption className="hand">my best co-worker</figcaption>
      </figure>

      <h2 className="boxed">what’s up</h2>
      <p className="hand about-text">
        I’m a UX/UI designer and front-end developer in my final year at Open Window, Pretoria. I
        believe good products work for both sides: when the user genuinely benefits, the business
        does too, no dark patterns needed. ✨ I design <em>with</em> users, not from assumptions, and
        then I build what I design in React and React Native. 2nd place at the 2026 ABSA hackathon
        (Gauteng universities), plus a 6-month UX/AI internship at Sand Dollar Design. 🎨
      </p>

      <ul className="skills" aria-label="Skills">
        {SKILLS.map((s) => (
          <li key={s.label} className="skill-row">
            <span className={`skill skill-${s.color}`}>{s.label}</span>
            <span className={`skill-ico skill-${s.color}`} aria-hidden="true">{s.icon}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}

function Featured() {
  const p = getProject('tower-of-arithmetic')
  return (
    <section className="featured" id="featured">
      <p className="hand side-note">explore my best work!</p>
      <h2 className="pixel section-pixel">FEATURED WORK</h2>

      <article className="feature-card" style={{ '--bg': p.theme.bg, '--accent': p.theme.accent }}>
        <div className="feature-tab">
          <span className="dot" aria-hidden="true" /> {p.year} · {p.sector} · {trackLabel(p)}
        </div>
        <Link to={`/work/${p.slug}`} className="feature-media" aria-label={`${p.title} case study`}>
          <span className="tape tape-l" />
          <span className="tape tape-r" />
          <img src={p.hero} alt="Tower of Arithmetic app screens: home, title screen and a boss battle" />
        </Link>
        <div className="feature-copy">
          <div>
            <p className="feature-kind">{p.kind}</p>
            <h3>{p.title}</h3>
            <p className="feature-tagline">{p.tagline}</p>
            <p className="feature-summary">{p.summary}</p>
          </div>
          <dl className="feature-stats">
            <div><dt>21</dt><dd>learners surveyed</dd></div>
            <div><dt>74</dt><dd>final UI screens</dd></div>
            <div><dt>3</dt><dd>grade modes</dd></div>
            <div><dt>Live</dt><dd>deployed build</dd></div>
          </dl>
          <div className="feature-ctas">
            <Link to={`/work/${p.slug}`} className="btn-accent">
              Read the case study <Arrow />
            </Link>
            <a href={p.live} target="_blank" rel="noreferrer" className="btn-ghost-light">
              Play it live <Arrow />
            </a>
          </div>
        </div>
      </article>
    </section>
  )
}

function Work({ track }) {
  const count = byTrack(track).length
  return (
    <section className="work" id="work">
      <div className="work-head">
        <div>
          <p className="hand side-note">every project, card by card</p>
          <h2 className="pixel section-pixel">ALL PROJECTS</h2>
        </div>
        <div className="work-filter">
          <TrackFilter track={track} />
          <p className="work-count">
            Showing {count} {count === 1 ? 'project' : 'projects'} · {TRACKS[track].label}
          </p>
        </div>
      </div>
      <ProjectStack track={track} />
    </section>
  )
}

function Manifesto() {
  return (
    <section className="manifesto" id="manifesto">
      <p className="hand side-note">how I design</p>
      <h2 className="pixel section-pixel">SYMBIOTIC DESIGN</h2>
      <p className="manifesto-quote">
        True user advocacy isn’t about ignoring business viability. It’s a balance where company goals
        and user value reinforce each other.
      </p>
      <div className="notes">
        {PRINCIPLES.map((pr) => (
          <article key={pr.no} className={`note note-${pr.color}`}>
            <span className="note-no">{pr.no}</span>
            <h3>{pr.title}</h3>
            <p>{pr.text}</p>
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
      <Featured />
      <Work track={track} />
      <Manifesto />
    </>
  )
}
