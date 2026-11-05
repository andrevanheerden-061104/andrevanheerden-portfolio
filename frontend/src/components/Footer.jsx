import { LINKS } from '../data/projects.js'
import { Arrow, Mail, Behance, GitHub, LinkedIn } from './Icons.jsx'

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-main">
        <div>
          <p className="hand side-note">let’s talk!</p>
          <h2 className="pixel footer-title">LET’S BUILD SOMETHING BOTH SIDES LOVE</h2>
          <p className="footer-text">
            Open to junior UX/UI and front-end roles, internships and freelance projects.
          </p>
        </div>
        <a className="footer-cta" href={`mailto:${LINKS.email}`}>
          <span>Say hello</span>
          <Arrow />
        </a>
      </div>
      <ul className="footer-links">
        <li>
          <a href={`mailto:${LINKS.email}`}>
            <Mail /> <span><b>Email</b>{LINKS.email}</span>
          </a>
        </li>
        <li>
          <a href={LINKS.behance} target="_blank" rel="noreferrer">
            <Behance /> <span><b>Behance</b>andrevanheerden_1155</span>
          </a>
        </li>
        <li>
          <a href={LINKS.github} target="_blank" rel="noreferrer">
            <GitHub /> <span><b>GitHub</b>andrevanheerden-061104</span>
          </a>
        </li>
        <li>
          <a href={LINKS.linkedin} target="_blank" rel="noreferrer">
            <LinkedIn /> <span><b>LinkedIn</b>Andre van Heerden</span>
          </a>
        </li>
      </ul>
      <p className="footer-small">© {new Date().getFullYear()} Andre van Heerden · Designed and built by me in React</p>
    </footer>
  )
}
