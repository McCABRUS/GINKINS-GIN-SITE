import Image from 'next/image';

export default function HeritageHomeSection() {
  return (
    <section className="relative w-full bg-(--secundary-beige) py-71 overflow-hidden">
      {/* ================= TITULO – FULL WIDTH ================= */}
      <div className="relative mb-32 px-6 lg:px-24">
        <h1
          className="
            mx-auto
            text-center
            leading-[1.05]
            tracking-[-0.015em]
            text-(--primary-red-main)
          "
        >
          ROOTED IN
          <span className="hidden md:inline my-0 mx-25"></span>
          TRADITION.
          <br />
          REFINED BY CRAFT.
          <br />
          RAISED IN LOUISVILLE
        </h1>

        {/* Copper still – intercalado en el título */}
        <div className="absolute -top-35 left-[49.5%] -translate-x-1/2 mr-7.5 w-40 h-56 pointer-events-none">
          <Image
            src="/HeritageHome/still.png"
            alt="Copper still"
            fill
            className="object-cover rounded-[999px]"
            priority
          />
        </div>
        <div className="absolute top-22.5 w-40 h-40 -ml-132.5 left-1/2 -translate-x-1/2">
          <Image
            src="/HeritageHome/barn.png"
            alt="Barn"
            fill
            className="object-cover rounded-full"
          />
        </div>
      </div>

      {/* ================= CONTENIDO INFERIOR ================= */}
      <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-20 px-6 lg:px-24">
        {/* IMÁGENES DECORATIVAS (IZQUIERDA) */}
        <div className="relative h-150">
          {/* Louisville */}
          <div className="absolute top-0 right-0 w-52 h-72">
            <Image
              src="/HeritageHome/louisville.png"
              alt="Louisville skyline"
              fill
              className="object-cover rounded-[999px]"
            />
          </div>

          {/* Flower */}
          <div className="absolute top-25 right-25 pointer-events-none">
            <Image
              src="/HeritageHome/flower.svg"
              alt="Decorative flower"
              width={309}
              height={301}
              className="hidden md:block"
            />
            <Image
              src="/HeritageHome/flower_m.svg"
              alt="Decorative flower"
              width={202}
              height={208}
              className="block md:hidden"
            />
          </div>
        </div>

        {/* TEXTO + CTA (DERECHA) */}
        <div className="max-w-md">
          <p className="text-base leading-relaxed text-(--secondary-black)">
            A gin born not in the shadows of the past, but in the bold, soulful
            light of bourbon country. Here, roots run deep and quality means
            everything. We distill legacy into every citrus-bright bottle,
            honoring the traditions that shape us while crafting something
            unmistakably new.
            <br />
            <br />
            From the first vibrant sip of our Louisville Dry to the delicate
            bloom of elderflower in our Golden Bloom Gin, Ginkins isn’t just
            made to mix—it’s made to matter.
          </p>

          <button className="mt-15.75 inline-flex items-center justify-center bg-(--primary-red-main) px-8 py-3 text-sm font-medium uppercase tracking-wide text-white transition hover:bg-(--primary-gold-main)">
            Find Ginkins Near to You
          </button>
        </div>
      </div>
    </section>
  );
}
