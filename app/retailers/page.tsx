import RetailersContent from '../components/Retailers/RetailersContent';
import HeroRetailers from '../components/Retailers/HeroRetailers';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: {
    canonical: '/cocktails',
  },
};
export default function retailers() {
  return (
    <div className="flex min-h-screen items-center justify-center overflow-x-hidden">
      <main className="flex min-h-screen w-full flex-col items-center justify-between">
        <HeroRetailers />
        <RetailersContent />
      </main>
    </div>
  );
}
