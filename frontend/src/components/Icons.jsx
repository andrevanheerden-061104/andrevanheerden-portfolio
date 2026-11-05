const S = ({ children, ...p }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...p}>
    {children}
  </svg>
)

export const Arrow = () => (
  <S>
    <path fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M7 17 17 7M9 7h8v8" />
  </S>
)

export const ArrowLeft = () => (
  <S>
    <path fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M19 12H5M11 6l-6 6 6 6" />
  </S>
)

export const Star = () => (
  <S>
    <path fill="currentColor" d="m12 2.5 2.8 6 6.5.7-4.9 4.4 1.4 6.4L12 16.7 6.2 20l1.4-6.4L2.7 9.2l6.5-.7z" />
  </S>
)

export const Person = () => (
  <S>
    <circle cx="12" cy="8" r="4" fill="currentColor" />
    <path fill="currentColor" d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7z" />
  </S>
)

export const Grid = () => (
  <S>
    <path fill="currentColor" d="M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z" />
  </S>
)

export const Diamond = () => (
  <S>
    <path fill="currentColor" d="m12 2 10 10-10 10L2 12z" />
  </S>
)

export const Heart = () => (
  <S>
    <path fill="currentColor" d="M12 21s-8-5.2-8-11a4.7 4.7 0 0 1 8-3.2A4.7 4.7 0 0 1 20 10c0 5.8-8 11-8 11z" />
  </S>
)

export const Mail = () => (
  <S>
    <path fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" d="M3.5 6.5h17v11h-17zM3.5 7l8.5 6.5L20.5 7" />
  </S>
)

export const Behance = () => (
  <S>
    <path
      fill="currentColor"
      d="M8.2 11.4c.9-.4 1.4-1.2 1.4-2.2C9.6 7.2 8.1 6.3 6 6.3H1v11.4h5.2c2.2 0 3.9-1.1 3.9-3.3 0-1.4-.7-2.6-1.9-3ZM3.4 8.2h2.3c.9 0 1.6.3 1.6 1.2 0 .9-.6 1.3-1.5 1.3H3.4V8.2Zm2.5 7.6H3.4v-3.1h2.6c1 0 1.7.4 1.7 1.6 0 1.1-.8 1.5-1.8 1.5ZM15.9 8.9c-2.6 0-4.3 1.9-4.3 4.4 0 2.6 1.6 4.4 4.3 4.4 2 0 3.4-.9 4-2.9h-2.1c-.2.7-1 1.1-1.8 1.1-1.3 0-2-.7-2.1-2.1h6.1c.2-2.7-1.3-4.9-4.1-4.9Zm-2 3.5c.1-1.1.8-1.8 1.9-1.8 1.1 0 1.7.7 1.8 1.8h-3.7ZM13.7 6.6h4.6v1.2h-4.6z"
    />
  </S>
)

export const GitHub = () => (
  <S>
    <path
      fill="currentColor"
      d="M12 1.5a10.5 10.5 0 0 0-3.3 20.5c.5.1.7-.2.7-.5v-1.8c-2.9.6-3.5-1.4-3.5-1.4-.5-1.2-1.2-1.5-1.2-1.5-.9-.7.1-.6.1-.6 1 .1 1.6 1.1 1.6 1.1.9 1.6 2.5 1.1 3.1.9.1-.7.4-1.1.6-1.4-2.3-.3-4.8-1.2-4.8-5.2 0-1.1.4-2.1 1.1-2.8-.1-.3-.5-1.4.1-2.8 0 0 .9-.3 2.9 1.1a10 10 0 0 1 5.3 0c2-1.4 2.9-1.1 2.9-1.1.6 1.4.2 2.5.1 2.8.7.7 1.1 1.7 1.1 2.8 0 4-2.5 4.9-4.8 5.2.4.3.7 1 .7 1.9v2.9c0 .3.2.6.7.5A10.5 10.5 0 0 0 12 1.5Z"
    />
  </S>
)

export const LinkedIn = () => (
  <S>
    <path
      fill="currentColor"
      d="M4.5 3a2 2 0 1 1 0 4 2 2 0 0 1 0-4ZM3 8.5h3V21H3zM9 8.5h2.9v1.7h.1c.4-.8 1.4-1.9 3.2-1.9 3.4 0 4 2.2 4 5.2V21h-3v-6.6c0-1.6 0-3.6-2.2-3.6s-2.5 1.7-2.5 3.5V21H9z"
    />
  </S>
)

/* little doodles used beside the headline */
export const Target = () => (
  <svg viewBox="0 0 32 32" aria-hidden="true">
    <circle cx="16" cy="16" r="15" fill="#16a34a" />
    <circle cx="16" cy="16" r="10" fill="#fff" />
    <circle cx="16" cy="16" r="6" fill="#16a34a" />
    <circle cx="16" cy="16" r="2.4" fill="#fff" />
  </svg>
)

export const Flower = () => (
  <svg viewBox="0 0 32 32" aria-hidden="true">
    {[0, 45, 90, 135, 180, 225, 270, 315].map((r) => (
      <ellipse key={r} cx="16" cy="7.5" rx="4.2" ry="7" fill="#ff4f8b" transform={`rotate(${r} 16 16)`} />
    ))}
    <circle cx="16" cy="16" r="4.5" fill="#ffd43b" />
  </svg>
)
