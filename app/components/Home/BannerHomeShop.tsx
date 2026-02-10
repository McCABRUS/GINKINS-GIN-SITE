import Image from 'next/image';
import Link from 'next/link';

export default function BannerHomeShop() {
  return (
    <section className="w-full h-250 2xs:h-230 sm:h-135.5 p-5 md:px-12.5 md:py-13.75 bg-(--secondary-beige)">
      <div className="w-full h-full relative border-4 border-solid border-(--primary-gold-main) px-11.25 md:px-0 py-20 flex items-center justify-center">
        <div className="absolute lg:left-1/10 xl:left-1/4 top-1/10 lg:top-1/2 -translate-y-1/2">
          <Image
            src="/HomeShop/shopBannerIcon_Left.svg"
            alt="Leaf icon"
            height={60}
            width={46}
          />
        </div>
        <div className="text-center">
          <h2 className="text-[42px]! md:text-4xl! leading-12! ">
            Where to find Ginkins
            <br />
            from our still to your glass
          </h2>
          <h3 className="mt-12.5 text-lg! inline-block uppercase text-[#1A1A1A] underline underline-offset-4">
            Great gin travels. Let’s get you a pour
          </h3>

          <div className="mt-14">
            <Link
              href="/where-to-buy"
              className=" inline-block items-center justify-center bg-(--primary-red-main) px-5 py-1.5 text-sm font-medium uppercase  transition hover:bg-(--primary-gold-main)"
            >
              <h5 className="text-background!">Shop online</h5>
            </Link>
          </div>
        </div>
        <div className="absolute  lg:right-1/10 xl:right-1/4 top-9/10 lg:top-1/2 -translate-y-1/2">
          <Image
            src="/HomeShop/shopBannerIcon_Right.svg"
            alt="Coctail Cup icon"
            height={67}
            width={52}
          />
        </div>
      </div>
    </section>
  );
}
