import Hero from './components/Home/Hero/Hero';
import WelcomeHome from './components/Home/WelcomeHome';
import HeritageHomeSection from './components/Home/HeritageHomeSection';
import BannerHomeMantaGin from './components/Home/BannerHomeMantaGin';
import CollectionHome from './components/Home/Collection/CollectionHome';
import BannerHomeShop from './components/Home/BannerHomeShop';
import HeritageInnovation from './components/Home/HeritageInnovation';
import Connections from './components/Home/Connections/Connections';
import AboutHomeMenu from './components/Home/AboutMenuHome';
import CocktailsHome from './components/Home/CocktailsHome';
export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <main className="flex min-h-screen w-full flex-col items-center justify-between">
        <Hero />
        <WelcomeHome />
        <HeritageHomeSection />
        <BannerHomeMantaGin />
        <CollectionHome />
        <BannerHomeShop />
        <HeritageInnovation />
        <Connections />
        <AboutHomeMenu />
        <CocktailsHome />
      </main>
    </div>
  );
}
