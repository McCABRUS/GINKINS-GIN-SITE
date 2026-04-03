import Image from 'next/image';
export default function HeritageInnovation() {
  return (
    <section className="w-screen bg-(--primary-red-main) h-182.5 md:h-auto py-24 md:py-37">
      <div className="max-lg:px-5 max-4xl:px-37.25 md:max-w-480 place-self-center w-full">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="reveal-on-scroll">
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
            <h3 className="block text-center md:text-left text-(--primary-gold-main)! mb-4.25 md:mb-6">
              The Ginkins Story
            </h3>

            <h1 className="text-center md:text-left text-background! mb-0 xl:text-[90px]! lg-text-[70px]!">
              A Heritage
              <br />
              of <br className="inline md:hidden" />
              Innovation
            </h1>
          </div>
          <div className="flex gap-10 flex-col items-end justify-end">
            <p className="text-4xl font-cormorant-garamond leading-snug text-(--primary-gold-main) text-right italic max-w-full reveal-on-scroll">
              Rooted in Louisville.
              <br />
              Crafted to Inspire.
            </p>
            <div className="h-24 w-20.25 hidden md:flex reveal-on-scroll-center">
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
