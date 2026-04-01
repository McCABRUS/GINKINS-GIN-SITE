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
      className={`flex flex-col items-center text-center ${showDivider ? 'lg:border-r lg:border-(--primary-black)' : ''}`}
    >
      <Image
        draggable={false}
        src={image}
        alt={alt}
        width={130}
        height={130}
        className="w-32.5 h-32.5 object-cover"
      />

      <h5 className="text-(--primary-red-main)! text-lg! leading-6.75 my-5 max-w-35.75">
        {title}
      </h5>
      <p className="text-base text-(--primary-black) max-w-35.75">{subtitle}</p>
    </div>
  );
}
