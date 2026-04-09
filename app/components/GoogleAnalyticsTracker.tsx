'use client';

import { usePathname, useSearchParams } from 'next/navigation';
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
  const searchParams = useSearchParams();

  useEffect(() => {
    const url = pathname + (searchParams?.toString() ? `?${searchParams}` : '');
    window.gtag?.('config', 'G-KKVH5K5QP2', {
      page_path: url,
    });
  }, [pathname, searchParams]);

  return null;
}
