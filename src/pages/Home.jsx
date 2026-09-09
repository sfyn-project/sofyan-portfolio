import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SectionLabel from '../components/SectionLabel'
import TechTags from '../components/TechTags'
import ArrowIcon from '../components/ArrowIcon'
import useReveal from '../hooks/useReveal'
import { projects, site } from '../data/site'

export default function Home() {
  const featured = projects.find((project) => project.featured)
  const professional = projects.filter((project) => project.category === 'professional' && !project.featured)
  const personal = projects.filter((project) => project.category === 'personal')
  useReveal()

  return (
    <>
      <Navbar />
      <main>
        <section className="hero wrap" id="top">
          <div className="hero-content">
            <div className="eyebrow mono hero-enter hero-enter-1">{site.role.toUpperCase()} · {site.location.toUpperCase()}</div>
            <h1 className="hero-enter hero-enter-2">I build backend systems that keep real operations moving.</h1>
            <div className="hero-bottom hero-enter hero-enter-3">
              <p>
                I'm Sofyan, a Backend Developer with 7+ years of experience building production systems for GPS tracking and internal operations. I work across telemetry, device integrations, orders, subscriptions, inventory, technician workflows, and customer provisioning.
              </p>
              <div className="hero-stack mono">
                <div className="stack-label">CORE STACK</div>
                PHP · Laravel · MySQL<br />REST API · System Design
              </div>
            </div>
            <a className="btn hero-link hero-enter hero-enter-4" href="#work">Explore my work</a>
          </div>
        </section>

        <section className="work-section wrap section-border reveal" id="work" data-reveal>
          <SectionLabel>WORK</SectionLabel>
          <div className="work-content">
            <article className="featured-work interactive-project">
              <div className="project-kicker mono">{featured.id} / {featured.type.toUpperCase()}</div>
              <h2>{featured.title}</h2>
              <p>{featured.description}</p>
              <div className="module-strip mono" aria-label="Admin Orin key modules">
                <span>Orders &amp; Subscriptions</span>
                <span>Inventory &amp; Provisioning</span>
                <span>Role-Based Kanban</span>
                <span>Reseller Operations</span>
                <span>Operational Monitoring</span>
              </div>
              <div className="scale-strip" aria-label="Admin Orin scale">
                <div><strong>12K</strong><span>registered users</span></div>
                <div><strong>4K</strong><span>active users</span></div>
                <div><strong>6K</strong><span>active GPS units</span></div>
                <div><strong>10K+</strong><span>device / GSM inventory</span></div>
              </div>
              <TechTags items={featured.tech} />
              <Link className="btn" to={featured.href}>Read case study <ArrowIcon /></Link>
            </article>

            {professional.map((project) => (
              <article className="professional-work interactive-project" key={project.id}>
                <div className="project-kicker mono">{project.id} / {project.type.toUpperCase()}</div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                {project.highlights && (
                  <ul className="project-highlights">
                    {project.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                  </ul>
                )}
                <TechTags items={project.tech} />
                {project.href && (
                  <Link className="btn" to={project.href}>Read case study <ArrowIcon /></Link>
                )}
              </article>
            ))}
          </div>
        </section>

        <section className="personal-projects wrap section-border reveal" data-reveal>
          <SectionLabel>PERSONAL PROJECTS</SectionLabel>
          <div className="personal-project-list">
            {personal.map((project) => (
              <article className="project-row" key={project.id}>
                <div>
                  <div className="project-kicker mono">{project.id} / {project.type.toUpperCase()}</div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  {project.highlights && (
                    <ul className="project-highlights">
                      {project.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                    </ul>
                  )}
                  {project.strategyNote && <div className="strategy-note mono">{project.strategyNote}</div>}
                </div>
                <div className="project-tech mono">{project.tech.join(' · ')}</div>
              </article>
            ))}
          </div>
        </section>

        <section className="experience wrap section-border reveal" id="experience" data-reveal>
          <SectionLabel>EXPERIENCE</SectionLabel>
          <div className="experience-content">
            <div className="experience-heading">
              <strong>Vastel</strong>
              <span className="mono">FEB 2019 — PRESENT</span>
            </div>
            <div className="timeline">
              <article>
                <span className="timeline-dot" />
                <div className="timeline-year mono">2019 — 2021</div>
                <h3>Orin GPS Tracking Platform</h3>
                <p>GPS telemetry, device protocol integration, location validation, and trip-processing logic.</p>
              </article>
              <article>
                <span className="timeline-dot" />
                <div className="timeline-year mono">2021 — PRESENT</div>
                <h3>Admin Orin Backend</h3>
                <p>Backend ownership across customer lifecycle workflows, Kanban task management, reseller operations, monitoring, APIs, database design, deployment, and production troubleshooting.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="about wrap section-border reveal" id="about" data-reveal>
          <div className="about-side">
            <SectionLabel>ABOUT</SectionLabel>
            {site.photo && (
              <div className="about-photo">
                <img src={site.photo} alt={`Portrait of ${site.name}`} loading="lazy" />
              </div>
            )}
          </div>
          <div className="about-copy">
            <p className="about-lead">
              I started my career working with GPS devices and telemetry, then grew into owning backend systems that support broader business operations. That experience shaped how I work today: understand the process first, then design the data, rules, and APIs around it.
            </p>
            <p>
              I enjoy backend work where the hardest part is understanding the business process, deciding how the data should behave, and turning that into a system people can rely on.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
