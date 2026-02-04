import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative w-screen overflow-hidden bg-(--secundary-beige) px-28.25 pt-27.75">
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src="/about/background-farm.png"
          alt="Copper still"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="relative  text-center">
        <h3 className="mb-6 text-left">About us</h3>
        <h1 className="text-center text-(--primary-black)!">
          Connections that distill
          <br />
          into something greater
        </h1>
        <div className="my-16 flex justify-center">
          <div className="h-64.25 w-65.5">
            <Image
              src="/about/ginkins-copper-distiller.svg"
              alt="Ginkins gin copper distiller icon"
              height={262}
              width={257}
            />
          </div>
        </div>
        <div className="flex flex-col items-center gap-4">
          <span className="h-12 w-px" />
          <h3 className="text-center">The soul of Ginking’s Gin</h3>
        </div>
      </div>
    </section>
  );
}
