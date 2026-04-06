'use client';

import { useLayoutEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { isAgeVerified } from '@/lib/ageGate';

gsap.registerPlugin(ScrollTrigger);

declare global {
  interface Window {
    __APP_STATE__?: {
      preloaderDone?: boolean;
      ageGateAccepted?: boolean;
    };
  }
}

export default function ScrollAnimations() {
  const pathname = usePathname();
  const didRunLoadRef = useRef(false);

  useLayoutEffect(() => {
    didRunLoadRef.current = false;

    const ctx = gsap.context(() => {
      const animateScroll = (
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

      const runLoadAnimations = () => {
        if (didRunLoadRef.current) return;

        const appState = window.__APP_STATE__ || {};
        const ready =
          appState.preloaderDone &&
          (appState.ageGateAccepted || isAgeVerified());

        if (!ready) return;

        didRunLoadRef.current = true;

        const animateOnLoad = (
          selector: string,
          from: gsap.TweenVars,
          to: gsap.TweenVars,
        ) => {
          const elements = gsap.utils.toArray<HTMLElement>(selector);
          if (!elements.length) return;

          gsap.killTweensOf(elements);
          gsap.set(elements, from);

          gsap.timeline({ defaults: { ease: 'Cubic.easeOut' } }).to(elements, {
            autoAlpha: 1,
            x: to.x as number | undefined,
            y: to.y as number | undefined,
            scale: to.scale as number | undefined,
            duration: to.duration ?? 1,
            delay: to.delay ?? 0,
            stagger: 0.06,
            overwrite: 'auto',
          });
        };

        animateOnLoad(
          '.reveal-on-load',
          { autoAlpha: 0, x: -24, scale: 0.995 },
          {
            autoAlpha: 1,
            x: 0,
            scale: 1,
            duration: 1.8,
            delay: 0.15,
            stagger: 0.06,
            ease: 'Cubic.easeOut',
          },
        );

        animateOnLoad(
          '.reveal-on-load-left',
          { autoAlpha: 0, x: 24, scale: 0.995 },
          {
            autoAlpha: 1,
            x: 0,
            scale: 1,
            duration: 1.8,
            delay: 0.15,
            stagger: 0.06,
            ease: 'Cubic.easeOut',
          },
        );

        animateOnLoad(
          '.reveal-on-load-top',
          { autoAlpha: 0, y: 48, scale: 0.995 },
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 1.8,
            delay: 0.15,
            stagger: 0.06,
            ease: 'Cubic.easeOut',
          },
        );

        animateOnLoad(
          '.reveal-on-load-bottom',
          { autoAlpha: 0, y: -48, scale: 0.995 },
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 1.8,
            delay: 0.15,
            stagger: 0.06,
            ease: 'Cubic.easeOut',
          },
        );

        animateOnLoad(
          '.reveal-on-load-center',
          { autoAlpha: 0, scale: 0.995 },
          {
            autoAlpha: 1,
            scale: 1,
            duration: 2,
            delay: 0.15,
            stagger: 0.06,
            ease: 'Cubic.easeOut',
          },
        );
      };

      animateScroll(
        '.reveal-on-scroll',
        { autoAlpha: 0, x: -24, scale: 0.995 },
        {
          autoAlpha: 1,
          x: 0,
          scale: 1,
          duration: 1.8,
          delay: 0.3,
          stagger: 0.06,
          ease: 'Cubic.easeOut',
        },
      );

      animateScroll(
        '.reveal-on-scroll-left',
        { autoAlpha: 0, x: 24, scale: 0.995 },
        {
          autoAlpha: 1,
          x: 0,
          scale: 1,
          duration: 1.8,
          delay: 0.3,
          stagger: 0.06,
          ease: 'Cubic.easeOut',
        },
      );

      animateScroll(
        '.reveal-on-scroll-top',
        { autoAlpha: 0, y: 48, scale: 0.995 },
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: 1.8,
          delay: 0.3,
          stagger: 0.06,
          ease: 'Cubic.easeOut',
        },
      );

      animateScroll(
        '.reveal-on-scroll-bottom',
        { autoAlpha: 0, y: -48, scale: 0.995 },
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: 1.8,
          delay: 0.3,
          stagger: 0.06,
          ease: 'Cubic.easeOut',
        },
      );

      animateScroll(
        '.reveal-on-scroll-center',
        { autoAlpha: 0, scale: 0.995 },
        {
          autoAlpha: 1,
          scale: 1,
          duration: 2,
          delay: 0.3,
          stagger: 0.06,
          ease: 'Cubic.easeOut',
        },
      );

      const onStateChange = () => {
        requestAnimationFrame(() => {
          requestAnimationFrame(runLoadAnimations);
        });
      };

      window.addEventListener('app:state-changed', onStateChange);

      if (document.readyState === 'complete') {
        onStateChange();
      } else {
        window.addEventListener('load', onStateChange, { once: true });
      }

      return () => {
        window.removeEventListener('app:state-changed', onStateChange);
      };
    });

    return () => ctx.revert();
  }, [pathname]);

  return null;
}
