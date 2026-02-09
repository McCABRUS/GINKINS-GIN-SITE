import ShopBannerCocktails from '../components/Cocktails/ShopBannerCocktails';
import FooterMerch from '../components/FooterMerchCarousel/FooterMerch';
import JoinSustainability from '../components/Sustainability/Join/JoinSustainability';
import SustainabilityHero from '../components/Sustainability/SustainabilityHero';
import SustainabilityTimeline from '../components/Sustainability/Timeline/SustainabilityTimeline';

export default function sustainability() {
  return (
    <div className="flex min-h-screen items-center justify-center overflow-x-hidden">
      <main className="flex min-h-screen w-full flex-col items-center justify-between">
        <SustainabilityHero />
        <SustainabilityTimeline />
        <JoinSustainability />
        <ShopBannerCocktails />
        <FooterMerch />
      </main>
    </div>
  );
}
