import FAQsSection from '../components/faqs/FAQsSection';
import HeroFAQs from '../components/faqs/HeroFAQs';

export default function Cocktails() {
  return (
    <div className="flex min-h-screen items-center justify-center overflow-x-hidden">
      <main className="flex min-h-screen w-full flex-col items-center justify-between">
        <HeroFAQs />
        <FAQsSection />
      </main>
    </div>
  );
}
