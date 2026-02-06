import Contact from '../components/WhereToBuy/Contact/Contact';
import FindGinkins from '../components/WhereToBuy/FindGinkins/FindGinkins';
import FindUs from '../components/WhereToBuy/FindUs';
import ShopHero from '../components/WhereToBuy/ShopHero';

export default function WhereToBuy() {
  return (
    <div className="flex min-h-screen items-center justify-center overflow-x-hidden">
      <main className="flex min-h-screen w-full flex-col items-center justify-between">
        <ShopHero />
        <FindUs />
        <FindGinkins />
        <Contact />
      </main>
    </div>
  );
}
