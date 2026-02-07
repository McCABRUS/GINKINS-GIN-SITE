import Image from 'next/image';

export default function CocktailsHero() {
  return (
    <section className="relative w-screen overflow-hidden bg-(--secondary-beige) px-5 sm:px-28.25 py-27.75">
      <div className="absolute inset-0 pointer-events-none xl:mt-87.5">
        <Image
          src="/about/ginkins-gin-heritage-farm-illustration.png"
          alt="Golden line art illustration of a Kentucky farm and distillery at sunset for Ginkins Gin background"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="relative  text-center">
        <h1 className="text-center">
          Cocktails & Pairings <br />
          <span className="text-(--primary-black)!">Drink Like a Pro</span>
        </h1>
        <div className="my-16 flex justify-center">
          <div className="h-57.75 w-43.75">
            <Image
              src="/cocktails/ginkins-gin-icon-cocktail-glass-alt.svg"
              alt="cocktail glass icon"
              height={231}
              width={175}
            />
          </div>
        </div>
        <div className="flex flex-col items-center gap-4">
          <span className="h-12 w-px" />
          <h3 className="text-center">Try</h3>
        </div>
      </div>
      <div
        className="absolute border-solid border-(--primary-red-main) border-t border-r-0 border-b-0 border-l-0 shrink-0 w-18.75 h-0 z-20 bottom-45.5 left-1/2 -translate-x-1/2"
        style={{
          transform: 'rotate(90deg) scale(1, 1)',
        }}
      ></div>
    </section>
  );
}
