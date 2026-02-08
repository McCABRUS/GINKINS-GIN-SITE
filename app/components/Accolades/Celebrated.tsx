export default function Celebrated() {
  return (
    <section className="relative aspect-3/5 md:aspect-16/7 bg-cover bg-center  w-full">
      <div
        className="absolute inset-0 bg-cover bg-center "
        style={{
          backgroundImage:
            "url('/accolades/ginkins-gin-serving-martini-box.png')",
        }}
      />
      <div className="pointer-events-none absolute inset-0 vignette-overlay" />
      <div className="relative mx-auto px-43 py-16.5 h-full">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-20 h-full">
          <div className="flex items-baseline">
            <h4 className="text-background!">
              Celebrated by Experts. <br />
              Loved by Explorers.
            </h4>
          </div>
          <div className="relative">
            <span
              className="absolute -left-12 top-0 hidden h-[85%] w-px bg-background lg:block"
              aria-hidden
            />
            <span
              className="mb-12 block h-px w-full bg-background lg:hidden"
              aria-hidden
            />
            <div className="space-y-6">
              <p className="text-base leading-6 font-normal text-background">
                We don’t make gin for trophies—but it’s nice when the world
                notices. From prestigious competitions to top-tier press
                coverage, Ginkins has earned recognition for doing things our
                way:
              </p>
              <p className="text-4xl italic font-cormorant-garamond text-(--primary-gold-main)">
                Bold, refined, and rooted in connection.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
