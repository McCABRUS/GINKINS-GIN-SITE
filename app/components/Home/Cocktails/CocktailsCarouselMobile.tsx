'use client';

import {
  useState,
  useRef,
  useEffect,
  useLayoutEffect,
  useMemo,
  useCallback,
} from 'react';
import { flushSync } from 'react-dom';
import { cocktailsData } from './CocktailsData';
import Image from 'next/image';
import { gsap } from 'gsap';

export default function CocktailsCarouselMobile() {
  const [index, setIndex] = useState(0);
  const [slideWidth, setSlideWidth] = useState(0);

  const SWIPE_RATIO = 0.22;
  const AUTOPLAY_DELAY = 5000;
  const GAP_PX = 12;

  const indicesToRender = useMemo(() => {
    const total = cocktailsData.length;
    return [
      (index - 1 + total) % total,
      index,
      (index + 1) % total,
      (index + 2) % total,
    ];
  }, [index]);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  const touchStartX = useRef(0);
  const dragDelta = useRef(0);
  const isDragging = useRef(false);
  const lastMove = useRef({ x: 0, t: 0 });
  const velocity = useRef(0);

  const autoplayRef = useRef<NodeJS.Timeout | null>(null);
  const resumeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const animateToRef = useRef<
    ((direction: 'next' | 'prev', afterComplete?: () => void) => void) | null
  >(null);

  const baseX = -(slideWidth + GAP_PX);

  const stopAutoplay = useCallback(() => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
      autoplayRef.current = null;
    }
  }, []);

  const finishTransition = useCallback(() => {
    if (!trackRef.current) return;

    gsap.set(trackRef.current, { x: baseX });
    dragDelta.current = 0;
    isDragging.current = false;
  }, [baseX]);

  const animateTo = useCallback(
    (direction: 'next' | 'prev', afterComplete?: () => void) => {
      if (!trackRef.current || !slideWidth) return;

      const target =
        baseX +
        (direction === 'next' ? -(slideWidth + GAP_PX) : slideWidth + GAP_PX);

      gsap.killTweensOf(trackRef.current);

      gsap.to(trackRef.current, {
        x: target,
        duration: 0.36,
        ease: 'power3.out',
        overwrite: true,
        onComplete: () => {
          flushSync(() => {
            setIndex((prev) =>
              direction === 'next'
                ? (prev + 1) % cocktailsData.length
                : (prev - 1 + cocktailsData.length) % cocktailsData.length,
            );
          });

          finishTransition();

          if (afterComplete) {
            afterComplete();
          }
        },
      });
    },
    [baseX, finishTransition, slideWidth],
  );

  useEffect(() => {
    animateToRef.current = animateTo;
  }, [animateTo]);

  const startAutoplay = useCallback(() => {
    stopAutoplay();

    autoplayRef.current = setInterval(() => {
      animateToRef.current?.('next');
    }, AUTOPLAY_DELAY);
  }, [stopAutoplay]);

  const resetAutoplayTimer = useCallback(() => {
    stopAutoplay();

    if (resumeTimeoutRef.current) {
      clearTimeout(resumeTimeoutRef.current);
    }

    resumeTimeoutRef.current = setTimeout(() => {
      startAutoplay();
    }, AUTOPLAY_DELAY);
  }, [startAutoplay, stopAutoplay]);

  useEffect(() => {
    startAutoplay();

    return () => {
      stopAutoplay();

      if (resumeTimeoutRef.current) {
        clearTimeout(resumeTimeoutRef.current);
      }
    };
  }, [startAutoplay, stopAutoplay]);

  useLayoutEffect(() => {
    if (!containerRef.current) return;

    const updateWidth = () => {
      setSlideWidth(containerRef.current!.offsetWidth * 0.93);
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);

    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  useLayoutEffect(() => {
    if (trackRef.current && slideWidth) {
      gsap.set(trackRef.current, { x: baseX });
    }
  }, [baseX, slideWidth]);

  const onPointerDown = (e: React.PointerEvent) => {
    if (!containerRef.current || !trackRef.current || !slideWidth) return;

    stopAutoplay();

    isDragging.current = true;
    touchStartX.current = e.clientX;
    dragDelta.current = 0;
    lastMove.current = { x: e.clientX, t: performance.now() };
    velocity.current = 0;

    containerRef.current.setPointerCapture(e.pointerId);

    if (resumeTimeoutRef.current) {
      clearTimeout(resumeTimeoutRef.current);
    }
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!isDragging.current || !trackRef.current || !slideWidth) return;

    const rawDelta = e.clientX - touchStartX.current;
    const maxDrag = slideWidth * 0.34;

    const clamped = Math.max(-maxDrag, Math.min(maxDrag, rawDelta));
    const eased = clamped * 0.92;

    const now = performance.now();
    const dt = Math.max(now - lastMove.current.t, 1);
    velocity.current = (e.clientX - lastMove.current.x) / dt;
    lastMove.current = { x: e.clientX, t: now };

    dragDelta.current = eased;

    gsap.set(trackRef.current, {
      x: baseX + eased,
      overwrite: true,
    });
  };

  const finishDrag = () => {
    if (!trackRef.current || !slideWidth || !isDragging.current) return;

    isDragging.current = false;

    const shouldSnap =
      Math.abs(dragDelta.current) > slideWidth * SWIPE_RATIO ||
      Math.abs(velocity.current) > 0.45;

    if (!shouldSnap) {
      gsap.to(trackRef.current, {
        x: baseX,
        duration: 0.25,
        ease: 'power3.out',
        overwrite: true,
        onComplete: () => {
          dragDelta.current = 0;
          resetAutoplayTimer();
        },
      });
      return;
    }

    animateToRef.current?.(
      dragDelta.current < 0 ? 'next' : 'prev',
      resetAutoplayTimer,
    );
  };

  return (
    <section className="w-full bg-(--secondary-beige)">
      <div
        ref={containerRef}
        className="overflow-hidden touch-pan-y"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={finishDrag}
        onPointerCancel={finishDrag}
        onPointerLeave={finishDrag}
      >
        <div ref={trackRef} className="flex gap-3 will-change-transform">
          {indicesToRender.map((i, renderIndex) => {
            const item = cocktailsData[i];

            return (
              <div
                key={`cocktail-${renderIndex}`}
                className="shrink-0"
                style={{ width: `${slideWidth}px` }}
              >
                <Image
                  draggable={false}
                  src={item.img}
                  alt={item.alt}
                  width={395}
                  height={565}
                  className="w-full object-cover aspect-390/565"
                />
              </div>
            );
          })}
        </div>
      </div>

      <h6 className="mt-8 text-center text-[36px]! leading-10.5!">
        {cocktailsData[index].title === 'Food Pairings' ? (
          <>
            <span className="block xs:inline">Food</span>{' '}
            <span className="block xs:inline">Pairings</span>
          </>
        ) : (
          cocktailsData[index].title
        )}
      </h6>

      <p className="text-center mt-4 text-base leading-relaxed text-(--primary-black)">
        {cocktailsData[index].text}
      </p>

      <div className="mt-6 grid w-40 mx-auto">
        <button className="inline-flex items-baseline justify-center px-8 py-3 text-sm font-medium uppercase text-white hover:text-(--primary-black) transition animatedButton">
          See More
        </button>
      </div>
    </section>
  );
}
