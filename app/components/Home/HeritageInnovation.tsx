import Image from 'next/image';
export default function HeritageInnovation() {
  return (
    <section className="w-screen bg-(--primary-red-main) h-182.5 md:h-auto py-24 md:py-37">
      <div className="mx-auto max-x-full md:max-w-350 px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div>
            <div className="mx-auto h-15 w-15 flex md:hidden mb-16.5">
              <Image
                src="/home/ginkins-gin-isotype.svg"
                alt="ginkins isotype"
                height={60}
                width={60}
                aria-hidden
              />
            </div>
            <h3 className="block text-center md:text-left text-(--primary-gold-main)! mb-4.25 md:mb-6">
              The Ginkins Story
            </h3>

            <h1 className="text-center md:text-left text-background! mb-16.5 md:mb-0 xl:text-[90px]! lg-text-[70px]!">
              A Heritage
              <br />
              of <br className="inline md:hidden" />
              Innovation
            </h1>
          </div>
          <div className="flex gap-10 flex-col items-end justify-end">
            <p className="text-4xl font-cormorant-garamond leading-snug text-(--primary-gold-main) text-right italic max-w-full md:max-w-xs">
              Rooted in Louisville.
              <br />
              Crafted to Inspire.
            </p>
            <div className="h-24 w-24 hidden md:flex">
              <Image
                src="/home/ginkins-gin-isotype.svg"
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
