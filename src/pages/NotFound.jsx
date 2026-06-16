import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className="notfound">
      <p className="section-eyebrow">Error 404</p>
      <h1 className="notfound-title">Off the Map</h1>
      <p className="notfound-sub">
        The page you're looking for took a wrong turn. Let's get you back on
        route.
      </p>
      <Link to="/" className="btn-cta">Back to Home</Link>
    </section>
  );
}
