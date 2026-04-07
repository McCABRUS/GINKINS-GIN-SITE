import AwardItem from './AwardItem';
import Star from './Star';

export default function RecentAwards() {
  return (
    <section className="relative w-full bg-(--primary-cream) py-15 xl:py-50">
      <div className="relative mx-auto max-xl:px-5 max-4xl:px-37.25 md:max-w-480 pb-15 lg:pb-0">
        <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 flex flex-col items-center h-full">
          <div className="relative top-31 xl:-top-63.75 lg:-top-23.75">
            <Star />
          </div>
          <div className="flex-1 w-px bg-(--primary-red-main) mt-27 lg:-mt-26 lg:-mb-12 xl:-mt-72.5 xl:-mb-45" />
          <div className="relative -top-1 lg:top-10 xl:top-40 ">
            <Star />
          </div>
        </div>
        <h1 className="relative z-10 mb-37.5 lg:mb-16 text-center">
          <span className="lg:mr-21 reveal-on-scroll-top">RECENT</span>
          <br className="inline lg:hidden" />
          <span className="lg:ml-21 reveal-on-scroll-bottom">AWARDS</span>
        </h1>
        <div className="relative z-10 grid grid-cols-2 gap-y-20 lg:grid-cols-6 lg:gap-y-0 gap-x-5 lg:gap-x-0 reveal-on-scroll-bottom">
          <AwardItem
            image="/imgs/accolades/ginkins-gin-usa-spirits-ratings-gold-2025.png"
            alt="USA Spirits Ratings Gold 2025 award medal for Ginkins Gin"
            title="Gold Medal"
            subtitle="USA Spirits Ratings 2025"
          />

          <AwardItem
            image="/imgs/accolades/ginkins-gin-iwsc-92-points-2025.png"
            alt="IWSC 92 points 2025 silver award medal for Ginkins Gin"
            title="92 Points Silver Medal"
            subtitle="International Wine &amp; Spirit Competition 2025"
          />

          <AwardItem
            image="/imgs/accolades/ginkins-gin-of-the-year-gold-2024.png"
            alt="London 2024 Gin of the Year Gold award medal for Ginkins Gin"
            title="Gold Medal"
            subtitle="2024 International Spirits Competition"
            showDivider={false}
          />

          <AwardItem
            image="/imgs/accolades/ginkins-gin-global-spirits-masters-gold.png"
            alt="The Spirits Business Global Spirits Masters Gold award for Ginkins Gin"
            title="Gold Medal"
            subtitle="Gin Masters 2024 (Microdistillery Round)"
          />

          <AwardItem
            image="/imgs/accolades/ginkins-gin-adi-international-spirits-silver.png"
            alt="ADI International Spirits Competition Silver award for Ginkins Gin"
            title="Silver Medal"
            subtitle="Artisan Spirit Awards"
          />

          <AwardItem
            image="/imgs/accolades/ginkins-gin-icon-star-grey.svg"
            alt="Gin Guide Awards Excellence Award 2024"
            title="Excellence Award"
            subtitle="Gin Guide Awards 2024"
            showDivider={false}
            atia-hidden
          />
        </div>
      </div>
    </section>
  );
}
