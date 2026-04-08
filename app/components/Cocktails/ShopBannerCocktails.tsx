import Link from 'next/link';

export default function ShopBannerCocktails() {
  return (
    <section
      className="relative w-full aspect-4/5 md:aspect-16/7 bg-cover bg-left"
      style={{
        backgroundImage:
          "url('/imgs/cocktails/ginkins-gin-lifestyle-hands-red-curtain.webp')",
      }}
    >
      <div className="absolute inset-0 bg-black/70 visible md:invisible" />
      <div className="relative mx-auto w-full max-xl:px-5 max-4xl:px-37.25 md:max-w-480 h-full">
        <div className="flex h-full items-center justify-center">
          <div className="max-w-127.25 text-center mr-0 py-20 2xs:py-0">
            <h4 className="text-[35px]! xl:text-[56px]! mb-9.5 xl:mb-17.25 text-background! reveal-on-scroll-top">
              Experience <br />
              Ginkins Gin
            </h4>
            <div className="mt-8">
              <Link
                href="https://ginkinsgin.distilleryspirits.com"
                target="_blank"
                className="inline-flex items-center justify-center px-5 py-1.5 transition animatedButton group  reveal-on-scroll-top"
              >
                <h5 className="text-lg! group-hover:text-(--primary-black)! group-active:text-(--primary-black)! group-focus:text-(--primary-black)!">
                  Shop Online
                </h5>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
