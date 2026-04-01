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

    tl.to(outgoingEl, {
      opacity: 0,
      scale: 1.05,
      y: -10,
      filter: 'blur(12px)',
      duration: 0.7,
      ease: 'power2.inOut',
    }).fromTo(
      incomingEl,
      {
        opacity: 1,
        scale: 1.08,
        y: 16,
        filter: 'blur(14px)',
      },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        filter: 'blur(0px)',
        duration: 0.85,
        ease: 'power3.out',
      },
      '<0.08',
    );

    return () => {
      tl.kill();
    };
  }, [incomingIndex, displayIndex]);

  const current = slides[displayIndex] ?? slides[0];
  const next = slides[incomingIndex] ?? slides[0];

  return (
    <div>
      <div className="absolute w-62 xl:w-81.75 lg:w-56.25 h-104 lg:h-95 xl:h-137.5 top-26 lg:top-33 xl:top-25.5 left-2/4 -translate-x-1/2">
        <div ref={outgoingRef} className="absolute inset-0">
          <Image
            draggable={false}
            src={current.src}
            alt={current.alt}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div ref={incomingRef} className="absolute inset-0 opacity-0">
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
