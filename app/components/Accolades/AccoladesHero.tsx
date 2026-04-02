import Image from 'next/image';
import HeroCover from './../HeroCover';

export default function AccoladesHero() {
  return (
    <section className="relative w-screen overflow-hidden bg-(--secondary-beige) px-5 sm:px-28.25 py-12.75 lg:pt-26.5 lg:py-12.5">
      <HeroCover translateYClassName="-translate-y-[36%]  xs:-translate-y-[45%] pq:-translate-y-[0%] md:-translate-y-[15%] lg:-translate-y-[28%] xl:-translate-y-[30%] 2xl:-translate-y-[40%]" />
      <div className="relative  text-center">
        <h2 className="mb-11.25 text-center">ACCOLADES &amp; PRESS</h2>
        <h1 className="text-center">
          RAISING THE BAR,{' '}
          <span className="text-(--primary-black)!">
            ONE <br />
            AWARD AT A TIME
          </span>
        </h1>
        <div className="mb-33.75 mt-12.5 flex justify-center">
          <div className="h-67.25 w-69">
            <Image
              draggable={false}
              src="/imgs/accolades/ginkins-gin-icon-stars-black-duo.svg"
              alt="Leaves icon"
              height={269}
              width={276}
              aria-hidden
              priority
            />
          </div>
        </div>
        <div className="items-center gap-5.5">
          <span className="h-12 w-px" />
          <h3 className="text-center">EXPERIENCE</h3>
        </div>
      </div>
      <div
        className="absolute border-solid border-(--primary-red-main) border-t border-r-0 border-b-0 border-l-0 shrink-0 w-18.75 h-0 z-20 bottom-35 left-1/2 -translate-x-1/2"
        style={{
          transform: 'rotate(90deg) scale(1, 1)',
        }}
      ></div>
    </section>
  );
}
