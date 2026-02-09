import TimelineImage from './TimelineImage';
import TimelineMarker from './TimelineMarker';

export default function DesktopTimeline() {
  return (
    <div className="relative hidden lg:block">
      <div className="absolute left-1/2 top-[-17.7%] h-226 w-px bg-(--primary-red-main)" />
      <div className="absolute left-1/2 top-0 -translate-x-1/2">
        <TimelineMarker />
      </div>
      <div className="absolute left-1/2 top-[37%] -translate-x-1/2">
        <TimelineMarker />
      </div>
      <div className="absolute left-1/2 top-[72%] -translate-x-1/2">
        <TimelineMarker />
      </div>

      <div className="mx-auto max-w-428.5 grid grid-cols-2 gap-x-27 px-6">
        <div className="flex flex-col gap-18.25">
          <div className="ml-auto max-w-130 text-left">
            <div className="flex justify-center -mt-11">
              <TimelineImage
                src="/sustainability/scott-ginkins-master-distiller-laboratory.png"
                alt="Scott Ginkins, Master Distiller, in a white lab coat tasting spirits next to a copper pot still at the distillery"
              />
            </div>

            <p className="mt-15.75 font-bold text-base leading-6 text-(--primary-black)">
              Repurposing with Purpose:
            </p>
            <p className="mt-3 text-base leading-6 font-normal text-(--primary-black)">
              Our care doesn’t stop at the bottle. After distillation, we
              repurpose our botanicals as natural fertilizer, returning
              nutrients to the earth and supporting local gardens. It’s a
              full-circle approach that honors our environment and keeps our
              craft grounded in purpose.
            </p>
          </div>
          <div className="flex justify-end">
            <TimelineImage
              src="/sustainability/ginkins-gin-founder-and-team-outdoors.png"
              alt="Scott and the Ginkins Gin team discussing botanicals at a rustic wooden table outdoors"
            />
          </div>
        </div>
        <div className="flex flex-col gap-16.25">
          <div className="max-w-130">
            <p className="font-bold text-base leading-6 text-(--primary-black)">
              Pure Botanicals, Nothing More:
            </p>
            <p className="mt-3 text-base leading-6 font-normal text-(--primary-black)">
              Our gin begins with organic, ethically sourced
              botanicals—carefully selected for their purity and flavor. We
              never add what isn’t needed. Just clean, honest ingredients
              distilled with Kentucky’s pristine water to create something both
              timeless and forward-thinking.
            </p>
            <div className="mt-8">
              <div className="flex justify-center  mt-17">
                <TimelineImage
                  src="/sustainability/ginkins-gin-fresh-juniper-berries.png"
                  alt="Close-up of fresh blue juniper berries in a wooden spoon, the core botanical of Ginkins Gin"
                />
              </div>
            </div>
          </div>
          <div className="max-w-130">
            <p className="font-bold text-base leading-6 text-(--primary-black)">
              Nurturing Connections, Embracing Responsibility:
            </p>
            <p className="mt-3 text-base leading-6 font-normal text-(--primary-black)">
              We work with partners who share our values—people who take pride
              in what they do and contribute meaningfully to our process.
              Together, we’re nurturing something more than gin. We’re nurturing
              community, connection, and responsibility.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
