import Image from 'next/image';

export default function BotanicalGrid({ side }: { side: 'left' | 'right' }) {
  const isLeft = side === 'left';

  return (
    <>
      {isLeft ? (
        <div className="relative xl:absolute -top-85 xl:top-[55.1%] z-30 left-1/2 -translate-x-1/2 xl:translate-x-0 xl:left-[3%] grid grid-cols-5 grid-rows-2 min-w-78.75">
          <div className="relative w-15.75 xl:w-20 2xl:w-25 h-15.75 xl:h-20 2xl:h-25 group">
            <p className="text-base font-normal text-(--primary-black) xl:text-background justify-self-center text-center whitespace-nowrap invisible group-hover:visible group-active:visible mt-0 xl:-mt-3.5 2xl:-mt-8.5 mb-0 xl:mb-2.5">
              Grapefruit Peel
            </p>
            <Image
              draggable={false}
              aria-hidden
              src="/imgs/home/botanicals/ginkins-gin-botanical-grapefruit.svg"
              alt=""
              width={102}
              height={101}
              className="group-hover:invisible group-active:invisible"
              priority
            />
            <Image
              draggable={false}
              aria-hidden
              src="/imgs/home/botanicals/ginkins-gin-botanical-grapefruit-hover.svg"
              alt=""
              width={102}
              height={101}
              className="-mt-15 xl:-mt-18 2xl:-mt-24.75 invisible group-hover:visible group-active:visible"
            />
            <Image
              draggable={false}
              aria-hidden
              src="/imgs/home/botanicals/icon-image-1.png"
              alt=""
              width={200}
              height={100}
              className="-mt-5 xl:-mt-6.25 invisible group-hover:visible group-active:visible"
            />
          </div>
          <div className="relative w-15.75 xl:w-20 2xl:w-25 h-15.75 xl:h-20 2xl:h-25 group top-full hover:-top-7.5 active:-top-7.5">
            <Image
              draggable={false}
              aria-hidden
              src="/imgs/home/botanicals/icon-image-2.png"
              alt=""
              width={100}
              height={100}
              className="mt-10 mb-16.75 xl:mb-9.5 2xl:mt-6.25 2xl:-mb-13.5 invisible group-hover:visible group-active:visible"
            />
            <Image
              draggable={false}
              aria-hidden
              src="/imgs/home/botanicals/ginkins-gin-botanical-cardamom.svg"
              alt=""
              width={100}
              height={100}
              className="-mt-45.75 group-hover:invisible group-active:invisible"
              priority
            />
            <Image
              draggable={false}
              aria-hidden
              src="/imgs/home/botanicals/ginkins-gin-botanical-cardamom-hover.svg"
              alt=""
              width={100}
              height={100}
              className="mt-7.5 invisible group-hover:visible group-active:visible"
            />
            <p className="text-base font-normal text-(--secondary-black) justify-self-center text-center whitespace-nowrap mt-2.5 invisible group-hover:visible group-active:visible">
              Cardamon
            </p>
          </div>
          <div className="relative w-15.75 xl:w-20 2xl:w-25 h-15.75 xl:h-20 2xl:h-25 group">
            <p className="text-base font-normal text-(--primary-black) xl:text-background justify-self-center text-center whitespace-nowrap invisible group-hover:visible group-active:visible mt-0 xl:-mt-3.5 2xl:-mt-8.5 mb-0 xl:mb-2.5">
              Angelica Root
            </p>
            <Image
              draggable={false}
              aria-hidden
              src="/imgs/home/botanicals/ginkins-gin-botanical-angelica.svg"
              alt=""
              width={100}
              height={100}
              className="group-hover:invisible group-active:invisible"
              priority
            />
            <Image
              draggable={false}
              aria-hidden
              src="/imgs/home/botanicals/ginkins-gin-botanical-angelica-hover.svg"
              alt=""
              width={100}
              height={100}
              className="-mt-15 xl:-mt-20 2xl:-mt-24.75 invisible group-hover:visible group-active:visible"
            />
            <Image
              draggable={false}
              aria-hidden
              src="/imgs/home/botanicals/icon-image-3.png"
              alt=""
              width={100}
              height={100}
              className="-mt-5 xl:-mt-7.5 invisible group-hover:visible group-active:visible"
            />
          </div>
          <div className="relative w-15.75 xl:w-20 2xl:w-25 h-15.75 xl:h-20 2xl:h-25 group top-full hover:-top-7.5 active:-top-7.5">
            <Image
              draggable={false}
              aria-hidden
              src="/imgs/home/botanicals/icon-image-4.png"
              alt=""
              width={100}
              height={100}
              className="mt-7.5 2xl:mt-0 mb-12.25 xl:mb-5 2xl:-mb-5.75 invisible group-hover:visible group-active:visible"
            />
            <Image
              draggable={false}
              aria-hidden
              src="/imgs/home/botanicals/ginkins-gin-botanical-juniper.svg"
              alt=""
              width={100}
              height={100}
              className="-mt-38.5 group-hover:invisible group-active:invisible"
              priority
            />
            <Image
              draggable={false}
              aria-hidden
              src="/imgs/home/botanicals/ginkins-gin-botanical-juniper-hover.svg"
              alt=""
              width={100}
              height={100}
              className="mt-7.5 invisible group-hover:visible group-active:visible"
            />
            <p className="text-base font-normal text-(--secondary-black) justify-self-center text-center whitespace-nowrap mt-2.5 invisible group-hover:visible group-active:visible">
              Juniper Berries
            </p>
          </div>
          <div className="relative w-15.75 xl:w-20 2xl:w-25 h-15.75 xl:h-20 2xl:h-25 group">
            <p className="text-base font-normal text-(--primary-black) xl:text-background justify-self-center text-center whitespace-nowrap invisible group-hover:visible group-active:visible mt-0 xl:-mt-3.5 2xl:-mt-8.5 mb-0 xl:mb-2.5">
              Corianders Seeds
            </p>
            <Image
              draggable={false}
              aria-hidden
              src="/imgs/home/botanicals/ginkins-gin-botanical-coriander.svg"
              alt=""
              width={100}
              height={100}
              className="group-hover:invisible group-active:invisible"
              priority
            />
            <Image
              draggable={false}
              aria-hidden
              src="/imgs/home/botanicals/ginkins-gin-botanical-coriander-hover.svg"
              alt=""
              width={100}
              height={100}
              className="-mt-15 xl:-mt-20 2xl:-mt-24.75 invisible group-hover:visible group-active:visible"
            />
            <Image
              draggable={false}
              aria-hidden
              src="/imgs/home/botanicals/icon-image-5.png"
              alt=""
              width={100}
              height={100}
              className="-mt-5 xl:-mt-7.5 invisible group-hover:visible group-active:visible"
            />
          </div>
        </div>
      ) : (
        <div className="relative xl:absolute -top-85 xl:top-[55.1%] z-30 left-1/2 -translate-x-1/2 xl:translate-x-0 xl:left-auto xl:right-[3%] grid grid-cols-5 grid-rows-2 min-w-78.75">
          <div className="relative w-15.75 xl:w-20 2xl:w-25 h-15.75 xl:h-20 2xl:h-25 group">
            <p className="text-base font-normal text-(--primary-black) xl:text-background justify-self-center text-center whitespace-nowrap invisible group-hover:visible group-active:visible mt-0 xl:-mt-3.5 2xl:-mt-8.5 mb-0 xl:mb-2.5">
              Juniper
            </p>
            <Image
              draggable={false}
              aria-hidden
              src="/imgs/home/botanicals/ginkins-gin-botanical-juniper-icon.svg"
              alt=""
              width={100}
              height={100}
              className="group-hover:invisible group-active:invisible"
              priority
            />
            <Image
              draggable={false}
              aria-hidden
              src="/imgs/home/botanicals/ginkins-gin-botanical-juniper-icon-hover.svg"
              alt=""
              width={100}
              height={100}
              className="-mt-15 xl:-mt-20 2xl:-mt-24.75 invisible group-hover:visible group-active:visible"
            />
            <Image
              draggable={false}
              aria-hidden
              src="/imgs/home/botanicals/icon-image-6.png"
              alt=""
              width={100}
              height={100}
              className="-mt-5 xl:-mt-10.25 invisible group-hover:visible group-active:visible"
            />
          </div>
          <div className="relative w-15.75 xl:w-20 2xl:w-25 h-15.75 xl:h-20 2xl:h-25 group top-full hover:-top-7.5 active:-top-7.5">
            <Image
              draggable={false}
              aria-hidden
              src="/imgs/home/botanicals/icon-image-7.png"
              alt=""
              width={100}
              height={100}
              className=" mt-11.25 2xl:mt-5.75 mb-12.25 xl:mb-6 2xl:-mb-6 invisible group-hover:visible group-active:visible"
            />
            <Image
              draggable={false}
              aria-hidden
              src="/imgs/home/botanicals/ginkins-gin-botanical-orris.svg"
              alt=""
              width={100}
              height={100}
              className="-mt-38.75 group-hover:invisible group-active:invisible"
              priority
            />
            <Image
              draggable={false}
              aria-hidden
              src="/imgs/home/botanicals/ginkins-gin-botanical-orris-hover.svg"
              alt=""
              width={100}
              height={100}
              className="mt-7.5 invisible group-hover:visible group-active:visible"
            />
            <p className="text-base font-normal text-(--secondary-black) justify-self-center text-center whitespace-nowrap mt-2.5 invisible group-hover:visible group-active:visible">
              Orris Root
            </p>
          </div>
          <div className="relative w-15.75 xl:w-20 2xl:w-25 h-15.75 xl:h-20 2xl:h-25 group">
            <p className="text-base font-normal text-(--primary-black) xl:text-background justify-self-center text-center whitespace-nowrap invisible group-hover:visible group-active:visible mt-0 xl:-mt-3.5 2xl:-mt-8.5 mb-0 xl:mb-2.5">
              Nutmeg
            </p>
            <Image
              draggable={false}
              aria-hidden
              src="/imgs/home/botanicals/ginkins-gin-botanical-nutmeg.svg"
              alt=""
              width={100}
              height={100}
              className="group-hover:invisible group-active:invisible"
              priority
            />
            <Image
              draggable={false}
              aria-hidden
              src="/imgs/home/botanicals/ginkins-gin-botanical-nutmeg-hover.svg"
              alt=""
              width={100}
              height={100}
              className="-mt-15 xl:-mt-20 2xl:-mt-24.75 invisible group-hover:visible group-active:visible"
            />
            <Image
              draggable={false}
              aria-hidden
              src="/imgs/home/botanicals/icon-image-8.png"
              alt=""
              width={100}
              height={100}
              className="-mt-5 xl:-mt-4.5 invisible group-hover:visible group-active:visible"
            />
          </div>
          <div className="relative w-15.75 xl:w-20 2xl:w-25 h-15.75 xl:h-20 2xl:h-25 group top-full hover:-top-7.5 active:-top-7.5">
            <Image
              draggable={false}
              aria-hidden
              src="/imgs/home/botanicals/icon-image-9.png"
              alt=""
              width={100}
              height={100}
              className="mt-10 2xl:mt-4 mb-12.25 xl:mb-6 2xl:-mb-6.25 invisible group-hover:visible group-active:visible"
            />
            <Image
              draggable={false}
              aria-hidden
              src="/imgs/home/botanicals/ginkins-gin-botanical-cassia.svg"
              alt=""
              width={100}
              height={100}
              className="-mt-39 group-hover:invisible group-active:invisible"
              priority
            />
            <Image
              draggable={false}
              aria-hidden
              src="/imgs/home/botanicals/ginkins-gin-botanical-cassia-hover.svg"
              alt=""
              width={100}
              height={100}
              className="mt-7.5 invisible group-hover:visible group-active:visible"
            />
            <p className="text-base font-normal text-(--secondary-black) justify-self-center text-center whitespace-nowrap mt-2.5 invisible group-hover:visible group-active:visible">
              Cassia Bark
            </p>
          </div>
          <div className="relative w-15.75 xl:w-20 2xl:w-25 h-15.75 xl:h-20 2xl:h-25 group">
            <p className="text-base font-normal text-(--primary-black) xl:text-background justify-self-center text-center whitespace-nowrap invisible group-hover:visible group-active:visible mt-0 xl:-mt-3.5 2xl:-mt-8.5 mb-0 xl:mb-2.5">
              Lemon Peel
            </p>
            <Image
              draggable={false}
              aria-hidden
              src="/imgs/home/botanicals/ginkins-gin-botanical-lemon.svg"
              alt=""
              width={100}
              height={100}
              className="group-hover:invisible group-active:invisible"
              priority
            />
            <Image
              draggable={false}
              aria-hidden
              src="/imgs/home/botanicals/ginkins-gin-botanical-lemon-hover.svg"
              alt=""
              width={100}
              height={100}
              className="-mt-15 xl:-mt-20 2xl:-mt-24.75 invisible group-hover:visible group-active:visible"
            />
            <Image
              draggable={false}
              aria-hidden
              src="/imgs/home/botanicals/icon-image-10.png"
              alt=""
              width={100}
              height={100}
              className="-mt-5 xl:-mt-7.5 invisible group-hover:visible group-active:visible"
            />
          </div>
        </div>
      )}
    </>
  );
}
