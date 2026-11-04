const LINKS = {
  behance: 'https://www.behance.net/andrevanheerden_1155',
  github: 'https://github.com/andrevanheerden-061104',
  email: 'andre.jjvanheerden@gmail.com',
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
        d="M5 12h14M13 6l6 6-6 6"
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
        strokeWidth="1.5"
        strokeLinejoin="round"
        d="M3.5 6.5h17v11h-17zM3.5 7l8.5 6.5L20.5 7"
      />
    </svg>
  )
}

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
        d="M12 21s-6.5-6.2-6.5-11.2a6.5 6.5 0 0 1 13 0C18.5 14.8 12 21 12 21Z"
      />
      <circle cx="12" cy="9.8" r="2.3" fill="none" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}

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

const INFO = [
  { label: 'Email', value: LINKS.email, href: `mailto:${LINKS.email}`, Icon: MailIcon },
  { label: 'Based in', value: 'Pretoria, South Africa', Icon: PinIcon },
  { label: 'Case studies', value: 'behance.net/andrevanheerden_1155', href: LINKS.behance, Icon: BehanceIcon },
  { label: 'Code', value: 'github.com/andrevanheerden-061104', href: LINKS.github, Icon: GitHubIcon },
]

export default function App() {
  return (
    <div className="page">
      <header className="top">
        <p className="top-left">
          Designing &amp; building
          <br />
          digital experiences
        </p>

        <a className="monogram" href="/" aria-label="Andre van Heerden — home">
          <span>A</span>
          <i aria-hidden="true" />
          <span>VH</span>
        </a>

        <p className="top-right">
          Portfolio
          <br />
          {new Date().getFullYear()}
        </p>
      </header>

      <main className="hero">
        <div className="hero-copy">
          <p className="status">
            <span className="status-dot" aria-hidden="true" />
            Portfolio coming soon
          </p>

          <h1 className="name">
            <span>Andre</span>
            <span>van Heerden</span>
          </h1>

          <p className="role">UX/UI Designer &amp; Developer</p>

          <p className="lede">
            My full portfolio is on its way: UX case studies, live websites and
            app builds, from first research to final interface. Until it launches,
            you can find my work here.
          </p>

          <div className="ctas">
            <a className="btn btn-solid" href={LINKS.behance} target="_blank" rel="noreferrer">
              View Behance <ArrowIcon />
            </a>
            <a className="btn btn-line" href={LINKS.github} target="_blank" rel="noreferrer">
              View GitHub <ArrowIcon />
            </a>
          </div>
        </div>

        <div className="portrait">
          <div className="circle" aria-hidden="true" />
          <img src="/andre.webp" alt="Portrait of Andre van Heerden" width="547" height="783" />
          <span className="badge" aria-hidden="true">
            Coming
            <br />
            soon
          </span>
        </div>
      </main>

      <footer className="info">
        {INFO.map(({ label, value, href, Icon }) => {
          const body = (
            <>
              <Icon />
              <span className="info-text">
                <span className="info-label">{label}</span>
                <span className="info-value">{value}</span>
              </span>
            </>
          )
          return href ? (
            <a
              key={label}
              className="info-item"
              href={href}
              {...(href.startsWith('http') ? { target: '_blank', rel: 'noreferrer' } : {})}
            >
              {body}
            </a>
          ) : (
            <div key={label} className="info-item">
              {body}
            </div>
          )
        })}
      </footer>
    </div>
  )
}
