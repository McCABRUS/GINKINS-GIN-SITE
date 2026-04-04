import Image from 'next/image';
import Link from 'next/link';
import { connectionsLeftData, connectionsRightData } from './connectionsData';
import ConnectionsCarousel from './ConnectionsCarousel';
export default function Connections() {
  const connectionLeftDataFull = [
    ...connectionsLeftData,
    ...connectionsLeftData,
  ];
  const connectionRightDataFull = [
    ...connectionsRightData,
    ...connectionsRightData,
  ];
  return (
    <section className="w-screen 2xs:h-395.75 xs:h-379.25 md:h-339.75 lg:h-294.5 xl:h-316 2xl:h-230 bg-(--secondary-beige) overflow-hidden">
      <div className="mx-auto max-xl:px-5 max-4xl:px-37.25 md:max-w-480 h-full">
        <div className="h-full flex xl:grid xl:grid-cols-[minmax(0,1fr)_max-content] flex-col gap-3.75 xl:gap-25.5 relative items-center">
          <div className="h-full max-w-178.25 xl:max-w-169.5 py-8.25 xl:pt-0 xl:mr-20 self-center xl:self-start reveal-on-scroll-top place-content-center content-center">
            <div className="mb-8">
              <Image
                draggable={false}
                src="/imgs/home/ginkins-gin-icon-mortar-pestle.svg"
                alt=""
                width={56}
                height={70}
                className="mx-auto xl:mx-0"
                aria-hidden
              />
            </div>

            <h2 className="leading-12! lg:leading-10! text-center xl:text-left text-[42px]! lg:text-4xl! uppercase">
              Connections
              <br />
              that distill <br className="inline lg:hidden" /> into
              <br />
              something <br className="inline lg:hidden" />
              greater
            </h2>

            <p className="mt-6 text-base leading-relaxed text-(--primary-black) text-center xl:text-left">
              When people think of Louisville, they picture Derby hats, hometown
              legends, crackling bats, and that unmistakable bourbon swagger.
              But look a little closer and you’ll find a city alive with fresh
              ideas, forward momentum, and a creative spirit that refuses to be
              boxed in. That’s the soul of Ginkins Gin.
            </p>

            <p className="mt-10 lg:mt-8 font-cormorant-garamond text-4xl font-medium italic text-(--primary-red-main) text-center xl:text-left">
              Born from tradition but built for what’s next, it’s our tribute to
              a city that honors its heritage while embracing its future.
            </p>

            <div className="flex xl:items-start items-center justify-center xl:justify-start mt-10 lg:mt-8 xl:mt-0 lg:mb-0 mb-13.25">
              <Link
                href="/about-ginkins"
                className="w-40 lg:w-87.5 h-9.75 xl:mt-15.75 flex items-center justify-center px-5 py-1.5 transition animatedButton group"
              >
                <h5 className="text-lg! group-hover:text-(--primary-black)! group-active:text-(--primary-black)! group-focus:text-(--primary-black)!">
                  Know more
                </h5>
              </Link>
            </div>
          </div>
          <div className="relative overflow-hidden ml-auto shrink-0 w-max h-full">
            <div className="xl:grid lg:grid-rows-2 xl:grid-cols-2 gap-4 w-max">
              <div className="animate-left-carousel xl:inline flex gap-4 shrink-0">
                {connectionLeftDataFull.map((images, index) => (
                  <ConnectionsCarousel
                    img={images.img}
                    key={index + 'left'}
                    alt={images.alt}
                  />
                ))}
              </div>
              <div className="animate-right-carousel xl:inline flex gap-4 shrink-0">
                {connectionRightDataFull.map((images, index) => (
                  <ConnectionsCarousel
                    img={images.img}
                    key={index + 'right'}
                    alt={images.alt}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
