import TimelineImage from './TimelineImage';
import TimelineMarker from './TimelineMarker';

export default function MobileTimeline() {
  return (
    <div className="lg:hidden flex flex-col items-center px-6">
      <TimelineImage
        src="/imgs/sustainability/ginkins-gin-fresh-juniper-berries.webp"
        alt="Close-up of fresh blue juniper berries in a wooden spoon, the core botanical of Ginkins Gin"
      />
      <div className="flex flex-col items-start">
        <p className="mt-6 text-base font-bold text-left leading-6 text-(--primary-black) reveal-on-scroll">
          Pure Botanicals, Nothing More:
        </p>
        <p className="mt-3 text-base font-normal text-left leading-6 text-(--primary-black) reveal-on-scroll">
          Our gin begins with organic, ethically sourced botanicals—carefully
          selected for their purity and flavor. We never add what isn’t needed.
          Just clean, honest ingredients distilled with Kentucky’s pristine
          water to create something both timeless and forward-thinking.
        </p>
      </div>

      <div className="my-12 flex flex-col items-center">
        <div className="h-px w-75 sm:w-100 md:w-150 bg-(--primary-red-main)" />
        <div className="-mt-3 bg-(--primary-background) px-2">
          <TimelineMarker />
        </div>
      </div>
      <TimelineImage
        src="/imgs/sustainability/scott-ginkins-master-distiller-laboratory.webp"
        alt="Scott Ginkins, Master Distiller, in a white lab coat tasting spirits next to a copper pot still at the distillery"
      />
      <div className="flex flex-col items-start">
        <p className="mt-6 text-base font-bold text-left leading-6 text-(--primary-black) reveal-on-scroll-left">
          Repurposing with Purpose:
        </p>
        <p className="mt-3 text-base font-normal text-left leading-6 text-(--primary-black) reveal-on-scroll-left">
          Our care doesn’t stop at the bottle. After distillation, we repurpose
          our botanicals as natural fertilizer, returning nutrients to the earth
          and supporting local gardens. It’s a full-circle approach that honors
          our environment and keeps our craft grounded in purpose.
        </p>
      </div>

      <div className="my-12 flex flex-col items-center">
        <div className="h-px w-75 sm:w-100 md:w-150 bg-(--primary-red-main)" />
        <div className="-mt-3 bg-(--primary-background) px-2">
          <TimelineMarker />
        </div>
      </div>
      <TimelineImage
        src="/imgs/sustainability/ginkins-gin-founder-and-team-outdoors.webp"
        alt="Scott and the Ginkins Gin team discussing botanicals at a rustic wooden table outdoors"
      />
      <div className="flex flex-col items-start">
        <p className="mt-6 text-base font-bold text-left leading-6 text-(--primary-black) reveal-on-scroll">
          Nurturing Connections, Embracing Responsibility:
        </p>
        <p className="mt-3 text-base font-normal text-left leading-6 text-(--primary-black) reveal-on-scroll">
          We work with partners who share our values—people who take pride in
          what they do and contribute meaningfully to our process. Together,
          we’re nurturing something more than gin. We’re nurturing community,
          connection, and responsibility.
        </p>
      </div>
    </div>
  );
}
