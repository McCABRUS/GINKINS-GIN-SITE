import Image from 'next/image';
import IconBlock from './IconBlock';
import { ContactForm } from './ContactForm';
import TrackableA from '@/components/TrackableA';

export default function Contact() {
  return (
    <section className="w-screen bg-(--secondary-beige) pb-27 relative">
      <div className="py-26.5 lg:py-45.25 w-screen bg-(--primary-red-main) mx-auto text-center">
        <h3 className="text-(--primary-gold-main)! reveal-on-scroll-top">
          Contact &amp; Partnerships
        </h3>
        <h1 className="mt-10 pq:mt-5 text-background! reveal-on-scroll-top">
          Let’s Make <br className="block lg:hidden" />
          Something
          <br />
          Great <br className="block lg:hidden" />
          Together
        </h1>
      </div>
      <div className="mt-18 mx-auto max-xl:px-5 max-4xl:px-37.25 md:max-w-480 text-center flex flex-col">
        <h5 className="reveal-on-scroll-top">Get in touch</h5>

        <h4 className="mt-4 mb-6 text-(--primary-black)! max-xl:text-[42px]! reveal-on-scroll-top">
          Whether You’re Pouring or <br className="block lg:hidden" />
          Partnering
          <br />
          We’re Listening.
        </h4>

        <p className="text-base leading-6 text-(--primary-black) font-normal max-w-240 md:max-w-[80%] xl:max-w-240 place-self-center reveal-on-scroll-top">
          We believe the best things happen when passionate people connect.
          Whether you&apos;re looking to stock Ginkins in your bar, collaborate
          on a killer event, or just want to say hello—we’re all ears (and good
          vibes).
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-3">
          <div className="grid grid-cols-[1fr_1fr] md:hidden lg:flex flex-col md:flex-row lg:flex-col justify-center space-y-16 order-2 lg:order-1 mb-10 lg:mb-0 reveal-on-scroll">
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
          <div className="flex flex-col justify-center w-full my-10 md:mb-26.5 order-1 lg:order-2 md:w-4/5 xl:w-full justify-self-center">
            <Image
              draggable={false}
              src="/imgs/where_to_buy/ginkins-gin-golden-bloom-outdoor.webp"
              alt="Ginkins Golden Bloom Gin bottle placed on a stone pedestal in a sunny Mediterranean garden"
              width={405}
              height={628}
              className="object-cover w-full h-full  reveal-on-scroll-center"
            />
            <div className="mt-16 w-full hidden lg:block">
              <TrackableA
                href={`mailto:${'info'}@${'ginkins'}.com`}
                className="relative w-full h-9.75 mt-9.5 flex mx-auto items-center justify-center px-5 py-1.5 transition animatedButton group  reveal-on-scroll-top"
                eventName="click_mailto_contact"
                location="Where_To_Buy_contact"
              >
                <h5 className="group-hover:text-(--primary-black)! group-active:text-(--primary-black)! group-focus:text-(--primary-black)!">
                  INFO@GINKINS.COM
                </h5>
              </TrackableA>
            </div>
          </div>
          <div className="grid grid-cols-[1fr_1fr] md:hidden lg:flex flex-col md:flex-row lg:flex-col justify-center space-y-16 lg:justify-self-end order-3 reveal-on-scroll-left">
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
          <div className="hidden md:flex lg:hidden flex-row justify-center space-y-16 order-2 reveal-on-scroll-left gap-4">
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
        <div className="mt-0 mb-16 xl:mt-16 xl:mb-26.5 xs:w-1/2 w-2/3 self-center lg:w-full block lg:hidden">
          <TrackableA
            href={`mailto:${'info'}@${'ginkins'}.com`}
            className="relative w-full lg:w-1/2 h-9.75 md:mt-9.5 flex mx-auto items-center justify-center px-5 py-1.5 transition animatedButton group  reveal-on-scroll-top"
            eventName="click_mailto_contact"
            location="where_to_bu_contact"
          >
            <h5 className="group-hover:text-(--primary-black)! group-active:text-(--primary-black)! group-focus:text-(--primary-black)!">
              INFO@GINKINS.COM
            </h5>
          </TrackableA>
        </div>

        <div
          className="absolute border-solid border-(--primary-black) border-t border-r-0 border-b-0 border-l-0 shrink-0 w-18.25 h-0 z-20 top-9 left-1/2 -translate-x-1/2"
          style={{
            transform: 'rotate(90deg) scale(1, 1)',
          }}
        ></div>
      </div>
      <Divider />
      <div
        id="ContactSection"
        className="place-self-center max-xl:px-5 max-4xl:px-37.25 md:max-w-480 mt-20 text-center w-full md:w-4/5 xl:w-full mx-auto"
      >
        <h5 className="reveal-on-scroll-top">Connect</h5>

        <h4 className="mt-4 mb-6 text-(--primary-black)! max-xl:text-[42px]! reveal-on-scroll-top">
          Let’s Partner
        </h4>

        <p className="mt-2 text-base leading-6 font-normal text-(--primary-black) reveal-on-scroll">
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
