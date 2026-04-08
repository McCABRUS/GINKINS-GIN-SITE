export default function Celebrated() {
  return (
    <section className="relative aspect-3/5 pq:aspect-5/3 lg:aspect-16/7 bg-cover bg-center w-full">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/imgs/accolades/ginkins-gin-serving-martini-box.webp')",
        }}
      />
      <div className="pointer-events-none absolute inset-0 vignette-overlay bg-black/50 xl:bg-black/10" />
      <div className="relative mx-auto max-xl:px-5 max-4xl:px-37.25 md:max-w-480 py-15 xl:py-16.5 h-full">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-20 h-full">
          <div className="flex items-end lg:items-baseline justify-center lg:justify-start reveal-on-scroll">
            <h4 className="text-background! text-center lg:text-left reveal-on-load">
              Celebrated by Experts. <br />
              Loved by Explorers.
            </h4>
          </div>
          <div className="relative justify-center items-baseline lg:flex lg:flex-row">
            <span
              className="absolute -left-10 top-0 hidden h-full w-px bg-background lg:block"
              aria-hidden
            />
            <span
              className="mb-10 block h-px w-full bg-background lg:hidden"
              aria-hidden
            />
            <div className="space-y-6 reveal-on-load-top">
              <p className="text-lg leading-6 font-normal text-background text-center lg:text-left reveal-on-scroll-top">
                We don’t make gin for trophies—but it’s nice when the world
                notices. From prestigious competitions to top-tier press
                coverage, Ginkins has earned recognition for doing things our
                way:
              </p>
              <p className="text-3xl lg:text-4xl italic font-cormorant-garamond text-(--primary-gold-main) text-center lg:text-left reveal-on-scroll-top">
                Bold, refined, and rooted in connection.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
