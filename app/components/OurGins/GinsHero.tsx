import Image from 'next/image';

export default function GinsHero() {
  return (
    <section className="relative w-screen overflow-hidden bg-(--secundary-beige) pt-46">
      <div className="absolute inset-0 pointer-events-none z-0 2xl:mt-50">
        <Image
          src="/about/ginkins-gin-heritage-farm-illustration.png"
          alt="Golden line art illustration of a Kentucky farm and distillery at sunset for Ginkins Gin background"
          fill
          className="object-cover w-full"
          priority
        />
      </div>
      <div className="text-center relative mx-auto px-6 space-y-12 z-200">
        <h1 className="font-serif text-4xl leading-tight lg:text-6xl mb-32.75">
          <span>The Gin Collection</span>
          <span className="block text-(--primary-black)">
            (Our Craft, Your
            <br />
            Experience)
          </span>
        </h1>
        <div className="flex justify-center gap-6 lg:gap-37.75 relative">
          <Image
            src="/our_gins/ginkins-gin-icon-bottle-red.svg"
            alt="Red Gin"
            width={160}
            height={350}
            className="lg:w-40"
          />
          <Image
            src="/our_gins/ginkins-gin-icon-bottle-gold.svg"
            alt="Gold Gin"
            width={160}
            height={350}
            className="lg:w-40"
          />
          <Image
            src="/our_gins/ginkins-gin-icon-bottle-black.svg"
            alt="Black Gin"
            width={160}
            height={350}
            className="lg:w-40"
          />
        </div>
      </div>
      <div className="bg-(--primary-black) -mt-19 relative z-10 pl-37.25 pr-38">
        <div className="mx-auto px-6 py-45">
          <div className="grid grid-cols-1 gap-20 lg:grid-cols-2">
            <h4 className="text-background! whitespace-nowrap">
              Three Expressions. One
              <br />
              Spirit of Connection.
            </h4>
            <div className="text-base leading-6 text-background">
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
        className="absolute border-solid border-background border-t border-r-0 border-b-0 border-l-0 shrink-0 w-78 h-0 z-20 bottom-39 left-1/2 -translate-x-1/2"
        style={{
          transform: 'rotate(90deg) scale(1, 1)',
        }}
      ></div>
    </section>
  );
}
