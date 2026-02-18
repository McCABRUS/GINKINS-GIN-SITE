import Image from 'next/image';

export default function People() {
  return (
    <section className="w-screen bg-(--primary-black)">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="order-2 lg:order-1 relative h-125 lg:h-auto">
          <Image
            src="/imgs/home/story-carrousel/ginkins-gin-night-bar-friends.webp"
            alt="Group of people toasting with glasses of Gin Kings at the bar of an elegant bar during the night."
            fill
            className="object-cover h-125"
          />
        </div>
        <div className="order-1 lg:order-2 flex items-center bg-(--primary-black) px-6 py-20  xl:px-38.5">
          <div className="w-full max-w-[448.5px] mx-auto">
            <p className="text-center lg:text-left text-4xl text-(--primary-gold-main) italic font-bold font-cormorant-garamond mb-11.75">
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
