'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

const windows = [
  '/imgs/home/ginkins-gin-barn-window-red.png',
  '/imgs/home/ginkins-gin-barn-window-white.png',
  '/imgs/home/ginkins-gin-barn-window-black.png',
];
const bottles = [
  '/imgs/home/ginkins-louisville-dry-gin-bottle.webp',
  '/imgs/home/ginkins-golden-bloom-gin-bottle.webp',
  '/imgs/home/ginkins-heritage-reserve-gin-bottle.webp',
];

const bottleAlts = [
  'Ginkins Louisville Dry Gin bottle - Bright citrus and classic juniper gin',
  'Ginkins Golden Bloom Gin bottle - Floral and honeyed premium gin',
  'Ginkins Heritage Reserve Gin bottle - Bold and traditional craft gin',
];

const windowAlts = [
  'Arched red wood barn window texture inspired by Kentucky distillery heritage',
  'Arched light wood barn window texture for clean website interface design',
  'Arched black wood barn window texture for website background',
];

export default function BottleCarousel() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setActive((i) => (i + 1) % bottles.length),
      5000,
    );
    return () => clearInterval(id);
  }, []);

  return (
    <div>
      <div className="absolute w-63.5 xl:w-96.5 h-104 xl:h-158.25 top-29 xl:top-1 left-2/4 -translate-x-1/2">
        <Image
          src={windows[active]}
          alt={windowAlts[active]}
          fill
          className="object-cover"
          priority
        />
      </div>
      <Image
        src={bottles[active]}
        alt={bottleAlts[active]}
        height={553}
        width={272}
        className="w-44.75 xl:w-68 absolute object-contain top-42 xl:top-25 left-[48%] -translate-x-1/2"
        priority
      />
    </div>
  );
}
