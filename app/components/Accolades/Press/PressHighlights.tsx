'use client';

import Image from 'next/image';
import { useState } from 'react';
import { barlow, cormorant } from '@/ui/fonts';
import PressSlide from './PressSlide';
import { trackEvent } from '@/lib/gtag';

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

const mediaRelationsImage =
  '/imgs/accolades/ginkins-gin-media-relations-photo.webp';
const mediaRelationsEmail = 'aubrey@estespr.com';

function MediaRelationsBanner({ mobile = false }: { mobile?: boolean }) {
  return (
    <div
      className={
        mobile
          ? 'relative mx-auto h-40.75 w-full max-w-74.5 overflow-hidden'
          : 'relative aspect-1212/241 w-full overflow-hidden'
      }
    >
      <Image
        src={mediaRelationsImage}
        alt="Ginkins Gin bottle, cocktail, and promotional cards on burgundy velvet"
        fill
        sizes={mobile ? '298px' : '(min-width: 1512px) 1212px, 100vw'}
        className="object-cover object-center"
        draggable={false}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <p
          className={`${cormorant.className} flex flex-col text-center text-[30px] font-medium uppercase leading-[0.9] text-white lg:text-4xl lg:leading-10`}
        >
          <span>Media</span>
          <span>Relations</span>
        </p>
      </div>
    </div>
  );
}

export default function PressHighlights() {
  const [index, setIndex] = useState(0);

  const prev = () => {
    setIndex((current) => (current - 1 + slides.length) % slides.length);
    trackEvent('click_prev_press_highlight', {
      location: 'Accolades',
    });
  };

  const next = () => {
    setIndex((current) => (current + 1) % slides.length);
    trackEvent('click_next_press_highlight', {
      location: 'Accolades',
    });
  };

  const leftSlide = slides[index];
  const rightSlide = slides[(index + 1) % slides.length];

  return (
    <section className="relative w-full overflow-hidden bg-(--primary-gold-main)">
      <div className="relative flex min-h-155.25 w-full flex-col items-center justify-center gap-14 px-5 py-14 lg:hidden">
        <div className="flex w-full flex-col items-center gap-5 text-center">
          <h1
            className={`${cormorant.className} mb-0 w-64 text-center text-5xl font-medium uppercase leading-12 text-(--primary-gold-400)! reveal-on-scroll-top`}
          >
            MEDIA &amp; PRESS
          </h1>
          <h2
            className={`${cormorant.className} mb-0 text-center text-2xl font-medium uppercase leading-8 text-(--primary-black)! reveal-on-scroll-top`}
          >
            PRESS HIGHLIGHTS
          </h2>
        </div>

        <div className="relative flex h-72 w-full items-start justify-center px-5">
          <div className="w-full max-w-55 reveal-on-scroll-top">
            <PressSlide {...leftSlide} />
          </div>
        </div>

        <button
          onClick={prev}
          className="absolute left-5 top-1/2 z-10 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full bg-white text-(--primary-gold-300) transition duration-300 hover:bg-(--primary-gold-300) hover:text-white"
          aria-label="Previous Press Highlight"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M23 14H5M5 14L13 6M5 14L13 22"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <button
          onClick={next}
          className="absolute right-5 top-1/2 z-10 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full bg-white text-(--primary-gold-300) transition duration-300 hover:bg-(--primary-gold-300) hover:text-white"
          aria-label="Next Press Highlight"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M5 14H23M23 14L15 6M23 14L15 22"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      <div className="relative hidden min-h-180 pt-14 lg:block">
        <div className="relative mx-auto w-[81%]">
          <div className="mb-4 flex flex-col items-center gap-5 text-center">
            <h1
              className={`${cormorant.className} mb-0 text-center text-[96px] font-medium uppercase leading-25 text-(--primary-gold-400)! reveal-on-scroll-top`}
            >
              MEDIA &amp; PRESS
            </h1>
            <h2
              className={`${cormorant.className} mb-0 text-center text-4xl font-medium uppercase leading-10 text-(--primary-black)! reveal-on-scroll-top`}
            >
              PRESS HIGHLIGHTS
            </h2>
          </div>

          <div className="relative mx-auto">
            <div className="pointer-events-none absolute left-1/2 top-0 hidden h-80 w-px -translate-x-1/2 bg-white lg:block" />
            <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24 reveal-on-scroll-top">
              <PressSlide {...leftSlide} />
              <div className="hidden lg:block reveal-on-scroll-top">
                <PressSlide {...rightSlide} />
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={prev}
          className="absolute left-5 top-1/2 z-10 flex h-7.5 w-7.5 -translate-y-1/2 items-center justify-center rounded-full border border-(--primary-gold-main) bg-background text-(--primary-gold-main) group transition duration-300 ease-in-out hover:border-white hover:bg-transparent hover:text-white lg:h-12 lg:w-12 xl:left-37.25 xl:h-14.5 xl:w-14.5 2xl:left-80"
          aria-label="Previous Press Highlight"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="58"
            height="58"
            viewBox="0 0 58 58"
            fill="none"
            aria-hidden="true"
          >
            <circle
              cx="29"
              cy="29"
              r="29"
              className="fill-white transition-colors group-hover:fill-transparent"
            />
            <path
              d="M21.5471 28.2796L42.247 28.2796L42.247 31.4057L21.5471 31.4057L30.6692 39.7899L28.2645 42L15.0371 29.8427L28.2645 17.6853L30.6692 19.8954L21.5471 28.2796Z"
              fill="currentColor"
            />
          </svg>
        </button>

        <button
          onClick={next}
          className="absolute right-5 top-1/2 z-10 flex h-7.5 w-7.5 -translate-y-1/2 items-center justify-center rounded-full border border-(--primary-gold-main) bg-background text-(--primary-gold-main) group transition duration-300 ease-in-out hover:border-white hover:bg-transparent hover:text-white lg:h-12 lg:w-12 xl:right-37.25 xl:h-14.5 xl:w-14.5 2xl:right-80"
          aria-label="Next Press Highlight"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="58"
            height="58"
            viewBox="0 0 58 58"
            fill="none"
            aria-hidden="true"
          >
            <circle
              cx="29"
              cy="29"
              r="29"
              className="fill-white transition-colors group-hover:fill-transparent"
            />
            <path
              d="M36.4529 29.7204L15.753 29.7204L15.753 26.5943L36.4529 26.5943L27.3308 18.2101L29.7355 16L42.9629 28.1574L29.7355 40.3147L27.3308 38.1046L36.4529 29.7204Z"
              fill="currentColor"
            />
          </svg>
        </button>
      </div>

      <div className="flex min-h-186.75 w-full flex-col items-center justify-center gap-7 px-7 py-7 lg:hidden">
        <MediaRelationsBanner mobile />

        <div className="flex w-full flex-col items-center gap-10">
          <p
            className={`${cormorant.className} text-center text-[28px] font-normal leading-9 text-(--primary-black)`}
          >
            For media inquiries, interview requests, product information, or
            press opportunities, please contact:
          </p>

          <div className="flex w-full flex-col items-center gap-5">
            <p
              className={`${cormorant.className} text-center text-4xl! font-medium! italic leading-10 text-(--primary-black)`}
            >
              Aubrey Stemle
            </p>
            <p
              className={`${barlow.className} w-60 text-center text-base font-normal leading-6 text-black`}
            >
              Senior Account | Executive Estes Public Relations
              <br />
              <a
                href={`mailto:${mediaRelationsEmail}`}
                className="transition-colors hover:text-(--primary-red-main)"
              >
                {mediaRelationsEmail}
              </a>
            </p>
            <a
              href={`mailto:${mediaRelationsEmail}`}
              className={`${barlow.className} inline-flex h-11 w-48 items-center justify-center bg-(--primary-red-main) px-5 py-1.5 text-lg font-normal uppercase leading-6.75 text-white transition-colors hover:bg-(--primary-red-400)`}
            >
              CONTACT HERE
            </a>
          </div>
        </div>
      </div>

      <div className="hidden min-h-180.25 lg:block">
        <div className="relative mx-auto w-[81%] pt-24 pb-24">
          <MediaRelationsBanner />

          <div className="mt-12 grid grid-cols-2 gap-16">
            <p
              className={`${cormorant.className} text-[36px] font-medium italic leading-[normal] text-(--primary-black)`}
            >
              For media inquiries, interview requests, product information, or
              press opportunities, please contact:
            </p>

            <div className="flex flex-col items-start">
              <p
                className={`${cormorant.className} text-[36px] font-medium italic leading-[normal] text-(--primary-black)`}
              >
                Aubrey Stemle
              </p>
              <p
                className={`${barlow.className} mt-4 text-base font-normal leading-6 text-black`}
              >
                Senior Account | Executive Estes Public Relations
                <br />
                <a
                  href={`mailto:${mediaRelationsEmail}`}
                  className="transition-colors hover:text-(--primary-red-main)"
                >
                  {mediaRelationsEmail}
                </a>
              </p>
              <a
                href={`mailto:${mediaRelationsEmail}`}
                className={`${barlow.className} mt-5 inline-flex items-center justify-center bg-(--primary-red-main) px-5 py-1.5 text-lg font-normal uppercase leading-6.75 text-white transition-colors hover:bg-(--primary-red-400)`}
              >
                CONTACT HERE
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
