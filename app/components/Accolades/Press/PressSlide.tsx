import Image from 'next/image';
import { barlow, cormorant } from '@/ui/fonts';

interface PressSlideProps {
  logo: string;
  title: string;
  description: string;
  alt: string;
}

export default function PressSlide({
  logo,
  title,
  description,
  alt,
}: PressSlideProps) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="relative mb-6 h-14 w-14">
        <Image
          draggable={false}
          src={logo}
          fill
          className="object-contain"
          alt={alt}
        />
      </div>

      <h2
        className={`${cormorant.className} mb-4 max-w-81.25 text-2xl font-medium uppercase leading-8 text-(--primary-black) lg:text-4xl lg:leading-10`}
      >
        {title}
      </h2>

      <p
        className={`${barlow.className} max-w-81.25 text-base font-normal leading-6 text-(--secondary-black)`}
      >
        {description}
      </p>
    </div>
  );
}
