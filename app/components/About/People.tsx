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
        <div className="order-1 lg:order-2 flex items-cender bg-(--primary-black) py-10 xl:py-20 max-xl:px-5 px-37.25">
          <div className="w-full md:max-w-205 reveal-on-scroll-left">
            <p className="text-center lg:text-left text-4xl text-(--primary-gold-main) italic font-bold font-cormorant-garamond md:mb-11.75 mb-23.25">
              We believe great gin begins with
              <br />
              great people
            </p>
            <p className="text-center lg:text-left text-4xl leading-relaxed text-background italic font-medium font-cormorant-garamond">
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
