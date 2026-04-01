'use client';

import { useLayoutEffect, useRef, useState, type ReactNode } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';

type Props = {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  overlayClassName?: string;
  panelClassName?: string;
};

export default function AnimatedModalShell({
  open,
  onClose,
  children,
  overlayClassName = '',
  panelClassName = '',
}: Props) {
  const [mounted, setMounted] = useState(open);
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  useLayoutEffect(() => {
    if (open) setMounted(true);
  }, [open]);

  useLayoutEffect(() => {
    if (!mounted) return;

    const overlay = overlayRef.current;
    const panel = panelRef.current;
    if (!overlay || !panel) return;

    tlRef.current?.kill();
    gsap.killTweensOf([overlay, panel]);

    if (open) {
      gsap.set(overlay, { opacity: 0 });
      gsap.set(panel, { opacity: 0, y: 24, scale: 0.985 });

      tlRef.current = gsap.timeline({
        defaults: {
          ease: 'power3.out',
          duration: 0.8,
        },
      });

      tlRef.current.to(overlay, { opacity: 1 }, 0).to(
        panel,
        {
          opacity: 1,
          y: 0,
          scale: 1,
        },
        0.04,
      );
    } else {
      tlRef.current = gsap.timeline({
        defaults: {
          ease: 'power2.out',
          duration: 0.8,
        },
        onComplete: () => setMounted(false),
      });

      tlRef.current
        .to(
          panel,
          {
            opacity: 0,
            y: 16,
            scale: 0.992,
          },
          0,
        )
        .to(overlay, { opacity: 0 }, 0.03);
    }

    return () => {
      tlRef.current?.kill();
    };
  }, [open, mounted]);

  useLayoutEffect(() => {
    if (!mounted) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', onKey);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', onKey);
    };
  }, [mounted, onClose]);

  if (!mounted) return null;

  return (
    <div
      ref={overlayRef}
      onClick={onClose}
      className={`backdrop-blur-xs ${overlayClassName}`}
      style={{ willChange: 'opacity' }}
    >
      <div className="flex min-h-dvh items-start justify-center overflow-y-auto px-4 py-4 md:items-center md:px-10 md:py-0">
        <div
          ref={panelRef}
          onClick={(e) => e.stopPropagation()}
          className={`relative w-full grow bg-background shadow-2xl max-h-[calc(100dvh-2rem)] overflow-y-auto overscroll-contain ${panelClassName}`}
          style={{
            willChange: 'transform, opacity',
            transform: 'translate3d(0,0,0)',
          }}
        >
          <Image
            draggable={false}
            src="/imgs/join-popup/union_ginkins.webp"
            alt=""
            width={610}
            height={456}
            aria-hidden
            priority
            className="pointer-events-none select-none absolute opacity-[0.022] z-0 -left-6 -top-2 w-[135%] max-w-none lg:left-[52%] lg:top-1.5 lg:-translate-x-1/2 lg:w-[72%] h-[90%]"
          />
          {children}
        </div>
      </div>
    </div>
  );
}
