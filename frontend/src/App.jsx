import { useEffect, useLayoutEffect, useRef } from 'react'
import { usePath, isHomePath, savedHomeScroll, rememberHomeScroll, jumpTo } from './router.jsx'
import Nav from './components/Nav.jsx'
import ProjectNav from './components/ProjectNav.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import ProjectPage from './pages/ProjectPage.jsx'

/*
  Routes
  /                 home, all projects
  /ux               home, UX projects only (send this to UX companies)
  /dv               home, development projects only (send this to dev companies)
  /work/:slug       a project page
*/
export default function App() {
  const path = usePath().replace(/\/+$/, '') || '/'
  const workMatch = path.match(/^\/work\/([\w-]+)$/)
  const track = path === '/ux' ? 'ux' : path === '/dv' ? 'dv' : 'all'

  // Case studies always open at the top; going back home returns to where you were.
  const first = useRef(true)
  useLayoutEffect(() => {
    if (first.current) {
      first.current = false
      return
    }
    if (window.location.hash) return
    if (workMatch) {
      jumpTo(0)
    } else {
      const y = savedHomeScroll()
      // wait a frame so the homepage has its full height before scrolling
      requestAnimationFrame(() => jumpTo(y))
    }
  }, [path])

  // browser back/forward: save the homepage position before leaving it
  useEffect(() => {
    const onScroll = () => {
      if (isHomePath(window.location.pathname)) rememberHomeScroll()
    }
    let t = 0
    const throttled = () => {
      clearTimeout(t)
      t = setTimeout(onScroll, 120)
    }
    window.addEventListener('scroll', throttled, { passive: true })
    return () => window.removeEventListener('scroll', throttled)
  }, [])

  useEffect(() => {
    if (window.location.hash) {
      const el = document.getElementById(window.location.hash.slice(1))
      el?.scrollIntoView()
    }
  }, [])

  return (
    <div className={`sheet ${workMatch ? 'is-project' : ''}`}>
      {workMatch ? <ProjectNav current={workMatch[1]} /> : <Nav active="home" />}
      <main>{workMatch ? <ProjectPage slug={workMatch[1]} /> : <Home track={track} />}</main>
      <Footer />
    </div>
  )
}
