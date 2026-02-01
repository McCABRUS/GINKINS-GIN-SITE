import Image from 'next/image';
export default function HeritageInnovation() {
  return (
    <section className="w-screen bg-(--primary-red-main) py-37">
      <div className="mx-auto max-w-350 px-6">
        <div className="flex items-center justify-between gap-12">
          <div>
            <h3 className="block uppercase tracking-widest text-(--primary-gold-main)! mb-6">
              The Ginkins Story
            </h3>

            <h1 className="leading-[1.05] text-background! uppercase">
              A Heritage
              <br />
              of Innovation
            </h1>
          </div>
          <div className="flex gap-10 flex-col items-end justify-end">
            <p className="text-[36px] font-cormorant-garamond leading-snug text-(--primary-gold-main) text-right italic max-w-xs">
              Rooted in Louisville.
              <br />
              Crafted to Inspire.
            </p>
            <div className="flex h-24 w-24">
              <Image
                src="/ginkins-isotype.svg"
                alt="ginkins isotype"
                height={81}
                width={81}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
