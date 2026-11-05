/* Phones "lying on the paper".
   Each phone is a CSS device frame with a little thickness and a soft
   shadow, rotated slightly so the set looks dropped onto the page.
   Layouts (variant) live in index.css under .spread-<variant>. */

export function Phone({ src, alt = '', tape = false }) {
  return (
    <div className="phone">
      {tape && <span className="phone-tape" aria-hidden="true" />}
      <div className="phone-screen">
        <img src={src} alt={alt} loading="lazy" />
      </div>
    </div>
  )
}

export default function PhoneSpread({ screens, variant = 'trio', label, tape = false }) {
  return (
    <div className={`spread spread-${variant}`} role={label ? 'img' : undefined} aria-label={label}>
      {screens.map((s, i) => (
        <Phone key={s} src={s} tape={tape && i === Math.floor(screens.length / 2)} />
      ))}
    </div>
  )
}
