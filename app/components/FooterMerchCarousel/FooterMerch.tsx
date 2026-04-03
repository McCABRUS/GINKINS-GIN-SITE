'use client';

import { useCallback, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { FooterMerchCarouselData } from './FooterMerchCarouselData';
import FooterMerchCarousel from './FooterMerchCarousel';

export default function FooterMerch() {
  const carouselRef = useRef<HTMLDivElement | null>(null);

  const position = useRef(0);
  const direction = useRef(-1);
  const lastScrollY = useRef(0);

  const velocity = useRef({ value: 0 });
  const velocityTween = useRef<gsap.core.Tween | null>(null);
  const idleTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const isHovering = useRef(false);
  const isDragging = useRef(false);

  const lastPointerX = useRef(0);
  const lastPointerTime = useRef(0);
  const activePointerId = useRef<number | null>(null);

  const ITEM_WIDTH = 400;
  const GAP = 20;
  const SET_WIDTH = FooterMerchCarouselData.length * (ITEM_WIDTH + GAP);
  const AUTO_SPEED = 1;

  const data = [...FooterMerchCarouselData, ...FooterMerchCarouselData];

  const wrapPosition = useCallback(
    (value: number) => gsap.utils.wrap(-SET_WIDTH, 0, value),
    [SET_WIDTH],
  );

  const clearIdleTimer = useCallback(() => {
    if (idleTimer.current) {
      clearTimeout(idleTimer.current);
      idleTimer.current = null;
    }
  }, []);

  const killVelocityTween = useCallback(() => {
    if (velocityTween.current) {
      velocityTween.current.kill();
      velocityTween.current = null;
    }
  }, []);

  const pauseMotion = useCallback(
    (immediate = false) => {
      clearIdleTimer();
      killVelocityTween();

      if (immediate) {
        velocity.current.value = 0;
        return;
      }

      velocityTween.current = gsap.to(velocity.current, {
        value: 0,
        duration: 0.28,
        ease: 'power2.out',
        overwrite: 'auto',
      });
    },
    [clearIdleTimer, killVelocityTween],
  );

  const resumeAuto = useCallback(() => {
    clearIdleTimer();
    killVelocityTween();

    velocityTween.current = gsap.to(velocity.current, {
      value: AUTO_SPEED * direction.current,
      duration: 1.05,
      ease: 'power3.out',
      overwrite: 'auto',
    });
  }, [AUTO_SPEED, clearIdleTimer, killVelocityTween]);

  const scheduleResume = useCallback(() => {
    clearIdleTimer();

    idleTimer.current = setTimeout(() => {
      if (!isDragging.current) {
        resumeAuto();
      }
    }, 10000);
  }, [clearIdleTimer, resumeAuto]);

  useEffect(() => {
    lastScrollY.current = window.scrollY;

    const onScroll = () => {
      const y = window.scrollY;
      const nextDirection = y > lastScrollY.current ? 1 : -1;

      lastScrollY.current = y;

      if (nextDirection !== direction.current) {
        direction.current = nextDirection;

        if (!isHovering.current && !isDragging.current) {
          resumeAuto();
        }
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [resumeAuto]);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const setX = gsap.quickSetter(carousel, 'x', 'px');

    setX(position.current);

    const tick = (_time: number, deltaTime: number) => {
      if (!isDragging.current) {
        position.current += velocity.current.value * (deltaTime / 16.6667);
        position.current = wrapPosition(position.current);
        setX(position.current);
      }
    };

    gsap.ticker.add(tick);

    velocity.current.value = AUTO_SPEED * direction.current;
    resumeAuto();

    return () => {
      gsap.ticker.remove(tick);
      killVelocityTween();
      clearIdleTimer();
    };
  }, [
    AUTO_SPEED,
    SET_WIDTH,
    clearIdleTimer,
    killVelocityTween,
    resumeAuto,
    wrapPosition,
  ]);

  const handlePointerEnter = () => {
    isHovering.current = true;
    pauseMotion(false);
  };

  const handlePointerLeave = () => {
    isHovering.current = false;

    if (!isDragging.current) {
      resumeAuto();
    }
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.button !== 0) return;
    if (!carouselRef.current) return;

    isDragging.current = true;
    activePointerId.current = e.pointerId;

    pauseMotion(true);

    lastPointerX.current = e.clientX;
    lastPointerTime.current = performance.now();

    e.currentTarget.setPointerCapture(e.pointerId);
    e.preventDefault();
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging.current) return;
    if (activePointerId.current !== e.pointerId) return;

    const now = performance.now();
    const deltaX = e.clientX - lastPointerX.current;
    const deltaTime = Math.max(now - lastPointerTime.current, 16.67);

    position.current += deltaX;
    position.current = wrapPosition(position.current);

    if (carouselRef.current) {
      gsap.set(carouselRef.current, { x: position.current });
    }

    const dragVelocity = gsap.utils.clamp(
      -18,
      18,
      (deltaX / deltaTime) * 16.6667,
    );

    velocity.current.value = dragVelocity;

    lastPointerX.current = e.clientX;
    lastPointerTime.current = now;

    scheduleResume();
  };

  const endDrag = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging.current) return;
    if (activePointerId.current !== e.pointerId) return;

    isDragging.current = false;
    activePointerId.current = null;

    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {}

    gsap.to(velocity.current, {
      value: 0,
      duration: 0.75,
      ease: 'power3.out',
      overwrite: 'auto',
    });

    if (!isHovering.current) {
      scheduleResume();
    }
  };

  return (
    <section
      className="w-screen h-95 md:h-140.75 bg-(--secondary-beige) overflow-hidden my-[17.5px] reveal-on-scroll-center"
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
    >
      <div className="relative overflow-hidden select-none">
        <div
          ref={carouselRef}
          className="flex whitespace-nowrap gap-5 transform-gpu will-change-transform cursor-grab active:cursor-grabbing"
          style={{ touchAction: 'pan-y' }}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={endDrag}
          onPointerCancel={endDrag}
        >
          {data.map((images, index) => (
            <FooterMerchCarousel
              img={images.img}
              alt={images.alt}
              key={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
