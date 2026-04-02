import HeroCover from './../HeroCover';
export default function HeroFAQs() {
  return (
    <section className="w-full bg-(--primary-beige) py-15">
      <HeroCover
        imageOpacity={0.2}
        translateYClassName="-translate-y-[65%] xs:-translate-y-[70%] pq:-translate-y-[85%] md:-translate-y-[90%] lg:-translate-y-[80%] xl:-translate-y-[64%] 2xl:-translate-y-[70%]"
      />
      <div className="mx-auto text-center max-xl:px-5 max-4xl:px-37.25 md:max-w-480">
        <h1 className="text-(--primary-black)!">FAQS</h1>
        <h2 className="mt-11.5 text-(--primary-red-main)! md:mt-8">
          Ginkins <br className="block md:hidden" />
          Gin
        </h2>
        <h3 className="mt-8">Curious? You’re our kind of people.</h3>
        <p className="mt-8 text-lg leading-6.75 text-(--primary-black) md:mt-10 lg:font-medium">
          We love a good question almost as much as we love a great gin. Whether
          you&apos;re wondering how we craft our spirits, where to buy them, or
          how best to serve them—we&apos;ve got answers that are helpful,
          honest, and never boring.
        </p>
      </div>
    </section>
  );
}
