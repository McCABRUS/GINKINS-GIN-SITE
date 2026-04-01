import Image from 'next/image';
import Link from 'next/link';

export default function Story() {
  return (
    <section className="w-screen bg-(--secondary-beige) relative" id="story">
      <div className="mx-auto max-xl:px-5 max-4xl:px-37.25 md:max-w-480 py-8.25">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <div>
            <div className="mb-6">
              <Image
                draggable={false}
                src="/imgs/home/ginkins-gin-icon-martini-decoration.svg"
                alt="Martini Ginkins Gin icon"
                width={56}
                height={71}
                className="mb-10.75 mx-auto lg:mx-0"
                aria-hidden
                priority
              />
            </div>
            <div className="text-center lg:text-left text-base leading-6 text-(--primary-black)">
              <p className="mb-4">
                When people think of Louisville, they picture Derby hats,
                hometown legends, crackling bats, and that unmistakable bourbon
                swagger. But look a little closer and you’ll find a city alive
                with fresh ideas, forward momentum, and a creative spirit that
                refuses to be boxed in. That’s the soul of Ginkins Gin.
              </p>
              <p className="mb-4">
                Born from tradition but built for what’s next, it’s our tribute
                to a city that honors its heritage while embracing its future.
              </p>
              <p>
                Founded by <strong>Phillip Scott Ginkins</strong>, this gin was
                inspired by the warmth of Southern hospitality and the thrill of
                discovery. With a last name that almost predestined his calling,
                Scott set out to create a spirit that reflects the heart of his
                hometown—bold, bright, and full of flavor.
              </p>
            </div>

            <Link
              href="https://ginkinsgin.distilleryspirits.com"
              target="_blank"
              className="w-40 lg:w-44.25 h-9.75 mt-10.75 flex items-center justify-center px-5 py-1.5  transition animatedButton mx-auto lg:mx-0 group"
            >
              <h5 className="text-lg! group-hover:text-(--primary-black)! group-active:text-(--primary-black)! group-focus:text-(--primary-black)!">
                Shop ONLINE
              </h5>
            </Link>
          </div>

          <div className="flex max-lg:mx-auto md:ml-auto">
            <div className="relative h-81.75 w-62 overflow-hidden rounded-t-full sm:h-130 sm:w-95 xl:h-160 xl:w-120">
              <Image
                draggable={false}
                src="/imgs/about/meaningful-connections-ginkins-gin.webp"
                alt="Creating connections over a premium gin cocktail with red fruits and citrus in an elegant bar setting."
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
        <div
          className="absolute border-solid border-(--primary-red-main) border-t border-r-0 border-b-0 border-l-0 shrink-0 w-22.5 lg:w-24.5 h-0 z-20 bottom-90 md:bottom-137.5 lg:bottom-12.25 left-1/2 -translate-x-1/2"
          style={{
            transform: 'rotate(90deg) scale(1, 1)',
          }}
        ></div>
      </div>
    </section>
  );
}
