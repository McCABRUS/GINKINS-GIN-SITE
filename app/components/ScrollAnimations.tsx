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
  const cleanupTimeoutRef = useRef<number | null>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const removeRevealClasses = (el: HTMLElement) => {
        Array.from(el.classList).forEach((className) => {
          if (
            className.startsWith('reveal-on-load') ||
            className.startsWith('reveal-on-scroll')
          ) {
            el.classList.remove(className);
          }
        });
      };

      const forceFinalState = (el: HTMLElement) => {
        removeRevealClasses(el);
        gsap.set(el, {
          clearProps: 'transform,opacity,visibility',
        });
        el.style.opacity = 'unset';
      };

      const globalCleanup = () => {
        document
          .querySelectorAll<HTMLElement>('[class*="reveal-on-load"]')
          .forEach((el) => {
            forceFinalState(el);
          });
      };

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
              invalidateOnRefresh: true,
            },
            clearProps: 'transform,opacity,visibility',
            overwrite: 'auto',
            onComplete: () => {
              forceFinalState(el);
            },
            onInterrupt: () => {
              forceFinalState(el);
            },
          });
        });
      };

      const animateLoad = (
        selector: string,
        from: gsap.TweenVars,
        to: gsap.TweenVars,
      ) => {
        gsap.utils.toArray<HTMLElement>(selector).forEach((el, index) => {
          gsap.fromTo(el, from, {
            ...to,
            delay: 0.15 + index * 0.06,
            clearProps: 'transform,opacity,visibility',
            overwrite: 'auto',
            onComplete: () => {
              forceFinalState(el);
            },
            onInterrupt: () => {
              forceFinalState(el);
            },
          });
        });
      };

      const runLoadAnimations = () => {
        const appState = window.__APP_STATE__ || {};
        const ready =
          appState.preloaderDone &&
          (appState.ageGateAccepted || isAgeVerified());

        if (!ready) return;

        animateLoad(
          '.reveal-on-load',
          { autoAlpha: 0, x: -24, scale: 0.995 },
          { autoAlpha: 1, x: 0, scale: 1, duration: 1.8, ease: 'power2.out' },
        );

        animateLoad(
          '.reveal-on-load-left',
          { autoAlpha: 0, x: 24, scale: 0.995 },
          { autoAlpha: 1, x: 0, scale: 1, duration: 1.8, ease: 'power2.out' },
        );

        animateLoad(
          '.reveal-on-load-top',
          { autoAlpha: 0, y: 48, scale: 0.995 },
          { autoAlpha: 1, y: 0, scale: 1, duration: 1.8, ease: 'power2.out' },
        );

        animateLoad(
          '.reveal-on-load-bottom',
          { autoAlpha: 0, y: -48, scale: 0.995 },
          { autoAlpha: 1, y: 0, scale: 1, duration: 1.8, ease: 'power2.out' },
        );

        animateLoad(
          '.reveal-on-load-center',
          { autoAlpha: 0, scale: 0.995 },
          { autoAlpha: 1, scale: 1, duration: 2, ease: 'power2.out' },
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
          ease: 'power2.out',
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
          ease: 'power2.out',
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
          ease: 'power2.out',
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
          ease: 'power2.out',
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
          ease: 'power2.out',
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

      cleanupTimeoutRef.current = window.setTimeout(() => {
        globalCleanup();
      }, 5000);

      return () => {
        window.removeEventListener('app:state-changed', onStateChange);

        if (cleanupTimeoutRef.current !== null) {
          window.clearTimeout(cleanupTimeoutRef.current);
          cleanupTimeoutRef.current = null;
        }
      };
    });

    return () => ctx.revert();
  }, [pathname]);

  return null;
}
