import Image from 'next/image';

export default function HeritageHomeSection() {
  return (
    <section className="relative w-full bg-(--secundary-beige) pt-37.25 md:pt-30 xl:pt-71 -mb-12 xs:-mb-35.25 overflow-hidden">
      <div className="relative mb-32 px-6 2xl:px-24">
        <h1 className="mt-30 md:mt-0 mx-auto text-center leading-[1.05] tracking-[-0.015em]">
          ROOTED IN
          <span className="hidden md:inline my-0 mx-10 xl:mx-20"></span>
          <br className="inline md:hidden" />
          TRADITION.
          <br />
          REFINED BY
          <br className="inline md:hidden" />
          CRAFT.
          <br />
          RAISED IN
          <br className="inline md:hidden" />
          LOUISVILLE
        </h1>
        <div className="absolute -top-57 md:-top-17.5 xl:-top-35 left-[75%] md:left-[49%] -translate-x-1/2 mr-7.5 w-20.25 h-27.5 xl:w-40 xl:h-56 pointer-events-none">
          <Image
            src="/HeritageHome/still.png"
            alt="Copper still"
            fill
            className="object-cover rounded-[999px]"
            priority
          />
        </div>
        <div className="absolute -top-32 md:top-10.5 xl:top-22.5 w-25 h-25 xl:w-40 xl:h-40 -ml-10 md:-ml-66.25 xl:-ml-132.5  left-1/2 -translate-x-1/2">
          <Image
            src="/HeritageHome/barn.png"
            alt="Barn"
            fill
            className="object-cover rounded-full"
          />
        </div>
        <div className="absolute -ml-10 left-1/2 -translate-x-1/2 h-21.25 w-26.25 -top-47 md:hidden pointer-events-none">
          <Image
            src="/HeritageHome/flower_m.svg"
            alt="Decorative flower"
            width={105}
            height={84}
            className="block md:hidden"
          />
        </div>
      </div>
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-20 px-6 lg:px-24 md:mb-10 lg:mb-0">
        <div className="relative h-150">
          <div className="absolute top-100 2xs:top-80 xs:top-70  md:top-0 right-0 w-33.5 h-44 xl:w-52 xl:h-72">
            <Image
              src="/HeritageHome/louisville.png"
              alt="Louisville skyline"
              fill
              className="object-cover rounded-[999px]"
            />
          </div>
          <div className="absolute h-52 w-50.5 top-110 xs:top-82 md:top-15 xl:top-25 right-15 xl:right-25 pointer-events-none">
            <Image
              src="/HeritageHome/flower.svg"
              alt="Decorative flower"
              width={309}
              height={301}
              className="hidden md:block"
            />
            <Image
              src="/HeritageHome/flower_m.svg"
              alt="Decorative flower"
              width={202}
              height={208}
              className="block md:hidden"
            />
          </div>
        </div>
        <div className="-mt-197 md:mt-0 max-w-full md:max-w-md">
          <p className="text-base leading-relaxed text-(--secondary-black) text-center md:text-left">
            A gin born not in the shadows of the past, but in the bold, soulful
            light of bourbon country. Here, roots run deep and quality means
            everything. We distill legacy into every citrus-bright bottle,
            honoring the traditions that shape us while crafting something
            unmistakably new. From the first vibrant sip of our Louisville Dry
            to the delicate bloom of elderflower in our Golden Bloom Gin,
            Ginkins isn’t just made to mix—it’s made to matter. This is more
            than gin. It’s a celebration of connection, flavor, and the moments
            that bring us together.
          </p>
          <button className="mt-15.75 items-center justify-center bg-(--primary-red-main) px-8 py-3 text-sm font-medium uppercase tracking-wide text-white transition hover:bg-(--primary-gold-main) mx-auto md:mx-0 grid">
            Find Ginkins Near to You
          </button>
        </div>
      </div>
      <div
        className="absolute border-solid border-black border-t border-r-0 border-b-0 border-l-0 shrink-0 w-13.75 h-0 z-20 bottom-70 2xs:bottom-80 xs:bottom-95 md:bottom-42 left-1/2 -translate-x-1/2"
        style={{
          transform: 'rotate(90deg) scale(1, 1)',
        }}
      ></div>
    </section>
  );
}
