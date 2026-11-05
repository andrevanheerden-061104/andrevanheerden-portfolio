import { useEffect, useState } from 'react'

/* Tiny client-side router: no extra packages needed.
   vercel.json sends every path to index.html so deep links work. */

const listeners = new Set()

export function navigate(to) {
  if (to === window.location.pathname + window.location.search) return
  window.history.pushState({}, '', to)
  listeners.forEach((fn) => fn())
}

export function usePath() {
  const [path, setPath] = useState(window.location.pathname)
  useEffect(() => {
    const update = () => setPath(window.location.pathname)
    listeners.add(update)
    window.addEventListener('popstate', update)
    return () => {
      listeners.delete(update)
      window.removeEventListener('popstate', update)
    }
  }, [])
  return path
}

export function Link({ to, children, onClick, ...rest }) {
  const handle = (e) => {
    onClick?.(e)
    if (e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return
    e.preventDefault()
    const [pathname, hash] = to.split('#')
    const samePage = pathname === '' || pathname === window.location.pathname
    if (!samePage) navigate(pathname)
    if (hash) {
      requestAnimationFrame(() =>
        document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      )
    } else if (!samePage) {
      window.scrollTo(0, 0)
    }
  }
  return (
    <a href={to} onClick={handle} {...rest}>
      {children}
    </a>
  )
}
