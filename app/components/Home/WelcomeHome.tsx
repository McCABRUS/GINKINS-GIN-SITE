import Image from 'next/image';
export default function WelcomeHome() {
  return (
    <section className="bg-(--primary-red-main) flex w-full h-51.25 flex-col justify-center items-center lg:-mt-101 xl:mt-0">
      <div className="flex flex-wrap flex-row justify-between items-center content-center w-[80%] h-6.75 lg:h-13.25 ">
        <Image
          src="/home/ginkins-gin-welcome-banner-ornament.svg"
          alt=""
          height={53}
          width={621}
          className="absolute left-1/2 -translate-x-1/2"
          aria-hidden
        />
        <h2 className="text-center text-background! text-lg! md:text-4xl! z-10 left-1/2 -translate-x-1/2 absolute whitespace-nowrap">
          WELCOME TO GINKINS
        </h2>
        <div></div>
      </div>
    </section>
  );
}
