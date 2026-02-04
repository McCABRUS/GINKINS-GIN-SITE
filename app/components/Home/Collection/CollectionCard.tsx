import Image from 'next/image';

interface CardProps {
  title: string;
  text: string;
  img: string;
  alt: string;
}

export default function CollectionCard({ title, text, img, alt }: CardProps) {
  return (
    <div className="h-full w-181 lg:flex shrink-0 cursor-pointer">
      <div className="shrink-0 w-full lg:w-95 h-86 lg:h-168.25 relative mt-8 lg:mt-0">
        <Image
          className="object-contain filter-[drop-shadow(50px_-15px_40px_#000)]"
          fill
          alt={alt}
          src={img}
        />
        <div
          className="bg-[rgba(0,0,0,0.40)] rounded-[50%] w-25 lg:w-45.75 h-6 absolute left-[47%] lg:left-35 top-82 lg:top-162.25"
          style={{ filter: 'blur(5.72px)' }}
        ></div>
      </div>
      <div className="pb-16.5 flex flex-col gap-13.5 items-start justify-start shrink-0 w-full lg:w-82 relative top-5 lg:top-30 px-25 sm:px-0">
        <div className="flex flex-col gap-8.25 items-start justify-start self-stretch shrink-0 relative flex-1 px-25 lg:px-0">
          <h2 className="text-(--primary-gold-main)! text-center lg:text-left w-full lg:w-65 whitespace-pre-wrap uppercase relative self-stretch">
            {title}
          </h2>
          <div className="text-background! text-center lg:text-left leading-[24.16px] self-stretch h-37 whitespace-pre-wrap grow">
            {text}
          </div>
        </div>
        <div className="flex flex-col gap-2.5 items-start justify-start shrink-0 relative top-18 xs:top-18 md:-top-4 lg:-top-25 mx-auto lg:mx-0">
          <button className="inline-flex items-center justify-center bg-(--primary-red-main) px-8 py-3 text-sm font-medium uppercase tracking-wide text-white transition hover:bg-(--primary-gold-main)">
            FIND GINKINS NEAR TO YOU
          </button>
        </div>
      </div>
    </div>
  );
}
