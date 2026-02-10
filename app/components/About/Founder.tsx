import Image from 'next/image';

export default function Founder() {
  return (
    <section className="w-screen bg-(--secondary-beige)">
      <div className="mx-auto px-5 md:px-10 lg:px-37.25 2xl:px-80 py-32 relative">
        <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-2 lg:gap-x-24">
          <div className="mx-auto order-1 space-y-6 max-w-131.25">
            <h6 className="text-center lg:text-left text-[35px]! text-(--secondary-black)!">
              We’re here to build more than a spirit.
            </h6>
            <p className="text-center lg:text-left text-base leading-6 text-(--secondary-black)">
              We’re here to build connections that last—the kind that turn a
              cocktail into a conversation and a night into a memory. Whether
              it’s the color in the glass, the feel of the stemware, or the
              laughter in the room, our gin is meant to be experienced, not just
              sipped.
            </p>
          </div>

          <div className="text-center lg:text-left order-2 space-y-6 lg:max-w-131.25">
            <h2>
              Because at Ginkins,
              <br />
              we know:
            </h2>
            <h2 className="text-(--primary-red-main)!">
              It’s not just what’s in <br className="block lg:hidden" /> the
              <br className="hidden lg:block" />
              glass. It’s who’s
              <br className="block lg:hidden" /> around it.
            </h2>
          </div>
          <div className="order-3 col-span-full flex items-center justify-center gap-8">
            <span className="h-px w-[41%] bg-(--primary-red-main)" />
            <Image
              src="/about/ginkins-icon-martini-decorations.svg"
              alt="Divider"
              width={40}
              height={50}
              className="mx-10 lg:mx-29.75"
            />
            <span className="h-px w-[41%] bg-(--primary-red-main)" />
          </div>

          <div className="mx-auto order-4">
            <h3 className="mb-13.75 text-center lg:text-left ">
              Meet the creator
            </h3>

            <div className="relative h-77 md:h-110 md:w-80 lg:h-120 xl:h-159.25 lg:w-auto max-w-108.75">
              <Image
                src="/home/scott-ginkins-founder-master-distiller.webp"
                alt="Professional master distiller presenting a bottle of premium gin at an elegant bar"
                width={705}
                height={667}
                className="object-cover relative rounded-t-full z-20 w-52.5 md:w-80 h-77 md:h-110 lg:w-auto lg:h-120 xl:h-159.25 lg:max-w-w-108.75"
              />
              <div className="absolute bottom-0 -right-5.5 lg:-right-11.25 h-37.25 md:h-55 xl:h-80 lg:h-60 w-63.5 md:w-91 lg:w-101.5 xl:w-131.25 bg-(--primary-red-main) z-10" />
            </div>

            <h5 className="mt-4 lg:-ml-12.25 text-center lg:text-left">
              “The man behind the gin.”
            </h5>
          </div>
          <div className="order-5 space-y-6 lg:max-w-131.25">
            <h4 className="text-(--secondary-black)! text-center lg:text-left text-[35px]! font-medium! leading-10.5! lg:leading-16.75!">
              Phillip Scott Ginkins
            </h4>

            <div className="text-center lg:text-left space-y-4 text-base leading-6 text-(--secondary-black)">
              <p>
                Born in Southern Indiana and shaped by the culture of nearby
                Louisville, <strong>Scott Ginkins</strong> grew up where the
                spirit of craftsmanship runs as deep as the Ohio River. With a
                background in manufacturing and a mind for precision, he always
                had a passion for how things are made—and why they matter.
              </p>

              <p>
                That passion led him across the Atlantic to
                <strong>Heriot-Watt University in Edinburgh</strong>, where he
                earned a postgraduate degree in distilling and immersed himself
                in the science, art, and legacy of spirits. But it was back
                home—surrounded by the hospitality, grit, and creative energy of
                the region—that the idea for Ginkins Gin came to life.
              </p>

              <p>
                More than just a product,
                <strong>Ginkins is his namesake and his purpose</strong>—a gin
                that speaks to tradition, yet embraces the bold. With vibrant
                citrus, refined botanicals, and the unmistakable smoothness of
                Kentucky’s limestone-rich water, Scott created a spirit that
                connects people not just through taste, but through the moments
                shared around it.
              </p>
            </div>

            <p className="font-cormorant-garamond text-3xl lg:text-4xl italic text-(--primary-black) font-bold lg:font-medium text-center lg:text-left mb-15 lg:mb-0">
              We bottle connection. <br />
              You pour it forward.
            </p>
          </div>
        </div>
        <div
          className="absolute hidden lg:block border-solid border-(--primary-black) border-t border-r-0 border-b-0 border-l-0 shrink-0 w-84.25 h-0 z-20 top-[168.5px] left-1/2 -translate-x-1/2"
          style={{
            transform: 'rotate(90deg) scale(1, 1)',
          }}
        ></div>
        <div
          className="absolute border-solid border-(--primary-black) border-t border-r-0 border-b-0 border-l-0 shrink-0 w-16.75 lg:w-24.5 h-0 z-20  bottom-8.25 lg:bottom-12.25 left-1/2 -translate-x-1/2"
          style={{
            transform: 'rotate(90deg) scale(1, 1)',
          }}
        ></div>
      </div>
    </section>
  );
}
