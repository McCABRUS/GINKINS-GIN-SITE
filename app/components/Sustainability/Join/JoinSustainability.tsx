import CornerIcon from './CornerIcon';

export default function JoinSustainability() {
  return (
    <section className="relative w-full bg-(--primary-gold-main) overflow-hidden">
      <div className="hidden md:block">
        <CornerIcon className="absolute top-22.5 left-28 h-20.75 w-20.75" />
        <CornerIcon className="absolute top-22.5 right-28 h-20.75 w-20.75" />
        <CornerIcon className="absolute bottom-13.5 left-28 h-20.75 w-20.75" />
        <CornerIcon className="absolute bottom-13.5 right-28 h-20.75 w-20.75" />
      </div>
      <div className="md:hidden">
        <CornerIcon className="absolute top-10 left-1/2 -translate-x-1/2 h-11.75 w-11.75" />
        <CornerIcon className="absolute bottom-10 left-1/2 -translate-x-1/2 h-11.75 w-11.75" />
      </div>
      <div className="relative z-10 mx-auto flex min-h-130 max-w-3xl flex-col items-center justify-center px-6 text-center">
        <h2 className="text-(--primary-red-main)!">
          JOIN US
          <br />
          IN SUSTAINING <br className="block lg:hidden" />
          THE FUTURE:
        </h2>
        <p className="mt-6 max-w-xl text-base md:text-lg leading-relaxed text-black/80">
          So when you choose Ginkins, you&apos;re not just enjoying a remarkable
          spirit. You&apos;re joining us in raising the bar—for sustainability,
          craftsmanship, and the future of small-batch distilling
        </p>
      </div>
    </section>
  );
}
