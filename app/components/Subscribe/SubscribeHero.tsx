import Image from 'next/image';
import HeroCover from './../HeroCover';
export default function SubscribeHero() {
  return (
    <section className="relative w-screen overflow-hidden bg-(--secondary-beige) px-5 sm:px-28.25 py-12.75">
      <HeroCover translateYClassName="-translate-y-[45%] xs:-translate-y-[50%] pq:translate-y-[5%] md:-translate-y-[20%] lg:-translate-y-[30%] xl:-translate-y-[40%] 2xl:-translate-y-[40%] 3xl:-translate-y-[50%]" />
      <div className="relative  text-center">
        <h2 className="mb-11.25 text-center block lg:hidden">
          Join the Inner Circle – Gin Notes Newsletter
        </h2>
        <h1 className="text-center">
          Sip First. Know First.
          <br />
          <span className="text-(--primary-black)!">Belong Always.</span>
        </h1>
        <div className="my-16 flex justify-center">
          <div className="h-57.75 w-58">
            <Image
              draggable={false}
              src="/imgs/subscribe/icon-leaves-ginkins-gin.svg"
              alt="Leaves icon"
              height={231}
              width={232}
              aria-hidden
              priority
            />
          </div>
        </div>
        <div className="flex flex-col items-center gap-4">
          <span className="h-12 w-px" />
          <h3 className="text-center">GET EARLY ACCESS</h3>
        </div>
      </div>
      <div
        className="absolute border-solid border-(--primary-red-main) border-t border-r-0 border-b-0 border-l-0 shrink-0 w-18.75 h-0 z-20 bottom-35 left-1/2 -translate-x-1/2"
        style={{
          transform: 'rotate(90deg) scale(1, 1)',
        }}
      ></div>
    </section>
  );
}
