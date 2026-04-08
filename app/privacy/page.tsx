import PrivacyHero from '../components/Privacy/PrivacyHero';
import PrivacySection from '../components/Privacy/PrivacySection';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: {
    canonical: '/privacy',
  },
};
export default function Privacy() {
  return (
    <div className="flex min-h-screen items-center justify-center overflow-x-hidden">
      <main className="flex min-h-screen w-full flex-col items-center justify-between">
        <PrivacyHero />
        <PrivacySection />
      </main>
    </div>
  );
}
