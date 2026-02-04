'use client';

import { useState } from 'react';

const testimonials = [
  {
    quote:
      'From the first sip, Ginkins Gin stands out for its balance and clarity. There’s intention behind it — nothing feels accidental. It’s the kind of gin you remember, and the kind you come back to.',
    author: 'Daro Mott',
    rating: 5,
  },
  {
    quote:
      'Exceptionally smooth and thoughtfully crafted. Ginkins delivers a refined experience that feels both modern and timeless.',
    author: 'James Porter',
    rating: 5,
  },
  {
    quote:
      'A gin with character and restraint. Every botanical has a purpose, and it shows in every pour.',
    author: 'Elena Brooks',
    rating: 5,
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const prev = () =>
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));

  const next = () =>
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));

  const { quote, author, rating } = testimonials[index];

  return (
    <section className="w-full h-135.5 px-5.5 lg:px-12.5 py-5.5 lg:py-13.75 bg-(--secundary-beige)">
      <div className="w-full h-full relative border-4 border-solid border-(--primary-gold-main) py-20 flex items-center justify-center">
        <div className="relative md:py-20 md:px-38.5 text-center w-full">
          <button
            onClick={prev}
            className="absolute left-14.5 top-1/2 -translate-y-1/2 h-14.5 w-14.5 rounded-full border border-[#D6B25E] flex items-center justify-center hover:bg-[#D6B25E]/10 transition"
            aria-label="Previous testimonial"
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
                fill="white"
              />
              <path
                d="M21.5471 28.2796L42.247 28.2796L42.247 31.4057L21.5471 31.4057L30.6692 39.7899L28.2645 42L15.0371 29.8427L28.2645 17.6853L30.6692 19.8954L21.5471 28.2796Z"
                fill="#D4BB40"
              />
            </svg>
          </button>
          <button
            onClick={next}
            className="absolute right-14.5 top-1/2 -translate-y-1/2 h-14.5 w-14.5 rounded-full border border-[#D6B25E] flex items-center justify-center hover:bg-[#D6B25E]/10 transition"
            aria-label="Next testimonial"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="58"
              height="58"
              viewBox="0 0 58 58"
              fill="none"
            >
              <circle cx="29" cy="29" r="29" fill="white" />
              <path
                d="M36.4529 29.7204L15.753 29.7204L15.753 26.5943L36.4529 26.5943L27.3308 18.2101L29.7355 16L42.9629 28.1574L29.7355 40.3147L27.3308 38.1046L36.4529 29.7204Z"
                fill="#D4BB40"
              />
            </svg>
          </button>
          <div className="mb-6 flex justify-center gap-1 text-(--secondary-black) text-xl">
            {Array.from({ length: rating }).map((_, i) => (
              <span key={i}>★</span>
            ))}
          </div>
          <blockquote className="font-cormorant-garamond font-medium mx-auto italic text-3xl md:text-4xl leading-relaxed text-(--secondary-black)">
            “{quote}”
          </blockquote>
          <h5 className="mt-8 tracking-widest text-(--secondary-black)!">
            {author}
          </h5>
        </div>
      </div>
    </section>
  );
}
