import TermsHero from '../components/Terms/TermsHero';
import TermsSection from '../components/Terms/TermsSection';

export default function Terms() {
  return (
    <div className="flex min-h-screen items-center justify-center overflow-x-hidden">
      <main className="flex min-h-screen w-full flex-col items-center justify-between">
        <TermsHero />
        <TermsSection />
      </main>
    </div>
  );
}
