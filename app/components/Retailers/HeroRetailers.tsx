import HeroCover from './../HeroCover';
export default function HeroRetailers() {
  return (
    <section className="w-full bg-(--primary-beige) py-15">
      <HeroCover
        imageOpacity={0.2}
        translateYClassName="-translate-y-[65%] xs:-translate-y-[70%] pq:-translate-y-[85%] md:-translate-y-[90%] lg:-translate-y-[80%] xl:-translate-y-[64%] 2xl:-translate-y-[70%]"
      />
      <div className="mx-auto text-center max-xl:px-5 max-4xl:px-37.25 md:max-w-480 relative z-10">
        <h1 className="text-(--primary-black)! reveal-on-load-top normal-case!">
          RETAILERS NEAR YOU
        </h1>

        <p className="mt-11.5 text-lg leading-6.75 text-(--primary-black) md:mt-8 lg:font-medium reveal-on-load-top max-w-230.5 align-middle mx-auto">
          From specialty bottle shops to respected wine and spirits retailers,
          Ginkins Gin is gradually expanding its footprint to bring our
          Kentucky-crafted gin to more consumers. Check below for current
          availability and retail partners.
        </p>
      </div>
    </section>
  );
}
