import { Link } from '../router.jsx'
import { LINKS, TRACKS, getProject, byTrack, trackLabel, projects } from '../data/projects.js'
import ProjectStack, { TrackFilter } from '../components/ProjectStack.jsx'
import PhoneSpread from '../components/Phones.jsx'
import Skills, { HERO_ICONS } from '../components/Skills.jsx'
import Experience from '../components/Experience.jsx'
import Words from '../components/Words.jsx'
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
          <Words>I design software that benefits</Words> <em>both</em>{' '}
          <Words>the user and the company, then I build it in React and React Native.</Words>
        </p>
        <div className="hero-ctas">
          <Link className="btn btn-primary" to="/#work">
            View my work <Arrow />
          </Link>
          <a className="btn btn-outline" href={`mailto:${LINKS.email}`}>
            <Mail /> Get in touch
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
        <span className="hero-ring" aria-hidden="true" />
        <span className="hero-dots" aria-hidden="true" />
        <img className="hero-photo" src="/me/andre.webp" alt="Andre van Heerden" width="543" height="789" />
        <div className="code-card" aria-hidden="true">
          <div className="code-bar">
            <span>&lt;/&gt; andre.js</span>
            <i />
          </div>
          <pre>
            <code>
              <span className="k">const</span> andre = {'{'}
              {'\n'}  role: <span className="s">"UX/UI + Dev"</span>,
              {'\n'}  based: <span className="s">"Pretoria, ZA"</span>,
              {'\n'}  stack: [<span className="s">"Figma"</span>, <span className="s">"React"</span>],
              {'\n'}  loves: [<span className="s">"games"</span>, <span className="s">"anime"</span>],
              {'\n'}  goal: <span className="s">"user + business"</span>,
              {'\n'}{'}'};
            </code>
          </pre>
        </div>
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
          <Words>I am a UX/UI designer and front-end developer completing my final year at Open Window in Pretoria. My approach is</Words>{' '}
          <strong><Words>symbiotic design:</Words></strong>{' '}
          <Words>a product succeeds when real value for the user and the goals of the business reinforce each other, without dark patterns.</Words>
        </p>
        <p>
          <Words>I research</Words> <em>with</em>{' '}
          <Words>users rather than designing from assumptions, and I build what I design. Outside of work you’ll find me gaming and watching anime, which is where projects like a maths RPG come from.</Words>
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

function ExperienceSection() {
  return (
    <section className="section" id="experience">
      <SectionTitle label="experience">WORK EXPERIENCE</SectionTitle>
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
      <article className="feature" style={{ '--pc': p.theme.bg, '--pa': p.theme.accent }}>
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
  return (
    <section className="section work" id="work">
      <div className="work-head">
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
        <Words>“True user advocacy isn’t about ignoring business viability. It’s a balance where company goals and user value reinforce each other.”</Words>
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
