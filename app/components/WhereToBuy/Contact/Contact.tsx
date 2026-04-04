import Image from 'next/image';
import IconBlock from './IconBlock';
import { ContactForm } from './ContactForm';

export default function Contact() {
  return (
    <section className="w-screen bg-(--secondary-beige)  pb-27 relative">
      <div className="pt-26.5 lg:pt-45.25 pb-13.25 w-screen bg-(--primary-red-main) mx-auto text-center">
        <h3 className="text-(--primary-gold-main)!">
          Contact &amp; Partnerships
        </h3>
        <h1 className="mt-10 text-background!">
          Let’s Make <br className="block lg:hidden" />
          Something
          <br />
          Great <br className="block lg:hidden" />
          Together
        </h1>
      </div>
      <div className="mt-13.25 mx-auto max-xl:px-5 max-4xl:px-37.25 md:max-w-480 text-center flex flex-col">
        <h5>Get in touch</h5>

        <h4 className="mt-4 mb-6 text-(--primary-black)! max-xl:text-[42px]!">
          Whether You’re Pouring or <br className="block lg:hidden" />
          Partnering
          <br />
          We’re Listening.
        </h4>

        <p className="text-base leading-6 text-(--primary-black) font-normal max-w-240 place-self-center">
          We believe the best things happen when passionate people connect.
          Whether you&apos;re looking to stock Ginkins in your bar, collaborate
          on a killer event, or just want to say hello—we’re all ears (and good
          vibes).
        </p>
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-3">
          <div className="flex flex-col justify-center space-y-16 lg:justify-self-start order-2 lg:order-1 mb-10 lg:mb-0">
            <IconBlock
              label="General Inquiries"
              svgImg="/imgs/where_to_buy/ginkins-gin-icon-cocktail-shaker.svg"
              svgAlt=""
              svgWidth={96}
              svgHeight={120}
            />
            <IconBlock
              label="Events &amp; Collaborations"
              svgImg="/imgs/where_to_buy/ginkins-gin-icon-botanical-pattern.svg"
              svgAlt=""
              svgWidth={128}
              svgHeight={120}
            />
          </div>
          <div className="flex flex-col justify-center w-full my-10 md:mb-26.5 order-1 lg:order-2">
            <Image
              draggable={false}
              src="/imgs/where_to_buy/ginkins-gin-golden-bloom-outdoor.webp"
              alt="Ginkins Golden Bloom Gin bottle placed on a stone pedestal in a sunny Mediterranean garden"
              width={405}
              height={628}
              className="object-cover w-full h-full"
            />
            <div className="mt-16 w-full hidden lg:block">
              <a
                href={`mailto:${'info'}@${'ginkins'}.com`}
                className="relative w-full h-9.75 mt-9.5 flex mx-auto items-center justify-center px-5 py-1.5 transition animatedButton group"
              >
                <h5 className="group-hover:text-(--primary-black)! group-active:text-(--primary-black)! group-focus:text-(--primary-black)!">
                  INFO@GINKINS.COM
                </h5>
              </a>
            </div>
          </div>
          <div className="flex flex-col justify-center space-y-16 lg:justify-self-end order-3">
            <IconBlock
              label="Wholesale &amp; Distribution"
              svgImg="/imgs/where_to_buy/ginkins-gin-icon-bottle-slim.svg"
              svgAlt=""
              svgWidth={96}
              svgHeight={120}
            />
            <IconBlock
              label="Retailers"
              svgImg="/imgs/where_to_buy/ginkins-gin-icon-round-glass.svg"
              svgAlt=""
              svgWidth={108}
              svgHeight={120}
            />
          </div>
        </div>
        <div className="mt-16 mb-26.5 w-full block lg:hidden">
          <a
            href={`mailto:${'info'}@${'ginkins'}.com`}
            className="relative w-full lg:w-1/2 h-9.75 mt-9.5 flex mx-auto items-center justify-center px-5 py-1.5 transition animatedButton group"
          >
            <h5 className="group-hover:text-(--primary-black)! group-active:text-(--primary-black)! group-focus:text-(--primary-black)!">
              INFO@GINKINS.COM
            </h5>
          </a>
        </div>

        <div
          className="absolute border-solid border-(--primary-black) border-t border-r-0 border-b-0 border-l-0 shrink-0 w-18.25 h-0 z-20 top-9 left-1/2 -translate-x-1/2"
          style={{
            transform: 'rotate(90deg) scale(1, 1)',
          }}
        ></div>
      </div>
      <Divider />
      <div className="place-self-center max-xl:px-5 max-4xl:px-37.25 md:max-w-480 mt-20 text-center w-full mx-auto">
        <h5 className="">Connect</h5>

        <h4 className="mt-4 mb-6 text-(--primary-black)! max-xl:text-[42px]!">
          Let’s Partner
        </h4>

        <p className="mt-2 text-base leading-6 font-normal text-(--primary-black)">
          Whether You&apos;re Pouring or Partnering—We’re Listening.
        </p>
        <ContactForm />
      </div>
    </section>
  );
}

function Divider() {
  return (
    <div className="flex items-center justify-center gap-6">
      <span className="h-px w-full bg-(--primary-red-main)" aria-hidden />
      <Image
        draggable={false}
        src="/imgs/our_gins/ginkins-gin-icon-sparkle-shield.svg"
        alt="Divider"
        width={40}
        aria-hidden
        height={50}
        className="2xs:mx-29.75 mx-20"
      />
      <span className="h-px w-full bg-(--primary-red-main)" aria-hidden />
    </div>
  );
}
