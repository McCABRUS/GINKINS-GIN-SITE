'use client';

import Image from 'next/image';

export default function GridCard({
  title,
  alt,
  image,
  description,
  order,
  bgColor,
  isLeft,
  buttonMode = 'link',
  buttonLabel = 'Shop ONLINE',
  buttonLink,
  urlTarget,
  onButtonClick,
}: {
  title: string;
  image: string;
  alt: string;
  order?: string;
  description: string;
  bgColor: string;
  isLeft?: boolean;
  buttonMode?: 'link' | 'modal';
  buttonLabel?: string;
  buttonLink?: string;
  urlTarget?: string;
  onButtonClick?: () => void;
}) {
  const buttonClassName =
    'relative w-60 h-9.75 mt-9.5 flex mx-auto xl:mx-0 content-start items-center justify-center px-5 py-1.5 transition animatedButton group';

  return (
    <div
      className={`flex flex-col items-center lg:items-start z-50 ${order} ${isLeft ? 'lg:place-self-start' : 'lg:place-self-end'}`}
    >
      <div
        className={`relative mb-8 w-40 h-40 lg:h-57.5 lg:w-57.5 rounded-full ${bgColor}`}
      >
        <div className="relative w-[132%] h-[131%] left-[-16%] top-[-16%] reveal-on-scroll-top">
          <Image
            draggable={false}
            src={image}
            alt={alt}
            fill
            className="object-cover"
          />
        </div>
      </div>

      <h2 className="text-center xl:text-left xl:place-self-start text-background! w-65 mt-3.5 text-4xl! leading-10! reveal-on-scroll-top">
        {title}
      </h2>
      <div className="w-[60%] lg:w-80  reveal-on-scroll-top">
        <p className="text-center xl:text-left text-base leading-6 font-normal text-background my-5">
          {description}
        </p>
        {buttonMode === 'modal' ? (
          <button
            type="button"
            onClick={onButtonClick}
            aria-haspopup="dialog"
            className={buttonClassName}
          >
            <h5 className="group-hover:text-(--primary-black)! group-active:text-(--primary-black)! group-focus:text-(--primary-black)!">
              {buttonLabel}
            </h5>
          </button>
        ) : (
          <a
            href={`${buttonLink}`}
            className={buttonClassName}
            target={urlTarget}
          >
            <h5 className="group-hover:text-(--primary-black)! group-active:text-(--primary-black)! group-focus:text-(--primary-black)!">
              {buttonLabel}
            </h5>
          </a>
        )}
      </div>
    </div>
  );
}
