import AccoladesHero from '../components/Accolades/AccoladesHero';
import RecentAwards from '../components/Accolades/Awards/RecentAwards';
import Celebrated from '../components/Accolades/Celebrated';
import PressHighlights from '../components/Accolades/Press/PressHighlights';
import ShopBannerCocktails from '../components/Cocktails/ShopBannerCocktails';
import FooterMerch from '../components/FooterMerchCarousel/FooterMerch';

export default function Subscribe() {
  return (
    <div className="flex min-h-screen items-center justify-center overflow-x-hidden">
      <main className="flex min-h-screen w-full flex-col items-center justify-between">
        <AccoladesHero />
        <Celebrated />
        <RecentAwards />
        <PressHighlights />
        <ShopBannerCocktails />
        <FooterMerch />
      </main>
    </div>
  );
}
