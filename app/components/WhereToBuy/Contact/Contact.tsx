import Image from 'next/image';
import IconBlock from './IconBlock';
import { ContactForm } from './ContactForm';

export default function Contact() {
  return (
    <section className="w-screen bg-(--secondary-beige) pt-45.25 pb-27 px-5 lg:px-37.5 relative">
      <div className="mx-auto px-6 lg:pt-32 text-center">
        <h3>Contact & Partnerships</h3>
        <h1 className="mt-10 mb-26.5 text-(--primary-black)!">
          Let’s Make <br className="block lg:hidden" />
          Something
          <br />
          Great <br className="block lg:hidden" />
          Together
        </h1>
        <h5>Get in touch</h5>

        <h4 className="mt-4 mb-6 text-(--primary-black)! ">
          Whether You’re Pouring or <br className="block lg:hidden" />
          Partnering,
          <br />
          We’re Listening.
        </h4>

        <p className="text-base leading-6 text-(--primary-black) font-normal">
          We believe the best things happen when passionate people connect.
          Whether you&apos;re looking to stock Ginkins in your bar, collaborate
          on a killer event, or just want to say hello—we’re all ears (and good
          vibes).
        </p>
        <div className="mt-20 grid grid-cols-1 gap-16 lg:grid-cols-3">
          <div className="flex flex-col justify-center space-y-16">
            <IconBlock
              label="General Inquiries"
              svgImg="/imgs/where_to_buy/ginkins-gin-icon-cocktail-shaker.svg"
              svgAlt=""
              svgWidth={96}
              svgHeight={120}
            />
            <IconBlock
              label="Events & Collaborations"
              svgImg="/imgs/where_to_buy/ginkins-gin-icon-botanical-pattern.svg"
              svgAlt=""
              svgWidth={128}
              svgHeight={120}
            />
          </div>
          <div className="flex justify-center">
            <Image
              src="/imgs/where_to_buy/ginkins-gin-golden-bloom-outdoor.webp"
              alt="Ginkins Golden Bloom Gin bottle placed on a stone pedestal in a sunny Mediterranean garden"
              width={405}
              height={628}
              className="object-cover"
            />
          </div>
          <div className="flex flex-col justify-center space-y-16">
            <IconBlock
              label="Wholesale & Distribution"
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

        <div className="mt-16 mb-26.5">
          <a
            href={`mailto:${'info'}@${'ginkins'}.com`}
            className="relative w-40 lg:w-44.25 h-9.75 mt-9.5 flex mx-auto items-center justify-center bg-(--primary-red-main) px-5 py-1.5 transition hover:bg-(--primary-gold-main) active:bg-(--primary-gold-main) focus:bg-(--primary-gold-main) group"
          >
            <h5 className="text-background! group-hover:text-(--primary-black)! group-active:text-(--primary-black)! group-focus:text-(--primary-black)!">
              INFO@GINKINS.COM
            </h5>
          </a>
        </div>
        <div>
          <h5 className="">Connect</h5>

          <h4 className="mt-4 mb-6 text-(--primary-black)!">Let’s Partner</h4>

          <p className="mt-2 text-base leading-6 font-normal text-(--primary-black)">
            Whether You&apos;re Pouring or Partnering—We’re Listening.
          </p>
          <ContactForm />
        </div>
      </div>
      <div
        className="absolute border-solid border-(--primary-black) border-t border-r-0 border-b-0 border-l-0 shrink-0 w-18.25 h-0 z-20 top-9 left-1/2 -translate-x-1/2"
        style={{
          transform: 'rotate(90deg) scale(1, 1)',
        }}
      ></div>
    </section>
  );
}
