import ClassicGinkinsCocktails from '../components/Cocktails/ClassicCocktails/ClassicGinkinsCocktails';
import CocktailsHero from '../components/Cocktails/CocktailsHero';
import CocktailsMenu from '../components/Cocktails/CocktailsMenu';
import FoodPairings from '../components/Cocktails/Pairings/FoodPairings';
import RecipesIntro from '../components/Cocktails/RecipesIntro';
import ShopBannerCocktails from '../components/Cocktails/ShopBannerCocktails';
import SignatureCreations from '../components/Cocktails/SignatureHomeCreations/SignatureCreations';
import FooterMerch from '../components/FooterMerchCarousel/FooterMerch';

export default function Cocktails() {
  return (
    <div className="flex min-h-screen items-center justify-center overflow-x-hidden">
      <main className="flex min-h-screen w-full flex-col items-center justify-between">
        <CocktailsHero />
        <RecipesIntro />
        <CocktailsMenu />
        <SignatureCreations />
        <ClassicGinkinsCocktails />
        <FoodPairings />
        <ShopBannerCocktails />
        <FooterMerch />
      </main>
    </div>
  );
}
