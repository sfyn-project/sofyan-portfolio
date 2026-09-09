import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// BrowserRouter keeps the scroll position across route changes; force the new
// page to start at the top — or at the target section when the destination
// carries a hash (e.g. /#about from the navbar). 'instant' overrides the CSS
// smooth scrolling. The hash is deliberately not a dependency: same-page hash
// clicks are handled natively with smooth scrolling and must not be hijacked.
export default function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView({ block: 'start', behavior: 'instant' })
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    }
  }, [pathname])

  return null
}
