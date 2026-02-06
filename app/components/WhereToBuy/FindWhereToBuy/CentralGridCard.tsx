import Image from 'next/image';
import { StarIcon } from './StarIcon';

export default function CentralGridCard() {
  return (
    <div className="relative flex flex-col items-center justify-center -my-20 lg:col-span-2 lg:order-3 z-10">
      <div className="relative h-131 w-89.25">
        <Image
          src="/where_to_buy/ginkins-gin-ice-cube-logo-detail.png"
          alt="Top down view of a cocktail glass with a large clear ice cube embossed with the Ginkins Gin G logo"
          fill
          className="object-cover rounded-full"
        />
        <div className="absolute bottom-6 -right-14 w-38.25">
          <StarIcon className="w-full h-auto fill-background" />
        </div>
      </div>
    </div>
  );
}
