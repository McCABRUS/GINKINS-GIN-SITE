import Image from 'next/image';
import { IconPetal } from './IconPedal';

interface ProductBottleProps {
  bgColor: string; // fondo cuadrado
  iconColor: string; // color del SVG
  bottleSrc: string;
  bottleAlt: string; // imagen botella
}

export function ProductBottle({
  bgColor,
  iconColor,
  bottleSrc,
  bottleAlt,
}: ProductBottleProps) {
  return (
    <div className="relative w-full max-w-137.5 overflow-visible">
      <div className={`aspect-549/507 w-[80%] ${bgColor}`} />
      <div className="pointer-events-none absolute top-[12%] productsBackgroundAdapter bottom-[-32.5%] bg-(--primary-black) rounded-t-full" />
      <div className="absolute top-[25%] left-[41%] -translate-x-1/2 z-10 w-[13.25%]">
        <IconPetal color={iconColor} />
      </div>

      <div className="absolute bottom-[-50%] left-[42%] -translate-x-1/2 z-20 w-[53%]">
        <Image
          src={bottleSrc}
          alt={bottleAlt}
          width={294}
          height={560}
          className="w-[80%] h-auto object-contain"
          priority
        />
      </div>
    </div>
  );
}
