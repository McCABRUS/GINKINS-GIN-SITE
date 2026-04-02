import HeroCover from './../HeroCover';
export default function TermsHero() {
  return (
    <section className="w-full bg-(--primary-beige) py-15">
      <HeroCover
        imageOpacity={0.2}
        translateYClassName="-translate-y-[65%] xs:-translate-y-[70%] pq:-translate-y-[85%] md:-translate-y-[90%] lg:-translate-y-[80%] xl:-translate-y-[64%] 2xl:-translate-y-[70%]"
      />
      <div className="mx-auto text-center">
        <h1 className="text-(--primary-black)!">
          Terms &amp; <br />
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
