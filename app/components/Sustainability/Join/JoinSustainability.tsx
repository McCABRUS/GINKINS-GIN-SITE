import CornerIcon from './CornerIcon';

export default function JoinSustainability() {
  return (
    <section className="relative w-full bg-(--primary-gold-main) overflow-hidden py-9 lg:py-20">
      <div className="md:hidden max-xl:px-5 max-4xl:px-37.25 md:max-w-480">
        <CornerIcon className="absolute top-16.5 left-1/2 -translate-x-1/2 h-11.75 w-11.75" />
        <CornerIcon className="absolute bottom-16.5 left-1/2 -translate-x-1/2 h-11.75 w-11.75" />
      </div>
      <div className="relative z-10 mx-auto flex h-full min-h-130 flex-col items-center justify-center text-center max-xl:px-5 max-4xl:px-37.25 md:max-w-480">
        <div className="hidden md:block relative w-full h-full">
          <CornerIcon className="absolute -top-48 left-0 h-20.75 w-20.75" />
          <CornerIcon className="absolute -top-48 right-0 h-20.75 w-20.75" />
          <CornerIcon className="absolute -bottom-81.5  left-0 h-20.75 w-20.75" />
          <CornerIcon className="absolute -bottom-81.5 right-0 h-20.75 w-20.75" />
        </div>
        <h2 className="text-(--primary-red-main)!">
          JOIN US
          <br />
          IN SUSTAINING <br className="block lg:hidden" />
          THE FUTURE:
        </h2>
        <p className="mt-6 text-base md:text-lg leading-relaxed text-black/80">
          So when you choose Ginkins, you&apos;re not just enjoying a remarkable
          spirit. You&apos;re joining us in raising the bar—for sustainability,
          craftsmanship, and the future of small-batch distilling.
        </p>
      </div>
    </section>
  );
}
