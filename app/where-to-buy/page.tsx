import FindGinkins from '../components/WhereToBuy/FIndGinkins/FindGinkins';
import FindUs from '../components/WhereToBuy/FIndUs';
import ShopHero from '../components/WhereToBuy/ShopHero';

export default function WhereToBuy() {
  return (
    <div className="flex min-h-screen items-center justify-center overflow-x-hidden">
      <main className="flex min-h-screen w-full flex-col items-center justify-between">
        <ShopHero />
        <FindUs />
        <FindGinkins />
      </main>
    </div>
  );
}
