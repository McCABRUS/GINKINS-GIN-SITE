import Image from 'next/image';

interface AwardItemProps {
  image: string;
  alt: string;
  title: string;
  subtitle: string;
  showDivider?: boolean;
}

export default function AwardItem({
  image,
  alt,
  title,
  subtitle,
  showDivider = true,
}: AwardItemProps) {
  return (
    <div
      className={`
        flex flex-col items-center text-center px-6 
        ${showDivider ? 'lg:border-r lg:border-neutral-400' : ''}
      `}
    >
      <Image src={image} alt={alt} width={133} height={110} />

      <h5 className="text-(--primary-red-main)! text-lg! leading-6.75 my-5 max-w-[143px]">
        {title}
      </h5>
      <p className="text-base text-(--primary-black) max-w-[143px]">
        {subtitle}
      </p>
    </div>
  );
}
