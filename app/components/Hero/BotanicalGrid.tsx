import Image from 'next/image';

export default function BotanicalGrid({ side }: { side: 'left' | 'right' }) {
  const isLeft = side === 'left';

  return (
    <>
      {isLeft ? (
        <div className="absolute top-[55%] z-20 left-[6%] grid grid-cols-5 grid-rows-1">
          <div className="relative w-25 h-25 group">
            <p className="text-base font-normal text-background justify-self-center text-center w-33.25 hidden group-hover:block -mt-8.5 mb-2.5">
              Grapefruit Peel
            </p>
            <Image
              src="/hero-icons/icon-1.svg"
              alt="Logo"
              width={100}
              height={100}
              className="group-hover:hidden"
            />
            <Image
              src="/hero-icons/icon-hover-1.svg"
              alt="Logo"
              width={100}
              height={100}
              className="hidden group-hover:block"
            />
            <Image
              src="/hero-icons/icon-image-1.png"
              alt="Logo"
              width={200}
              height={100}
              className="-mt-6.25 hidden group-hover:block"
            />
          </div>
          <div className="relative w-25 h-25 group top-full hover:-top-7.5">
            <Image
              src="/hero-icons/icon-image-2.png"
              alt="Logo"
              width={100}
              height={100}
              className="mt-6.5 -mb-13.5 hidden group-hover:block"
            />
            <Image
              src="/hero-icons/icon-2.svg"
              alt="Logo"
              width={100}
              height={100}
              className="group-hover:hidden"
            />
            <Image
              src="/hero-icons/icon-hover-2.svg"
              alt="Logo"
              width={100}
              height={100}
              className="hidden group-hover:block"
            />
            <p className="text-base font-normal text-(--secondary-black) justify-self-center text-center w-33.25 mt-2.5 hidden group-hover:block">
              Cardamon
            </p>
          </div>
          <div className="relative w-25 h-25 group">
            <p className="text-base font-normal text-background justify-self-center text-center w-33.25 hidden group-hover:block -mt-8.5 mb-2.5">
              Angelica Root
            </p>
            <Image
              src="/hero-icons/icon-3.svg"
              alt="Logo"
              width={100}
              height={100}
              className="group-hover:hidden"
            />
            <Image
              src="/hero-icons/icon-hover-3.svg"
              alt="Logo"
              width={100}
              height={100}
              className="hidden group-hover:block"
            />
            <Image
              src="/hero-icons/icon-image-3.png"
              alt="Logo"
              width={100}
              height={100}
              className="-mt-7.5 hidden group-hover:block"
            />
          </div>
          <div className="relative w-25 h-25 group top-full hover:-top-7.5">
            <Image
              src="/hero-icons/icon-image-4.png"
              alt="Logo"
              width={100}
              height={100}
              className="-mb-5.75 hidden group-hover:block"
            />
            <Image
              src="/hero-icons/icon-4.svg"
              alt="Logo"
              width={100}
              height={100}
              className="group-hover:hidden"
            />
            <Image
              src="/hero-icons/icon-hover-4.svg"
              alt="Logo"
              width={100}
              height={100}
              className="hidden group-hover:block"
            />
            <p className="text-base font-normal text-(--secondary-black) justify-self-center text-center w-33.25 mt-2.5 hidden group-hover:block">
              Juniper Berries
            </p>
          </div>
          <div className="relative w-25 h-25 group">
            <p className="text-base font-normal text-background justify-self-center text-center w-33.25 hidden group-hover:block -mt-8.5 mb-2.5">
              Corianders Seeds
            </p>
            <Image
              src="/hero-icons/icon-5.svg"
              alt="Logo"
              width={100}
              height={100}
              className="group-hover:hidden"
            />
            <Image
              src="/hero-icons/icon-hover-5.svg"
              alt="Logo"
              width={100}
              height={100}
              className="hidden group-hover:block"
            />
            <Image
              src="/hero-icons/icon-image-5.png"
              alt="Logo"
              width={100}
              height={100}
              className="-mt-7.5 hidden group-hover:block"
            />
          </div>
        </div>
      ) : (
        <div className="absolute top-[55%] z-20 right-[6%] grid grid-cols-5 grid-rows-2">
          <div className="relative w-25 h-25 group">
            <p className="text-base font-normal text-background justify-self-center text-center w-33.25 hidden group-hover:block -mt-8.5 mb-2.5">
              Juniper
            </p>
            <Image
              src="/hero-icons/icon-6.svg"
              alt="Logo"
              width={100}
              height={100}
              className="group-hover:hidden"
            />
            <Image
              src="/hero-icons/icon-hover-6.svg"
              alt="Logo"
              width={100}
              height={100}
              className="hidden group-hover:block"
            />
            <Image
              src="/hero-icons/icon-image-6.png"
              alt="Logo"
              width={100}
              height={100}
              className="-mt-10.25 hidden group-hover:block"
            />
          </div>
          <div className="relative w-25 h-25 group top-full hover:-top-7.5">
            <Image
              src="/hero-icons/icon-image-7.png"
              alt="Logo"
              width={100}
              height={100}
              className="mt-5.75 -mb-6 hidden group-hover:block"
            />
            <Image
              src="/hero-icons/icon-7.svg"
              alt="Logo"
              width={100}
              height={100}
              className="group-hover:hidden"
            />
            <Image
              src="/hero-icons/icon-hover-7.svg"
              alt="Logo"
              width={100}
              height={100}
              className="hidden group-hover:block"
            />
            <p className="text-base font-normal text-(--secondary-black) justify-self-center text-center w-33.25 mt-2.5 hidden group-hover:block">
              Orris Root
            </p>
          </div>
          <div className="relative w-25 h-25 group">
            <p className="text-base font-normal text-background justify-self-center text-center w-33.25 hidden group-hover:block -mt-8.5 mb-2.5">
              Nutmeg
            </p>
            <Image
              src="/hero-icons/icon-8.svg"
              alt="Logo"
              width={100}
              height={100}
              className="group-hover:hidden"
            />
            <Image
              src="/hero-icons/icon-hover-8.svg"
              alt="Logo"
              width={100}
              height={100}
              className="hidden group-hover:block"
            />
            <Image
              src="/hero-icons/icon-image-8.png"
              alt="Logo"
              width={100}
              height={100}
              className="-mt-4.5 hidden group-hover:block"
            />
          </div>
          <div className="relative w-25 h-25 group top-full hover:-top-7.5">
            <Image
              src="/hero-icons/icon-image-9.png"
              alt="Logo"
              width={100}
              height={100}
              className="mt-4 -mb-6.25 hidden group-hover:block"
            />
            <Image
              src="/hero-icons/icon-9.svg"
              alt="Logo"
              width={100}
              height={100}
              className="group-hover:hidden"
            />
            <Image
              src="/hero-icons/icon-hover-9.svg"
              alt="Logo"
              width={100}
              height={100}
              className="hidden group-hover:block"
            />
            <p className="text-base font-normal text-(--secondary-black) justify-self-center text-center w-33.25 mt-2.5 hidden group-hover:block">
              Cassia Bark
            </p>
          </div>
          <div className="relative w-25 h-25 group">
            <p className="text-base font-normal text-background justify-self-center text-center w-33.25 hidden group-hover:block -mt-8.5 mb-2.5">
              Lemon Peel
            </p>
            <Image
              src="/hero-icons/icon-10.svg"
              alt="Logo"
              width={100}
              height={100}
              className="group-hover:hidden"
            />
            <Image
              src="/hero-icons/icon-hover-10.svg"
              alt="Logo"
              width={100}
              height={100}
              className="hidden group-hover:block"
            />
            <Image
              src="/hero-icons/icon-image-10.png"
              alt="Logo"
              width={100}
              height={100}
              className="-mt-7.5 hidden group-hover:block"
            />
          </div>
        </div>
      )}
    </>
  );
}
