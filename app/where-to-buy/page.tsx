import FooterMerch from '../components/FooterMerchCarousel/FooterMerch';
import BottleConnectionBuy from '../components/WhereToBuy/BottleConnectionBuy';
import Contact from '../components/WhereToBuy/Contact/Contact';
import FindWhereToBuy from '../components/WhereToBuy/FindWhereToBuy/FindWhereToBuy';
import FindShops from '../components/WhereToBuy/FindShops';
import ShopHero from '../components/WhereToBuy/ShopHero';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: {
    canonical: '/where-to-buy',
  },
};
export default function WhereToBuy() {
  return (
    <div className="flex min-h-screen items-center justify-center overflow-x-hidden">
      <div className="absolute w-full h-25 top-0 bg-[#8f171c]"></div>
      <main className="flex min-h-screen w-full flex-col items-center justify-between">
        <ShopHero />
        <FindShops />
        <FindWhereToBuy />
        <Contact />
        <BottleConnectionBuy />
        <FooterMerch />
      </main>
    </div>
  );
}
