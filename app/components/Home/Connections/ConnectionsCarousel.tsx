import Image from 'next/image';

interface ImagesProps {
  img: string;
  alt: string;
}

export default function ConnectionsCarousel({ img, alt }: ImagesProps) {
  return (
    <Image
      src={img}
      alt={alt}
      className="h-76.5 w-71.75 object-cover my-4"
      height={306}
      width={287}
    />
  );
}
