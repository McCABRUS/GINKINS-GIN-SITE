'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollToTopOnRouteChange() {
  const pathname = usePathname();

  useEffect(() => {
    const hash = window.location.hash;

    if (hash) {
      const id = hash.slice(1);
      const el = document.getElementById(id);

      if (el) {
        requestAnimationFrame(() => {
          el.scrollIntoView({ block: 'start', behavior: 'auto' });
        });
      }

      return;
    }

    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    });
  }, [pathname]);

  return null;
}
