'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';

interface RecipeCardProps {
  area: string;
  title: string;
  image: string;
  alt: string;
  description: string;
  ingredients: string[];
  instructions: string[];
  titleMode: string;
}

function getInitialTouchLike() {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(hover: none), (pointer: coarse)').matches;
}

export default function RecipeCard({
  area,
  title,
  image,
  alt,
  description,
  ingredients,
  instructions,
  titleMode,
}: RecipeCardProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [isTouchLike, setIsTouchLike] = useState(getInitialTouchLike);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(hover: none), (pointer: coarse)');

    const updateTouchLike = () => {
      setIsTouchLike(mediaQuery.matches);
    };

    updateTouchLike();

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', updateTouchLike);
      return () => mediaQuery.removeEventListener('change', updateTouchLike);
    }

    mediaQuery.addListener(updateTouchLike);
    return () => mediaQuery.removeListener(updateTouchLike);
  }, []);

  useEffect(() => {
    if (!overlayRef.current || !contentRef.current) return;

    const overlay = overlayRef.current;
    const content = contentRef.current;

    gsap.killTweensOf([overlay, content]);

    if (isTouchLike) {
      gsap.set(overlay, {
        clearProps: 'pointer-events',
      });

      if (isOpen) {
        gsap.set(overlay, {
          pointerEvents: 'auto',
        });

        gsap.to(overlay, {
          opacity: 1,
          duration: 0.24,
          ease: 'power2.out',
        });

        gsap.to(content, {
          opacity: 1,
          y: 0,
          duration: 0.24,
          ease: 'power2.out',
        });
      } else {
        gsap.to(content, {
          opacity: 0,
          y: 12,
          duration: 0.18,
          ease: 'power2.in',
        });

        gsap.to(overlay, {
          opacity: 0,
          duration: 0.2,
          ease: 'power2.in',
          onComplete: () => {
            gsap.set(overlay, {
              pointerEvents: 'none',
            });
          },
        });
      }
    } else {
      gsap.set(overlay, {
        clearProps: 'opacity,pointer-events',
      });

      gsap.set(content, {
        clearProps: 'opacity,transform',
      });
    }
  }, [isOpen, isTouchLike]);

  useEffect(() => {
    if (!isTouchLike || !overlayRef.current || !contentRef.current) return;

    gsap.set(overlayRef.current, {
      opacity: 0,
      pointerEvents: 'none',
    });

    gsap.set(contentRef.current, {
      opacity: 0,
      y: 12,
    });
  }, [isTouchLike]);

  const handleActivate = () => {
    if (isTouchLike) {
      setIsOpen((prev) => !prev);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
    if (!isTouchLike) return;

    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setIsOpen((prev) => !prev);
    }
  };

  return (
    <article
      tabIndex={0}
      role="button"
      aria-expanded={isTouchLike ? isOpen : undefined}
      onClick={handleActivate}
      onKeyDown={handleKeyDown}
      className={`
        group relative w-full min-w-0 overflow-hidden lg:rounded-xl reveal-on-scroll-top
        aspect-828/1066 cursor-pointer touch-manipulation select-none
        ${area}
      `}
    >
      <Image
        draggable={false}
        src={image}
        alt={alt}
        width={405}
        height={522}
        className="w-full max-w-full h-auto object-cover aspect-828/1066"
      />
      <div className="pointer-events-none absolute top-6.5 inset-x-0 z-10 text-center">
        <h3
          className={
            titleMode === 'light'
              ? 'text-background!'
              : 'text-(--primary-black)!'
          }
        >
          {title}
        </h3>
      </div>
      <div
        ref={overlayRef}
        className="absolute inset-0 z-20 flex items-center bg-black/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100 group-active:opacity-100 aspect-828/1066"
      >
        <div
          ref={contentRef}
          className="px-2 sm:px-7.5 py-2 sm:py-7.5 xl:px-7.5 xl:py-7.5 lg:px-2 lg:py-2 text-sm lg:text-[11px] 2xl:text-sm text-background space-y-6 max-h-full overflow-y-auto place-self-start w-full"
        >
          <p className="leading-relaxed">
            <strong>{description}</strong>
          </p>
          <hr className="w-full text-background my-3" aria-hidden="true" />
          {ingredients.length > 0 && (
            <div>
              <p className="font-semibold mb-2">Ingredients</p>
              <ul className="list-disc pl-5 space-y-1">
                {ingredients.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <hr className="w-full text-background my-3" aria-hidden="true" />
            </div>
          )}
          {instructions.length > 0 && (
            <div>
              <p className="font-semibold mb-2">Instructions</p>
              <ol className="list-decimal pl-5 space-y-1">
                {instructions.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ol>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
