'use client';

import Link from 'next/link';
import { trackEvent } from '@/lib/gtag';
import type { ReactNode } from 'react';

type TrackableLinkProps = {
  href: string;
  eventName: string;
  location?: string;
  className?: string;
  children: ReactNode;
  target?: string;
};

export default function TrackableLink({
  href,
  eventName,
  location,
  className,
  children,
  target,
}: TrackableLinkProps) {
  return (
    <Link
      href={href}
      target={target}
      className={className}
      onClick={() => {
        trackEvent(eventName, {
          location,
        });
      }}
    >
      {children}
    </Link>
  );
}
