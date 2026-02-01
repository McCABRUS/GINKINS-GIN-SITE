import Image from 'next/image';

export default function BannerHomeShop() {
  return (
    <div className="w-full h-135.5 px-12.5 py-13.75 bg-(--secundary-beige)">
      <div className="w-full h-full relative border-4 border-solid border-(--primary-gold-main) py-20 flex items-center justify-center">
        <div className="absolute left-1/4 top-1/2 -translate-y-1/2">
          <Image
            src="/HomeShop/HomeShopBannerIcon_left.svg"
            alt="Leaf icon"
            height={60}
            width={46}
          />
        </div>
        <div className="text-center">
          <h2 className="leading-snug tracking-wide uppercase">
            Where to find Ginkins
            <br />
            from our still to your glass
          </h2>
          <h3 className="mt-6 inline-block text-xs tracking-widest uppercase text-[#1A1A1A] underline underline-offset-4">
            Great gin travels. Let’s get you a pour
          </h3>

          <div className="mt-8">
            <button className=" inline-block items-center justify-center bg-(--primary-red-main) px-8 py-3 text-sm font-medium uppercase tracking-wide transition hover:bg-(--primary-gold-main)">
              <h5 className="text-background!">Shop online</h5>
            </button>
          </div>
        </div>
        <div className="absolute right-1/4 top-1/2 -translate-y-1/2">
          <Image
            src="/HomeShop/HomeShopBannerIcon_right.svg"
            alt="Coctail Cup icon"
            height={67}
            width={52}
          />
        </div>
      </div>
    </div>
  );
}
