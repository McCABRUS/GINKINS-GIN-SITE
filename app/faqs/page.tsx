import FAQsSection from '../components/faqs/FAQsSection';
import HeroFAQs from '../components/faqs/HeroFAQs';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: {
    canonical: '/cocktails',
  },
};
export default function FAQs() {
  return (
    <div className="flex min-h-screen items-center justify-center overflow-x-hidden">
      <main className="flex min-h-screen w-full flex-col items-center justify-between">
        <HeroFAQs />
        <FAQsSection />
      </main>
    </div>
  );
}
