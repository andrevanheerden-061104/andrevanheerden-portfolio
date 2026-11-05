/* Wraps each word in a span so it can light up / go bold on hover.
   The bold is faked with text-shadow so the line never re-flows. */
export default function Words({ children }) {
  if (typeof children !== 'string') return children
  const parts = children.split(/(\s+)/)
  return parts.map((p, i) =>
    /\s+/.test(p) || p === '' ? (
      p
    ) : (
      <span key={i} className="hw">
        {p}
      </span>
    )
  )
}
