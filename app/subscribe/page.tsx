import ShopBannerCocktails from '../components/Cocktails/ShopBannerCocktails';
import FooterMerch from '../components/FooterMerchCarousel/FooterMerch';
import SubscribeContainer from '../components/Subscribe/SubscribeContainer';
import SubscribeHero from '../components/Subscribe/SubscribeHero';

export default function Subscribe() {
  return (
    <div className="flex min-h-screen items-center justify-center overflow-x-hidden">
      <main className="flex min-h-screen w-full flex-col items-center justify-between">
        <SubscribeHero />
        <SubscribeContainer />
        <ShopBannerCocktails />
        <FooterMerch />
      </main>
    </div>
  );
}
