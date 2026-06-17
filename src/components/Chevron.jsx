// Setby-style double-slash chevron mark — the brand's signature shape.
export function Mark({ className }) {
  return (
    <svg className={className} viewBox="0 0 34 26" fill="currentColor" aria-hidden="true">
      <path d="M9 0H17L8 26H0L9 0Z" />
      <path d="M22 0H34L25 26H13L22 0Z" />
    </svg>
  );
}

// Small solid chevron used as a bullet before eyebrow labels.
export function Bullet({ className = 'chev-bullet' }) {
  return (
    <svg className={className} viewBox="0 0 12 10" fill="currentColor" aria-hidden="true">
      <path d="M0 10L5.5 0H12L6.5 10H0Z" />
    </svg>
  );
}

// Arrow used inside buttons / rows.
export function Arrow({ className = 'btn-arrow' }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3 8H13M13 8L8.5 3.5M13 8L8.5 12.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
