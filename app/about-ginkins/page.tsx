import Founder from '../components/About/Founder';
import Heritage from '../components/About/heritage/Heritage';
import Hero from '../components/About/Hero';
import People from '../components/About/People';
import ShopBanner from '../components/About/ShopBanner';
import Story from '../components/About/Story';
import FooterMerch from '../components/FooterMerchCarousel/FooterMerch';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: {
    canonical: '/about-ginkins',
  },
};

export default function About() {
  return (
    <div className="flex min-h-screen items-center justify-center overflow-x-hidden">
      <main className="flex min-h-screen w-full flex-col items-center justify-between">
        <Hero />
        <Story />
        <People />
        <Founder />
        <Heritage />
        <ShopBanner />
        <FooterMerch />
      </main>
    </div>
  );
}
