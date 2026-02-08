import Image from 'next/image';

export default function AccoladesHero() {
  return (
    <section className="relative w-screen overflow-hidden bg-(--secondary-beige) px-5 sm:px-28.25 py-27.75">
      <div className="absolute inset-0 pointer-events-none xl:mt-87.5">
        <Image
          src="/about/ginkins-gin-heritage-farm-illustration.png"
          alt="Golden line art illustration of a Kentucky farm and distillery at sunset for Ginkins Gin background"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="relative  text-center">
        <h2 className="mb-6 text-center">ACCOLADES & PRESS</h2>
        <h1 className="text-center">
          RAISING THE BAR,{' '}
          <span className="text-(--primary-black)!">
            ONE <br />
            AWARD AT A TIME
          </span>
        </h1>
        <div className="my-16 flex justify-center">
          <div className="h-79.75 w-76">
            <Image
              src="/accolades/icon-stars-ginkins-gin.svg"
              alt="Leaves icon"
              height={304}
              width={319}
            />
          </div>
        </div>
        <div className="flex flex-col items-center gap-4">
          <span className="h-12 w-px" />
          <h3 className="text-center">EXPERIENCE</h3>
        </div>
      </div>
      <div
        className="absolute border-solid border-(--primary-red-main) border-t border-r-0 border-b-0 border-l-0 shrink-0 w-18.75 h-0 z-20 bottom-51.25 left-1/2 -translate-x-1/2"
        style={{
          transform: 'rotate(90deg) scale(1, 1)',
        }}
      ></div>
    </section>
  );
}
