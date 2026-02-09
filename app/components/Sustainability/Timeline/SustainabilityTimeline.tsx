import DesktopTimeline from './DesktopTimeline';
import MobileTimeline from './MobileTimeline';

export default function SustainabilityTimeline() {
  return (
    <section className="py-20 px-42.25 bg-(--secondary-beige)">
      <p className="mx-auto text-3xl lg:text-4xl text-center italic mt-10 lg:mb-27.5 font-cormorant-garamond text-(--primary-black) py-17.25 xl:px-59.75">
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
