'use client';

import { trackEvent } from '@/lib/gtag';
import type { ReactNode } from 'react';

type TrackableAProps = {
  href: string;
  eventName: string;
  location?: string;
  className?: string;
  children: ReactNode;
  target?: string;
  rel?: string;
};

export default function TrackableA({
  href,
  eventName,
  location,
  className,
  children,
  target,
  rel,
}: TrackableAProps) {
  return (
    <a
      href={href}
      target={target}
      className={className}
      rel={rel}
      onClick={() => {
        trackEvent(eventName, {
          location,
        });
      }}
    >
      {children}
    </a>
  );
}
