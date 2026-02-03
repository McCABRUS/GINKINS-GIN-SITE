import Image from 'next/image';

export default function BotanicalGrid({ side }: { side: 'left' | 'right' }) {
  const isLeft = side === 'left';

  return (
    <>
      {isLeft ? (
        <div className="relative xl:absolute -top-85 xl:top-[55%] z-20 left-1/2 -translate-x-1/2 xl:translate-x-0 xl:left-[3%] grid grid-cols-5 grid-rows-2 min-w-78.75">
          <div className="relative w-15.75 xl:w-20 2xl:w-25 h-15.75 xl:h-20 2xl:h-25 group">
            <p className="text-base font-normal text-(--primary-black) xl:text-background justify-self-center text-center w-33.25 invisible group-hover:visible mt-0 xl:-mt-3.5 2xl:-mt-8.5 mb-0 xl:mb-2.5">
              Grapefruit Peel
            </p>
            <Image
              src="/hero-icons/icon-1.svg"
              alt="Logo"
              width={100}
              height={100}
              className="group-hover:invisible"
            />
            <Image
              src="/hero-icons/icon-hover-1.svg"
              alt="Logo"
              width={100}
              height={100}
              className="-mt-15 xl:-mt-18 2xl:-mt-25 invisible group-hover:visible"
            />
            <Image
              src="/hero-icons/icon-image-1.png"
              alt="Logo"
              width={200}
              height={100}
              className="-mt-5 xl:-mt-6.25 invisible group-hover:visible"
            />
          </div>
          <div className="relative  w-15.75 xl:w-20 2xl:w-25 h-15.75 xl:h-20 2xl:h-25 group top-full hover:-top-7.5">
            <Image
              src="/hero-icons/icon-image-2.png"
              alt="Logo"
              width={100}
              height={100}
              className="mt-10 mb-16.75 xl:mb-9.5 2xl:mt-6.5 2xl:-mb-13.5 invisible group-hover:visible"
            />
            <Image
              src="/hero-icons/icon-2.svg"
              alt="Logo"
              width={100}
              height={100}
              className="-mt-46 group-hover:invisible"
            />
            <Image
              src="/hero-icons/icon-hover-2.svg"
              alt="Logo"
              width={100}
              height={100}
              className="mt-7.5 invisible group-hover:visible"
            />
            <p className="text-base font-normal text-(--secondary-black) justify-self-center text-center w-33.25 mt-2.5 invisible group-hover:visible">
              Cardamon
            </p>
          </div>
          <div className="relative  w-15.75 xl:w-20 2xl:w-25 h-15.75 xl:h-20 2xl:h-25 group">
            <p className="text-base font-normal text-(--primary-black) xl:text-background justify-self-center text-center w-33.25 invisible group-hover:visible  mt-0 xl:-mt-3.5 2xl:-mt-8.5 mb-0 xl:mb-2.5">
              Angelica Root
            </p>
            <Image
              src="/hero-icons/icon-3.svg"
              alt="Logo"
              width={100}
              height={100}
              className="group-hover:invisible"
            />
            <Image
              src="/hero-icons/icon-hover-3.svg"
              alt="Logo"
              width={100}
              height={100}
              className="-mt-15 xl:-mt-20 2xl:-mt-25 invisible group-hover:visible"
            />
            <Image
              src="/hero-icons/icon-image-3.png"
              alt="Logo"
              width={100}
              height={100}
              className="-mt-5 xl:-mt-7.5 invisible group-hover:visible"
            />
          </div>
          <div className="relative  w-15.75 xl:w-20 2xl:w-25 h-15.75 xl:h-20 2xl:h-25 group top-full hover:-top-7.5">
            <Image
              src="/hero-icons/icon-image-4.png"
              alt="Logo"
              width={100}
              height={100}
              className="mt-7.5 2xl:mt-0 mb-12.25 xl:mb-5 2xl:-mb-5.75 invisible group-hover:visible"
            />
            <Image
              src="/hero-icons/icon-4.svg"
              alt="Logo"
              width={100}
              height={100}
              className="-mt-38.25 group-hover:invisible"
            />
            <Image
              src="/hero-icons/icon-hover-4.svg"
              alt="Logo"
              width={100}
              height={100}
              className="mt-7.5 invisible group-hover:visible"
            />
            <p className="text-base font-normal text-(--secondary-black) justify-self-center text-center w-33.25 mt-2.5 invisible group-hover:visible">
              Juniper Berries
            </p>
          </div>
          <div className="relative  w-15.75 xl:w-20 2xl:w-25 h-15.75 xl:h-20 2xl:h-25 group">
            <p className="text-base font-normal text-(--primary-black) xl:text-background justify-self-center text-center w-33.25 invisible group-hover:visible  mt-0 xl:-mt-3.5 2xl:-mt-8.5 mb-0 xl:mb-2.5">
              Corianders Seeds
            </p>
            <Image
              src="/hero-icons/icon-5.svg"
              alt="Logo"
              width={100}
              height={100}
              className="group-hover:invisible"
            />
            <Image
              src="/hero-icons/icon-hover-5.svg"
              alt="Logo"
              width={100}
              height={100}
              className="-mt-15 xl:-mt-20 2xl:-mt-25 invisible group-hover:visible"
            />
            <Image
              src="/hero-icons/icon-image-5.png"
              alt="Logo"
              width={100}
              height={100}
              className="-mt-5 xl:-mt-7.5 invisible group-hover:visible"
            />
          </div>
        </div>
      ) : (
        <div className="relative xl:absolute -top-85 xl:top-[55%] z-20 left-1/2 -translate-x-1/2 xl:translate-x-0 xl:left-auto xl:right-[3%] grid grid-cols-5 grid-rows-2 min-w-78.75">
          <div className="relative  w-15.75 xl:w-20 2xl:w-25 h-15.75 xl:h-20 2xl:h-25 group">
            <p className="text-base font-normal text-(--primary-black) xl:text-background justify-self-center text-center w-33.25 invisible group-hover:visible  mt-0 xl:-mt-3.5 2xl:-mt-8.5 mb-0 xl:mb-2.5">
              Juniper
            </p>
            <Image
              src="/hero-icons/icon-6.svg"
              alt="Logo"
              width={100}
              height={100}
              className="group-hover:invisible"
            />
            <Image
              src="/hero-icons/icon-hover-6.svg"
              alt="Logo"
              width={100}
              height={100}
              className="-mt-15 xl:-mt-20 2xl:-mt-25 invisible group-hover:visible"
            />
            <Image
              src="/hero-icons/icon-image-6.png"
              alt="Logo"
              width={100}
              height={100}
              className="-mt-5 xl:-mt-10.25 invisible group-hover:visible"
            />
          </div>
          <div className="relative w-15.75 xl:w-20 2xl:w-25 h-15.75 xl:h-20 2xl:h-25 group top-full hover:-top-7.5">
            <Image
              src="/hero-icons/icon-image-7.png"
              alt="Logo"
              width={100}
              height={100}
              className=" mt-11.25 2xl:mt-5.75 mb-12.25 xl:mb-6 2xl:-mb-6 invisible group-hover:visible"
            />
            <Image
              src="/hero-icons/icon-7.svg"
              alt="Logo"
              width={100}
              height={100}
              className="-mt-38.5 group-hover:invisible"
            />
            <Image
              src="/hero-icons/icon-hover-7.svg"
              alt="Logo"
              width={100}
              height={100}
              className="mt-7.5 invisible group-hover:visible"
            />
            <p className="text-base font-normal text-(--secondary-black) justify-self-center text-center w-33.25 mt-2.5 invisible group-hover:visible">
              Orris Root
            </p>
          </div>
          <div className="relative  w-15.75 xl:w-20 2xl:w-25 h-15.75 xl:h-20 2xl:h-25 group">
            <p className="text-base font-normal text-(--primary-black) xl:text-background justify-self-center text-center w-33.25 invisible group-hover:visible  mt-0 xl:-mt-3.5 2xl:-mt-8.5 mb-0 xl:mb-2.5">
              Nutmeg
            </p>
            <Image
              src="/hero-icons/icon-8.svg"
              alt="Logo"
              width={100}
              height={100}
              className="group-hover:invisible"
            />
            <Image
              src="/hero-icons/icon-hover-8.svg"
              alt="Logo"
              width={100}
              height={100}
              className="-mt-15 xl:-mt-20 2xl:-mt-25 invisible group-hover:visible"
            />
            <Image
              src="/hero-icons/icon-image-8.png"
              alt="Logo"
              width={100}
              height={100}
              className="-mt-5 xl:-mt-4.5 invisible group-hover:visible"
            />
          </div>
          <div className="relative  w-15.75 xl:w-20 2xl:w-25 h-15.75 xl:h-20 2xl:h-25 group top-full hover:-top-7.5">
            <Image
              src="/hero-icons/icon-image-9.png"
              alt="Logo"
              width={100}
              height={100}
              className="mt-10 2xl:mt-4 mb-12.25 xl:mb-6 2xl:-mb-6.25 invisible group-hover:visible"
            />
            <Image
              src="/hero-icons/icon-9.svg"
              alt="Logo"
              width={100}
              height={100}
              className="-mt-38.75 group-hover:invisible"
            />
            <Image
              src="/hero-icons/icon-hover-9.svg"
              alt="Logo"
              width={100}
              height={100}
              className="mt-7.5 invisible group-hover:visible"
            />
            <p className="text-base font-normal text-(--secondary-black) justify-self-center text-center w-33.25 mt-2.5 invisible group-hover:visible">
              Cassia Bark
            </p>
          </div>
          <div className="relative  w-15.75 xl:w-20 2xl:w-25 h-15.75 xl:h-20 2xl:h-25 group">
            <p className="text-base font-normal text-(--primary-black) xl:text-background justify-self-center text-center w-33.25 invisible group-hover:visible  mt-0 xl:-mt-3.5 2xl:-mt-8.5 mb-0 xl:mb-2.5">
              Lemon Peel
            </p>
            <Image
              src="/hero-icons/icon-10.svg"
              alt="Logo"
              width={100}
              height={100}
              className="group-hover:invisible"
            />
            <Image
              src="/hero-icons/icon-hover-10.svg"
              alt="Logo"
              width={100}
              height={100}
              className="-mt-15 xl:-mt-20 2xl:-mt-25 invisible group-hover:visible"
            />
            <Image
              src="/hero-icons/icon-image-10.png"
              alt="Logo"
              width={100}
              height={100}
              className="-mt-5 xl:-mt-7.5 invisible group-hover:visible"
            />
          </div>
        </div>
      )}
    </>
  );
}
