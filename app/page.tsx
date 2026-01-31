import Hero from './components/Hero/Hero';
import WelcomeHome from './components/WelcomeHome';
import HeritageHomeSection from './components/HeritageHomeSection';
import BannerHomeMantaGin from './components/BannerHomeMantaGin';
import CollectionHome from './components/Collection/CollectionHome';
export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <main className="flex min-h-screen w-full flex-col items-center justify-between">
        <Hero />
        <WelcomeHome />
        <HeritageHomeSection />
        <BannerHomeMantaGin />
        <CollectionHome />
      </main>
    </div>
  );
}
