import { useScrollReveal } from '../hooks.js';
import { COMPANY } from '../siteData.js';

export default function Careers() {
  useScrollReveal();

  return (
    <>
      <header className="page-hero">
        <div className="page-hero-inner">
          <p className="section-eyebrow">Join the Team</p>
          <h1 className="page-hero-title">
            Drive With <em>Hope Trans</em>
          </h1>
          <p className="page-hero-sub">
            We're always looking for safe, dependable drivers who take pride in
            their work. Competitive pay, modern equipment, and the respect you
            deserve.
          </p>
        </div>
      </header>

      {/* ── PERKS ── */}
      <section className="values-section">
        <p className="section-eyebrow reveal-on-scroll">Why Drive With Us</p>
        <h2 className="section-heading reveal-on-scroll">Benefits & Perks</h2>
        <div className="values-grid">
          {[
            { icon: '💰', title: 'Competitive Pay', desc: 'Top-of-market rates with consistent miles and on-time settlements.' },
            { icon: '🏠', title: 'Home Time', desc: 'Balanced schedules and routes that respect your time off.' },
            { icon: '🚚', title: 'Newer Equipment', desc: 'Drive well-maintained, late-model trucks with modern comforts.' },
            { icon: '🩺', title: 'Health Benefits', desc: 'Comprehensive coverage for you and your family.' },
            { icon: '📈', title: 'Growth', desc: 'Opportunities to advance into lead driver and trainer roles.' },
            { icon: '🤝', title: 'Respect', desc: 'A dispatch team that treats drivers like the professionals they are.' },
          ].map((v, idx) => (
            <div key={v.title} className={`value-card reveal-on-scroll delay-${idx % 3}`}>
              <div className="service-icon-wrap">{v.icon}</div>
              <h3>{v.title}</h3>
              <p>{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── OPEN ROLES ── */}
      <section className="roles-section">
        <p className="section-eyebrow reveal-on-scroll">Open Positions</p>
        <h2 className="section-heading reveal-on-scroll">Current Openings</h2>
        <div className="roles-list">
          {[
            { title: 'Company Driver — AZ License', type: 'Full-Time', loc: 'Mississauga, ON' },
            { title: 'Owner-Operator', type: 'Contract', loc: 'Pan-Canadian' },
            { title: 'Reefer Driver', type: 'Full-Time', loc: 'GTA & Long-Haul' },
            { title: 'Dispatch Coordinator', type: 'Full-Time', loc: 'Mississauga, ON' },
          ].map((r) => (
            <div key={r.title} className="role-row reveal-on-scroll">
              <div className="role-info">
                <h3>{r.title}</h3>
                <div className="role-tags">
                  <span className="role-tag">{r.type}</span>
                  <span className="role-tag">{r.loc}</span>
                </div>
              </div>
              <a href="#apply" className="btn-secondary role-apply">Apply</a>
            </div>
          ))}
        </div>
      </section>

      {/* ── APPLICATION FORM ── */}
      <section id="apply" className="cta-section">
        <div className="cta-inner reveal-on-scroll">
          <h2>Apply <em>Today</em></h2>
          <p>Tell us about yourself and our recruiting team will reach out.</p>

          <form
            action={COMPANY.formAction}
            method="POST"
            className="quote-form"
          >
            <input
              type="hidden"
              name="_subject"
              value="New Driver Application from Website"
            />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />

            <div className="form-row">
              <input type="text" name="name" placeholder="Full Name" required className="form-input" />
              <input type="email" name="email" placeholder="Email" required className="form-input" />
            </div>
            <div className="form-row">
              <input type="tel" name="phone" placeholder="Phone Number" required className="form-input" />
              <select name="position" required className="form-select">
                <option value="">Position of Interest</option>
                <option value="Company Driver">Company Driver — AZ License</option>
                <option value="Owner-Operator">Owner-Operator</option>
                <option value="Reefer Driver">Reefer Driver</option>
                <option value="Dispatch">Dispatch Coordinator</option>
              </select>
            </div>
            <div className="form-row">
              <input type="text" name="license" placeholder="License Class (e.g. AZ)" className="form-input" />
              <input type="text" name="experience" placeholder="Years of Experience" className="form-input" />
            </div>
            <textarea
              name="message"
              placeholder="Anything else we should know?"
              rows="3"
              className="form-textarea"
            ></textarea>
            <button type="submit" className="btn-cta btn-submit">Submit Application</button>
          </form>
        </div>
      </section>
    </>
  );
}
