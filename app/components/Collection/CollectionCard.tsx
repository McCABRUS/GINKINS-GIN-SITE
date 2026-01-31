import Image from 'next/image';

interface CardProps {
  id: number;
  title: string;
  text: string;
  img: string;
  key: number;
  alt: string;
}

export default function CollectionCard({
  id,
  key,
  title,
  text,
  img,
  alt,
}: CardProps) {
  return (
    <div className="h-full w-181 flex shrink-0 cursor-pointer">
      <div className="shrink-0 w-95 h-[672.99px] relative">
        <Image className="object-contain" fill alt={alt} src={img} />
        <div
          className="bg-[rgba(0,0,0,0.40)] rounded-[50%] w-45.75 h-6 absolute left-27 top-[648.99px]"
          style={{ filter: 'blur(5.72px)' }}
        ></div>
      </div>
      <div className="pb-16.5 flex flex-col gap-13.5 items-start justify-start shrink-0 w-82 relative top-30">
        <div className="flex flex-col gap-8.25 items-start justify-start self-stretch shrink-0 relative">
          <h2 className="text-(--primary-gold-main)! text-left w-65 whitespace-pre-wrap uppercase relative self-stretch">
            {title}
          </h2>
          <div className="text-background! text-left leading-[24.16px] self-stretch flex-1 h-37 whitespace-pre-wrap">
            {text}
          </div>
        </div>
        <div className="flex flex-col gap-2.5 items-start justify-start shrink-0 relative">
          <button className="inline-flex items-center justify-center bg-(--primary-red-main) px-8 py-3 text-sm font-medium uppercase tracking-wide text-white transition hover:bg-(--primary-gold-main)">
            FIND GINKINS NEAR TO YOU
          </button>
        </div>
      </div>
    </div>
  );
}
