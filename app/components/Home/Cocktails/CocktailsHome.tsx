import Image from 'next/image';
import Link from 'next/link';
import { cocktailsData } from './CocktailsData';
import CocktailsCarouselMobile from './CocktailsCarouselMobile';

export default function CocktailsHome() {
  return (
    <section className="w-screen bg-(--secondary-beige) pt-28 pb-12">
      <div
        className="absolute border-solid border-(--primary-black) border-t border-r-0 border-b-0 border-l-0 shrink-0 w-17.75 -mt-19.25 h-0 z-20 left-1/2 -translate-x-1/2"
        style={{
          transform: 'rotate(90deg) scale(1, 1)',
        }}
      ></div>
      <div className="mx-auto max-4xl:px-37.25 max-w-480 max-xl:px-5">
        <div className="text-center mx-auto relative">
          <h3 className="text-lg! inline-block text-(--primary-red-main)! mb-16 reveal-on-scroll-top">
            Cocktails &amp; Pairings – Drink <br className="block md:hidden" />{' '}
            Like a Pro
          </h3>

          <h1 className="font-serif text-[42px]! leading-[1.05] uppercase text-(--primary-black)! relative lg:text-[76px]! 2xl:text-[90px]! reveal-on-scroll-center">
            Shake
            <br className="block md:hidden" /> Things Up.
            <br />
            <span className="hidden md:inline">Sip</span>
            <span className="relative inline-block align-text-top mx-2 z-0 md:mt-1 xl:mt-0">
              <span className="inline-block w-40.25 h-40.25 md:h-52.5 md:w-52.5 rounded-full overflow-hidden relative z-10">
                <Image
                  draggable={false}
                  src="/imgs/home/ginkins-gin-signature-cocktail-grapefruit.webp"
                  alt="Ginkins Gin signature cocktail being prepared with fresh grapefruit and premium botanicals"
                  className="h-full w-full object-cover"
                  width={238}
                  height={210}
                />
              </span>
              <Image
                draggable={false}
                src="/imgs/home/ginkins-gin-icon-botanical-flower.svg"
                alt=""
                width={227}
                height={226}
                className="top-20 md:top-25 -right-12 md:-right-15 lg:-right-25 absolute z-0 blur-sm"
                aria-hidden
              />
            </span>
            <span className="block md:hidden relative z-50">Sip</span>{' '}
            <span className="z-50 relative">Something</span>
            <br className="block md:hidden" />{' '}
            <span className="z-50 relative">New</span>.
          </h1>
        </div>
        <div className="mt-16 md:-mt-36 lg:-mt-20 max-w-2xl md:mx-auto text-left mx-7.5 md:ml-[50%] grid z-1 relative">
          <p className="text-center md:text-left text-base leading-relaxed text-(--primary-black) reveal-on-scroll-left">
            At Ginkins, we believe cocktails should be both elevated and easy to
            enjoy. Whether you’re mixing for one or making magic for a crowd,
            our recipes are designed to spark joy, surprise your palate, and
            make the moment unforgettable. With simple ingredients, step-by-step
            instructions, and tips from the Ginkins team—you’ve got everything
            you need to sip like a pro.
          </p>
        </div>
        <div className="mt-28 grid grid-cols-1 md:grid-cols-3 gap-4">
          {cocktailsData.map((card, i) => (
            <div key={i} className="hidden md:grid    ">
              <div className="aspect-390/565 overflow-hidden">
                <Image
                  draggable={false}
                  src={card.img}
                  height={565}
                  width={395}
                  alt={card.alt}
                  className="h-full w-full object-cover reveal-on-scroll-center"
                />
              </div>

              <h6 className="mt-8 reveal-on-scroll-top">{card.title}</h6>
              <p className="mt-4 text-base leading-relaxed text-(--primary-black) reveal-on-scroll-top">
                {card.text}
              </p>
              <div className="mt-6 self-end reveal-on-scroll-top">
                <Link
                  href={`/cocktails#${card.sectionTarget}`}
                  className="inline-flex items-baseline justify-center animatedButton px-5 py-1.5 transition group"
                >
                  <h5 className="text-lg! group-hover:text-(--primary-black)! group-active:text-(--primary-black)! group-focus:text-(--primary-black)!">
                    See More
                  </h5>
                </Link>
              </div>
            </div>
          ))}
          <div className="block md:hidden">
            <CocktailsCarouselMobile />
          </div>
        </div>
      </div>
    </section>
  );
}
