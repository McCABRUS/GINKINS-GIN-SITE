'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ScrollAnimations() {
  const pathname = usePathname();

  useEffect(() => {
    const ctx = gsap.context(() => {
      const animate = (
        selector: string,
        from: gsap.TweenVars,
        to: gsap.TweenVars,
      ) => {
        gsap.utils.toArray<HTMLElement>(selector).forEach((el) => {
          gsap.fromTo(el, from, {
            ...to,
            scrollTrigger: {
              trigger: el,
              start: 'top bottom',
              once: true,
            },
          });
        });
      };

      animate(
        '.reveal-on-scroll',
        { autoAlpha: 0, x: -24, scale: 0.995 },
        {
          autoAlpha: 1,
          x: 0,
          scale: 1,
          duration: 1,
          delay: 0.2,
          ease: 'power3.out',
        },
      );

      animate(
        '.reveal-on-scroll-left',
        { autoAlpha: 0, x: 24, scale: 0.995 },
        {
          autoAlpha: 1,
          x: 0,
          scale: 1,
          duration: 1,
          delay: 0.2,
          ease: 'power3.out',
        },
      );

      animate(
        '.reveal-on-scroll-top',
        { autoAlpha: 0, y: 48, scale: 0.995 },
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: 1,
          delay: 0.2,
          ease: 'power3.out',
        },
      );

      animate(
        '.reveal-on-scroll-center',
        { autoAlpha: 0, scale: 0.995 },
        {
          autoAlpha: 1,
          scale: 1,
          duration: 1,
          delay: 0.2,
          ease: 'power3.out',
        },
      );
    });

    ScrollTrigger.refresh();

    return () => ctx.revert();
  }, [pathname]);

  return null;
}
