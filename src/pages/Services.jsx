import { Link } from 'react-router-dom';
import { useScrollReveal } from '../hooks.js';
import { SERVICES } from '../siteData.js';

export default function Services() {
  useScrollReveal();

  return (
    <>
      <header className="page-hero">
        <div className="page-hero-inner">
          <p className="section-eyebrow">What We Offer</p>
          <h1 className="page-hero-title">
            Freight Solutions for <em>Every Lane</em>
          </h1>
          <p className="page-hero-sub">
            From a single pallet to oversized heavy haul, we have the equipment,
            the coverage, and the people to move it across Canada.
          </p>
        </div>
      </header>

      {/* ── DETAILED SERVICE LIST ── */}
      <section className="services-detail">
        {SERVICES.map((s, idx) => (
          <div
            key={s.title}
            className={`service-detail-row reveal-on-scroll ${idx % 2 ? 'reverse' : ''}`}
          >
            <div className="service-detail-icon">
              <span>{s.icon}</span>
            </div>
            <div className="service-detail-copy">
              <h3>{s.title}</h3>
              <p>{s.long}</p>
              <Link to="/contact" className="service-detail-link">
                Request this service →
              </Link>
            </div>
          </div>
        ))}
      </section>

      {/* ── PROCESS ── */}
      <section className="process-section">
        <p className="section-eyebrow reveal-on-scroll">How It Works</p>
        <h2 className="section-heading reveal-on-scroll">Shipping in Four Steps</h2>
        <div className="process-grid">
          {[
            { n: '01', title: 'Request a Quote', desc: 'Tell us your origin, destination, and freight details. We respond fast.' },
            { n: '02', title: 'Book Your Load', desc: 'Approve the rate and we schedule the right equipment for your lane.' },
            { n: '03', title: 'Track in Real Time', desc: 'ELD-equipped trucks give you live visibility from pickup to delivery.' },
            { n: '04', title: 'Delivered On Time', desc: 'Proof of delivery, transparent billing, and a partner for next time.' },
          ].map((p, idx) => (
            <div key={p.n} className={`process-card reveal-on-scroll delay-${idx % 3}`}>
              <span className="process-num">{p.n}</span>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mini-cta">
        <div className="mini-cta-inner reveal-on-scroll">
          <h2>Not sure which service fits?</h2>
          <p>Our team will help you find the most cost-effective option.</p>
          <Link to="/contact" className="btn-cta">Talk to Dispatch</Link>
        </div>
      </section>
    </>
  );
}
