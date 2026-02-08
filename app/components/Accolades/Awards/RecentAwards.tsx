import Image from 'next/image';
import AwardItem from './AwardItem';
import Star from './Star';

export default function RecentAwards() {
  return (
    <section className="relative w-full bg-(--primary-cream) py-50">
      <div className="relative mx-auto px-37.5">
        <div
          className="
            pointer-events-none absolute
            left-1/2 top-0 -translate-x-1/2
            flex flex-col items-center
            h-full
          "
        >
          <div className="relative -top-63.75">
            <Star />
          </div>
          <div className="flex-1 w-px bg-(--primary-red-main) -mt-72.5 -mb-45" />
          <div className="relative top-40">
            <Star />
          </div>
        </div>
        <h1 className="relative z-10 mb-16 text-center">
          <span className="mr-21">RECENT</span>{' '}
          <span className="ml-21">AWARDS</span>
        </h1>
        <div className="relative z-10 grid grid-cols-2 gap-y-20 lg:grid-cols-6 lg:gap-y-0">
          <AwardItem
            image="/accolades/ginkins-gin-usa-spirits-ratings-gold-2025.png"
            alt="USA Spirits Ratings Gold 2025 award medal for Ginkins Gin"
            title="Gold Medal"
            subtitle="USA Spirits Ratings 2025"
          />

          <AwardItem
            image="/accolades/ginkins-gin-iwsc-92-points-2025.png"
            alt="IWSC 92 points 2025 silver award medal for Ginkins Gin"
            title="Silver Medal (92 Points)"
            subtitle="International Wine & Spirit Competition 2025"
          />

          <AwardItem
            image="/accolades/ginkins-gin-of-the-year-gold-2024.png"
            alt="London 2024 Gin of the Year Gold award medal for Ginkins Gin"
            title="Gold Medal"
            subtitle="2024 International Spirits Competition"
            showDivider={false}
          />

          <AwardItem
            image="/accolades/ginkins-gin-global-spirits-masters-gold.png"
            alt="The Spirits Business Global Spirits Masters Gold award for Ginkins Gin"
            title="Gold Medal"
            subtitle="Gin Masters 2024 (Microdistillery Round)"
          />

          <AwardItem
            image="/accolades/ginkins-gin-adi-international-spirits-silver.png"
            alt="ADI International Spirits Competition Silver award for Ginkins Gin"
            title="Silver Medal"
            subtitle="Artisan Spirit Awards"
          />

          <AwardItem
            image="/accolades/ginkins-gin-icon-star-grey.svg"
            alt="Gin Guide Awards Excellence Award 2024"
            title="Excellence Award"
            subtitle="Gin Guide Awards 2024"
            showDivider={false}
          />
        </div>
      </div>
    </section>
  );
}
