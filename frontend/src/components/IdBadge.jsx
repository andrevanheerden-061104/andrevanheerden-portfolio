import { useRef, useState } from 'react'
import { LINKS } from '../data/projects.js'

/* Decorative barcode: bar widths come from the text, so it's stable */
export function Barcode({ text, height = 34 }) {
  const bars = []
  let x = 0
  for (let i = 0; i < text.length * 3; i++) {
    const c = text.charCodeAt(i % text.length) + i * 7
    const w = (c % 3) + 1
    const gap = ((c >> 2) % 2) + 1
    bars.push(<rect key={i} x={x} y="0" width={w} height={height} />)
    x += w + gap
  }
  return (
    <svg className="barcode" viewBox={`0 0 ${x} ${height}`} preserveAspectRatio="none" aria-hidden="true">
      {bars}
    </svg>
  )
}

/* Hanging ID badge for the hero.
   - the whole rig (strap + clip + card) swings gently from the top
   - hovering stops the swing and tilts the card toward the cursor with a shine
   - clicking flips it to a "player profile" on the back */
export default function IdBadge() {
  const card = useRef(null)
  const [flipped, setFlipped] = useState(false)

  const onMove = (e) => {
    const el = card.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width
    const y = (e.clientY - r.top) / r.height
    el.style.setProperty('--ry', `${(x - 0.5) * 18}deg`)
    el.style.setProperty('--rx', `${(0.5 - y) * 14}deg`)
    el.style.setProperty('--mx', `${x * 100}%`)
    el.style.setProperty('--my', `${y * 100}%`)
  }
  const onLeave = () => {
    const el = card.current
    if (!el) return
    el.style.setProperty('--ry', '0deg')
    el.style.setProperty('--rx', '0deg')
  }

  return (
    <div className="badge-rig">
      <span className="lanyard" aria-hidden="true">
        <span className="lanyard-text">ANDRE · UX/UI · DEV · ANDRE · UX/UI · DEV · ANDRE · UX/UI · DEV</span>
      </span>
      <span className="badge-clip" aria-hidden="true" />

      <div
        ref={card}
        className={`idcard ${flipped ? 'is-flipped' : ''}`}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        onClick={() => setFlipped((f) => !f)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            setFlipped((f) => !f)
          }
        }}
        role="button"
        tabIndex={0}
        aria-pressed={flipped}
        aria-label="Andre van Heerden ID badge. Press to flip."
      >
        <div className="idcard-inner">
          {/* ---------- front ---------- */}
          <div className="idface idfront">
            <span className="idslot" aria-hidden="true" />
            <header className="idhead">
              <span className="idlogo">&lt;/&gt;</span>
              <span className="idhead-text">
                <b>DESIGN + DEV ID</b>
                <small>user first. business smart.</small>
              </span>
              <span className="idno">AVH-0611 ✦</span>
            </header>

            <div className="idrow">
              <div className="idphoto-col">
                <div className="idphoto">
                  <img src="/me/andre.webp" alt="" width="543" height="789" />
                </div>
                <Barcode text="ANDREVANHEERDEN" height={22} />
              </div>
              <div className="idinfo">
                <p className="idlabel">NAME:</p>
                <p className="idname">ANDRE VAN HEERDEN</p>
                <p className="idlabel">ROLE:</p>
                <p className="idrole">UX/UI Designer &amp; Developer</p>
                <p className="idlabel">STATUS:</p>
                <p className="idstatus">
                  <span className="live-dot" aria-hidden="true" /> OPEN TO WORK
                </p>
              </div>
            </div>

            <div className="idblock">
              <p className="idlabel">CURRENT STACK:</p>
              <ul className="idchecks">
                <li>Figma &amp; UX research</li>
                <li>React / React Native</li>
                <li>Node, Express &amp; Supabase</li>
                <li>AI-powered features</li>
              </ul>
            </div>

            <div className="idsplit">
              <div>
                <p className="idlabel">BASED IN:</p>
                <p className="idbig">Pretoria, ZA</p>
              </div>
              <div>
                <p className="idlabel">LEVEL:</p>
                <p className="idsmall">Final year · Open Window</p>
              </div>
            </div>

            <footer className="idfoot">
              <Barcode text="DESIGNBUILDSHIP" height={26} />
              <p>DESIGN / BUILD / SHIP</p>
            </footer>
            <span className="idhint" aria-hidden="true">click to flip ↻</span>
            <span className="idshine" aria-hidden="true" />
          </div>

          {/* ---------- back ---------- */}
          <div className="idface idback">
            <header className="idhead">
              <span className="idlogo">★</span>
              <span className="idhead-text">
                <b>PLAYER PROFILE</b>
                <small>side quests &amp; stats</small>
              </span>
              <span className="idno">LV. 21</span>
            </header>

            <div className="idblock">
              <p className="idlabel">CLASS:</p>
              <p className="idbig">Designer / Developer hybrid</p>
            </div>

            <div className="idblock">
              <p className="idlabel">ACHIEVEMENTS UNLOCKED:</p>
              <ul className="idchecks is-trophy">
                <li>2nd place · ABSA Hackathon 2026</li>
                <li>Shipped Tower of Arithmetic</li>
                <li>6-month UX/AI internship</li>
              </ul>
            </div>

            <div className="idblock">
              <p className="idlabel">INTERESTS:</p>
              <ul className="idtags">
                <li>gaming</li>
                <li>anime</li>
                <li>fantasy RPGs</li>
                <li>accessible UX</li>
              </ul>
            </div>

            <div className="idblock">
              <p className="idlabel">MAIN QUEST:</p>
              <p className="idsmall">Build products where the user and the business both win.</p>
            </div>

            <footer className="idfoot">
              <a
                className="idmail"
                href={`mailto:${LINKS.email}`}
                onClick={(e) => e.stopPropagation()}
                tabIndex={flipped ? 0 : -1}
              >
                {LINKS.email}
              </a>
            </footer>
            <span className="idhint" aria-hidden="true">click to flip back ↻</span>
            <span className="idshine" aria-hidden="true" />
          </div>
        </div>
      </div>
    </div>
  )
}
