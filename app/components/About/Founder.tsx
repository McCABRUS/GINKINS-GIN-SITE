import Image from 'next/image';

export default function Founder() {
  return (
    <section className="w-screen bg-(--secondary-beige)" id="founder">
      <div className="mx-auto max-xl:px-5 max-4xl:px-37.25 md:max-w-480 lg:pt-32 pb-16.75 lg:pb-32 pt-15 relative">
        <div className="grid grid-cols-1 gap-y-15 lg:grid-cols-2 lg:gap-x-24">
          <div className="max-lg:mx-auto order-1 space-y-6">
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

          <div className="lg:ml-auto text-center lg:text-left order-2 space-y-6">
            <h2>Because at Ginkins, we know:</h2>
            <h2 className="text-(--primary-red-main)!">
              It’s not just what’s in the glass. It’s who’s around it.
            </h2>
          </div>
          <div className="order-3 col-span-full flex items-center justify-center gap-8">
            <span className="h-px w-[41%] bg-(--primary-red-main)" />
            <Image
              draggable={false}
              src="/imgs/home/ginkins-gin-icon-martini-decoration.svg"
              alt="Divider"
              width={40}
              height={50}
              className="mx-10 lg:mx-29.75"
              aria-hidden
            />
            <span className="h-px w-[41%] bg-(--primary-red-main)" />
          </div>

          <div className="max-lg:mx-auto order-4">
            <h3 className="mb-15 lg:mb-13.75 text-center lg:text-left reveal-on-scroll-top">
              Meet the creator
            </h3>

            <div className="ml-11.25 relative w-full pr-24">
              <Image
                draggable={false}
                src="/imgs/home/scott-ginkins-founder-master-distiller.webp"
                alt="Professional master distiller presenting a bottle of premium gin at an elegant bar"
                width={816}
                height={1198}
                className="aspect-434/637 object-cover relative rounded-t-full z-20 w-full"
              />
              <div className="absolute bottom-0 -left-11 h-37.25 2xs:h-50 md:h-120 2xl:h-150 xl:h-80 lg:h-60 w-full bg-(--primary-red-main) z-10" />
            </div>

            <h5 className="mt-4 text-center lg:text-left">
              “The man behind the gin.”
            </h5>
          </div>
          <div className="lg:ml-auto order-5 space-y-6">
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
                That passion led him across the Atlantic to{' '}
                <strong>Heriot-Watt University in Edinburgh</strong>, where he
                earned a postgraduate degree in distilling and immersed himself
                in the science, art, and legacy of spirits. But it was back
                home—surrounded by the hospitality, grit, and creative energy of
                the region—that the idea for Ginkins Gin came to life.
              </p>

              <p>
                More than just a product,{' '}
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
