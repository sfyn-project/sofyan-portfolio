import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SectionLabel from '../components/SectionLabel'
import TechTags from '../components/TechTags'
import FlowDiagram from '../components/FlowDiagram'
import useReveal from '../hooks/useReveal'

export default function OrinCaseStudy() {
  useReveal()

  return (
    <>
      <Navbar />
      <main>
        <section className="case-hero wrap reveal" data-reveal>
          <div className="eyebrow mono">01 / PROFESSIONAL CASE STUDY</div>
          <h1>Admin Orin: Digitizing Customer Onboarding & Field Operations</h1>
          <p className="case-intro">
            Admin Orin is the internal platform I work on to support GPS tracking operations across customer onboarding, inventory, technician visits, subscriptions, task management, reseller operations, and monitoring. This case study focuses on the customer lifecycle and the backend decisions behind it.
          </p>
          <div className="case-meta-grid">
            <div><span className="mono">ROLE</span><strong>Backend Developer</strong></div>
            <div><span className="mono">RESPONSIBILITY</span><strong>Backend ownership</strong></div>
            <div><span className="mono">STACK</span><strong>Laravel · MySQL · REST API</strong></div>
            <div><span className="mono">CONTEXT</span><strong>GPS tracking operations</strong></div>
          </div>
          <div className="case-scale" aria-label="Platform scale">
            <div><strong>~12K</strong><span>registered users</span></div>
            <div><strong>~4K</strong><span>active users</span></div>
            <div><strong>~6K</strong><span>active GPS units</span></div>
            <div><strong>10K+</strong><span>device / GSM inventory records</span></div>
          </div>
        </section>

        <section className="case-section wrap section-border two-column reveal" data-reveal>
          <SectionLabel>THE SITUATION</SectionLabel>
          <div className="case-copy">
            <h2>The business process existed before the software did.</h2>
            <p>
              Customer onboarding and installation activities were previously spread across spreadsheets, handwritten notes, WhatsApp conversations, and direct verbal coordination between teams.
            </p>
            <p>
              Technician addresses and unit details could be handed over on paper, teams had limited visibility into technician availability, and there was no single place to trace a customer from sale to installation and activation.
            </p>
            <div className="before-after">
              <div>
                <span className="mono">BEFORE</span>
                <strong>Fragmented coordination</strong>
                <p>Excel · paper · WhatsApp · verbal handoffs · limited traceability</p>
              </div>
              <div>
                <span className="mono">AFTER</span>
                <strong>One operational trail</strong>
                <p>Structured workflow · shared data · notifications · inventory visibility · traceable history</p>
              </div>
            </div>
          </div>
        </section>

        <section className="case-section wrap section-border two-column reveal" data-reveal>
          <SectionLabel>MY ROLE</SectionLabel>
          <div className="case-copy">
            <h2>From business requirement to production backend.</h2>
            <p>
              Business users explained what they needed operationally. I translated those needs into system flows, database relationships, business rules, and REST API designs, then coordinated implementation with the frontend developer.
            </p>
            <div className="process-line mono">
              Requirement → Flow → Database → Business Logic → API → Testing → Staging → Production
            </div>
          </div>
        </section>

        <section className="case-section wrap section-border two-column reveal" data-reveal>
          <SectionLabel>PLATFORM SCOPE</SectionLabel>
          <div className="case-copy">
            <h2>Customer onboarding is one workflow inside a broader operational platform.</h2>
            <p>
              The same backend supports customer lifecycle workflows, internal task management, reseller operations, device and subscription monitoring, notifications, and operational dashboards.
            </p>
            <div className="platform-grid">
              <div><span className="mono">01</span><strong>Customer Lifecycle</strong><small>Sales Order · Order · Visit · Payment · Provisioning</small></div>
              <div><span className="mono">02</span><strong>Role-Based Kanban</strong><small>Task categories · role ownership · individual assignment</small></div>
              <div><span className="mono">03</span><strong>Reseller Operations</strong><small>Reseller customers · orders · devices</small></div>
              <div><span className="mono">04</span><strong>Operational Monitoring</strong><small>Subscriptions · offline units · dashboards · notifications</small></div>
            </div>
          </div>
        </section>

        <section className="case-section wrap section-border two-column reveal" data-reveal>
          <SectionLabel>WORKFLOW</SectionLabel>
          <div className="case-copy">
            <h2>A workflow shared by multiple operational roles.</h2>
            <p>
              Sales starts with a Sales Order. Warehouse staff assign available Device SN and GSM inventory. After approval, Customer Service can create the Order and technician Visit from the same source data. Workflow updates can also trigger OneSignal push notifications so the next responsible team knows when action is required.
            </p>
            <FlowDiagram />
            <p className="small-note">
              Orders may also be created manually without a Sales Order reference when the business case requires it.
            </p>
          </div>
        </section>

        <section className="case-section wrap section-border two-column reveal" data-reveal>
          <SectionLabel>DATA FLOW</SectionLabel>
          <div className="case-copy">
            <h2>Input once, reuse through the customer lifecycle.</h2>
            <p>
              A Sales Order contains customer, account type, subscription type, and unit-level product information. Each detail represents one GPS unit. The commercial flow supports 25+ product or package options, recurring subscriptions, and prorated cases. When an Order is created from the Sales Order, the relevant data is copied into the Order and its details instead of being entered again.
            </p>
            <div className="data-model">
              <div className="model-card"><span className="mono">SALES ORDER</span><strong>Customer · account · subscription</strong><small>has many unit details</small></div>
              <div className="model-arrow">→</div>
              <div className="model-card"><span className="mono">ORDER</span><strong>Transaction snapshot</strong><small>Device SN · GSM · package · price</small></div>
              <div className="model-arrow">→</div>
              <div className="model-card"><span className="mono">ORIN</span><strong>Customer provisioning</strong><small>Account · devices · license · expiry</small></div>
            </div>
          </div>
        </section>

        <section className="case-section wrap section-border two-column reveal" data-reveal>
          <SectionLabel>INVENTORY</SectionLabel>
          <div className="case-copy">
            <h2>Order processing is tied to physical device inventory.</h2>
            <p>
              Device SN and GSM numbers are validated before allocation so units already in use cannot be assigned again. Available inventory then moves into the order lifecycle, while hardware types that do not require GSM are handled separately.
            </p>
          </div>
        </section>

        <section className="case-section wrap section-border two-column reveal" data-reveal>
          <SectionLabel>FIELD OPERATIONS</SectionLabel>
          <div className="case-copy">
            <h2>Technician work became part of the same digital trail.</h2>
            <p>
              Customer Service creates Visit data, assigns a technician and schedule, and the technician records check-in, work documentation, and check-out. Teams can then review schedules, delays, visit types, and technician activity from the admin platform.
            </p>
          </div>
        </section>

        <section className="case-section wrap section-border two-column reveal" data-reveal>
          <SectionLabel>ROLE-BASED KANBAN</SectionLabel>
          <div className="case-copy">
            <h2>Operational work also needed clear ownership outside the order flow.</h2>
            <p>
              I designed and built a Kanban module inside Admin Orin where tasks can be grouped into predefined categories and assigned by administrative role or directly to individual team members. It gives teams a shared structure for ownership and work in progress without relying only on informal coordination.
            </p>
            <div className="kanban-flow" aria-label="Kanban task ownership model">
              <div><span className="mono">TASK</span><strong>Operational work item</strong></div>
              <div className="model-arrow">→</div>
              <div><span className="mono">CATEGORY</span><strong>Predefined work group</strong></div>
              <div className="model-arrow">→</div>
              <div><span className="mono">OWNER</span><strong>Role or individual admin</strong></div>
            </div>
          </div>
        </section>

        <section className="case-section wrap section-border two-column reveal" data-reveal>
          <SectionLabel>STATE & PROVISIONING</SectionLabel>
          <div className="case-copy">
            <h2><code>paid</code> is a business transition, not just a label.</h2>
            <p>
              New Orders begin in an awaiting-payment state. After payment verification, moving the Order to paid triggers customer activation: subscription dates are calculated, the account is updated, GPS devices are created or updated, licenses and device features are synchronized, and the purchased units become ready for use in Orin.
            </p>
            <div className="state-flow mono">
              awaiting_payment <span>→</span> payment verified <span>→</span> paid <span>→</span> account & device provisioning
            </div>
          </div>
        </section>

        <section className="case-section wrap section-border two-column highlight-section reveal" data-reveal>
          <SectionLabel>THE 800+ UNIT PROBLEM</SectionLabel>
          <div className="case-copy">
            <div className="big-number">800+</div>
            <div className="big-caption mono">GPS UNITS IN A LARGE RENEWAL</div>
            <h2>A different workload needed a different processing path.</h2>
            <p>
              Normal new orders usually involve relatively few units. A large renewal can involve hundreds of devices while also separating renewed and non-renewed units, rebuilding order details, preserving split information, synchronizing inventory state, and preparing subscription updates.
            </p>
            <p>
              I redesigned the high-volume renewal path around that workload by grouping device data, preloading related records, reducing repeated database work, using bulk inserts and upserts where appropriate, and separating heavier post-processing from the time-sensitive response path.
            </p>
            <div className="optimization-grid">
              <div><span className="mono">01</span><strong>Grouped processing</strong></div>
              <div><span className="mono">02</span><strong>Preloaded data</strong></div>
              <div><span className="mono">03</span><strong>Bulk operations</strong></div>
              <div><span className="mono">04</span><strong>Reduced repeated queries</strong></div>
            </div>
          </div>
        </section>

        <section className="case-section wrap section-border two-column reveal" data-reveal>
          <SectionLabel>IMPACT</SectionLabel>
          <div className="case-copy">
            <h2>A traceable workflow instead of disconnected handoffs.</h2>
            <ul className="impact-list">
              <li><strong>Less duplicate input.</strong> Sales Order data can continue into Order creation and customer provisioning without being entered again.</li>
              <li><strong>End-to-end traceability.</strong> Teams can follow the customer, allocated units, technician work, payment state, and order history in one system.</li>
              <li><strong>Faster handoffs.</strong> Workflow notifications help the next responsible team see when an approval, job, or follow-up needs attention.</li>
              <li><strong>Structured field work.</strong> Technician schedules, check-ins, work evidence, and check-outs are recorded digitally.</li>
              <li><strong>Clearer inventory and task ownership.</strong> Device allocation and Kanban responsibility are both connected to structured operational workflows.</li>
            </ul>
          </div>
        </section>

        <section className="case-section wrap section-border two-column reveal" data-reveal>
          <SectionLabel>TECHNOLOGY</SectionLabel>
          <div className="case-copy">
            <TechTags items={['PHP', 'Laravel', 'MySQL / MariaDB', 'REST API', 'Git', 'Postman', 'OneSignal', 'Scheduled Processes']} />
            <p className="privacy-note">
              Architecture and implementation details shown here are intentionally abstracted. Proprietary source code, customer data, credentials, and internal database schema are not included.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
