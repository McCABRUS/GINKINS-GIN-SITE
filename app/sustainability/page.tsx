import ShopBannerCocktails from '../components/Cocktails/ShopBannerCocktails';
import FooterMerch from '../components/FooterMerchCarousel/FooterMerch';
import SustainabilityHero from '../components/Sustainability/SustainabilityHero';

export default function sustainability() {
  return (
    <div className="flex min-h-screen items-center justify-center overflow-x-hidden">
      <main className="flex min-h-screen w-full flex-col items-center justify-between">
        <SustainabilityHero />
        <ShopBannerCocktails />
        <FooterMerch />
      </main>
    </div>
  );
}
