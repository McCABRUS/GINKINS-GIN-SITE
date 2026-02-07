import CocktailsHero from '../components/Cocktails/CocktailsHero';

export default function Cocktails() {
  return (
    <div className="flex min-h-screen items-center justify-center overflow-x-hidden">
      <main className="flex min-h-screen w-full flex-col items-center justify-between">
        <CocktailsHero />
      </main>
    </div>
  );
}
