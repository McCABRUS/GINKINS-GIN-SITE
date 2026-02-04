import Hero from '../components/About/Hero';
import Story from '../components/About/Story';

export default function About() {
  return (
    <div className="flex min-h-screen items-center justify-center overflow-x-hidden">
      <main className="flex min-h-screen w-full flex-col items-center justify-between">
        <Hero />
        <Story />
      </main>
    </div>
  );
}
