import Image from 'next/image';

export default function BarBookFeature() {
  return (
    <section className="w-full bg-(--secondary-beige) py-24">
      <div className="mx-auto px-37.5 py-37.5">
        <div className="text-center">
          <h1 className="mb-5">The Bar Book</h1>

          <h2 className="mb-10 font-serif text-4xl tracking-tight lg:text-5xl">
            Bar Stories
          </h2>
        </div>

        <div className="grid grid-cols-1 items-center gap-36 lg:grid-cols-2">
          <div className="flex justify-center lg:justify-start">
            <div className="relative h-77 md:h-110 md:w-80 lg:h-120 xl:h-159.25 lg:w-auto max-w-108.75">
              <Image
                src="/accolades/ginkins-gin-trio-silver-tray.png"
                alt="Elegant hands holding a silver tray with a trio of Ginkins Gin bottles against a red velvet curtain"
                width={414}
                height={637}
                className="relative z-20 h-77 w-52.5 rounded-t-full object-cover md:h-110 md:w-80 lg:h-120 lg:w-auto xl:h-159.25 lg:max-w-108.75"
              />
              <div className="absolute bottom-0 -right-5.5 lg:-right-11.25 h-37.25 md:h-55 xl:h-80 lg:h-60 w-63.5 md:w-91 lg:w-101.5 xl:w-131.25 bg-(--primary-gold-main) z-10" />
              <div className="absolute inset-x-0 bottom-8 z-30 flex justify-center">
                <Image
                  src="/accolades/ginkins-gin-the-bar-book-feature.png"
                  alt="The Bar Book official logo - As featured and recommended premium gin"
                  width={290}
                  height={290}
                  className="h-72.5 w-72.5 object-cover"
                />
              </div>
            </div>
          </div>
          <div className="text-center lg:text-left">
            <div className="mb-6 flex justify-center lg:justify-start">
              <Image
                src="/accolades/ginkins-gin-icon-sparkle-shield.svg"
                alt=""
                width={42}
                height={52}
                aria-hidden
              />
            </div>
            <h4 className="mb-6 text-(--primary-black)! ">Tasting Room</h4>
            <p className="mb-7 text-base leading-6 text-(--primary-black) font-normal max-w-125">
              Ginkins Louisville Dry Gin was featured in The Bar Book’s Bar
              Stories – Tasting Room series, highlighting our Kentucky-crafted
              London Dry–style gin and its distinctive character.
            </p>
            <p className="mb-10 text-4xl font-cormorant-garamond italic leading-normal font-medium max-w-125 text-(--primary-black)">
              The Bar Book – Bar Stories:
              <br />
              Ginkins Louisville Dry Gin Tasting Room
              <br />
              November 5, 2025
            </p>
            <button className="inline-flex items-center justify-center bg-(--primary-red-main) px-8 py-3 text-lg font-medium uppercase tracking-wide  transition hover:bg-(--primary-gold-main)">
              <h5 className="text-background!">
                Read the feature on The Bar Book
              </h5>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
