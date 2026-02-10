export default function Celebrated() {
  return (
    <section className="relative aspect-3/5 md:aspect-1/2 lg:aspect-16/7 bg-cover bg-center  w-full">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/accolades/ginkins-gin-serving-martini-box.webp')",
        }}
      />
      <div className="pointer-events-none absolute inset-0 vignette-overlay bg-black/50 xl:bg-black/10" />
      <div className="relative mx-auto xl:px-43 px-6 py-15 xl:py-16.5 h-full">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-20 h-full">
          <div className="flex items-end lg:items-baseline justify-center px-10 xs:px-19">
            <h4 className="text-background! text-center lg:text-left">
              Celebrated by Experts. <br />
              Loved by Explorers.
            </h4>
          </div>
          <div className="relative justify-center items-baseline lg:flex lg:flex-row">
            <span
              className="absolute -left-12 top-0 hidden h-[85%] w-px bg-background lg:block"
              aria-hidden
            />
            <span
              className="mb-12 block h-px w-full bg-background lg:hidden"
              aria-hidden
            />
            <div className="space-y-6 px-10 xs:px-19">
              <p className="text-base leading-6 font-normal text-background text-center lg:text-left">
                We don’t make gin for trophies—but it’s nice when the world
                notices. From prestigious competitions to top-tier press
                coverage, Ginkins has earned recognition for doing things our
                way:
              </p>
              <p className="text-3xl lg:text-4xl italic font-cormorant-garamond text-(--primary-gold-main) text-center lg:text-left">
                bold, refined, and rooted in connection.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
