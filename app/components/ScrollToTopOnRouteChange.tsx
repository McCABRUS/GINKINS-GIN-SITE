'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

function scrollToHash(hash: string) {
  const id = decodeURIComponent(hash.replace(/^#/, ''));
  if (!id) return false;

  const el = document.getElementById(id);
  if (!el) return false;

  el.scrollIntoView({ block: 'start', behavior: 'auto' });
  return true;
}

export default function ScrollToTopOnRouteChange() {
  const pathname = usePathname();

  useEffect(() => {
    const onClickCapture = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const anchor = target?.closest?.('a[href]') as HTMLAnchorElement | null;
      if (!anchor) return;

      if (
        anchor.target === '_blank' ||
        anchor.hasAttribute('download') ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey ||
        event.button !== 0
      ) {
        return;
      }

      const url = new URL(anchor.href, window.location.href);
      if (url.origin !== window.location.origin) return;

      const current = new URL(window.location.href);
      const samePath =
        url.pathname === current.pathname && url.search === current.search;

      if (!samePath) return;

      event.preventDefault();

      window.history.pushState({}, '', url.toString());

      requestAnimationFrame(() => {
        if (url.hash) {
          scrollToHash(url.hash);
        } else {
          window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
        }
      });
    };

    document.addEventListener('click', onClickCapture, true);

    return () => {
      document.removeEventListener('click', onClickCapture, true);
    };
  }, []);

  useEffect(() => {
    const hash = window.location.hash;

    requestAnimationFrame(() => {
      if (hash) {
        scrollToHash(hash);
        return;
      }

      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    });
  }, [pathname]);

  return null;
}
