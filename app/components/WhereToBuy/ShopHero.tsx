import Image from 'next/image';
import { ShieldSVG } from './ShieldSVG';

export default function ShopHero() {
  return (
    <section className="relative w-screen overflow-hidden px-5 sm:px-28.25 py-12.75 lg:pt-44.75 lg:pb-20.25">
      <Image
        draggable={false}
        src="/imgs/where_to_buy/ginkins-gin-premium-gift-boxes.webp"
        alt="Person in a red dress holding a stack of Ginkins Gin luxury gold and black gift boxes"
        fill
        className="object-cover object-center w-full"
        priority
      />
      <div className="absolute inset-0 bg-(--primary-red-main) mix-blend-multiply" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-background">
        <h1 className="text-background! whitespace-nowrap">
          From Our <br className="block md:hidden" />
          Still
          <br className="hidden md:block" />
          To Your <br className="block md:hidden" />
          Glass
        </h1>
        <div className="mt-20 mb-31.5 w-31 md:w-48.5">
          <ShieldSVG className="w-full h-auto fill-background" />
        </div>
        <h3 className="text-background! text-lg! leading-6.75 font-normal">
          Where to find Ginkins
        </h3>
      </div>
      <div
        className="absolute border-solid border-background border-t border-r-0 border-b-0 border-l-0 shrink-0 w-20.5 md:w-20.5 h-0 z-20 lg:bottom-41.25 bottom-35 xl:bottom-41.25 left-1/2 -translate-x-1/2"
        style={{
          transform: 'rotate(90deg) scale(1, 1)',
        }}
      ></div>
    </section>
  );
}
