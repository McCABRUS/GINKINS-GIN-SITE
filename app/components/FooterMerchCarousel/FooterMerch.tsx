'use client';

import { useEffect, useRef } from 'react';
import { FooterMerchCarouselData } from './FooterMerchCarouselData';
import FooterMerchCarousel from './FooterMerchCarousel';

export default function FooterMerch() {
  const carouselRef = useRef<HTMLDivElement | null>(null);

  const position = useRef(0);
  const direction = useRef(-1);
  const speed = 0.5;

  const lastScrollY = useRef(0);

  const ITEM_WIDTH = 400;
  const GAP = 20;
  const SET_WIDTH = FooterMerchCarouselData.length * (ITEM_WIDTH + GAP);

  const data = [...FooterMerchCarouselData, ...FooterMerchCarouselData];

  useEffect(() => {
    let rafId: number;

    const animate = () => {
      if (!carouselRef.current) return;

      position.current += speed * direction.current;
      if (position.current <= -SET_WIDTH) {
        position.current += SET_WIDTH;
      }

      if (position.current >= 0) {
        position.current -= SET_WIDTH;
      }

      carouselRef.current.style.transform = `translateX(${position.current}px)`;
      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, [SET_WIDTH]);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;

      direction.current = y > lastScrollY.current ? 1 : -1;
      lastScrollY.current = y;
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section className="w-screen h-95 md:h-140.75 bg-(--secondary-beige) overflow-hidden my-[17.5px]">
      <div className="relative overflow-hidden">
        <div ref={carouselRef} className="flex whitespace-nowrap gap-5">
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
