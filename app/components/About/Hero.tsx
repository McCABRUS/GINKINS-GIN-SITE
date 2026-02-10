import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative w-screen overflow-hidden bg-(--secondary-beige) px-5 sm:px-28.25 pt-27.75">
      <div className="absolute inset-0 pointer-events-none xl:mt-87.5">
        <Image
          src="/about/ginkins-gin-heritage-farm-illustration.png"
          alt="Golden line art illustration of a Kentucky farm and distillery at sunset for Ginkins Gin background"
          fill
          className="object-cover"
        />
      </div>
      <div className="relative  text-center">
        <h3 className="mb-6 text-center lg:text-left">About us</h3>
        <h1 className="text-center text-(--primary-black)!">
          Connections <br className="inline lg:hidden" />
          that distill
          <br />
          into <br className="inline lg:hidden" />
          something <br className="inline lg:hidden" />
          greater
        </h1>
        <div className="my-16 flex justify-center">
          <div className="h-47.5 w-50 md:h-64.25 md:w-65.5">
            <Image
              src="/about/ginkins-copper-distiller.svg"
              alt="Ginkins gin copper distiller icon"
              height={262}
              width={257}
              aria-hidden
            />
          </div>
        </div>
        <div className="flex flex-col items-center gap-4">
          <span className="h-12 w-px" />
          <h3 className="text-center">The soul of Ginking’s Gin</h3>
        </div>
      </div>
      <div
        className="absolute border-solid border-(--primary-red-main) border-t border-r-0 border-b-0 border-l-0 shrink-0 w-18.75 h-0 z-20 bottom-21 md:bottom-25 left-1/2 -translate-x-1/2"
        style={{
          transform: 'rotate(90deg) scale(1, 1)',
        }}
      ></div>
    </section>
  );
}
