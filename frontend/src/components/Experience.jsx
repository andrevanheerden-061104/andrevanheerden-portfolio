import Words from './Words.jsx'

/* From Andre's CV */
const ITEMS = [
  {
    type: 'work',
    date: 'Apr – Oct 2026',
    title: 'UX / AI Generalist Intern',
    org: 'Sand Dollar Design',
    meta: '6-month internship',
    text: 'Conducted end-to-end UX research and interface design while critically evaluating emerging AI tools to inform design workflows and commercial decisions. Integrated AI-assisted development into my process, built and shipped live digital products, and produced two full portfolio case studies.',
    tags: ['UX research', 'UI design', 'AI tools', 'Shipped products'],
  },
  {
    type: 'award',
    date: 'Sep 2026',
    title: '2nd place · ABSA Hackathon',
    org: 'ABSA South Africa',
    meta: 'Gauteng universities',
    text: 'Co-designed and pitched rapid UX solutions in a five-person Open Window team to solve real-world design challenges, earning second place among university teams in the Gauteng region.',
    tags: ['Rapid UX', 'Team of 5', 'Pitching'],
  },
  {
    type: 'edu',
    date: '2023 – Present',
    title: 'BA: User Experience Design & Interactive Development',
    org: 'Open Window Institute, Pretoria',
    meta: 'Final year',
    text: 'Website, web and mobile app design and development: Figma, HTML, CSS, JavaScript, C# and React.',
    tags: ['Figma', 'React', 'C#'],
  },
  {
    type: 'edu',
    date: '2018 – 2021',
    title: 'National Senior Certificate',
    org: 'High school, Hartbeespoort',
    meta: 'Matric',
    text: 'Maths, English, Afrikaans, Arts, Geography and Engineering Graphics & Design (EGD).',
    tags: ['Maths', 'EGD', 'Arts'],
  },
]

const LABEL = { work: 'WORK', award: 'AWARD', edu: 'EDUCATION' }

export default function Experience() {
  return (
    <ol className="xp">
      {ITEMS.map((it) => (
        <li key={it.title} className={`xp-item xp-${it.type}`}>
          <span className="xp-node" aria-hidden="true" />
          <div className="xp-date">
            <span className="xp-type">[{LABEL[it.type]}]</span>
            <time>{it.date}</time>
          </div>
          <article className="xp-card">
            <header>
              <h3>{it.title}</h3>
              <p className="xp-org">
                {it.org} <span>· {it.meta}</span>
              </p>
            </header>
            <p className="xp-text">
              <Words>{it.text}</Words>
            </p>
            <ul className="xp-tags">
              {it.tags.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </article>
        </li>
      ))}
    </ol>
  )
}
