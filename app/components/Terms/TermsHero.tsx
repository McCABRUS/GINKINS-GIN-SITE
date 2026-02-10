import Image from 'next/image';

export default function TermsHero() {
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
        <h1 className="text-(--primary-black)!">
          Terms & <br />
          Conditions
        </h1>
        <h2 className="mt-11.5 text-(--primary-red-main)! md:mt-8">
          The Fine Print, But Make It Clear
        </h2>
        <h3 className="mt-45.25">Legal Stuff You’ll Actually Understand</h3>
      </div>
    </section>
  );
}
