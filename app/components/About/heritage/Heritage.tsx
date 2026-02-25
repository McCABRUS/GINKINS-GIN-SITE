import Image from 'next/image';
import { heritageData } from './HeritageData';
import HeritageInnovation from '../../Home/HeritageInnovation';
import HeritageMobile from './HeritageMobile';

export default function Heritage() {
  return (
    <section className="w-screen bg-(--secondary-beige) relative">
      <HeritageInnovation />
      <div className="w-full bg-(--primary-red-main) -mt-24 lg:-mt-px">
        <div className="bg-(--primary-red-main) lg:max-h-50 lg:mx-auto w-screen relative lg:grid-cols-2 max-xl:px-5 max-4xl:px-37.25 md:max-w-480 grid">
          <h4 className="text-background! justify-self-start self-start text-left hidden lg:block">
            Rooted in Louisville. <br />
            Crafted to Inspire.
          </h4>
          <Image
            src="/imgs/about/ginkins-gin-scott-botanicals.webp"
            alt="Expert distiller Scott Ginkins showcasing the botanical craftsmanship and traditional copper still used in creating Ginkins Gin."
            className="w-screen lg:w-142.25 h-129.5 lg:h-202.5 lg:justify-self-end lg:self-end object-cover relative object-top"
            height={814}
            width={852}
          />
        </div>
      </div>

      <div className="mx-auto max-xl:px-5 max-4xl:px-37.25 md:max-w-480 py-10 2xl:py-24 grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
        <div className="space-y-2 2xl:space-y-15">
          <p className="text-center lg:text-left text-lg leading-6.75 font-medium text-(--primary-black)">
            Ginkins began with a simple idea:
            <br /> What if gin could carry the same soul, pride, and
            storytelling power as bourbon?
          </p>

          <p className="text-center lg:text-left  text-base leading-6 text-(--primary-black)">
            In the heart of Kentucky—where bourbon reigns—we’re starting a new
            tradition. Ginkins Gin is rooted in Southern hospitality and crafted
            with intention. Every bottle captures the warmth, boldness, and
            unapologetic creativity of our region. It’s not just something you
            sip—it’s something you share. A spirit born to connect.
          </p>
          <p className="text-center lg:text-left  text-base leading-6 text-(--primary-black)">
            <strong>Founder Scott Ginkins</strong> was raised in Southern
            Indiana, just across the river from Louisville, where the lines
            between community and craft, legacy and innovation, are beautifully
            blurred. With a background in manufacturing and a lifelong passion
            for precision, Scott brought that same discipline and curiosity to
            the world of spirits. His journey led him to earn a postgraduate
            degree in distilling from{' '}
            <strong>Heriot-Watt University in Edinburgh</strong>, one of the
            world’s most respected programs in the field.
          </p>

          <p className="text-center lg:text-left  text-(--primary-red-main) text-3xl lg:text-4xl font-cormorant-garamond font-medium">
            The name Ginkins isn’t just a brand—it’s his family name.
            <strong>
              And every bottle is a personal expression of craftsmanship,
              connection, and pride.
            </strong>
          </p>
        </div>
      </div>
      <div className="mx-auto max-xl:px-5 max-4xl:px-37.25 md:max-w-480 pb-28 lg:mt-15.75">
        <div className="grid-cols-1 gap-5.25 lg:grid-cols-3 text-center lg:text-left hidden lg:grid">
          {heritageData.map((item, index) => (
            <div className="space-y-6" key={index}>
              <Image
                src={item.img}
                alt={item.alt}
                width={391}
                height={563}
                className="w-full h-140.75 object-cover"
              />
              <Image
                src="/imgs/home/ginkins-gin-icon-martini-decoration.svg"
                alt="Ginkins Gin Isotype"
                width={31}
                height={39}
                className="w-7.75 object-cover mx-auto lg:mx-0"
                aria-hidden
              />
              <p className="text-base leading-6 text-(--primary-black)">
                <strong>{item.text}</strong>
              </p>
            </div>
          ))}
        </div>
        <div className="mx-auto max-xl:px-5 max-lg:px-0 max-4xl:px-37.25 md:max-w-480 pb-28 lg:mt-15.75 lg:hidden">
          <HeritageMobile />
        </div>
      </div>
      <div
        className="absolute border-solid border-background border-t border-r-0 border-b-0 border-l-0 shrink-0 w-16.75 md:w-26.75 h-0 z-20 top-8.25 md:top-13.25 left-1/2 -translate-x-1/2"
        style={{
          transform: 'rotate(90deg) scale(1, 1)',
        }}
      ></div>
    </section>
  );
}
