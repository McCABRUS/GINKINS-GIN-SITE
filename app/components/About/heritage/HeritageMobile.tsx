'use client';

import { useState, useEffect, useRef } from 'react';
import { heritageData } from './HeritageData';
import Image from 'next/image';

export default function HeritageMobile() {
  const [index, setIndex] = useState(0);

  const [translateX, setTranslateX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const prevIndex = (index - 1 + heritageData.length) % heritageData.length;
  const nextIndex = (index + 1) % heritageData.length;

  const touchStartX = useRef<number | null>(null);

  const autoplayRef = useRef<NodeJS.Timeout | null>(null);
  const resumeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const AUTOPLAY_DELAY = 5000;
  const RESUME_DELAY = 6000;
  const SWIPE_THRESHOLD = 50;

  /* ---------- autoplay control ---------- */

  const startAutoplay = () => {
    stopAutoplay();
    autoplayRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % heritageData.length);
    }, AUTOPLAY_DELAY);
  };

  const stopAutoplay = () => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
      autoplayRef.current = null;
    }
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

  const pauseAndScheduleResume = () => {
    stopAutoplay();
    if (resumeTimeoutRef.current) {
      clearTimeout(resumeTimeoutRef.current);
    }
    resumeTimeoutRef.current = setTimeout(startAutoplay, RESUME_DELAY);
  };

  /* ---------- touch handlers ---------- */

  const onTouchStart = (e: React.TouchEvent) => {
    pauseAndScheduleResume();
    setIsDragging(true);
    touchStartX.current = e.targetTouches[0].clientX;
  };
  const onTouchMove = (e: React.TouchEvent) => {
    if (!touchStartX.current) return;

    const currentX = e.targetTouches[0].clientX;
    const delta = currentX - touchStartX.current;

    setTranslateX(delta);
  };

  const onTouchEnd = () => {
    if (!touchStartX.current) return;

    setIsDragging(false);

    if (Math.abs(translateX) > SWIPE_THRESHOLD) {
      setIndex((prev) =>
        translateX < 0
          ? (prev + 1) % heritageData.length
          : (prev - 1 + heritageData.length) % heritageData.length,
      );
    }

    // reset visual
    setTranslateX(0);
    touchStartX.current = null;
  };

  return (
    <div
      className="overflow-hidden touch-pan-y"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <div
        className={`flex ${
          isDragging ? '' : 'transition-transform duration-300 ease-out'
        }`}
        style={{
          transform: `translateX(calc(-100% + ${translateX}px))`,
        }}
      >
        {[prevIndex, index, nextIndex].map((i) => {
          const item = heritageData[i];
          return (
            <div key={i} className="min-w-full text-center">
              <Image
                src={item.img}
                alt={item.alt}
                width={391}
                height={563}
                className="w-full object-cover h-140.75"
              />
              <Image
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
