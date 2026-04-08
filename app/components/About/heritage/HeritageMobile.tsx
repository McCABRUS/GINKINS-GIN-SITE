'use client';

import {
  useState,
  useEffect,
  useRef,
  useLayoutEffect,
  useMemo,
  useCallback,
} from 'react';
import { flushSync } from 'react-dom';
import { gsap } from 'gsap';
import { heritageData } from './HeritageData';
import Image from 'next/image';

type PointerKind = 'mouse' | 'touch' | 'pen';

export default function HeritageMobile() {
  const [index, setIndex] = useState(0);
  const [slideWidth, setSlideWidth] = useState(0);

  const AUTOPLAY_DELAY = 5000;
  const GAP_PX = 12;

  const indicesToRender = useMemo(() => {
    const total = heritageData.length;
    return [
      (index - 1 + total) % total,
      index,
      (index + 1) % total,
      (index + 2) % total,
    ];
  }, [index]);

  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  const touchStartX = useRef(0);
  const dragDelta = useRef(0);
  const isDragging = useRef(false);
  const activePointerId = useRef<number | null>(null);
  const lastMove = useRef({ x: 0, t: 0 });
  const velocity = useRef(0);
  const pointerKind = useRef<PointerKind>('mouse');

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
        duration: 0.38,
        ease: 'power3.out',
        overwrite: true,
        onComplete: () => {
          flushSync(() => {
            setIndex((prev) =>
              direction === 'next'
                ? (prev + 1) % heritageData.length
                : (prev - 1 + heritageData.length) % heritageData.length,
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
    if (!wrapperRef.current) return;

    const updateWidth = () => {
      const containerWidth = wrapperRef.current!.offsetWidth;
      setSlideWidth(containerWidth * 0.93);
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);

    return () => {
      window.removeEventListener('resize', updateWidth);
    };
  }, []);

  useLayoutEffect(() => {
    if (trackRef.current && slideWidth) {
      gsap.set(trackRef.current, { x: baseX });
    }
  }, [baseX, slideWidth]);

  const rubberBand = (value: number, limit: number, resistance: number) => {
    const abs = Math.abs(value);

    if (abs <= limit) {
      return value;
    }

    return Math.sign(value) * (limit + (abs - limit) * resistance);
  };

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!wrapperRef.current || !trackRef.current || !slideWidth) return;

    stopAutoplay();

    isDragging.current = true;
    activePointerId.current = e.pointerId;
    pointerKind.current = e.pointerType as PointerKind;
    touchStartX.current = e.clientX;
    dragDelta.current = 0;
    lastMove.current = { x: e.clientX, t: performance.now() };
    velocity.current = 0;

    e.currentTarget.setPointerCapture(e.pointerId);

    if (resumeTimeoutRef.current) {
      clearTimeout(resumeTimeoutRef.current);
    }
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (
      !isDragging.current ||
      !trackRef.current ||
      !slideWidth ||
      activePointerId.current !== e.pointerId
    ) {
      return;
    }

    const rawDelta = e.clientX - touchStartX.current;
    const isTouch = pointerKind.current === 'touch';

    const limit = slideWidth * (isTouch ? 0.72 : 0.38);
    const resistance = isTouch ? 0.18 : 0.28;
    const follow = isTouch ? 1 : 0.98;

    const eased = rubberBand(rawDelta, limit, resistance) * follow;

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

  const finishDrag = (e: React.PointerEvent<HTMLDivElement>) => {
    if (activePointerId.current !== e.pointerId) return;
    if (!trackRef.current || !slideWidth || !isDragging.current) return;

    isDragging.current = false;
    activePointerId.current = null;

    const isTouch = pointerKind.current === 'touch';
    const swipeRatio = isTouch ? 0.12 : 0.24;
    const velocityThreshold = isTouch ? 0.22 : 0.45;

    const shouldSnap =
      Math.abs(dragDelta.current) > slideWidth * swipeRatio ||
      Math.abs(velocity.current) > velocityThreshold;

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

  const onPointerCancel = (e: React.PointerEvent<HTMLDivElement>) => {
    if (activePointerId.current !== e.pointerId) return;
    finishDrag(e);
  };

  return (
    <div
      ref={wrapperRef}
      className="overflow-hidden touch-pan-y select-none"
      style={{ touchAction: 'pan-y' }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={finishDrag}
      onPointerCancel={onPointerCancel}
    >
      <div ref={trackRef} className="flex gap-3 will-change-transform">
        {indicesToRender.map((i, index) => {
          const item = heritageData[i];

          return (
            <div
              key={`i-${index}`}
              className="shrink-0 text-center px-0"
              style={{ width: `${slideWidth}px` }}
            >
              <Image
                draggable={false}
                src={item.img}
                alt={item.alt}
                width={391}
                height={563}
                className="w-full object-cover h-140.75"
              />
              <Image
                draggable={false}
                src="/imgs/home/ginkins-gin-icon-martini-decoration.svg"
                alt=""
                width={31}
                height={39}
                className="w-7.75 object-cover mx-auto mt-6"
                aria-hidden
              />
              <p className="text-base leading-6 text-(--primary-black) mt-6">
                {item.text}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
