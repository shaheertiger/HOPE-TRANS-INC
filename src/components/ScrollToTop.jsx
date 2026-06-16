import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Scroll to top on every route change (skips in-page #hash links)
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) return;
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname, hash]);

  return null;
}
