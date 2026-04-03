'use client';

import Image from 'next/image';
import { useLayoutEffect, useRef, useState } from 'react';
import gsap from 'gsap';

type Slide = {
  src: string;
  alt: string;
  accent: string;
};

type Props = {
  slides: Slide[];
  activeIndex: number;
};

type LayerStyle = React.CSSProperties & {
  ['--reveal']?: string;
};

export default function BottleCarousel({ slides, activeIndex }: Props) {
  const [displayIndex, setDisplayIndex] = useState(activeIndex);
  const [incomingIndex, setIncomingIndex] = useState(activeIndex);
  const outgoingRef = useRef<HTMLDivElement | null>(null);
  const incomingRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (activeIndex === displayIndex) return;

    setIncomingIndex(activeIndex);
  }, [activeIndex, displayIndex]);

  useLayoutEffect(() => {
    if (incomingIndex === displayIndex) return;

    const outgoingEl = outgoingRef.current;
    const incomingEl = incomingRef.current;

    if (!outgoingEl || !incomingEl) return;

    gsap.killTweensOf([outgoingEl, incomingEl]);

    const tl = gsap.timeline({
      onComplete: () => {
        setDisplayIndex(incomingIndex);
      },
    });

    gsap.set(outgoingEl, {
      opacity: 1,
      filter: 'blur(0px)',
      zIndex: 1,
    });

    gsap.set(incomingEl, {
      opacity: 1,
      filter: 'blur(5px)',
      zIndex: 2,
      '--reveal': '0%',
    });

    tl.to(incomingEl, {
      '--reveal': '120%',
      filter: 'blur(0px)',
      duration: 1.1,
      ease: 'power3.out',
    });

    tl.to(
      outgoingEl,
      {
        opacity: 0,
        filter: 'blur(8px)',
        duration: 0.36,
        ease: 'power2.inOut',
      },
      '-=0.34',
    );

    return () => {
      tl.kill();
    };
  }, [incomingIndex, displayIndex]);

  const current = slides[displayIndex] ?? slides[0];
  const next = slides[incomingIndex] ?? slides[0];

  const baseLayerStyle: LayerStyle = {
    backgroundColor: 'transparent',
    willChange: 'transform, opacity, filter, mask-size',
    transform: 'translateZ(0)',
    WebkitTransform: 'translateZ(0)',
    backfaceVisibility: 'hidden',
    WebkitBackfaceVisibility: 'hidden',
    contain: 'paint',
    overflow: 'hidden',
  };

  const incomingLayerStyle: LayerStyle = {
    ...baseLayerStyle,
    ['--reveal']: '0%',
    maskImage:
      'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 82%, rgba(0,0,0,0.2) 94%, rgba(0,0,0,0) 100%)',
    WebkitMaskImage:
      'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 82%, rgba(0,0,0,0.2) 94%, rgba(0,0,0,0) 100%)',
    maskRepeat: 'no-repeat',
    WebkitMaskRepeat: 'no-repeat',
    maskPosition: 'top',
    WebkitMaskPosition: 'top',
    maskSize: '100% var(--reveal)',
    WebkitMaskSize: '100% var(--reveal)',
  };

  const outgoingLayerStyle: LayerStyle = {
    ...baseLayerStyle,
    ['--reveal']: '100%',
    maskImage:
      'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 100%)',
    WebkitMaskImage:
      'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 100%)',
    maskRepeat: 'no-repeat',
    WebkitMaskRepeat: 'no-repeat',
    maskPosition: 'top',
    WebkitMaskPosition: 'top',
    maskSize: '100% 10%',
    WebkitMaskSize: '100% 100%',
  };

  return (
    <div>
      <div className="absolute w-62 xl:w-81.75 lg:w-56.25 h-104 lg:h-95 xl:h-137.5 top-26 lg:top-33 xl:top-25.5 left-2/4 -translate-x-1/2 overflow-hidden isolate contain-[paint] reveal-on-load-top">
        <div
          ref={outgoingRef}
          className="absolute inset-0 pointer-events-none"
          style={outgoingLayerStyle}
        >
          <Image
            draggable={false}
            src={current.src}
            alt={current.alt}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div
          ref={incomingRef}
          className="absolute inset-0 pointer-events-none"
          style={incomingLayerStyle}
        >
          <Image
            draggable={false}
            src={next.src}
            alt={next.alt}
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </div>
  );
}
