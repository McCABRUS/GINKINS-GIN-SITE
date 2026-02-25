'use client';

import { useState, useRef } from 'react';
import { cocktailsData } from './CocktailsData';
import Image from 'next/image';

export default function CocktailsCarouselMobile() {
  const [index, setIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const SWIPE_THRESHOLD = 50;
  const prev = () =>
    setIndex((prev) => (prev === 0 ? cocktailsData.length - 1 : prev - 1));

  const next = () =>
    setIndex((prev) => (prev === cocktailsData.length - 1 ? 0 : prev + 1));

  const { img, title, text, alt } = cocktailsData[index];

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const onTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const onTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) {
      return;
    }

    const deltaX = touchStartX.current - touchEndX.current;

    if (Math.abs(deltaX) > SWIPE_THRESHOLD) {
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      deltaX > 0 ? next() : prev();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section className="w-full bg-(--secondary-beige)">
      <div
        className="relative text-center w-full touch-pan-y"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <Image
          src={img}
          height={565}
          width={395}
          alt={alt}
          className="h-full w-full object-cover aspect-390/565"
        />
        <button
          onClick={prev}
          className="absolute left-5 top-1/2 -translate-y-1/2 h-14.5 w-14.5 rounded-full  flex items-center justify-cente"
          aria-label="Previous cocktail"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="58"
            height="58"
            viewBox="0 0 58 58"
            fill="none"
          >
            <circle
              cx="29"
              cy="29"
              r="29"
              transform="rotate(-180 29 29)"
              fill="#e3d384"
            />
            <path
              d="M21.5471 28.2796L42.247 28.2796L42.247 31.4057L21.5471 31.4057L30.6692 39.7899L28.2645 42L15.0371 29.8427L28.2645 17.6853L30.6692 19.8954L21.5471 28.2796Z"
              fill="#000"
            />
          </svg>
        </button>
        <button
          onClick={next}
          className="absolute right-5 top-1/2 -translate-y-1/2 h-14.5 w-14.5 rounded-full flex items-center justify-center"
          aria-label="Next cocktail"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="58"
            height="58"
            viewBox="0 0 58 58"
            fill="none"
          >
            <circle cx="29" cy="29" r="29" fill="#e3d384  " />
            <path
              d="M36.4529 29.7204L15.753 29.7204L15.753 26.5943L36.4529 26.5943L27.3308 18.2101L29.7355 16L42.9629 28.1574L29.7355 40.3147L27.3308 38.1046L36.4529 29.7204Z"
              fill="#000"
            />
          </svg>
        </button>
      </div>

      <h6 className="mt-8 text-center text-[36px]! leading-10.5!">
        {title === 'Food Pairings' ? (
          <>
            <span className="block xs:inline">Food</span>{' '}
            <span className="block xs:inline">Pairings</span>
          </>
        ) : (
          title
        )}
      </h6>
      <p className="text-center mt-4 text-base leading-relaxed text-(--primary-black)">
        {text}
      </p>
      <div className="mt-6 grid w-40 mx-auto">
        <button className="inline-flex items-baseline justify-center bg-(--primary-red-main) px-8 py-3 text-sm font-medium uppercase  text-white transition hover:bg-(--primary-gold-main) active:bg-(--primary-gold-main) focus:bg-(--primary-gold-main)">
          See More
        </button>
      </div>
    </section>
  );
}
