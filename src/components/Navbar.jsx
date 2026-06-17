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

  // Lock body scroll while the mobile drawer is open
  useEffect(() => {
    document.body.classList.toggle('nav-open', open);
    return () => document.body.classList.remove('nav-open');
  }, [open]);

  const navLink = (l) => (
    <NavLink
      to={l.to}
      end={l.end}
      className={({ isActive }) => (isActive ? 'active' : '')}
    >
      {l.label}
    </NavLink>
  );

  return (
    <>
      <nav className={`navbar ${scrolled ? 'is-scrolled' : ''}`}>
        <Link to="/" className="nav-logo" onClick={close}>
          <img src="/logo.jpeg" alt={COMPANY.name} className="nav-logo-img" />
          <div className="nav-logo-text">
            <span className="brand-name">{COMPANY.shortName}</span>
            <span className="brand-sub">Inc.</span>
          </div>
        </Link>

        {/* Desktop inline links */}
        <ul className="nav-links">
          {LINKS.map((l) => (
            <li key={l.to}>{navLink(l)}</li>
          ))}
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

      {/* Mobile drawer + backdrop — rendered OUTSIDE the navbar so that
          position:fixed is relative to the viewport, not the navbar's
          backdrop-filter containing block. */}
      <div
        className={`nav-backdrop ${open ? 'is-open' : ''}`}
        onClick={close}
        aria-hidden="true"
      />
      <aside className={`nav-drawer ${open ? 'is-open' : ''}`}>
        <button className="nav-drawer-close" aria-label="Close menu" onClick={close}>
          ✕
        </button>
        <ul className="nav-drawer-links" onClick={close}>
          {LINKS.map((l) => (
            <li key={l.to}>{navLink(l)}</li>
          ))}
        </ul>
        <Link to="/contact" className="nav-cta-btn nav-drawer-cta" onClick={close}>
          Get a Quote
        </Link>
      </aside>
    </>
  );
}
