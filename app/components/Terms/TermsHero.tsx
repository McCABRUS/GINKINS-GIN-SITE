export default function TermsHero() {
  return (
    <section className="w-full bg-(--primary-cream) px-6 py-15 md:px-12 lg:px-36.75">
      <div className="absolute inset-0 pointer-events-none">
        <picture>
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
            className="h-full w-full object-cover object-center xl:top-50"
            loading="eager"
            fetchPriority="high"
          />
        </picture>
        <div className="absolute inset-x-0 bottom-0 h-20 bg-linear-to-t from-(--secondary-beige) to-transparent" />
      </div>
      <div className="mx-auto text-center">
        <h1 className="text-(--primary-black)!">
          Terms &amp; <br />
          Conditions
        </h1>
        <h2 className="mt-11.5 text-(--primary-red-main)! md:mt-8">
          The Fine Print, But Make It Clear
        </h2>
        <h3 className="mt-45.25">Legal Stuff You’ll Actually Understand</h3>
      </div>
    </section>
  );
}
