import Image from 'next/image';
import HeroCover from './../HeroCover';
export default function SustainabilityHero() {
  return (
    <section className="relative w-screen overflow-hidden bg-(--secondary-beige) py-12.75">
      <HeroCover translateYClassName="-translate-y-[45%] xs:-translate-y-[50%] pq:-translate-y-[25%] md:-translate-y-[40%] lg:-translate-y-[36%] xl:-translate-y-[40%] 2xl:-translate-y-[40%] 3xl:-translate-y-[50%]" />
      <div className="relative  text-center">
        <h2 className="mb-6 text-center">Sustainability</h2>
        <h1 className="text-center">The Ginkins Way</h1>
        <div className="my-13.75 lg:my-16 flex justify-center">
          <div className="w-32.75 h-32.75 lg:h-48 lg:w-48">
            <Image
              draggable={false}
              src="/imgs/sustainability/ginkins-gin-icon-botanical-flower-red.svg"
              alt="Leaves icon"
              height={192}
              width={192}
              aria-hidden
              priority
            />
          </div>
        </div>
        <div className="flex flex-col items-center gap-4">
          <span className="h-12 w-px" />
          <h3 className="text-center">Rooted in Craft. Grown with Care.</h3>
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
