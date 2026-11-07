import Words from './Words.jsx'

export function SectionHead({ kicker, title }) {
  return (
    <header className="cs-head">
      <p className="hand cs-kicker">{kicker}</p>
      <h2 className="cs-title">{title}</h2>
    </header>
  )
}

export function Why({ children, label = 'Why this choice' }) {
  return (
    <aside className="why-note">
      <span className="why-label">// {label}</span>
      <p><Words>{children}</Words></p>
    </aside>
  )
}
