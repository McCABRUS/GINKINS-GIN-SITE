import Image from 'next/image';

export default function BannerHomeMantaGin() {
  return (
    <section className="relative w-screen aspect-4/5 md:aspect-16/7">
      <div
        className="absolute border-solid border-background border-t border-r-0 border-b-0 border-l-0 shrink-0 w-16.5 top-8 h-0 z-20 left-1/2 -translate-x-1/2"
        style={{
          transform: 'rotate(90deg) scale(1, 1)',
        }}
      ></div>
      <Image
        src="/imgs/home/ginkins-gin-lifestyle-picnic.webp"
        alt="Manta Gin Bottle"
        fill
        className="object-cover object-right"
      />
    </section>
  );
}
