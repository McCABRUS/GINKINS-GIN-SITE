import Image from 'next/image';
import Link from 'next/link';

export default function HeritageHomeSection() {
  return (
    <section className="relative w-full bg-(--secondary-beige) pt-37.25 md:pt-36 xl:pt-71 mb-0 md:mb-0 overflow-hidden max-w-480 pb-30 md:pb-0">
      <div className="relative mb-10 px-6 2xl:px-24">
        <h1 className="mt-30 md:mt-0 mx-auto text-center leading-[1.05] tracking-[-0.015em] reveal-on-scroll-center">
          ROOTED IN
          <span className="hidden md:inline my-0 mx-10 md:mx-12 xl:mx-24"></span>
          <br className="inline md:hidden" />
          TRADITION.
          <br />
          REFINED BY <br className="inline md:hidden" />
          CRAFT.
          <br />
          RAISED IN <br className="inline md:hidden" />
          LOUISVILLE
        </h1>
        <div className="absolute -top-57 md:-top-17.5 xl:-top-35 left-[64%] md:left-[49%] lg:left-[49.5%] -translate-x-1/2 mr-7.5 w-20.25 h-27.5 xl:w-40 xl:h-56 pointer-events-none reveal-on-scroll-center">
          <Image
            draggable={false}
            src="/imgs/home/ginkins-gin-distillation-process.webp"
            alt="Handcrafted distillation in copper stills at Ginkins Distillery"
            fill
            className="object-cover rounded-[999px]"
          />
        </div>
        <div className="absolute -top-32 md:top-10.5 xl:top-22.5 w-25 h-25 xl:w-40 xl:h-40 -ml-10 md:-ml-66.25 xl:-ml-132.5  left-1/2 -translate-x-1/2 reveal-on-scroll-center">
          <Image
            draggable={false}
            src="/imgs/home/ginkins-gin-heritage-barn.webp"
            alt="Ginkins Gin historic red barn in the Kentucky countryside"
            fill
            className="object-cover rounded-full"
          />
        </div>
        <div className="absolute -ml-10 left-1/2 -translate-x-1/2 h-21 w-21.5 -top-47 md:hidden pointer-events-none">
          <Image
            draggable={false}
            src="/imgs/home/ginkins-gin-icon-botanical-flower.svg"
            alt="Decorative flower"
            width={86}
            height={84}
            className="blur-xs"
            aria-hidden
          />
        </div>
      </div>
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-20 px-6 lg:px-24 -mb-66.25 md:mb-10 lg:mb-0">
        <div className="relative h-150 md:h-auto z-0">
          <div className="hidden md:block absolute top-110 2xs:top-80 xs:top-70  md:top-0 right-0 w-33.5 h-44 xl:w-52 xl:h-72 reveal-on-scroll-center">
            <Image
              draggable={false}
              src="/imgs/home/ginkins-gin-louisville-skyline.webp"
              alt="Louisville skyline at sunset - The heart of Ginkins Gin roots"
              fill
              className="object-cover rounded-[999px]"
            />
          </div>
          <div className="hidden md:block absolute w-39 h-38 md:w-58.25 md:h-56.5 top-125 xs:top-90 md:top-15 xl:top-30 right-25 xl:right-35 pointer-events-none reveal-on-scroll">
            <Image
              draggable={false}
              src="/imgs/home/ginkins-gin-icon-botanical-flower.svg"
              alt=""
              width={233}
              height={226}
              className="blur-sm w-39 h-38 md:w-58.25 md:h-56.5"
              aria-hidden
            />
          </div>
        </div>
        <div className="md:mt-0 -mt-177.5 max-w-full md:max-w-md z-1">
          <p className="text-base leading-relaxed text-(--secondary-black) text-center md:text-left ">
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
          <Link
            href="/where-to-buy"
            className="mt-10 mb-15 md:mb-19.25 xl:mb-44 items-center justify-center px-5 py-1.5 transition animatedButton mx-auto md:mx-0 grid max-w-65 group z-10000 reveal-on-scroll-left"
          >
            <h5 className="text-lg! group-hover:text-(--primary-black)! group-active:text-(--primary-black)! group-focus:text-(--primary-black)!">
              Find Ginkins Near You
            </h5>
          </Link>
        </div>
      </div>
      <div
        className="absolute border-solid border-(--primary-black) border-t border-r-0 border-b-0 border-l-0 shrink-0 w-13.75 h-0 z-20 bottom-2.5 md:bottom-6.5 left-1/2 -translate-x-1/2"
        style={{
          transform: 'rotate(90deg) scale(1, 1)',
        }}
      ></div>
    </section>
  );
}
