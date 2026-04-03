'use client';

import { useState, useRef, useEffect, useLayoutEffect, useMemo } from 'react';

const testimonials = [
  {
    quote:
      'From the first sip, Ginkins Gin stands out for its balance and clarity. There’s intention behind it — nothing feels accidental. It’s the kind of gin you remember, and the kind you come back to.',
    author: 'Daro Mott',
    rating: 5,
  },
  {
    quote:
      'Ginkins Gin delivers a refined, well-structured profile that speaks to craftsmanship. You can taste the care in the process — it’s smooth, expressive, and exceptionally well made.',
    author: 'Mark Burkley',
    rating: 5,
  },
  {
    quote:
      'Ginkins Gin feels thoughtful and honest. It’s not trying to impress — it simply does. Every pour reflects balance, quality, and a clear respect for the craft.',
    author: 'Freddy Elias',
    rating: 5,
  },
  {
    quote:
      'What I appreciate most about Ginkins Gin is its consistency. From bottle to bottle, the experience is elegant, smooth, and intentional. It’s a gin built with purpose.',
    author: 'Michael Lambert',
    rating: 5,
  },
  {
    quote:
      'Ginkins Gin brings together tradition and modern creativity in a very natural way. It’s refined without being rigid — a gin you can enjoy neat, in a cocktail, or simply on its own.',
    author: 'Claudio Abreu',
    rating: 5,
  },
  {
    quote:
      'Introducing Ginkins Gin to people is easy — the quality speaks for itself. Once they try it, they immediately recognize the balance and craftsmanship behind it.',
    author: 'Robert Christian',
    rating: 5,
  },
  {
    quote:
      'What stands out is the balance. It’s clean, expressive, and holds its character beautifully in a Gin &amp; Tonic or a Negroni. This is a gin that respects the classics.',
    author: 'Bartender | Louisville, KY',
    rating: 5,
  },
  {
    quote:
      'There’s a quiet confidence to this gin. It’s well-structured, intentional, and doesn’t rely on excess botanicals to make a statement. Elegant and versatile behind the bar.',
    author: 'Mixologist | London, UK',
    rating: 5,
  },
  {
    quote:
      'From the first sip, you can tell this gin was made with purpose. Nothing feels accidental—every note has its place.',
    author: 'Private Tasting Guest',
    rating: 5,
  },
  {
    quote:
      'It doesn’t taste like something new trying to prove itself. It tastes established, thoughtful, and incredibly smooth.',
    author: 'Private Tasting Guest',
    rating: 5,
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [dragX, setDragX] = useState(0);
  const [slideWidth, setSlideWidth] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const SWIPE_RATIO = 0.22;
  const AUTOPLAY_DELAY = 6000;
  const ANIMATION_DURATION = 320;

  const total = testimonials.length;

  const indicesToRender = useMemo(() => {
    return [(index - 1 + total) % total, index, (index + 1) % total];
  }, [index, total]);

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
      Math.sign(deltaRatio) * Math.min(Math.abs(deltaRatio), 0.7) * width;

    dragXRef.current += (resisted - dragXRef.current) * 0.25;
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
      setTimeout(() => setIsAnimating(false), 180);
    }

    touchStartX.current = null;
  };

  const animateTo = (direction: 'next' | 'prev') => {
    if (!slideWidth) return;

    const target = direction === 'next' ? -slideWidth : slideWidth;

    setIsAnimating(true);
    setDragX(target);

    setTimeout(() => {
      setIndex((prev) =>
        direction === 'next' ? (prev + 1) % total : (prev - 1 + total) % total,
      );

      dragXRef.current = 0;
      setDragX(0);
      setIsAnimating(false);
    }, ANIMATION_DURATION);
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
      setSlideWidth(containerRef.current!.offsetWidth);
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  return (
    <section className="w-full h-200 xs:h-150 lg:h-135.5 px-5.5 lg:px-12.5 py-5.5 lg:py-13.75 bg-(--secondary-beige)">
      <div className="w-full h-full relative border-4 border-(--primary-gold-main) overflow-hidden">
        <div
          ref={containerRef}
          className={`flex h-full ${
            isAnimating
              ? 'transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]'
              : ''
          }`}
          style={{
            transform: `translateX(calc(-100% + ${dragX}px))`,
          }}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {indicesToRender.map((i, renderIndex) => {
            const { quote, author, rating } = testimonials[i];

            return (
              <div
                key={`testimonial-${renderIndex}`}
                className="w-full shrink-0 flex items-center justify-center text-center px-5 md:px-25 lg:px-38.5 reveal-on-scroll-center"
              >
                <div>
                  <div className="mb-6 flex justify-center gap-1 text-xl">
                    {Array.from({ length: rating }).map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>

                  <blockquote className="font-cormorant-garamond font-medium mx-auto italic text-3xl md:text-4xl leading-relaxed text-(--secondary-black) reveal-on-scroll-top">
                    “{quote}”
                  </blockquote>

                  <h5 className="text-lg! mt-8 text-(--secondary-black)!">
                    {author}
                  </h5>
                </div>
              </div>
            );
          })}
        </div>
        <button
          onClick={() => animateTo('prev')}
          className="absolute md:flex hidden left-5 3xl:left-10 top-[106%] xs:top-[108%] md:top-1/2 -translate-y-1/2 h-14.5 w-14.5 rounded-full border border-(--primary-gold-main) items-center justify-center text-(--primary-gold-main) hover:bg-(--primary-gold-main) hover:text-background transition duration-300 ease-in-out"
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
              fill="currentBackgroundColor"
            />
            <path
              d="M21.5471 28.2796L42.247 28.2796L42.247 31.4057L21.5471 31.4057L30.6692 39.7899L28.2645 42L15.0371 29.8427L28.2645 17.6853L30.6692 19.8954L21.5471 28.2796Z"
              fill="currentColor"
            />
          </svg>
        </button>

        <button
          onClick={() => animateTo('next')}
          className="absolute md:flex hidden right-5 3xl:right-10 top-[106%] xs:top-[108%] md:top-1/2 -translate-y-1/2 h-14.5 w-14.5 rounded-full border border-(--primary-gold-main) items-center justify-center text-(--primary-gold-main) hover:bg-(--primary-gold-main) hover:text-background transition duration-300 ease-in-out"
          aria-label="Next testimonial"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="58"
            height="58"
            viewBox="0 0 58 58"
            fill="none"
          >
            <circle cx="29" cy="29" r="29" fill="CurrentBackgroundColor" />
            <path
              d="M36.4529 29.7204L15.753 29.7204L15.753 26.5943L36.4529 26.5943L27.3308 18.2101L29.7355 16L42.9629 28.1574L29.7355 40.3147L27.3308 38.1046L36.4529 29.7204Z"
              fill="CurrentColor"
            />
          </svg>
        </button>
      </div>
    </section>
  );
}
