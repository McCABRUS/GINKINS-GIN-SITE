import Image from 'next/image';
import TrackableLink from '../TrackableLink';

export default function BannerHomeShop() {
  return (
    <section className="w-full h-250 2xs:h-180 sm:h-135.5 p-5 py-14 md:px-12.5 md:py-13.75 bg-(--secondary-beige) lg:mt-11 md:-mt-15 xs:-mt-50.5 -mt-44.5">
      <div className="w-full h-full relative border-4 border-solid border-(--primary-gold-main) px-11.25 md:px-0 py-20 flex items-center justify-center reveal-on-scroll-center">
        <div className="absolute lg:left-1/10 xl:left-1/4 top-1/10 lg:top-1/2 -translate-y-1/2  max-w-480 place-self-center">
          <Image
            draggable={false}
            src="/imgs/home/ginkins-gin-icon-martini-decoration.svg"
            alt=""
            height={60}
            width={46}
            aria-hidden
          />
        </div>
        <div className="text-center reveal-on-scroll-top">
          <h2 className="text-4xl! xs:text-[42px]! md:text-4xl! leading-12! ">
            Where to find Ginkins
            <br />
            from our still to your glass
          </h2>
          <h3 className="mt-6 xl:mt-12.5 text-lg! inline-block uppercase text-[#1A1A1A]">
            Great gin travels. Let’s get you a pour
          </h3>

          <div className="mt-6 xl:mt-14">
            <TrackableLink
              href="/where-to-buy"
              className=" inline-block items-center justify-center animatedButton px-5 py-1.5 text-sm font-medium uppercase  transition group"
              eventName="click_shop"
              location="shop_banner"
            >
              <h5 className="text-lg! group-hover:text-(--primary-black)! group-active:text-(--primary-black)! group-focus:text-(--primary-black)!">
                Find Ginkins Near You
              </h5>
            </TrackableLink>
          </div>
        </div>
        <div className="absolute  lg:right-1/10 xl:right-1/4 top-9/10 md:top-7/8 lg:top-1/2 -translate-y-1/2">
          <Image
            draggable={false}
            src="/imgs/home/ginkins-gin-icon-cocktail-cup.svg"
            alt=""
            height={67}
            width={52}
            aria-hidden
          />
        </div>
      </div>
    </section>
  );
}
