import { useEffect, useRef, useState } from 'react';
import './index.css'

// ── Counter Hook ─────────────────────────────────────────
function useCountUp(target, duration = 1800, suffix = '') {
  const [display, setDisplay] = useState('0' + suffix);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const startTime = performance.now();
        const isDecimal = target !== Math.floor(target);
        const step = (now) => {
          const progress = Math.min((now - startTime) / duration, 1);
          // ease-out cubic
          const eased = 1 - Math.pow(1 - progress, 3);
          const val = eased * target;
          setDisplay(
            (isDecimal ? val.toFixed(1) : Math.floor(val)) + suffix
          );
          if (progress < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      }
    }, { threshold: 0.5 });

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration, suffix]);

  return [display, ref];
}

export default function App() {
  // Scroll reveals
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    const hiddenElements = document.querySelectorAll('.reveal-on-scroll');
    hiddenElements.forEach((el) => observer.observe(el));

    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  // Stat counters
  const [stat1, ref1] = useCountUp(99, 1600, '%');
  const [stat3, ref3] = useCountUp(100, 1800, '+');

  return (
    <div className="page-wrapper">

      {/* ── NAVBAR ── */}
      <nav className="navbar">
        <a href="#home" className="nav-logo">
          <img src="/logo.jpeg" alt="Hope Trans Inc." className="nav-logo-img" />
          <div className="nav-logo-text">
            <span className="brand-name">Hope Trans</span>
            <span className="brand-sub">Inc.</span>
          </div>
        </a>

        <ul className="nav-links">
          <li><a href="#home" className="active">Home</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <a href="#contact" className="nav-cta-btn">Get a Quote</a>
      </nav>

      {/* ── HERO ── */}
      <section id="home" className="hero">
        {/* Left: copy — slides up on load */}
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
            Premium FTL and LTL freight solutions tailored for your supply chain across Canada. We deliver your promises safely, efficiently, and on time.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="btn-primary">Get a Quote</a>
            <a href="#services" className="btn-secondary">Our Services</a>
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

        {/* Right: composite hero image — slides in from right */}
        <div className="hero-right hero-enter-right">
          <img
            src="/hero_composite.png"
            alt="Hope Trans truck and highway"
            className="hero-composite"
          />
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" className="services-section">
        <p className="section-eyebrow reveal-on-scroll">What We Offer</p>
        <h2 className="section-heading reveal-on-scroll">Our Core Services</h2>
        <div className="services-grid">
          {[
            { icon: '🚛', title: 'Full Truckload (FTL)', desc: 'Dedicated trucks for large shipments with guaranteed delivery windows.' },
            { icon: '📦', title: 'Less-Than-Truckload (LTL)', desc: 'Cost-efficient shared freight for smaller loads without sacrificing speed or safety.' },
            { icon: '🍁', title: 'Domestic Intermodal', desc: 'Cost-effective rail and truck combination shipping across all Canadian provinces.' },
            { icon: '❄️', title: 'Temperature-Controlled', desc: 'Refrigerated and heated transport for perishables and sensitive goods.' },
            { icon: '🏗️', title: 'Flatbed & Heavy Haul', desc: 'Specialized flatbed equipment for oversized, overweight, and unconventional cargo.' },
            { icon: '⚓', title: 'Port Drayage', desc: 'Efficient container drayage from major ports to distribution centers.' },
          ].map((s, idx) => (
            <div key={s.title} className={`service-card reveal-on-scroll delay-${idx % 3}`}>
              <div className="service-icon-wrap">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
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

      {/* ── CTA / GET A QUOTE ── */}
      <section id="contact" className="cta-section">
        <div className="cta-inner reveal-on-scroll">
          <h2>Ready to Ship <em>With Us?</em></h2>
          <p>Get a free quote in under 2 minutes. No commitment needed.</p>
          
          <form action="https://api.web3forms.com/submit" method="POST" className="quote-form">
            <input type="hidden" name="access_key" value="69a1b0c9-0270-43ad-bc61-3a79a64a34c3" />
            <input type="hidden" name="subject" value="New Freight Quote Request from Website" />
            <input type="hidden" name="redirect" value="https://web3forms.com/success" />
            
            <div className="form-row">
              <input type="text" name="name" placeholder="Your Name" required className="form-input" />
              <input type="email" name="email" placeholder="Your Email" required className="form-input" />
            </div>
            <div className="form-row">
              <input type="tel" name="phone" placeholder="Phone Number" required className="form-input" />
              <select name="freight_type" required className="form-select">
                <option value="">Select Freight Type</option>
                <option value="FTL">Full Truckload (FTL)</option>
                <option value="LTL">Less-Than-Truckload (LTL)</option>
                <option value="Intermodal">Domestic Intermodal</option>
                <option value="Reefer">Temperature-Controlled</option>
                <option value="Flatbed">Flatbed / Heavy Haul</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="form-row">
              <input type="text" name="origin" placeholder="From (Origin City/Zip)" required className="form-input" />
              <input type="text" name="destination" placeholder="To (Destination City/Zip)" required className="form-input" />
            </div>
            <textarea name="message" placeholder="Additional Freight Details (Weight, Dimensions, etc.)" rows="3" className="form-textarea"></textarea>
            <button type="submit" className="btn-cta btn-submit">Get Quote</button>
          </form>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="footer">
        <div className="footer-brand">
          <img src="/logo.jpeg" alt="Hope Trans Inc." className="footer-logo" />
          <span className="footer-brand-name">Hope Trans Inc.</span>
          <p className="footer-tagline">Canada's trusted freight partner.<br />Safe. Reliable. On Time.</p>
        </div>
        <div className="footer-col">
          <h4>Services</h4>
          <a href="#services">Full Truckload</a>
          <a href="#services">LTL Shipping</a>
          <a href="#services">Refrigerated Freight</a>
        </div>
        <div className="footer-col">
          <h4>Company</h4>
          <a href="#why-us">Why Us</a>
          <a href="#home">Careers</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="footer-col">
          <h4>Contact</h4>
          <a href="tel:+11234567890" className="footer-contact-link">📞 (123) 456-7890</a>
          <a href="mailto:info@hopetransinc.com" className="footer-contact-link">✉️ info@hopetransinc.com</a>
          <a href="https://maps.google.com/?q=Mississauga, Ontario, Canada" target="_blank" rel="noopener noreferrer" className="footer-contact-link">📍 Mississauga, Ontario, Canada</a>
        </div>
      </footer>
      <div className="footer-bottom">
        © {new Date().getFullYear()} Hope Trans Inc. All rights reserved.
      </div>
    </div>
  )
}
