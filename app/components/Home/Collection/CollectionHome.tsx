import CollectionCarousel from './CollectionCarousel';

export default function CollectionHome() {
  return (
    <section className="relative w-full">
      <div className="bg-(--primary-black) w-full h-[1270.64px] absolute left-0"></div>
      <div className="flex flex-col gap-6 items-center justify-start w-full absolute top-23">
        <div className="p-2.5 flex flex-row gap-2.5 items-center justify-center shrink-0 w-113.5 relative">
          <h3 className="text-(--primary-gold-main)! text-center uppercase relative flex-1">
            The Gin Collection (Our Craft, Your Experience)
          </h3>
        </div>
        <div className="p-2.5 flex flex-col gap-2.5 items-center justify-center self-stretch shrink-0 relative">
          <h1 className="text-background! text-center font-global-tokens-headings-h1-desktop-font-family text-global-tokens-headings-h1-desktop-font-size leading-global-tokens-headings-h1-desktop-line-height font-global-tokens-headings-h1-desktop-font-weight uppercase relative self-stretch">
            THREE EXPRESSIONS.
            <br />
            ONE SPIRIT OF CONNECTION{' '}
          </h1>
        </div>
      </div>
      <CollectionCarousel></CollectionCarousel>
      <div className="w-full h-317.25 static -mt-204.5">
        <div
          className="w-108 h-317.25 absolute left-0 top-0"
          style={{
            background:
              'linear-gradient(270deg, rgba(30, 30, 30, 0.00) 0%,rgba(30, 30, 30, 1.00) 92.30769276618958%)',
          }}
        ></div>
        <div
          className="w-123.5 h-317.25 absolute right-0 top-317"
          style={{
            background:
              'linear-gradient(270deg, rgba(30, 30, 30, 0.00) 33.01192224025726%,rgba(30, 30, 30, 1.00) 100%)',
            transformOrigin: 'top',
            transform: 'rotate(-180deg) scale(1, 1)',
          }}
        ></div>
      </div>
      <div className="flex flex-col gap-11 w-full absolute px-37.25  top-266.5">
        <div
          className="border-solid border-[#e3d384] border-t -mt-14 border-r-0 border-b-0 border-l-0 self-stretch shrink-0 h-0 relative"
          style={{
            transformOrigin: 'top',
            transform: 'rotate(0deg) scale(1, 1)',
          }}
        ></div>
        <div className="flex flex-row gap-[97.64px] items-start justify-center self-stretch shrink-0 h-[216.43px] relative">
          <div className="flex flex-row gap-[51.34px] items-start justify-center flex-1 h-[216.43px] relative">
            <div className="text-background text-left text-[16.10613441467285px] leading-[24.16px] relative flex-1 h-[147.98px]">
              Every bottle of Ginkins is a celebration—of tradition reimagined,
              of botanicals brought to life, and of the shared joy in
              discovering something truly exceptional.{' '}
            </div>
            <div
              className="border-solid border-background border-t mt-27 border-r-0 border-b-0 border-l-0 shrink-0 w-[216.43px] h-0 relative"
              style={{
                transformOrigin: 'top',
                transform: 'rotate(90deg) scale(1, 1)',
              }}
            ></div>
            <div className="text-background text-left text-[16.10613441467285px] leading-[24.16px] font-normal relative flex-1">
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
