import Image from 'next/image';

export default function CentralGridCard() {
  return (
    <div className="relative hidden lg:flex flex-col items-center justify-center -my-20 col-span-2 order-3 z-10">
      <div className="relative w-63 h-92.5 xl:h-131 xl:w-89.25">
        <Image
          draggable={false}
          src="/imgs/where_to_buy/ginkins-gin-ice-cube-logo-detail.webp"
          alt="Top down view of a cocktail glass with a large clear ice cube embossed with the Ginkins Gin G logo"
          fill
          className="object-cover rounded-full"
        />
        <div className="absolute bottom-6 -right-12.25 w-38.25">
          <Image
            draggable={false}
            src="/imgs/where_to_buy/ginkins-gin-icon-stars-white.svg"
            alt=""
            width={153}
            height={191}
            className="w-full h-auto fill-background"
            aria-hidden
          />
        </div>
      </div>
      <div
        className="block lg:hidden absolute border-solid border-(--primary-gold-main) border-t border-r-0 border-b-0 border-l-0 shrink-0 w-18 h-0 z-20 -top-18  left-1/2 -translate-x-1/2"
        style={{
          transform: 'rotate(90deg) scale(1, 1)',
        }}
      ></div>
    </div>
  );
}
