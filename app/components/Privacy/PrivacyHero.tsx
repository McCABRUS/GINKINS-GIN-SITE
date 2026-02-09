import Image from 'next/image';

export default function PrivacyHero() {
  return (
    <section className="w-full bg-(--primary-cream) px-6 py-15 md:px-12 lg:px-36.75">
      <div className="absolute inset-0 pointer-events-none xl:mt-87.5 opacity-20">
        <Image
          src="/about/ginkins-gin-heritage-farm-illustration.png"
          alt="Golden line art illustration of a Kentucky farm and distillery at sunset for Ginkins Gin background"
          fill
          className="object-cover object-bottom"
          priority
        />
      </div>
      <div className="mx-auto text-center">
        <h1 className="text-(--primary-black)!">
          Privacy & <br />
          Cookies Policy
        </h1>
        <h2 className="mt-11.5 text-(--primary-red-main)! md:mt-8">
          Protecting Your Data, One Sip at a Time
        </h2>
        <p className="mt-8 text-lg leading-6.75 text-(--primary-black) font-semibold">
          We respect your privacy like we respect our craft—with care, clarity,
          and no unnecessary extras. When you visit our site, we may collect
          limited data to improve your experience, but we’ll always be
          transparent about what we’re doing and why.
        </p>
      </div>
    </section>
  );
}
