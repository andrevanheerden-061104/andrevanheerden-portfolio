import { useEffect, useState } from 'react'

/* Tiny client-side router: no extra packages needed.
   vercel.json sends every path to index.html so deep links work. */

const listeners = new Set()

/* Remember how far down the homepage was, so coming back lands there again. */
const HOME_KEY = 'home-scroll'
export const isHomePath = (p) => p === '/' || p === '/ux' || p === '/dv'

if (typeof window !== 'undefined' && 'scrollRestoration' in window.history) {
  window.history.scrollRestoration = 'manual'
}

export function rememberHomeScroll() {
  if (isHomePath(window.location.pathname)) {
    try {
      sessionStorage.setItem(HOME_KEY, String(window.scrollY))
    } catch {
      /* storage can be blocked; not worth breaking navigation over */
    }
  }
}

export function savedHomeScroll() {
  try {
    return Number(sessionStorage.getItem(HOME_KEY)) || 0
  } catch {
    return 0
  }
}

/* Jump without the smooth scroll set on <html>. */
export function jumpTo(y) {
  window.scrollTo({ top: y, left: 0, behavior: 'instant' })
}

export function navigate(to) {
  if (to === window.location.pathname + window.location.search) return
  rememberHomeScroll()
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
    }
  }
  return (
    <a href={to} onClick={handle} {...rest}>
      {children}
    </a>
  )
}
