import { useScrollReveal } from '../hooks.js';
import { COMPANY } from '../siteData.js';
import QuoteForm from '../components/QuoteForm.jsx';

export default function Contact() {
  useScrollReveal();

  return (
    <>
      <header className="page-hero">
        <div className="page-hero-inner">
          <p className="section-eyebrow">Get in Touch</p>
          <h1 className="page-hero-title">
            Let's Move Your <em>Freight</em>
          </h1>
          <p className="page-hero-sub">
            Request a quote or reach our dispatch team directly. We respond fast
            — usually within the hour during business hours.
          </p>
        </div>
      </header>

      {/* ── CONTACT GRID ── */}
      <section className="contact-section">
        <div className="contact-info reveal-on-scroll">
          <h2 className="contact-info-title">Contact Details</h2>

          <a href={COMPANY.phoneHref} className="contact-info-row">
            <span className="contact-info-icon">📞</span>
            <span>
              <span className="contact-info-label">Phone</span>
              <span className="contact-info-value">{COMPANY.phone}</span>
            </span>
          </a>

          <a href={COMPANY.hotlineHref} className="contact-info-row">
            <span className="contact-info-icon">☎️</span>
            <span>
              <span className="contact-info-label">24/7 Hotline</span>
              <span className="contact-info-value">{COMPANY.hotline}</span>
            </span>
          </a>

          <a href={`mailto:${COMPANY.email}`} className="contact-info-row">
            <span className="contact-info-icon">✉️</span>
            <span>
              <span className="contact-info-label">Email</span>
              <span className="contact-info-value">{COMPANY.email}</span>
            </span>
          </a>

          <a
            href={COMPANY.mapsHref}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-info-row"
          >
            <span className="contact-info-icon">📍</span>
            <span>
              <span className="contact-info-label">Office</span>
              <span className="contact-info-value">
                {COMPANY.addressLine1}
                <br />
                {COMPANY.addressLine2}
              </span>
            </span>
          </a>

          <div className="contact-info-row contact-info-static">
            <span className="contact-info-icon">🕑</span>
            <span>
              <span className="contact-info-label">Hours</span>
              <span className="contact-info-value">{COMPANY.hours}</span>
            </span>
          </div>

          <div className="contact-map">
            <iframe
              title="Hope Trans Inc. office location"
              src="https://maps.google.com/maps?q=1300%20Britannia%20Rd%20E%20Mississauga%20ON%20L4W%201C8&t=&z=15&ie=UTF8&iwloc=&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <div className="contact-form-wrap reveal-on-scroll">
          <h2 className="contact-form-title">Request a Quote</h2>
          <QuoteForm />
        </div>
      </section>
    </>
  );
}
