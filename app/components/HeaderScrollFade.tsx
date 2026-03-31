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

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const ctx = gsap.context(() => {
      gsap.set(root, {
        y: 0,
        autoAlpha: 1,
      });

      const showHeader = () => {
        if (!isHiddenRef.current) return;
        isHiddenRef.current = false;

        gsap.to(root, {
          y: 0,
          autoAlpha: 1,
          duration: 0.55,
          ease: 'power3.out',
          overwrite: 'auto',
        });
      };

      const hideHeader = () => {
        if (isHiddenRef.current) return;
        isHiddenRef.current = true;

        gsap.to(root, {
          y: -250,
          autoAlpha: 0,
          duration: 0.45,
          ease: 'power3.out',
          overwrite: 'auto',
        });
      };

      ScrollTrigger.create({
        start: 0,
        end: 'max',
        onUpdate: (self) => {
          const scrollY = self.scroll();

          if (scrollY < 40) {
            showHeader();
            return;
          }

          if (self.direction === 1) {
            hideHeader();
          } else {
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
