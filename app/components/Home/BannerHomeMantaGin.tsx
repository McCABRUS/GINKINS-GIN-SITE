import Image from 'next/image';

export default function BannerHomeMantaGin() {
  return (
    <section className="relative w-screen aspect-4/5 md:aspect-16/7">
      <Image
        src="/manta-gin.png"
        alt="Manta Gin Bottle"
        fill
        className="object-cover object-right"
      />
    </section>
  );
}
