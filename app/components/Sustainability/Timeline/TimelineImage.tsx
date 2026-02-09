import Image from 'next/image';

export default function TimelineImage({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  return (
    <div className="relative w-43.75 h-59.5 rounded-full overflow-hidden">
      <Image src={src} alt={alt} fill className="object-cover" />
    </div>
  );
}
