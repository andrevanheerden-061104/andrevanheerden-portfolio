import { LINKS } from '../data/projects.js'
import { Arrow, Mail, Behance, GitHub, LinkedIn } from './Icons.jsx'

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-card">
        <div>
          <p className="sec-label">
            <span className="tag">&lt;contact&gt;</span> let’s work together
          </p>
          <h2 className="pixel footer-title">HAVE A PROJECT IN MIND?</h2>
          <p className="footer-text">
            I’m open to junior UX/UI and front-end roles, internships and freelance work. Let’s build
            something both your users and your business will love.
          </p>
          <a className="btn btn-primary" href={`mailto:${LINKS.email}`}>
            Say hello <Arrow />
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
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Andre van Heerden</p>
        <p className="mono-label">// designed in Figma, built in React</p>
      </div>
    </footer>
  )
}
