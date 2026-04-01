import Image from 'next/image';

interface CocktailCardProps {
  title: string;
  image: string;
  alt: string;
}

export default function CocktailCard({ title, image, alt }: CocktailCardProps) {
  return (
    <div className="w-full min-w-0 overflow-hidden rounded-xl bg-[#FFFAEE] text-black">
      <Image
        draggable={false}
        src={image}
        alt={alt}
        width={400}
        height={520}
        className="w-full h-auto object-cover"
      />

      <div className="py-6.25 text-center">
        <h5 className="uppercase">{title}</h5>
      </div>
    </div>
  );
}
