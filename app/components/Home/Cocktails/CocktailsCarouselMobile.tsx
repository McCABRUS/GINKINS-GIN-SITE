'use client';

import { useState, useRef, useEffect, useLayoutEffect, useMemo } from 'react';
import { cocktailsData } from './CocktailsData';
import Image from 'next/image';

export default function CocktailsCarouselMobile() {
  const [index, setIndex] = useState(0);
  const [dragX, setDragX] = useState(0);
  const [slideWidth, setSlideWidth] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const SWIPE_RATIO = 0.28;
  const AUTOPLAY_DELAY = 5000;
  const AUTOPLAY_ANIMATION_DURATION = 420;
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
  const touchStartX = useRef<number | null>(null);
  const dragXRef = useRef(0);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);
  const resumeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const stopAutoplay = () => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
      autoplayRef.current = null;
    }
  };

  const startAutoplay = () => {
    stopAutoplay();
    autoplayRef.current = setInterval(() => {
      animateTo('next');
    }, AUTOPLAY_DELAY);
  };

  const resetAutoplayTimer = () => {
    stopAutoplay();
    if (resumeTimeoutRef.current) {
      clearTimeout(resumeTimeoutRef.current);
    }
    resumeTimeoutRef.current = setTimeout(startAutoplay, AUTOPLAY_DELAY);
  };

  const onTouchStart = (e: React.TouchEvent) => {
    resetAutoplayTimer();
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (!touchStartX.current || !containerRef.current) return;

    const currentX = e.targetTouches[0].clientX;
    const deltaPx = currentX - touchStartX.current;
    const width = containerRef.current.offsetWidth;
    const deltaRatio = deltaPx / width;

    const resisted =
      Math.sign(deltaRatio) * Math.min(Math.abs(deltaRatio), 0.75) * width;

    dragXRef.current += (resisted - dragXRef.current) * 0.22;
    setDragX(dragXRef.current);
  };

  const onTouchEnd = () => {
    if (!containerRef.current) return;

    const width = containerRef.current.offsetWidth;
    const ratio = dragX / width;

    if (Math.abs(ratio) > SWIPE_RATIO) {
      animateTo(ratio < 0 ? 'next' : 'prev');
    } else {
      setIsAnimating(true);
      setDragX(0);
      setTimeout(() => setIsAnimating(false), 200);
    }

    touchStartX.current = null;
  };

  const animateTo = (direction: 'next' | 'prev') => {
    if (!slideWidth) return;

    const target =
      direction === 'next' ? -(slideWidth + GAP_PX) : slideWidth + GAP_PX;

    setIsAnimating(true);
    setDragX(target);

    setTimeout(() => {
      setIndex((prev) =>
        direction === 'next'
          ? (prev + 1) % cocktailsData.length
          : (prev - 1 + cocktailsData.length) % cocktailsData.length,
      );

      dragXRef.current = 0;
      setDragX(0);
      setIsAnimating(false);
    }, AUTOPLAY_ANIMATION_DURATION);
  };

  useEffect(() => {
    startAutoplay();
    return () => {
      stopAutoplay();
      if (resumeTimeoutRef.current) {
        clearTimeout(resumeTimeoutRef.current);
      }
    };
  });

  useLayoutEffect(() => {
    if (!containerRef.current) return;

    const updateWidth = () => {
      setSlideWidth(containerRef.current!.offsetWidth * 0.93);
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  return (
    <section className="w-full bg-(--secondary-beige)">
      <div
        className="overflow-hidden touch-pan-y"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div
          ref={containerRef}
          className={`flex gap-3 ${
            isAnimating
              ? 'transition-transform duration-420 ease-[cubic-bezier(0.22,1,0.36,1)]'
              : ''
          }`}
          style={{
            transform: `translateX(calc(-${slideWidth}px - ${GAP_PX}px + ${dragX}px))`,
          }}
        >
          {indicesToRender.map((i, renderIndex) => {
            const item = cocktailsData[i];

            return (
              <div
                key={`cocktail-${renderIndex}`}
                className="shrink-0"
                style={{ width: `${slideWidth}px` }}
              >
                <Image
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
        <button className="inline-flex items-baseline justify-center bg-(--primary-red-main) px-8 py-3 text-sm font-medium uppercase text-white transition hover:bg-(--primary-gold-main)">
          See More
        </button>
      </div>
    </section>
  );
}
