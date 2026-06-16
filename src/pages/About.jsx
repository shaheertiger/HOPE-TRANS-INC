import { Link } from 'react-router-dom';
import { useScrollReveal } from '../hooks.js';

export default function About() {
  useScrollReveal();

  return (
    <>
      {/* ── PAGE HERO ── */}
      <header className="page-hero">
        <div className="page-hero-inner">
          <p className="section-eyebrow">Who We Are</p>
          <h1 className="page-hero-title">
            Moving Canada Forward, <em>One Mile at a Time</em>
          </h1>
          <p className="page-hero-sub">
            Hope Trans Inc. is a Mississauga-based freight carrier built on a
            simple promise: deliver every load safely, on time, and with
            complete transparency.
          </p>
        </div>
      </header>

      {/* ── STORY ── */}
      <section className="about-story">
        <div className="about-story-img reveal-on-scroll">
          <img src="/truck_fleet.png" alt="Hope Trans fleet" />
        </div>
        <div className="about-story-copy">
          <p className="section-eyebrow reveal-on-scroll">Our Story</p>
          <h2 className="section-heading reveal-on-scroll">
            From a Single Truck to a Trusted Fleet
          </h2>
          <p className="reveal-on-scroll">
            What began with one truck and a commitment to doing right by our
            customers has grown into a full-service carrier moving freight
            across seven provinces. Through every mile, our values have stayed
            the same — reliability, safety, and honest communication.
          </p>
          <p className="reveal-on-scroll">
            Today, our drivers, dispatchers, and operations team work around the
            clock so shippers can plan with confidence. We treat your freight
            like our own reputation depends on it — because it does.
          </p>
        </div>
      </section>

      {/* ── STATS BAND ── */}
      <section className="stats-band">
        {[
          { n: '100+', l: 'Trucks in Service' },
          { n: '7', l: 'Provinces Covered' },
          { n: '99%', l: 'On-Time Delivery' },
          { n: '24/7', l: 'Live Dispatch' },
        ].map((s) => (
          <div className="stats-band-item reveal-on-scroll" key={s.l}>
            <span className="stats-band-num">{s.n}</span>
            <span className="stats-band-label">{s.l}</span>
          </div>
        ))}
      </section>

      {/* ── VALUES ── */}
      <section className="values-section">
        <p className="section-eyebrow reveal-on-scroll">What Drives Us</p>
        <h2 className="section-heading reveal-on-scroll">Our Core Values</h2>
        <div className="values-grid">
          {[
            { icon: '🛡️', title: 'Safety First', desc: 'Rigorous maintenance, certified drivers, and a zero-compromise approach to compliance.' },
            { icon: '🤝', title: 'Integrity', desc: 'Transparent pricing and honest communication on every shipment, every time.' },
            { icon: '⏱️', title: 'Reliability', desc: 'We hit our windows. When plans change, you hear it from us first.' },
            { icon: '🌱', title: 'Sustainability', desc: 'Modern, fuel-efficient equipment and intermodal options to reduce emissions.' },
          ].map((v, idx) => (
            <div key={v.title} className={`value-card reveal-on-scroll delay-${idx % 3}`}>
              <div className="service-icon-wrap">{v.icon}</div>
              <h3>{v.title}</h3>
              <p>{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── MINI CTA ── */}
      <section className="mini-cta">
        <div className="mini-cta-inner reveal-on-scroll">
          <h2>Let's move your freight.</h2>
          <p>Partner with a carrier that treats your shipment like its own.</p>
          <Link to="/contact" className="btn-cta">Get a Quote</Link>
        </div>
      </section>
    </>
  );
}
