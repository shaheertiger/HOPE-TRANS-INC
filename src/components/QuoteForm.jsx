import { COMPANY } from '../siteData.js';

// Reusable freight-quote form (used on Home + Contact)
export default function QuoteForm({ compact = false }) {
  return (
    <form
      action={COMPANY.formAction}
      method="POST"
      className={`quote-form ${compact ? 'quote-form-compact' : ''}`}
    >
      <input
        type="hidden"
        name="_subject"
        value="New Freight Quote Request from Website"
      />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_template" value="table" />

      <div className="form-row">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="form-input"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="form-input"
        />
      </div>
      <div className="form-row">
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          required
          className="form-input"
        />
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
        <input
          type="text"
          name="origin"
          placeholder="From (Origin City/Zip)"
          required
          className="form-input"
        />
        <input
          type="text"
          name="destination"
          placeholder="To (Destination City/Zip)"
          required
          className="form-input"
        />
      </div>
      <textarea
        name="message"
        placeholder="Additional Freight Details (Weight, Dimensions, etc.)"
        rows="3"
        className="form-textarea"
      ></textarea>
      <button type="submit" className="btn-cta btn-submit">
        Get Quote
      </button>
    </form>
  );
}
