import { useEffect } from 'react'
import { usePath } from './router.jsx'
import Nav from './components/Nav.jsx'
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

  useEffect(() => {
    if (window.location.hash) {
      const el = document.getElementById(window.location.hash.slice(1))
      el?.scrollIntoView()
    }
  }, [])

  return (
    <div className="sheet">
      <Nav active={workMatch ? 'work' : 'home'} />
      <main>{workMatch ? <ProjectPage slug={workMatch[1]} /> : <Home track={track} />}</main>
      <Footer />
    </div>
  )
}
