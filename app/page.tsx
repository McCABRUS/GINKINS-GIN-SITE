import Hero from './components/Home/Hero/Hero';
import WelcomeHome from './components/Home/WelcomeHome';
import HeritageHomeSection from './components/Home/HeritageHomeSection';
import BannerHomeMantaGin from './components/Home/BannerHomeMantaGin';
import CollectionHome from './components/Home/Collection/CollectionHome';
import BannerHomeShop from './components/Home/BannerHomeShop';
import HeritageInnovation from './components/Home/HeritageInnovation';
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
      </main>
    </div>
  );
}
