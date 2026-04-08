import Image from 'next/image';

export default function People() {
  return (
    <section className="w-screen bg-(--primary-black)">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="order-2 lg:order-1 relative h-125 lg:h-auto">
          <Image
            draggable={false}
            src="/imgs/about/ginkins-gin-night-bar-friends.webp"
            alt="Group of people toasting with glasses of Gin Kings at the bar of an elegant bar during the night."
            height={747}
            width={1124}
            className="object-cover h-full"
          />
        </div>
        <div className="order-1 lg:order-2 flex items-center bg-(--primary-black) py-15 xl:py-20 max-xl:px-5 px-37.25">
          <div className="w-full lg:max-w-205 reveal-on-scroll-left content-center">
            <p className="text-center xl:text-left lg:text-4xl text-(--primary-gold-main) italic font-bold font-cormorant-garamond md:mb-11.75 mb-15 text-3xl">
              We believe great gin begins <br className="block lg:hidden" />
              with <br className="hidden 2xl:block" />
              great people
            </p>
            <p className="text-center xl:text-left lg:text-4xl leading-relaxed text-background italic font-medium font-cormorant-garamond text-3xl">
              That’s why every bottle of Ginkins is a result of real
              collaboration—from the farmers who grow our botanicals to the
              friends and fans who raise a glass and share the moment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
