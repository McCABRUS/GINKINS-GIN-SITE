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
    <section className="w-screen h-246 bg-(--secundary-beige) overflow-hidden">
      <div className="mx-auto max-w-350 px-6">
        <div className="flex gap-39.5">
          <div className="max-w-129.5 pt-43.25">
            <div className="mb-8">
              <Image
                src="/connections/GinkinsMortarPestle.svg"
                alt=""
                width={56}
                height={70}
              />
            </div>

            <h2 className="leading-snug uppercase">
              Connections
              <br />
              that distill into
              <br />
              something greater
            </h2>

            <p className="mt-6 text-base leading-relaxed text-(--primary-black)">
              When people think of Louisville, they picture Derby hats, hometown
              legends, crackling bats, and that unmistakable bourbon swagger.
              But look a little closer and you’ll find a city alive with fresh
              ideas, forward momentum, and a creative spirit that refuses to be
              boxed in. That’s the soul of Ginkins Gin.
            </p>

            <p className="mt-8 font-cormorant-garamond text-4xl font-medium italic text-(--primary-red-main)">
              Born from tradition but built for what’s next, it’s our tribute to
              a city that honors its heritage while embracing its future.
            </p>

            <div className="mt-10">
              <button className="w-87.5 h-9.75 mt-15.75 inline-flex items-center justify-center bg-(--primary-red-main) px-8 py-3 text-sm font-medium uppercase tracking-wide text-background transition hover:bg-(--primary-gold-main)">
                Shop ONLINE
              </button>
            </div>
          </div>
          <div className="relative overflow-hidden">
            <div className="grid grid-cols-2 gap-4">
              <div className="animate-left-carousel">
                {connectionLeftDataFull.map((images, index) => (
                  <ConnectionsCarousel
                    img={images.img}
                    key={index + 'left'}
                    alt={images.alt}
                  />
                ))}
              </div>
              <div className="animate-right-carousel">
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
