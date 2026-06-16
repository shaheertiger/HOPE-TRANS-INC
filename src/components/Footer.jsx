import { Link } from 'react-router-dom';
import { COMPANY } from '../siteData.js';

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-brand">
          <img src="/logo.jpeg" alt={COMPANY.name} className="footer-logo" />
          <span className="footer-brand-name">{COMPANY.name}</span>
          <p className="footer-tagline">
            {COMPANY.tagline}
            <br />
            Safe. Reliable. On Time.
          </p>
        </div>

        <div className="footer-col">
          <h4>Services</h4>
          <Link to="/services">Full Truckload</Link>
          <Link to="/services">LTL Shipping</Link>
          <Link to="/services">Refrigerated Freight</Link>
          <Link to="/services">Flatbed & Heavy Haul</Link>
        </div>

        <div className="footer-col">
          <h4>Company</h4>
          <Link to="/about">About Us</Link>
          <Link to="/fleet">Our Fleet</Link>
          <Link to="/careers">Careers</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer-col">
          <h4>Contact</h4>
          <a href={COMPANY.phoneHref} className="footer-contact-link">
            📞 {COMPANY.phone}
          </a>
          <a href={`mailto:${COMPANY.email}`} className="footer-contact-link">
            ✉️ {COMPANY.email}
          </a>
          <a
            href={COMPANY.mapsHref}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-contact-link"
          >
            📍 {COMPANY.addressLine1}, {COMPANY.addressLine2}
          </a>
        </div>
      </footer>
      <div className="footer-bottom">
        © {new Date().getFullYear()} {COMPANY.name} All rights reserved.
      </div>
    </>
  );
}
