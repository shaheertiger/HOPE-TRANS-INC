import { Link } from 'react-router-dom';
import { useCountUp, useScrollReveal } from '../hooks.js';
import { SERVICES } from '../siteData.js';
import QuoteForm from '../components/QuoteForm.jsx';

export default function Home() {
  useScrollReveal();

  const [stat1, ref1] = useCountUp(99, 1600, '%');
  const [stat3, ref3] = useCountUp(100, 1800, '+');

  return (
    <>
      {/* ── HERO ── */}
      <section id="home" className="hero">
        <div className="hero-left hero-enter-left">
          <div className="hero-badge">
            <span className="badge-icon">✓</span> Trusted Across Canada
          </div>
          <h1 className="hero-title">
            DRIVING<br />
            <span className="hero-title-gold">YOUR SUCCESS</span><br />
            FORWARD
          </h1>
          <p className="hero-sub">
            Premium FTL and LTL freight solutions tailored for your supply chain
            across Canada. We deliver your promises safely, efficiently, and on
            time.
          </p>
          <div className="hero-actions">
            <Link to="/contact" className="btn-primary">Get a Quote</Link>
            <Link to="/services" className="btn-secondary">Our Services</Link>
          </div>
          <div className="hero-stats">
            <div className="stat-item" ref={ref1}>
              <span className="stat-num">{stat1}</span>
              <span className="stat-text">On-Time</span>
            </div>
            <div className="stat-item">
              <span className="stat-num">24/7</span>
              <span className="stat-text">Dispatch</span>
            </div>
            <div className="stat-item" ref={ref3}>
              <span className="stat-num">{stat3}</span>
              <span className="stat-text">Fleet Size</span>
            </div>
          </div>
        </div>

        <div className="hero-right hero-enter-right">
          <img
            src="/hero_composite.png"
            alt="Hope Trans truck and highway"
            className="hero-composite"
          />
        </div>
      </section>

      {/* ── TRUST STRIP ── */}
      <section className="trust-strip">
        {[
          { k: 'Fully Insured', v: 'Cargo & liability coverage' },
          { k: '7 Provinces', v: 'Pan-Canadian network' },
          { k: 'ELD Equipped', v: 'Real-time tracking' },
          { k: 'Compliant', v: 'NSC & FMCSA certified' },
        ].map((t) => (
          <div className="trust-item" key={t.k}>
            <span className="trust-k">{t.k}</span>
            <span className="trust-v">{t.v}</span>
          </div>
        ))}
      </section>

      {/* ── SERVICES ── */}
      <section id="services" className="services-section">
        <p className="section-eyebrow reveal-on-scroll">What We Offer</p>
        <h2 className="section-heading reveal-on-scroll">Our Core Services</h2>
        <div className="services-grid">
          {SERVICES.map((s, idx) => (
            <div
              key={s.title}
              className={`service-card reveal-on-scroll delay-${idx % 3}`}
            >
              <div className="service-icon-wrap">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="section-cta reveal-on-scroll">
          <Link to="/services" className="btn-secondary">
            View All Services
          </Link>
        </div>
      </section>

      {/* ── WHY US ── */}
      <section id="why-us" className="why-section">
        <div className="why-img-wrap reveal-on-scroll">
          <img src="/highway_bg.png" alt="Hope Trans highway" className="why-img" />
          <div className="why-img-overlay" />
        </div>
        <div className="why-content">
          <p className="section-eyebrow reveal-on-scroll">Why Choose Us</p>
          <h2 className="section-heading reveal-on-scroll">Built for Reliability</h2>
          <ul className="why-list">
            {[
              { title: 'Pan-Canadian Coverage', desc: 'We operate across 7 provinces with established routes and trusted partners.' },
              { title: 'Experienced Drivers', desc: 'All our drivers are certified, background-checked, and trained for safety.' },
              { title: 'Cargo Insurance', desc: 'Every shipment is fully insured for complete peace of mind.' },
              { title: '24/7 Dispatch', desc: 'Our operations team is always on call to handle any situation on the road.' },
            ].map((w, idx) => (
              <li key={w.title} className={`why-item reveal-on-scroll delay-${idx}`}>
                <div className="why-check">✓</div>
                <div>
                  <h4>{w.title}</h4>
                  <p>{w.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="testimonials-section">
        <p className="section-eyebrow reveal-on-scroll">Client Voices</p>
        <h2 className="section-heading reveal-on-scroll">Trusted by Shippers</h2>
        <div className="testimonials-grid">
          {[
            { quote: 'Hope Trans has been our go-to carrier for two years. On-time, every time, and their dispatch team actually picks up the phone.', name: 'Sarah M.', role: 'Logistics Manager, Retail' },
            { quote: 'We moved our refrigerated freight to Hope Trans and never looked back. Temperature compliance has been flawless.', name: 'David R.', role: 'Operations Director, Food & Bev' },
            { quote: 'Professional drivers, clean equipment, transparent pricing. Exactly what you want in a freight partner.', name: 'Priya K.', role: 'Supply Chain Lead, Manufacturing' },
          ].map((t, idx) => (
            <figure
              key={t.name}
              className={`testimonial-card reveal-on-scroll delay-${idx}`}
            >
              <div className="testimonial-stars">★★★★★</div>
              <blockquote>“{t.quote}”</blockquote>
              <figcaption>
                <span className="testimonial-name">{t.name}</span>
                <span className="testimonial-role">{t.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* ── CTA / QUOTE ── */}
      <section id="contact" className="cta-section">
        <div className="cta-inner reveal-on-scroll">
          <h2>Ready to Ship <em>With Us?</em></h2>
          <p>Get a free quote in under 2 minutes. No commitment needed.</p>
          <QuoteForm />
        </div>
      </section>
    </>
  );
}
