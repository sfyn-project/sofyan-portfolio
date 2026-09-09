import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SectionLabel from '../components/SectionLabel'
import TechTags from '../components/TechTags'
import useReveal from '../hooks/useReveal'

function TelemetryPipeline() {
  const steps = [
    'GPS Device',
    'Protocol Parser',
    'Structured Telemetry',
    'Validation',
    'State & Journey Processing',
    'Orin Output',
  ]

  return (
    <div className="flow" aria-label="GPS telemetry processing pipeline">
      {steps.map((step, index) => (
        <div className="flow-step" style={{ '--step': index }} key={step}>
          <div className="flow-node">{step}</div>
          {index < steps.length - 1 && (
            <div className="flow-arrow" aria-hidden="true"><span /></div>
          )}
        </div>
      ))}
    </div>
  )
}

export default function OrinGpsCaseStudy() {
  useReveal()

  return (
    <>
      <Navbar />
      <main>
        <section className="case-hero wrap reveal" data-reveal>
          <div className="eyebrow mono">02 / PROFESSIONAL CASE STUDY</div>
          <h1>Orin GPS Tracking Platform: Turning Raw Telemetry into Useful Tracking Data</h1>
          <p className="case-intro">
            Early in my career, I worked on Orin's core GPS tracking platform, focusing on device protocol integration, GPS data validation, and journey-processing logic that turned raw telemetry into information the application could use.
          </p>
          <div className="case-meta-grid">
            <div><span className="mono">ROLE</span><strong>Web Developer</strong></div>
            <div><span className="mono">FOCUS</span><strong>GPS telemetry & data processing</strong></div>
            <div><span className="mono">STACK</span><strong>PHP · Laravel · MySQL</strong></div>
            <div><span className="mono">PERIOD</span><strong>2019 · 2021</strong></div>
          </div>
        </section>

        <section className="case-section wrap section-border two-column reveal" data-reveal>
          <SectionLabel>THE CONTEXT</SectionLabel>
          <div className="case-copy">
            <h2>Raw GPS messages still need interpretation before they become useful tracking data.</h2>
            <p>
              GPS devices send coordinates, speed, ignition state, timestamps, and other attributes in device-specific message formats. Those messages need to be decoded, validated, and processed before they can support reliable location history and journey reporting.
            </p>
          </div>
        </section>

        <section className="case-section wrap section-border two-column reveal" data-reveal>
          <SectionLabel>PROCESSING PIPELINE</SectionLabel>
          <div className="case-copy">
            <h2>From device message to application-level information.</h2>
            <p>
              The processing flow converts incoming device messages into structured telemetry, checks location quality, interprets vehicle activity, and then produces data that can be surfaced in Orin.
            </p>
            <TelemetryPipeline />
            <p className="small-note">
              The diagram intentionally abstracts proprietary packet formats and implementation details.
            </p>
          </div>
        </section>

        <section className="case-section wrap section-border two-column reveal" data-reveal>
          <SectionLabel>DEVICE INTEGRATION</SectionLabel>
          <div className="case-copy">
            <h2>Decoding protocol messages into structured telemetry.</h2>
            <p>
              Different GPS devices communicate using their own protocol specifications. I used manufacturer protocol documentation to understand incoming message structures and implemented parsers that mapped raw device messages into fields such as latitude, longitude, speed, ignition state, and timestamps.
            </p>
            <div className="before-after">
              <div>
                <span className="mono">INPUT</span>
                <strong>Device protocol messages</strong>
                <p>Raw messages received from GPS hardware according to the device protocol.</p>
              </div>
              <div>
                <span className="mono">OUTPUT</span>
                <strong>Structured telemetry</strong>
                <p>Application-ready fields that can be validated, stored, processed, and displayed by Orin.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="case-section wrap section-border two-column reveal" data-reveal>
          <SectionLabel>GPS VALIDATION</SectionLabel>
          <div className="case-copy">
            <h2>Reducing abnormal location jumps before they affect reports.</h2>
            <p>
              Real-world GPS data can contain sudden coordinate jumps that do not match the vehicle's actual movement. I developed validation and filtering logic that evaluated location changes using distance, time intervals, and vehicle movement state.
            </p>
            <p>
              Suspicious points could be corrected or excluded depending on the vehicle state, helping prevent abnormal coordinates from distorting location history and journey calculations.
            </p>
            <div className="optimization-grid">
              <div><span className="mono">01</span><strong>Distance-aware validation</strong></div>
              <div><span className="mono">02</span><strong>Time-aware validation</strong></div>
              <div><span className="mono">03</span><strong>Movement-state context</strong></div>
              <div><span className="mono">04</span><strong>Cleaner journey input</strong></div>
            </div>
          </div>
        </section>

        <section className="case-section wrap section-border two-column reveal" data-reveal>
          <SectionLabel>FROM TELEMETRY TO JOURNEY</SectionLabel>
          <div className="case-copy">
            <h2>Turning vehicle states into meaningful journey information.</h2>
            <p>
              Using ignition state, speed, coordinates, and timestamps, I worked on logic that classified vehicle activity as moving, idle, or stopped. Those states then became the foundation for journey reporting such as travel distance, driving duration, stop duration, and stop locations.
            </p>
            <div className="platform-grid">
              <div><span className="mono">MOVING</span><strong>Vehicle in motion</strong><small>Contributes to driving duration and travel distance.</small></div>
              <div><span className="mono">IDLE</span><strong>Engine on, no movement</strong><small>Separates stationary engine-on time from active travel.</small></div>
              <div><span className="mono">STOPPED</span><strong>Vehicle not operating</strong><small>Supports stop duration and stop-location reporting.</small></div>
              <div><span className="mono">LOCATION</span><strong>Validated coordinates</strong><small>Provides dependable input for location history and journey calculations.</small></div>
            </div>
          </div>
        </section>

        <section className="case-section wrap section-border two-column reveal" data-reveal>
          <SectionLabel>ENGINEERING OUTCOME</SectionLabel>
          <div className="case-copy">
            <h2>Turning imperfect device data into dependable application data.</h2>
            <ul className="impact-list">
              <li><strong>Protocol integration.</strong> Device messages are transformed into structured telemetry the application can process.</li>
              <li><strong>Cleaner location data.</strong> Abnormal GPS points are filtered before they distort tracking history and journey calculations.</li>
              <li><strong>Useful journey information.</strong> Telemetry is interpreted into vehicle states, distance, driving duration, stops, and locations used by Orin.</li>
            </ul>
            <TechTags items={['PHP', 'Laravel', 'MySQL', 'GPS Telemetry', 'Data Processing', 'Device Protocol Integration']} />
            <p className="privacy-note">
              Protocol formats, internal thresholds, proprietary source code, and production implementation details are intentionally abstracted.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
