import CollectionCarousel from './CollectionCarousel';

export default function CollectionHome() {
  return (
    <section className="relative w-full">
      <div
        className="absolute border-solid border-background border-t border-r-0 border-b-0 border-l-0 shrink-0 w-16.25 top-8 h-0 z-20 left-1/2 -translate-x-1/2"
        style={{
          transform: 'rotate(90deg) scale(1, 1)',
        }}
      ></div>
      <div className="bg-(--primary-black) w-full h-380 md:h-337.5 lg:h-317.5 absolute left-0"></div>
      <div className="flex flex-col gap-6 items-center justify-start w-full absolute top-23">
        <div className="p-2.5 flex flex-row gap-2.5 items-center justify-center shrink-0 w-113.5 relative">
          <h3 className="text-(--primary-gold-main)! text-center uppercase relative flex-1">
            The Gin Collection (Our Craft, <br className="inline lg:hidden" />
            Your Experience)
          </h3>
        </div>
        <div className="p-2.5 flex flex-col gap-2.5 items-center justify-center self-stretch shrink-0 relative">
          <h1 className="text-background! text-center font-global-tokens-headings-h1-desktop-font-family text-global-tokens-headings-h1-desktop-font-size leading-global-tokens-headings-h1-desktop-line-height font-global-tokens-headings-h1-desktop-font-weight uppercase relative self-stretch">
            THREE <br className="inline xl:hidden" /> EXPRESSIONS.
            <br />
            ONE SPIRIT OF <br className="inline xl:hidden" /> CONNECTION{' '}
          </h1>
        </div>
      </div>
      <CollectionCarousel></CollectionCarousel>
      <div className="w-full h-300 md:h-257 lg:h-317.25 static -mt-204.5">
        <div
          className="w-108 h-317.25 absolute left-0 top-0 hidden lg:block"
          style={{
            background:
              'linear-gradient(270deg, rgba(30, 30, 30, 0.00) 0%,rgba(30, 30, 30, 1.00) 92.30769276618958%)',
          }}
        ></div>
        <div
          className="w-123.5 h-317.25 absolute right-0 top-317  hidden lg:block"
          style={{
            background:
              'linear-gradient(270deg, rgba(30, 30, 30, 0.00) 33.01192224025726%,rgba(30, 30, 30, 1.00) 100%)',
            transformOrigin: 'top',
            transform: 'rotate(-180deg) scale(1, 1)',
          }}
        ></div>
      </div>
      <div className="flex flex-col gap-11 w-full absolute px-8 md:px-37.25  top-266.5">
        <div
          className="border-solid border-[#e3d384] border-t -mt-14 border-r-0 border-b-0 border-l-0 self-stretch shrink-0 h-0 relative"
          style={{
            transformOrigin: 'top',
            transform: 'rotate(0deg) scale(1, 1)',
          }}
        ></div>
        <div className="flex flex-row items-start justify-center self-stretch shrink-0 h-[216.43px] relative mt-20 md:mt-0">
          <div className="flex flex-col lg:flex-row gap-0 items-start justify-center flex-1 h-[216.43px] relative">
            <div className="text-background text-left text-base leading-[24.16px] relative flex-1 h-[147.98px] mb-20 md:mb-0">
              Every bottle of Ginkins is a celebration—of tradition reimagined,
              of botanicals brought to life, and of the shared joy in
              discovering something truly exceptional.{' '}
            </div>
            <div
              className="border-solid border-background border-t mt-122.5 md:mt-77.5 lg:mt-27 border-r-0 border-b-0 border-l-0 shrink-0 w-16.25 lg:w-54 h-0 absolute lg:relative left-1/2 lg:left-0 -translate-x-1/2 lg:translate-x-0"
              style={{
                transformOrigin: 'top',
                transform: 'rotate(90deg) scale(1, 1)',
              }}
            ></div>
            <div className="text-background text-left text-base leading-[24.16px] font-normal relative flex-1">
              Our collection reflects a devotion to detail, a passion for
              people, and a belief that the best gin doesn’t just taste great—it
              makes you feel something. Whether you’re savoring a quiet moment
              or shaking up the night with friends, there’s a Ginkins spirit
              ready to elevate it.{' '}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
