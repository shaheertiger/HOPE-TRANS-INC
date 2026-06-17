import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useCountUp, useScrollReveal } from '../hooks.js';
import { SERVICES, COMPANY } from '../siteData.js';
import QuoteForm from '../components/QuoteForm.jsx';
import { Bullet, Arrow } from '../components/Chevron.jsx';

// Pair each service with a preview image + descriptor chips for the hover list.
const SVC_MEDIA = [
  { img: '/truck_cabover.png', tags: ['Dedicated trailers', 'Direct lanes', 'Guaranteed capacity'] },
  { img: '/truck_fleet.png',   tags: ['Shared freight', 'Optimized lanes', 'Pallet shipping'] },
  { img: '/highway_bg.png',    tags: ['Rail + truck', 'Lower carbon', 'Long-haul'] },
  { img: '/truck_night.png',   tags: ['Reefer fleet', '-20°C to +25°C', 'Live monitoring'] },
  { img: '/truck_hero.png',    tags: ['Open deck', 'Oversize capable', 'Permits & escorts'] },
  { img: '/truck_transparent.png', tags: ['Port to door', 'Chassis managed', 'Fast turnaround'] },
];

const PROCESS = [
  { n: '01', title: 'Request a Quote', desc: 'Tell us your lane, cargo and timeline. We respond with transparent pricing — usually within the hour.' },
  { n: '02', title: 'Plan & Dispatch', desc: 'We match the right equipment and a vetted driver, then schedule pickup around your dock.' },
  { n: '03', title: 'Track in Transit', desc: 'ELD-equipped tractors stream real-time location so you always know where your freight is.' },
  { n: '04', title: 'On-Time Delivery', desc: 'Proof of delivery, clean handoff and a dispatch team that actually answers the phone.' },
];

function ProcessIcon() {
  return (
    <svg className="process-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <rect x="2" y="7" width="13" height="9" rx="1" />
      <path d="M15 10h4l3 3v3h-7z" />
      <circle cx="6" cy="18" r="2" /><circle cx="18" cy="18" r="2" />
    </svg>
  );
}

export default function Home() {
  useScrollReveal();

  const [stat1, ref1] = useCountUp(99, 1600, '%');
  const [stat3, ref3] = useCountUp(100, 1800, '+');

  // Hover-image-follow for the services list
  const floatRef = useRef(null);
  const [active, setActive] = useState(null);

  const onMove = (e) => {
    if (floatRef.current) {
      floatRef.current.style.left = `${e.clientX}px`;
      floatRef.current.style.top = `${e.clientY}px`;
    }
  };

  return (
    <>
      {/* ── HERO ── */}
      <section id="home" className="hero">
        <div className="hero-topline">
          <span className="hero-eyebrow"><Bullet /> Freight Enhanced</span>
          <span className="hero-since">/ Since 2015</span>
        </div>

        <div className="hero-stage">
          <h1 className="hero-word hero-word-top">Precision</h1>
          <div className="hero-object">
            <img src="/truck_transparent.png" alt="Hope Trans freight truck" />
          </div>
          <h1 className="hero-word hero-word-bot">Deliver<span className="accent">y</span></h1>
        </div>

        <div className="hero-footer">
          <div className="hero-tag">
            <strong>{COMPANY.tagline}</strong> Premium FTL & LTL freight across Canada — moved safely, tracked live, delivered on time.
            <div style={{ marginTop: '18px' }}>
              <Link to="/contact" className="btn-orange">Let's get your cargo <Arrow /></Link>
            </div>
          </div>
          <div className="hero-stats">
            <div className="stat-item" ref={ref1}>
              <span className="stat-num">{stat1}</span>
              <span className="stat-text">On-time performance</span>
            </div>
            <div className="stat-item">
              <span className="stat-num">24/7</span>
              <span className="stat-text">Live dispatch</span>
            </div>
            <div className="stat-item" ref={ref3}>
              <span className="stat-num">{stat3}</span>
              <span className="stat-text">Fleet & partners</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT INVERT ── */}
      <section className="invert-band">
        <span className="invert-eyebrow"><Bullet /> About Hope Trans</span>
        <h2 className="invert-statement">
          We move freight with precision and care.
          <span className="dim"> Trusted by shippers who prize safety, speed, and dependability.</span>
        </h2>
        <Link to="/about" className="btn-invert">Who we are <Arrow /></Link>
      </section>

      {/* ── COVERAGE MARQUEE ── */}
      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {[...Array(2)].map((_, copy) =>
            ['Ontario', 'Quebec', 'British Columbia', 'Alberta', 'Manitoba', 'Saskatchewan', 'Nova Scotia', 'New Brunswick'].map((p) => (
              <span className="marquee-item" key={`${copy}-${p}`}>{p}</span>
            ))
          )}
        </div>
      </div>

      {/* ── SERVICES — interactive list ── */}
      <section id="services" className="services-section">
        <div className="services-head">
          <div>
            <p className="section-eyebrow reveal-on-scroll"><Bullet /> What we move</p>
            <h2 className="section-heading reveal-on-scroll">
              Every shipment tells a story <span className="dim">of precision and care.</span>
            </h2>
          </div>
          <Link to="/services" className="btn-ghost reveal-on-scroll">All services <Arrow /></Link>
        </div>

        <div className="svc-list" onMouseMove={onMove} onMouseLeave={() => setActive(null)}>
          {SERVICES.map((s, idx) => (
            <Link
              to="/services"
              className="svc-row"
              key={s.title}
              onMouseEnter={() => setActive(idx)}
            >
              <span className="svc-index">0{idx + 1}</span>
              <span className="svc-name">{s.title}</span>
              <span className="svc-tags">
                {SVC_MEDIA[idx].tags.map((t) => (
                  <span className="svc-tag" key={t}>{t}</span>
                ))}
              </span>
              <Arrow className="svc-arrow" />
            </Link>
          ))}
        </div>
      </section>

      {/* floating cursor preview */}
      <div ref={floatRef} className={`svc-float ${active !== null ? 'is-active' : ''}`}>
        {active !== null && <img src={SVC_MEDIA[active].img} alt="" />}
      </div>

      {/* ── PROCESS — stacked cards ── */}
      <section className="process-section">
        <p className="section-eyebrow reveal-on-scroll"><Bullet /> How it works</p>
        <h2 className="section-heading reveal-on-scroll">From quote to doorstep, handled.</h2>
        <div className="process-grid">
          {PROCESS.map((p, idx) => (
            <div className={`process-card reveal-on-scroll delay-${idx % 4}`} key={p.n}>
              <span className="process-num">{p.n}</span>
              <ProcessIcon />
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── TRUST BAND ── */}
      <section className="trust-strip">
        {[
          { k: 'Insured', v: 'Full cargo & liability coverage' },
          { k: '7 Provinces', v: 'Pan-Canadian network' },
          { k: 'ELD', v: 'Real-time GPS tracking' },
          { k: 'Certified', v: 'NSC & FMCSA compliant' },
        ].map((t) => (
          <div className="trust-item" key={t.k}>
            <span className="trust-k">{t.k}</span>
            <span className="trust-v">{t.v}</span>
          </div>
        ))}
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="testimonials-section">
        <p className="section-eyebrow reveal-on-scroll"><Bullet /> Reviews</p>
        <h2 className="section-heading reveal-on-scroll">Trusted by shippers.</h2>
        <div className="testimonials-grid">
          {[
            { quote: 'Hope Trans has been our go-to carrier for two years. On-time, every time, and their dispatch team actually picks up the phone.', name: 'Sarah M.', role: 'Logistics Manager, Retail' },
            { quote: 'We moved our refrigerated freight to Hope Trans and never looked back. Temperature compliance has been flawless.', name: 'David R.', role: 'Operations Director, Food & Bev' },
            { quote: 'Professional drivers, clean equipment, transparent pricing. Exactly what you want in a freight partner.', name: 'Priya K.', role: 'Supply Chain Lead, Manufacturing' },
          ].map((t, idx) => (
            <figure className={`testimonial-card reveal-on-scroll delay-${idx}`} key={t.name}>
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

      {/* ── BIG CTA / QUOTE ── */}
      <section id="contact" className="cta-section">
        <span className="cta-watermark" aria-hidden="true">Hope Trans</span>
        <div className="cta-inner reveal-on-scroll">
          <h2>Let's deliver your products.</h2>
          <p>Get a free quote in under two minutes. No commitment needed.</p>
          <QuoteForm />
        </div>
      </section>
    </>
  );
}
