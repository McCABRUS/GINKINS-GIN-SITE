import Image from 'next/image';

export default function HeroFAQs() {
  return (
    <section className="w-full bg-(--primary-cream) px-6 py-15 md:px-12 lg:px-36.75">
      <div className="absolute inset-0 pointer-events-none xl:mt-87.5 opacity-20">
        <Image
          src="/about/ginkins-gin-heritage-farm-illustration.png"
          alt="Golden line art illustration of a Kentucky farm and distillery at sunset for Ginkins Gin background"
          fill
          className="object-cover object-bottom"
        />
      </div>
      <div className="mx-auto text-center">
        <h1 className="text-(--primary-black)!">FAQS</h1>
        <h2 className="mt-11.5 text-(--primary-red-main)! md:mt-8">
          Ginkins <br className="block md:hidden" />
          Gin
        </h2>
        <h3 className="mt-8">Curious? You’re our kind of people.</h3>
        <p className="mt-8 text-lg leading-6.75 text-(--primary-black) md:mt-10 font-semibold">
          We love a good question almost as much as we love a great gin. Whether
          you&apos;re wondering how we craft our spirits, where to buy them, or
          how best to serve them—we&apos;ve got answers that are helpful,
          honest, and never boring.
        </p>
      </div>
    </section>
  );
}
