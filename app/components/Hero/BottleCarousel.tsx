'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

const windows = ['/window_1.png', '/window_2.png', '/window_3.png'];
const bottles = ['/bottle_1.png', '/bottle_2.png', '/bottle_3.png'];

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
      <div className="absolute w-96.5 h-158.25 top-1 left-2/4 -translate-x-1/2">
        <Image
          src={windows[active]}
          alt="Gin Background"
          fill
          className="object-cover"
          priority
        />
      </div>
      <Image
        src={bottles[active]}
        alt="Gin bottle"
        height={553}
        width={272}
        className="absolute object-contain top-25 left-[48%] -translate-x-1/2"
        priority
      />
    </div>
  );
}
