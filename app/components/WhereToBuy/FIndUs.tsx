import Image from 'next/image';

export default function FindUs() {
  return (
    <section className="bg-(--secundary-beige) py-24">
      <div className="mx-auto px-[12.5%]">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <div className="space-y-6">
            <h5 className="mb-18.75">Find us</h5>
            <Image
              src="/connections/GinkinsMortarPestle.svg"
              alt=""
              width={56}
              height={69}
              className=""
            />
            <h4 className="text-(--primary-black)!  py-6">
              Great Gin Travels.
              <br />
              Let’s Get You a Pour.
            </h4>

            <p className="text-base leading-6 font-normal text-(--primary-black) mb-22.5">
              Whether you’re sipping in a cozy cocktail bar, toasting at home,
              or stocking up for your next gathering—Ginkins is never far away.
              We’ve partnered with incredible retailers, restaurants, and
              distributors who share our passion for quality and connection.
              Because good gin is made to be shared—and we’ll always help you
              find your next favorite pour.
            </p>

            <button className="w-40 lg:w-44.25 h-9.75 mt-9.5 flex items-center justify-center bg-(--primary-red-main) px-5 lg:px-8 py-1.5 lg:py-3 text-sm font-medium uppercase tracking-wide text-background transition hover:bg-(--primary-gold-main) mx-auto lg:mx-0">
              <h5 className="text-background!">Shop ONLINE</h5>
            </button>
          </div>

          {/* IMAGE */}
          <div className="relative">
            <div className="mx-0 w-full">
              <Image
                src="/where_to_buy/ginkins-gin-golden-tray-service.png"
                alt="Ginkins Gin bottle and a martini glass served on a golden tray with a shaker"
                width={608}
                height={693}
                className="w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
