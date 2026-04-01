import Image from 'next/image';
import { IconPetal } from './IconPedal';

interface ProductBottleProps {
  bgColor: string;
  iconColor: string;
  bottleSrc: string;
  bottleAlt: string;
}

export function ProductBottle({
  bgColor,
  iconColor,
  bottleSrc,
  bottleAlt,
}: ProductBottleProps) {
  return (
    <div className="relative w-full lg:max-w-137.5 overflow-visible xl:justify-items-end grid">
      <div className={`aspect-549/507 w-full xl:w-[80%] ${bgColor}`} />
      <div className="pointer-events-none absolute top-[12%] productsBackgroundAdapter max-xl:inset-x-[17%]  bottom-[-32.5%] bg-(--primary-black) rounded-t-full" />
      <div className="absolute top-[25%] xl:left-[59%] left-1/2 -translate-x-1/2 z-10 w-[20%]">
        <IconPetal color={iconColor} />
      </div>

      <div className="absolute bottom-[-50%] xl:left-[60%] left-[51%] -translate-x-1/2 z-20 xl:w-[53%] w-[65%]">
        <Image
          draggable={false}
          src={bottleSrc}
          alt={bottleAlt}
          width={294}
          height={560}
          className="w-[80%] h-auto object-contain"
        />
      </div>
    </div>
  );
}
