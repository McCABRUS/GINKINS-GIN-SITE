import FooterMerch from '../components/FooterMerchCarousel/FooterMerch';
import BottleConnection from '../components/Home/BottleConnection';
import GinProducts from '../components/OurGins/GinProducts';
import GinsHero from '../components/OurGins/GinsHero';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: {
    canonical: '/our-gins',
  },
};
export default function About() {
  return (
    <div className="flex min-h-screen items-center justify-center overflow-x-hidden">
      <main className="flex min-h-screen w-full flex-col items-center justify-between">
        <GinsHero />
        <GinProducts />
        <BottleConnection />
        <FooterMerch />
      </main>
    </div>
  );
}
