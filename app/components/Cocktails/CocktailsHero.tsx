import Image from 'next/image';
import HeroCover from './../HeroCover';

export default function CocktailsHero() {
  return (
    <section className="relative w-screen overflow-hidden bg-(--secondary-beige) px-5 sm:px-28.25 py-12.75 lg:py-30.5">
      <HeroCover translateYClassName="-translate-y-[36%] pq:-translate-y-[0%] xs:-translate-y-[45%] md:-translate-y-[26%] lg:-translate-y-[36%] xl:-translate-y-[35%] 2xl:-translate-y-[45%]" />
      <div className="relative  text-center">
        <h1 className="text-center reveal-on-load-top">
          Cocktails &amp; Pairings <br />
          <span className="text-(--primary-black)!">Drink Like a Pro</span>
        </h1>
        <div className="mt-7.75 mb-30 flex justify-center">
          <div className="h-66.75 w-44">
            <Image
              draggable={false}
              src="/imgs/cocktails/ginkins-gin-icon-cocktail-glass-alt.svg"
              alt="cocktail glass icon  reveal-on-load-center"
              height={267}
              width={176}
              aria-hidden
              priority
            />
          </div>
        </div>
        <div className="items-center gap-4">
          <span className="h-12 w-px" />
          <h3 className="text-center  reveal-on-load-top">Try</h3>
        </div>
      </div>
      <div
        className="absolute border-solid border-(--primary-red-main) border-t border-r-0 border-b-0 border-l-0 shrink-0 w-18.75 h-0 z-20 bottom-33.75 lg:bottom-52.5 left-1/2 -translate-x-1/2"
        style={{
          transform: 'rotate(90deg) scale(1, 1)',
        }}
      ></div>
    </section>
  );
}
