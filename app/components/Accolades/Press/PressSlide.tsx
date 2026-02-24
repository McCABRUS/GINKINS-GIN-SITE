import Image from 'next/image';

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
      <div className="mb-6 lg:h-12 lg:w-12 h-18 w-18 relative">
        <Image src={logo} fill className="object-contain" alt={alt} />
      </div>

      <h2 className="mb-4 max-w-81.25">{title}</h2>

      <p className="max-w-81.25 text-base text-(--primary-black) leading-6 font-normal">
        {description}
      </p>
    </div>
  );
}
