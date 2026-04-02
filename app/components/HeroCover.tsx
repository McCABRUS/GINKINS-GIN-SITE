import type { CSSProperties } from 'react';

type HeroCoverProps = {
  imageOpacity?: number;
  translateYClassName?: string;
  fadeHeightClassName?: string;
  className?: string;
  imageClassName?: string;
  alt?: string;
  src480?: string;
  src768?: string;
  src1200?: string;
};

export default function HeroCover({
  imageOpacity = 0.5,
  translateYClassName = '-translate-y-[36%] pq:-translate-y-[20%] xs:-translate-y-[45%] md:-translate-y-[26%] lg:-translate-y-[36%] xl:-translate-y-[24%] 2xl:-translate-y-[40%]',
  fadeHeightClassName = 'h-20',
  className = '',
  imageClassName = '',
  alt = 'Golden line art illustration of a Kentucky farm and distillery at sunset for Ginkins Gin background',
  src480 = '/imgs/about/ginkins-gin-heritage-farm-illustration-480.webp',
  src768 = '/imgs/about/ginkins-gin-heritage-farm-illustration-768.webp',
  src1200 = '/imgs/about/ginkins-gin-heritage-farm-illustration-1200.webp',
}: HeroCoverProps) {
  return (
    <div
      className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}
    >
      <div
        className={`absolute left-0 top-1/2 w-full ${translateYClassName} ${imageClassName}`}
        style={{ opacity: imageOpacity } as CSSProperties}
      >
        <picture className="block w-full">
          <source media="(max-width: 535px)" srcSet={src480} />
          <source media="(max-width: 1024px)" srcSet={src768} />
          <img
            src={src1200}
            alt={alt}
            className="block w-full h-auto select-none"
            loading="eager"
            fetchPriority="high"
            draggable={false}
          />
        </picture>
      </div>

      <div
        className={`absolute inset-x-0 bottom-0 ${fadeHeightClassName} bg-linear-to-t from-(--secondary-beige) to-transparent`}
      />
    </div>
  );
}
