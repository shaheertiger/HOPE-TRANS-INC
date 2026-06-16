import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { COMPANY } from '../siteData.js';

const LINKS = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/fleet', label: 'Fleet' },
  { to: '/careers', label: 'Careers' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const close = () => setOpen(false);

  // Add shadow / shrink once user scrolls
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'is-scrolled' : ''}`}>
      <Link to="/" className="nav-logo" onClick={close}>
        <img src="/logo.jpeg" alt={COMPANY.name} className="nav-logo-img" />
        <div className="nav-logo-text">
          <span className="brand-name">{COMPANY.shortName}</span>
          <span className="brand-sub">Inc.</span>
        </div>
      </Link>

      {/* Backdrop behind the mobile slide-in panel */}
      {open && <div className="nav-backdrop" onClick={close} />}

      <ul className={`nav-links ${open ? 'is-open' : ''}`} onClick={close}>
        {LINKS.map((l) => (
          <li key={l.to}>
            <NavLink
              to={l.to}
              end={l.end}
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              {l.label}
            </NavLink>
          </li>
        ))}
        <li className="nav-links-cta">
          <Link to="/contact" className="nav-cta-btn">
            Get a Quote
          </Link>
        </li>
      </ul>

      <Link to="/contact" className="nav-cta-btn nav-cta-desktop">
        Get a Quote
      </Link>

      <button
        className={`nav-toggle ${open ? 'is-open' : ''}`}
        aria-label="Toggle navigation menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span /><span /><span />
      </button>
    </nav>
  );
}
