'use client';

import { useEffect } from 'react';
import { trackEvent } from '@/lib/gtag';

const THRESHOLDS = [25, 50, 75, 90] as const;

export default function ScrollDepthTracker() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const fired = new Set<number>();
    let ticking = false;

    const getScrollPercent = () => {
      const doc = document.documentElement;
      const scrollTop = window.scrollY || doc.scrollTop || 0;
      const viewportHeight = window.innerHeight || doc.clientHeight || 0;
      const fullHeight = Math.max(doc.scrollHeight, document.body.scrollHeight);

      if (fullHeight <= viewportHeight) return 100;
      return ((scrollTop + viewportHeight) / fullHeight) * 100;
    };

    const checkScroll = () => {
      ticking = false;

      const percent = getScrollPercent();

      for (const threshold of THRESHOLDS) {
        if (percent >= threshold && !fired.has(threshold)) {
          fired.add(threshold);

          trackEvent('scroll_depth', {
            percent: threshold,
            page_path: window.location.pathname,
          });
        }
      }
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(checkScroll);
    };

    checkScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return null;
}
