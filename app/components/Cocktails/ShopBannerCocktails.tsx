export default function ShopBannerCocktails() {
  return (
    <section
      className="relative w-full aspect-4/5 md:aspect-16/7 bg-cover bg-left"
      style={{
        backgroundImage:
          "url('/cocktails/ginkins-gin-lifestyle-hands-red-curtain.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black/70 visible md:invisible" />
      <div className="relative mx-auto w-full px-6 h-full">
        <div className="flex h-full items-center justify-center">
          <div className="max-w-127.25 text-center mr-0 py-20 2xs:py-0">
            <h4 className="text-[35px]! xl:text-[56px]! my-9.5 xl:my-17.25 text-background!">
              Experience <br />
              Ginkins Gin
            </h4>
            <div className="mt-8">
              <button className="inline-flex items-center justify-center bg-(--primary-red-main) px-8 py-3 text-lg font-medium uppercase   transition hover:bg-(--primary-gold-main)">
                <h5 className="text-background!">Shop Online</h5>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
