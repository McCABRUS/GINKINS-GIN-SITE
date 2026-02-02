import Image from 'next/image';

interface ImagesProps {
  img: string;
  alt: string;
}

export default function FooterMerchCarousel({ img, alt }: ImagesProps) {
  return (
    <Image
      src={img}
      alt={alt}
      className="h-140.75 w-100 object-cover"
      height={563}
      width={400}
    />
  );
}
