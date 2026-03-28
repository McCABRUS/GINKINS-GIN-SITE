'use client';

import Image from 'next/image';
import Link from 'next/link';

type CollectionCardProps = {
  title: string;
  text: string;
  img: string;
  alt: string;
  linkId: string;
};

export default function CollectionCard({
  title,
  text,
  img,
  alt,
  linkId,
}: CollectionCardProps) {
  return (
    <article className="collection-card h-full w-full lg:flex shrink-0 cursor-pointer select-none gap-8 xl:ml-0 lg:ml-35">
      <div className="collection-card__media shrink-0 w-full lg:w-95 h-86 lg:h-168.25 relative mt-8 lg:mt-0">
        <Image
          className="object-contain filter-[drop-shadow(26px_10px_4px_#111)] lg:filter-[drop-shadow(60px_8px_10px_#111)] -ml-6.25 lg:ml-0"
          fill
          alt={alt}
          src={img}
        />
        <div
          className="bg-[rgba(0,0,0,0.40)] rounded-[50%] w-25 lg:w-45.75 h-6 absolute left-[36%] md:left-[43%] lg:left-35 -bottom-3.75 lg:-bottom-5.5"
          style={{ filter: 'blur(5.72px)' }}
        />
      </div>

      <div className="collection-card__content pb-16.5 flex flex-col lg:gap-13.5 items-start justify-start shrink-0 w-full lg:w-82 relative top-5 lg:top-30 px-0">
        <div className="flex flex-col gap-8.25 items-start self-stretch shrink-0 relative flex-1 px-10 md:px-37.25 lg:px-0 place-content-end flex-wrap justify-end">
          <h2 className="text-(--primary-gold-main)! text-center lg:text-left w-full lg:w-65 whitespace-pre-wrap uppercase relative self-stretch">
            {title}
          </h2>

          <div className="text-background! text-center lg:text-left leading-[24.16px] self-stretch lg:h-37 whitespace-pre-wrap mb-13.5">
            {text}
          </div>
        </div>

        <div className="flex flex-col gap-2.5 items-start justify-start shrink-0 relative lg:-top-25 mx-auto lg:mx-0">
          <Link
            href={`https://ginkinsgin.distilleryspirits.com/#${linkId}`}
            target="_blank"
            className="items-center justify-center bg-(--primary-red-main) px-5 py-1.5 transition hover:bg-(--primary-gold-main) active:bg-(--primary-gold-main) focus:bg-(--primary-gold-main) mx-auto md:mx-0 grid max-w-65 group"
          >
            <h5 className="text-background! text-lg! group-hover:text-(--primary-black)! group-active:text-(--primary-black)! group-focus:text-(--primary-black)!">
              Find Ginkins Near to You
            </h5>
          </Link>
        </div>
      </div>
    </article>
  );
}
