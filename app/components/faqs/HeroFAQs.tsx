export default function HeroFAQs() {
  return (
    <section className="w-full bg-(--primary-beige) py-15">
      <div className="absolute inset-0 pointer-events-none max-xl:px-5 max-4xl:px-37.25 md:max-w-480">
        <picture className="absolute w-full">
          <source
            media="(max-width: 640px)"
            srcSet="/imgs/about/ginkins-gin-heritage-farm-illustration-480.webp"
          />
          <source
            media="(max-width: 1024px)"
            srcSet="/imgs/about/ginkins-gin-heritage-farm-illustration-768.webp"
          />
          <img
            src="/imgs/about/ginkins-gin-heritage-farm-illustration-1200.webp"
            alt="Golden line art illustration of a Kentucky farm and distillery at sunset for Ginkins Gin background"
            className="h-full w-full object-cover object-bottom xl:top-27.5 2xl:-top-35 opacity-20 relative"
            loading="eager"
            fetchPriority="high"
          />
        </picture>
        <div className="absolute inset-x-0 bottom-0 h-20 bg-linear-to-t from-(--secondary-beige) to-transparent" />
      </div>
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
