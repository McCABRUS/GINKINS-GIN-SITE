'use client';

import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function HeaderScrollFade({
  children,
}: {
  children: React.ReactNode;
}) {
  const rootRef = useRef<HTMLElement | null>(null);
  const isHiddenRef = useRef(false);
  const lastScrollYRef = useRef(0);

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const ctx = gsap.context(() => {
      gsap.set(root, {
        yPercent: 0,
        autoAlpha: 1,
        force3D: true,
        willChange: 'transform, opacity',
      });

      const showHeader = () => {
        if (!isHiddenRef.current) return;
        isHiddenRef.current = false;

        gsap.to(root, {
          yPercent: 0,
          autoAlpha: 1,
          duration: 0.7,
          ease: 'power3.out',
          overwrite: 'auto',
          force3D: true,
        });
      };

      const hideHeader = () => {
        if (isHiddenRef.current) return;
        isHiddenRef.current = true;

        gsap.to(root, {
          yPercent: -105,
          autoAlpha: 0,
          duration: 1,
          ease: 'power2.out',
          overwrite: 'auto',
          force3D: true,
        });
      };

      ScrollTrigger.create({
        start: 0,
        end: 'max',
        onUpdate(self) {
          const scrollY = self.scroll();
          const delta = scrollY - lastScrollYRef.current;
          lastScrollYRef.current = scrollY;

          if (scrollY < 48) {
            showHeader();
            return;
          }

          if (delta > 2) {
            hideHeader();
          } else if (delta < -2) {
            showHeader();
          }
        },
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <header
      ref={rootRef}
      className="sticky top-0 z-500 bg-(--primary-black) text-(--primary-gold-main)"
    >
      {children}
    </header>
  );
}
