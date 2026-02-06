import Image from 'next/image';
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
    <section className="w-screen 2xs:h-395.75 xs:h-379.25 md:h-339.75 lg:h-246 bg-(--secondary-beige) overflow-hidden">
      <div className="mx-auto max-w-350 px-10 xl:px-6">
        <div className="flex lg:flex-row flex-col gap-3.75 xl:gap-39.5">
          <div className="max-w-178.25 lg:w-178.25 xl:max-w-129.5 pt-8.25 lg:pt-43.25">
            <div className="mb-8">
              <Image
                src="/connections/GinkinsMortarPestle.svg"
                alt=""
                width={56}
                height={70}
                className="mx-auto lg:mx-0"
              />
            </div>

            <h2 className="leading-12! lg:leading-10! text-center lg:text-left text-[42px]! lg:text-4xl! uppercase">
              Connections
              <br />
              that distill <br className="inline lg:hidden" /> into
              <br />
              something <br className="inline lg:hidden" />
              greater
            </h2>

            <p className="mt-6 text-base leading-relaxed text-(--primary-black) text-center lg:text-left">
              When people think of Louisville, they picture Derby hats, hometown
              legends, crackling bats, and that unmistakable bourbon swagger.
              But look a little closer and you’ll find a city alive with fresh
              ideas, forward momentum, and a creative spirit that refuses to be
              boxed in. That’s the soul of Ginkins Gin.
            </p>

            <p className="mt-10 lg:mt-8 font-cormorant-garamond text-4xl font-medium italic text-(--primary-red-main) text-center lg:text-left">
              Born from tradition but built for what’s next, it’s our tribute to
              a city that honors its heritage while embracing its future.
            </p>

            <div className="flex lg:items-start items-center justify-center lg:justify-start mt-10 lg:mt-8 lg:mb-0 mb-13.25">
              <button className="w-40 lg:w-87.5 h-9.75 xl:mt-15.75 flex items-center justify-center bg-(--primary-red-main) px-5 lg:px-8 py-1.5 lg:py-3 text-sm font-medium uppercase tracking-wide text-background transition hover:bg-(--primary-gold-main)">
                <h5 className="text-background! text-lg!">Shop ONLINE</h5>
              </button>
            </div>
          </div>
          <div className="relative overflow-hidden">
            <div className="lg:grid lg:grid-rows-2 lg:grid-cols-2 gap-4">
              <div className="animate-left-carousel lg:inline flex gap-4">
                {connectionLeftDataFull.map((images, index) => (
                  <ConnectionsCarousel
                    img={images.img}
                    key={index + 'left'}
                    alt={images.alt}
                  />
                ))}
              </div>
              <div className="animate-right-carousel lg:inline flex gap-4">
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
