import Image from 'next/image';
import TrackableLink from '../TrackableLink';

export default function FindShops() {
  return (
    <section className="bg-(--secondary-beige) pt-24 lg:pb-24 relative">
      <div className="mx-auto max-xl:px-0 max-4xl:px-37.25 md:max-w-480">
        <div className="grid grid-cols-1 lg:items-start items-center gap-24 lg:gap-16 lg:grid-cols-2">
          <div className="space-y-6 px-5 xl:px-0 reveal-on-scroll-center">
            <h5 className="mb-6 lg:mb-18.75 reveal-on-load-center">Find us</h5>
            <Image
              draggable={false}
              src="/imgs/home/ginkins-gin-icon-mortar-pestle.svg"
              alt=""
              width={56}
              height={69}
              className="reveal-on-load-top"
              aria-hidden
            />
            <h4 className="text-(--primary-black)! lg:py-6 reveal-on-scroll-top">
              Great Gin Travels.
              <br />
              Let’s Get You a Pour.
            </h4>

            <p className="text-base leading-6 font-normal text-(--primary-black) mb-6 lg:mb-12 reveal-on-scroll-top">
              Whether you’re sipping in a cozy cocktail bar, toasting at home,
              or stocking up for your next gathering—Ginkins is never far away.
              We’ve partnered with incredible retailers, restaurants, and
              distributors who share our passion for quality and connection.
              Because good gin is made to be shared—and we’ll always help you
              find your next favorite pour.
            </p>

            <TrackableLink
              href="https://ginkinsgin.distilleryspirits.com"
              target="_blank"
              className="w-40 lg:w-44.25 h-9.75 lg:mt-9.5 flex items-center justify-center px-5 py-1.5 transition animatedButton group reveal-on-scroll-top"
              eventName="click_shop"
              location="Where_to_Buy_find_shops"
            >
              <h5 className="group-hover:text-(--primary-black)! group-active:text-(--primary-black)! group-focus:text-(--primary-black)!">
                Shop ONLINE
              </h5>
            </TrackableLink>
          </div>
          <div className="relative">
            <div className="mx-0 w-full">
              <Image
                draggable={false}
                src="/imgs/where_to_buy/ginkins-gin-golden-tray-service.webp"
                alt="Ginkins Gin bottle and a martini glass served on a golden tray with a shaker"
                width={608}
                height={693}
                className="w-full object-cover reveal-on-scroll-center"
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className="block lg:hidden absolute border-solid border-background border-t border-r-0 border-b-0 border-l-0 shrink-0 w-9.75 h-0 z-20 bottom-5 left-1/2 -translate-x-1/2"
        style={{
          transform: 'rotate(90deg) scale(1, 1)',
        }}
      ></div>
    </section>
  );
}
