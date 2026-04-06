import Image from 'next/image';
import HeroCover from './../HeroCover';
export default function GinsHero() {
  return (
    <section className="relative w-screen overflow-hidden bg-(--secondary-beige) pt-12.75 lg:pt-46">
      <HeroCover translateYClassName="-translate-y-[80%] xs:-translate-y-[80%] pq:-translate-y-[110%] md:-translate-y-[100%] lg:-translate-y-[90%] xl:-translate-y-[64%] 2xl:-translate-y-[70%]" />
      <div className="text-center relative mx-auto px-6 space-y-12 z-200">
        <h1 className="font-serif text-4xl leading-tight lg:text-6xl mb-32.75 reveal-on-load-top">
          <span>The Gin Collection</span>
          <span className="block text-(--primary-black)">
            (Our Craft, Your
            <br />
            Experience)
          </span>
        </h1>
        <div className="flex justify-center gap-6 lg:gap-37.75 relative reveal-on-load-top">
          <Image
            draggable={false}
            src="/imgs/our_gins/ginkins-gin-icon-bottle-red.svg"
            alt=""
            width={160}
            height={350}
            className="md:w-40 w-16"
            aria-hidden
            priority
          />
          <Image
            draggable={false}
            src="/imgs/our_gins/ginkins-gin-icon-bottle-gold.svg"
            alt=""
            width={160}
            height={350}
            className="md:w-40 w-16"
            aria-hidden
            priority
          />
          <Image
            draggable={false}
            src="/imgs/our_gins/ginkins-gin-icon-bottle-black.svg"
            alt=""
            width={160}
            height={350}
            className="md:w-40 w-16"
            aria-hidden
            priority
          />
        </div>
      </div>
      <div className="bg-(--primary-black) -mt-19 relative z-10">
        <div className="mx-auto md:py-45 pb-18.5 pt-22.75 max-xl:px-5 max-4xl:px-37.25 md:max-w-480">
          <div className="grid grid-cols-1 gap-10 md:gap-20 xl:grid-cols-2">
            <h4 className="text-background! whitespace-nowrap text-center xl:text-left mt-30 md:mt-0 reveal-on-load">
              Three Expressions. <br className="block xl:hidden" />
              One <br className="hidden xl:block" />
              Spirit of <br className="block 2xs:hidden" />
              Connection.
            </h4>
            <hr
              className="w-full text-background block xl:hidden"
              aria-hidden
            />
            <div className="text-center xl:text-left text-base leading-6 text-background reveal-on-load-top">
              <p>
                Every bottle of Ginkins is a celebration—of tradition
                reimagined, of botanicals brought to life, and of the shared joy
                in discovering something truly exceptional. Our collection
                reflects a devotion to detail, a passion for people, and a
                belief that the best gin doesn’t just taste great—it makes you
                feel something. Whether you’re savoring a quiet moment or
                shaking up the night with friends, there’s a Ginkins spirit
                ready to elevate it.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="hidden xl:block absolute border-solid border-background border-t border-r-0 border-b-0 border-l-0 shrink-0 w-78 h-0 z-20 bottom-39 left-1/2 -translate-x-1/2"
        style={{
          transform: 'rotate(90deg) scale(1, 1)',
        }}
      ></div>
    </section>
  );
}
