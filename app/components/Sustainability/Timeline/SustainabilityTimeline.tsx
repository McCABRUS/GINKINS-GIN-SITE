import DesktopTimeline from './DesktopTimeline';
import MobileTimeline from './MobileTimeline';

export default function SustainabilityTimeline() {
  return (
    <section className="pb-20 lg:pt-25 bg-(--secondary-beige) max-xl:px-5 max-4xl:px-37.25 md:max-w-480">
      <p className="mx-auto text-3xl lg:text-4xl text-center italic mb-20 lg:mb-27.5 font-cormorant-garamond text-(--primary-black) lg:pb-17.25 reveal-on-load-top">
        At Ginkins, sustainability is more than a commitment—it’s a reflection
        of who we are. From our Louisville roots to every bottle we craft, we
        believe great gin should respect both tradition and the environment that
        shapes it.
      </p>
      <DesktopTimeline />
      <MobileTimeline />
    </section>
  );
}
