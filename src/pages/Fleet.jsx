import { Link } from 'react-router-dom';
import { useScrollReveal } from '../hooks.js';
import { FLEET } from '../siteData.js';

export default function Fleet() {
  useScrollReveal();

  return (
    <>
      <header className="page-hero">
        <div className="page-hero-inner">
          <p className="section-eyebrow">Equipment</p>
          <h1 className="page-hero-title">
            A Modern Fleet, <em>Meticulously Maintained</em>
          </h1>
          <p className="page-hero-sub">
            Late-model tractors and trailers, serviced on a strict schedule and
            equipped with electronic logging for full visibility.
          </p>
        </div>
      </header>

      {/* ── FLEET CARDS ── */}
      <section className="fleet-grid-section">
        <div className="fleet-grid">
          {FLEET.map((f, idx) => (
            <div key={f.name} className={`fleet-card reveal-on-scroll delay-${idx % 3}`}>
              <div className="fleet-card-img">
                <img src={f.img} alt={f.name} />
              </div>
              <div className="fleet-card-body">
                <h3>{f.name}</h3>
                <span className="fleet-spec">{f.spec}</span>
                <p>{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── MAINTENANCE / SAFETY ── */}
      <section className="why-section">
        <div className="why-img-wrap reveal-on-scroll">
          <img src="/truck_night.png" alt="Hope Trans truck at night" className="why-img" />
          <div className="why-img-overlay" />
        </div>
        <div className="why-content">
          <p className="section-eyebrow reveal-on-scroll">Safety & Upkeep</p>
          <h2 className="section-heading reveal-on-scroll">
            Maintained to the Highest Standard
          </h2>
          <ul className="why-list">
            {[
              { title: 'Preventative Maintenance', desc: 'Every unit follows a strict inspection and service schedule.' },
              { title: 'Electronic Logging (ELD)', desc: 'Real-time GPS tracking and hours-of-service compliance on every truck.' },
              { title: 'Pre-Trip Inspections', desc: 'Drivers complete documented checks before every departure.' },
              { title: 'NSC & FMCSA Compliant', desc: 'We meet and exceed Canadian and cross-border safety regulations.' },
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

      <section className="mini-cta">
        <div className="mini-cta-inner reveal-on-scroll">
          <h2>Need the right equipment for your load?</h2>
          <p>Tell us what you're shipping and we'll match the trailer.</p>
          <Link to="/contact" className="btn-cta">Get a Quote</Link>
        </div>
      </section>
    </>
  );
}
