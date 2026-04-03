import Image from 'next/image';
import HeroCover from './../HeroCover';

export default function Hero() {
  return (
    <section className="relative w-screen overflow-hidden bg-(--secondary-beige) pt-12.75 lg:pt-27.75">
      <HeroCover />
      <div className="relative text-center max-xl:px-5 max-4xl:px-27.5 place-self-center">
        <h1 className="text-center text-(--primary-black)!">
          Connections that distill
          <br className="hidden 2xl:block" /> into something greater
        </h1>
        <div className="my-16 flex justify-center">
          <div className="h-47.5 w-50 md:h-64.25 md:w-65.5">
            <Image
              draggable={false}
              src="/imgs/about/ginkins-copper-distiller.svg"
              alt="Ginkins gin copper distiller icon"
              height={262}
              width={257}
              aria-hidden
              priority
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
