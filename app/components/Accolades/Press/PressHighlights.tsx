'use client';

import { useState } from 'react';
import PressSlide from './PressSlide';

interface Slide {
  id: number;
  logo: string;
  title: string;
  description: string;
  alt: string;
}

const slides: Slide[] = [
  {
    id: 1,
    logo: '/imgs/accolades/ginkins-gin-swagger-magazine-feature.png',
    title: 'Swagger Magazine’s Ultimate Fall Guide',
    description: 'Ginkins featured among standout artisanal spirits',
    alt: 'As featured in Swagger Magazine - Ginkins Gin press recognition',
  },
  {
    id: 2,
    logo: '/imgs/accolades/ginkins-gin-one-to-watch-award.png',
    title: '“One to Watch: Ginkins Redefines the American Gin Scene”',
    description: 'Highlighting our bold flavor and Southern soul',
    alt: 'One to Watch industry recognition award for Ginkins Gin',
  },
];

export default function PressHighlights() {
  const [index, setIndex] = useState(0);

  const prev = () => {
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const next = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };

  const leftSlide = slides[index];
  const rightSlide = slides[(index + 1) % slides.length];

  return (
    <section className="relative bg-(--primary-gold-main) py-25 overflow-hidden w-full px-5 lg:px-13">
      <h1 className="text-center text-(--primary-gold-400)! mb-20">
        PRESS <br className="block lg:hidden" /> HIGHLIGHTS
      </h1>
      <button
        onClick={prev}
        className="absolute left-5 xl:left-13.25  md:top-1/2 -translate-y-1/2 h-7.5 w-7.5 lg:w-12 lg:h-12 xl:h-14.5 xl:w-14.5 rounded-full border border-(--primary-gold-main) flex items-center justify-center text-background hover:text-(--primary-gold-400) transition duration-300 ease-in-out z-10"
        aria-label="Previous Press Highlight"
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
            fill="currentColor"
          />
          <path
            d="M21.5471 28.2796L42.247 28.2796L42.247 31.4057L21.5471 31.4057L30.6692 39.7899L28.2645 42L15.0371 29.8427L28.2645 17.6853L30.6692 19.8954L21.5471 28.2796Z"
            fill="#D4BB40"
          />
        </svg>
      </button>
      <button
        onClick={next}
        className="absolute right-5 xl:right-12.5 md:top-1/2 -translate-y-1/2 h-7.5 w-7.5 lg:w-12 lg:h-12 xl:h-14.5 xl:w-14.5 rounded-full border border-(--primary-gold-main) flex items-center justify-center text-background hover:text-(--primary-gold-400) transition duration-300 ease-in-out z-10"
        aria-label="Next Press Highlight"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="58"
          height="58"
          viewBox="0 0 58 58"
          fill="none"
        >
          <circle cx="29" cy="29" r="29" fill="currentColor" />
          <path
            d="M36.4529 29.7204L15.753 29.7204L15.753 26.5943L36.4529 26.5943L27.3308 18.2101L29.7355 16L42.9629 28.1574L29.7355 40.3147L27.3308 38.1046L36.4529 29.7204Z"
            fill="#D4BB40"
          />
        </svg>
      </button>
      <div className="relative mx-auto px-6">
        <div className="pointer-events-none absolute left-1/2 top-0 hidden xl:h-95.5 h-65 w-px bg-white lg:block" />

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
          <PressSlide {...leftSlide} />
          <div className="hidden lg:block">
            <PressSlide {...rightSlide} />
          </div>
        </div>
      </div>
      <div className="mt-20 text-center">
        <button className="inline-flex items-center justify-center bg-(--primary-red-main) px-8 py-3 text-lg font-medium uppercase   transition hover:bg-(--primary-gold-400) mt-1 group">
          <h5 className="text-background! group-hover:text-(--primary-black)! group-active:text-(--primary-black)! group-focus:text-(--primary-black)!">
            SEE ALL AWARDS
          </h5>
        </button>
      </div>
    </section>
  );
}
