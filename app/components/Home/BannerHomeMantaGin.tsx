import Image from 'next/image';

export default function BannerHomeMantaGin() {
  return (
    <section className="relative w-full h-125 md:h-186.5">
      <Image
        src="/manta-gin.png"
        alt="Manta Gin Bottle"
        fill
        className="object-cover object-right"
      />
    </section>
  );
}
