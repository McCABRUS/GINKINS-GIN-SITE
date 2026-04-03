import Image from 'next/image';
export default function WelcomeHome() {
  return (
    <section className="bg-(--primary-red-main) flex w-full h-51.25 flex-col justify-center items-center lg:-mt-101 xl:mt-0">
      <div className="flex flex-wrap flex-row justify-between items-center content-center w-[80%] h-6.75 lg:h-13.25 max-w-480 reveal-on-load-center">
        <Image
          draggable={false}
          src="/imgs/home/ginkins-gin-welcome-banner-ornament.svg"
          alt=""
          height={53}
          width={621}
          className="absolute left-1/2 -translate-x-1/2 hidden lg:block"
          aria-hidden
        />
        <Image
          draggable={false}
          src="/imgs/home/ginkins-gin-welcome-banner-ornament-mobile.svg"
          alt=""
          height={53}
          width={621}
          className="absolute left-1/2 -translate-x-1/2 block lg:hidden"
          aria-hidden
        />
        <h2 className="text-center text-background! text-2xl! 2xs:text-3xl! xs:text-4xl! md:text-6xl! lg:text-4xl! z-10 left-1/2 -translate-x-1/2 absolute lg:whitespace-nowrap">
          WELCOME TO GINKINS
        </h2>
        <div></div>
      </div>
    </section>
  );
}
