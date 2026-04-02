import HeroCover from './../HeroCover';
export default function PrivacyHero() {
  return (
    <section className="w-full bg-(--primary-beige) px-6 py-15 md:px-12 lg:px-36.75">
      <HeroCover
        imageOpacity={0.2}
        translateYClassName="-translate-y-[65%] xs:-translate-y-[70%] pq:-translate-y-[85%] md:-translate-y-[90%] lg:-translate-y-[80%] xl:-translate-y-[64%] 2xl:-translate-y-[70%]"
      />
      <div className="mx-auto text-center">
        <h1 className="text-(--primary-black)!">
          Privacy &amp; <br />
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
