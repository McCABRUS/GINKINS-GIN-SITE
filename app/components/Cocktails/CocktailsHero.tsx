import Image from 'next/image';

export default function CocktailsHero() {
  return (
    <section className="relative w-screen overflow-hidden bg-(--secondary-beige) px-5 sm:px-28.25 py-12.75">
      <div className="absolute inset-0 pointer-events-none">
        <picture>
          <source
            media="(max-width: 640px)"
            srcSet="/imgs/about/ginkins-gin-heritage-farm-illustration-480.webp"
          />
          <source
            media="(max-width: 1024px)"
            srcSet="/imgs/about/ginkins-gin-heritage-farm-illustration-768.webp"
          />
          <img
            src="/imgs/about/ginkins-gin-heritage-farm-illustration-1200.webp"
            alt="Golden line art illustration of a Kentucky farm and distillery at sunset for Ginkins Gin background"
            className="h-full w-full object-cover object-center xl:top-50"
            loading="eager"
            fetchPriority="high"
          />
        </picture>
        <div className="absolute inset-x-0 bottom-0 h-20 bg-linear-to-t from-(--secondary-beige) to-transparent" />
      </div>
      <div className="relative  text-center">
        <h1 className="text-center">
          Cocktails &amp; Pairings <br />
          <span className="text-(--primary-black)!">Drink Like a Pro</span>
        </h1>
        <div className="my-16 flex justify-center">
          <div className="h-57.75 w-43.75">
            <Image
              draggable={false}
              src="/imgs/cocktails/ginkins-gin-icon-cocktail-glass-alt.svg"
              alt="cocktail glass icon"
              height={231}
              width={175}
              aria-hidden
              priority
            />
          </div>
        </div>
        <div className="flex flex-col items-center gap-4">
          <span className="h-12 w-px" />
          <h3 className="text-center">Try</h3>
        </div>
      </div>
      <div
        className="absolute border-solid border-(--primary-red-main) border-t border-r-0 border-b-0 border-l-0 shrink-0 w-18.75 h-0 z-20 bottom-30 left-1/2 -translate-x-1/2"
        style={{
          transform: 'rotate(90deg) scale(1, 1)',
        }}
      ></div>
    </section>
  );
}
