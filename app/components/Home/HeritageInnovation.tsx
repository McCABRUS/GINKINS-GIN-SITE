import Image from 'next/image';
export default function HeritageInnovation() {
  return (
    <section className="w-screen bg-(--primary-red-main) h-182.5 md:h-auto py-24 md:py-37">
      <div className="max-lg:px-5 max-4xl:px-37.25 md:max-w-480 place-self-center w-full mx-auto">
        <div className="flex md:grid xl:flex md:grid-cols-[1fr_1fr] flex-col md:flex-row items-center justify-between gap-12">
          <div className="h-full reveal-on-scroll">
            <div className="mx-auto h-15 w-15 flex md:hidden mb-16.5">
              <Image
                draggable={false}
                src="/imgs/home/ginkins-gin-isotype.svg"
                alt="ginkins isotype"
                height={60}
                width={60}
                aria-hidden
              />
            </div>
            <h3 className="block text-center md:text-left text-(--primary-gold-main)! mb-4.25 md:mb-6 reveal-on-scroll-top">
              The Ginkins Story
            </h3>

            <h1 className="text-center md:text-left text-background! mb-0 xl:text-[90px]! lg-text-[70px]! reveal-on-scroll-top">
              A Heritage
              <br />
              of <br className="inline md:hidden" />
              Innovation
            </h1>
          </div>
          <div className="flex lg:gap-10 gap-6 flex-col items-end justify-end">
            <p className="text-4xl font-cormorant-garamond leading-snug text-(--primary-gold-main) text-right italic max-w-full reveal-on-scroll-left">
              Rooted in Louisville.
              <br />
              Crafted to Inspire.
            </p>
            <div className="h-24 w-20.25 hidden md:flex reveal-on-scroll-center reveal-on-scroll-left">
              <Image
                draggable={false}
                src="/imgs/home/ginkins-gin-isotype.svg"
                alt=""
                height={81}
                width={81}
                aria-hidden
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
