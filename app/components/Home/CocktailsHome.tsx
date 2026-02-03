import Image from 'next/image';

export default function CocktailsHome() {
  return (
    <section className="w-screen bg-(--secundary-beige) pt-28 pb-12">
      <div
        className="absolute border-solid border-(--primary-black) border-t border-r-0 border-b-0 border-l-0 shrink-0 w-17.75 -mt-19.25 h-0 z-20 left-1/2 -translate-x-1/2"
        style={{
          transform: 'rotate(90deg) scale(1, 1)',
        }}
      ></div>
      <div className="mx-auto max-w-350 px-6">
        <div className="text-center mx-auto">
          <h3 className="inline-block tracking-widest text-(--primary-red-main)! mb-10">
            Cocktails & Pairings – Drink Like a Pro
          </h3>

          <h1 className="font-serif text-[56px] leading-[1.05] uppercase text-(--primary-black)!">
            Shake Things Up.
            <br />
            Sip{' '}
            <span className="relative inline-block align-text-top mx-2">
              <span className="inline-block h-52.5 w-52.5 rounded-full overflow-hidden relative z-10">
                <Image
                  src="/CocktailsHome/cocktail-circle.png"
                  alt=""
                  className="h-full w-full object-cover"
                  width={238}
                  height={210}
                />
              </span>
              <Image
                src="/HeritageHome/flower.svg"
                alt="Decorative flower"
                width={227}
                height={226}
                className="hidden md:block top-25 -right-25 absolute"
              />
            </span>
            Something New.
          </h1>
        </div>
        <div className="mt-16 max-w-2xl mx-auto text-left ml-[50%]">
          <p className="text-base leading-relaxed text-(--primary-black)">
            At Ginkins, we believe cocktails should be both elevated and easy to
            enjoy. Whether you’re mixing for one or making magic for a crowd,
            our recipes are designed to spark joy, surprise your palate, and
            make the moment unforgettable. With simple ingredients, step-by-step
            instructions, and tips from the Ginkins team—you’ve got everything
            you need to sip like a pro.
          </p>

          <div className="mt-8">
            <button className="inline-flex items-center justify-center bg-(--primary-red-main) px-8 py-3 text-sm font-medium uppercase tracking-wide text-background transition hover:bg-(--primary-gold-main)">
              Shop Online
            </button>
          </div>
        </div>
        <div className="mt-28 grid grid-cols-1 md:grid-cols-3 gap-5.25">
          {[
            {
              title: `Signature House  <br /> Creations `,
              image: '/CocktailsHome/gin-negroni.png',
              alt: 'Gin Negroni',
            },
            {
              title: 'Classic Ginkins <br /> Cocktails',
              image: '/CocktailsHome/classic_ginkins_cocktails.png',
              alt: 'Classic Ginkins Cocktails',
            },
            {
              title: 'Food <br /> Pairings',
              image: '/CocktailsHome/food_pairings.png',
              alt: 'Food Pairings',
            },
          ].map((card, i) => (
            <div key={i}>
              <div className="h-148 overflow-hidden">
                <Image
                  src={card.image}
                  height={565}
                  width={395}
                  alt={card.alt}
                  className="h-full w-full object-cover"
                />
              </div>

              <h6
                className="mt-8"
                dangerouslySetInnerHTML={{ __html: card.title }}
              ></h6>
              <p className="mt-4 text-base leading-relaxed text-(--primary-black)">
                Our signature gin. Inspired by the Southern hospitality of
                Louisville, Kentucky, this award-winning expression invites you
                to reimagine what a classic gin can be.
              </p>
              <div className="mt-6">
                <button className="inline-flex items-baseline justify-center bg-(--primary-red-main) px-8 py-3 text-sm font-medium uppercase tracking-wide text-white transition hover:bg-(--primary-gold-main)">
                  See More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
