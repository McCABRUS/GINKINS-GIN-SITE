import Image from 'next/image';
import { ShieldSVG } from './ShieldSVG';

export default function ShopHero() {
  return (
    <section className="relative w-screen h-[70vh] min-h-130 lg:h-[80vh] overflow-hidden">
      <Image
        src="/where_to_buy/ginkins-gin-premium-gift-boxes.jpg"
        alt="Person in a red dress holding a stack of Ginkins Gin luxury gold and black gift boxes"
        fill
        priority
        className="object-cover object-center w-full"
      />
      <div className="absolute inset-0 bg-(--primary-red-main) mix-blend-multiply" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-background">
        <h1 className="text-background!">
          From Our Still
          <br />
          To Your Glass
        </h1>
        <div className="mt-20 mb-31.5 w-31 md:w-48.5">
          <ShieldSVG className="w-full h-auto fill-background" />
        </div>
        <h3 className="text-background!">Where to find Ginkins</h3>
      </div>
      <div
        className="absolute border-solid border-background border-t border-r-0 border-b-0 border-l-0 shrink-0 w-20.5 h-0 z-20 bottom-[28.5%] left-1/2 -translate-x-1/2"
        style={{
          transform: 'rotate(90deg) scale(1, 1)',
        }}
      ></div>
    </section>
  );
}
