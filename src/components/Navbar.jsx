import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { site } from '../data/site'
import ThemeToggle from './ThemeToggle'

function WorkIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      <rect width="20" height="14" x="2" y="6" rx="2" />
    </svg>
  )
}

function ExperienceIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  )
}

function AboutIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}

// On home, native hash links let the browser's smooth scrolling handle the
// jump. From another route a plain href would force a full page reload that
// loses the hash, so navigate client-side to /#section instead; ScrollToTop
// picks the hash up and scrolls to the section after Home renders.
function SectionLink({ hash, onHome, ...rest }) {
  return onHome ? <a href={hash} {...rest} /> : <Link to={`/${hash}`} {...rest} />
}

export default function Navbar() {
  const location = useLocation()
  const onHome = location.pathname === '/'
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const update = () => {
      setScrolled(window.scrollY > 18)
      // The footer can sit below the scroll-spy band even at full scroll,
      // so treat "reached page bottom" as the Contact section being active.
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) {
        setActiveSection('#contact')
      } else if (window.scrollY < 200) {
        setActiveSection('')
      }
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  // Scroll-spy: highlight the tab whose section currently crosses the middle of the screen.
  useEffect(() => {
    const sections = ['work', 'experience', 'about', 'contact']
      .map((id) => document.getElementById(id))
      .filter(Boolean)
    if (!sections.length || !('IntersectionObserver' in window)) return undefined

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActiveSection(`#${entry.target.id}`)
      })
    }, { rootMargin: '-40% 0px -55% 0px' })

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [location.pathname])

  const sectionLinkProps = (hash) => ({
    hash,
    onHome,
    onClick: () => setActiveSection(hash),
    className: activeSection === hash ? 'is-active' : undefined,
  })

  return (
    <>
      <div className={`navbar-shell ${scrolled ? 'is-scrolled' : ''}`}>
        <header className="navbar wrap">
          <Link
            className="brand"
            to="/"
            onClick={(event) => {
              // Already on home: the router would be a no-op, so scroll to the
              // hero manually. From another page, let the Link navigate and
              // ScrollToTop handles the rest.
              if (onHome) {
                event.preventDefault()
                window.scrollTo({ top: 0, behavior: 'instant' })
                setActiveSection('')
              }
            }}
          >
            {site.name}
          </Link>
          <nav className="nav-links" aria-label="Main navigation">
            <SectionLink {...sectionLinkProps('#work')}>Projects</SectionLink>
            <SectionLink {...sectionLinkProps('#experience')}>Experience</SectionLink>
            <SectionLink {...sectionLinkProps('#about')}>About</SectionLink>
            <a
              href="#contact"
              onClick={() => setActiveSection('#contact')}
              className={activeSection === '#contact' ? 'is-active' : undefined}
            >
              Contact
            </a>
          </nav>
          <div className="nav-actions">
            <ThemeToggle />
          </div>
        </header>
      </div>
      {/* Rendered outside the shell on purpose: the shell's backdrop-filter would
          re-anchor position: fixed children, so the tab bar must be a sibling. */}
      <nav className="tabbar" aria-label="Mobile navigation">
        <SectionLink {...sectionLinkProps('#work')} aria-label="Projects" title="Projects">
          <WorkIcon />
        </SectionLink>
        <SectionLink {...sectionLinkProps('#experience')} aria-label="Experience" title="Experience">
          <ExperienceIcon />
        </SectionLink>
        <SectionLink {...sectionLinkProps('#about')} aria-label="About" title="About">
          <AboutIcon />
        </SectionLink>
        <a
          href="#contact"
          aria-label="Contact"
          title="Contact"
          className={activeSection === '#contact' ? 'is-active' : undefined}
        >
          <MailIcon />
        </a>
      </nav>
    </>
  )
}
