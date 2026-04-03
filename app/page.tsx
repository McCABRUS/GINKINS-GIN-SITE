import Hero from './components/Home/Hero/Hero';
import WelcomeHome from './components/Home/WelcomeHome';
import HeritageHomeSection from './components/Home/HeritageHomeSection';
import BannerHomeMantaGin from './components/Home/BannerHomeMantaGin';
import CollectionHome from './components/Home/Collection/CollectionHome';
import BannerHomeShop from './components/Home/BannerHomeShop';
import HeritageInnovation from './components/Home/HeritageInnovation';
import Connections from './components/Home/Connections/Connections';
import AboutHomeMenu from './components/Home/AboutMenuHome';
import CocktailsHome from './components/Home/Cocktails/CocktailsHome';
import Testimonials from './components/Home/Testimonials';
import BottleConnection from './components/Home/BottleConnection';
import FooterMerch from './components/FooterMerchCarousel/FooterMerch';
export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center overflow-x-hidden">
      <div className="absolute w-full h-25 top-0 bg-(--primary-black)"></div>
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
        <Testimonials />
        <BottleConnection />
        <FooterMerch />
      </main>
    </div>
  );
}
