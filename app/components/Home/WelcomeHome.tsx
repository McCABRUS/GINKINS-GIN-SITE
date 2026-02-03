import Image from 'next/image';
export default function WelcomeHome() {
  return (
    <section className="bg-(--primary-red-main) flex w-full h-51.25 flex-col justify-center items-center gap-2.5 lg:-mt-101 xl:mt-0">
      <div className="flex flex-wrap flex-row justify-between items-center content-center w-80.5 md:w-160.75 h-16.5 bg-[url(/WelcomeContainer/welcomeContainer.svg)] bg-contain bg-center bg-no-repeat">
        <div>
          <Image
            src="/WelcomeContainer/iconLeft.svg"
            alt="Left Icon"
            height={42}
            width={20}
            className="ml-3.5 hidden md:block"
          />
          <Image
            src="/WelcomeContainer/iconLeft_m.svg"
            alt="Left Icon"
            height={21}
            width={10}
            className="ml-3.5 block md:hidden"
          />
        </div>
        <div className="m-0">
          <h2 className="text-background! text-lg! md:text-4xl!">
            WELCOME TO GINKINS
          </h2>
        </div>
        <div>
          <Image
            src="/WelcomeContainer/iconRight.svg"
            alt="Right Icon"
            height={42}
            width={20}
            className="mr-3.5 hidden md:block"
          />
          <Image
            src="/WelcomeContainer/iconRight_m.svg"
            alt="Right Icon"
            height={21}
            width={10}
            className="mr-3.5 block md:hidden"
          />
        </div>
      </div>
    </section>
  );
}
