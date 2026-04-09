'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export {};

export {};

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

export default function GoogleAnalyticsTracker() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window.gtag !== 'function') return;

    window.gtag('config', 'G-KKVH5K5QP2', {
      page_path: window.location.pathname + window.location.search,
    });
  }, [pathname]);

  return null;
}
