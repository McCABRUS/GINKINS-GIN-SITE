'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

const windows = [
  '/imgs/home/ginkins-gin-barn-window-red.webp',
  '/imgs/home/ginkins-gin-barn-window-white.webp',
  '/imgs/home/ginkins-gin-barn-window-black.webp',
];

const bottleAlts = [
  'Ginkins Louisville Dry Gin bottle - Bright citrus and classic juniper gin',
  'Ginkins Golden Bloom Gin bottle - Floral and honeyed premium gin',
  'Ginkins Heritage Reserve Gin bottle - Bold and traditional craft gin',
];

export default function BottleCarousel() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setActive((i) => (i + 1) % windows.length),
      5000,
    );
    return () => clearInterval(id);
  }, []);

  return (
    <div>
      <div className="absolute w-62 xl:w-81.75 lg:w-56.25 h-104 lg:h-95 xl:h-137.5 top-26 lg:top-33 xl:top-25.5 left-2/4 -translate-x-1/2">
        <Image
          src={windows[active]}
          alt={bottleAlts[active]}
          fill
          className="object-cover"
          priority
        />
      </div>
    </div>
  );
}
