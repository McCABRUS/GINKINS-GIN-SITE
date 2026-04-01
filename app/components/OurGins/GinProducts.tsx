import Image from 'next/image';
import Link from 'next/link';

import { ProductBottle } from './ProductBottle';
import SingUpButton from './SingUpButton';

export default function GinProductsSection() {
  return (
    <section className="w-screen bg-(--secondary-beige) lg:mt-0 -mt-9.75 pb-10">
      <div className="mx-auto px-0 pt-28.5 xl:pb-21.5 space-y-32">
        <ProductRow
          title="Louisville Dry Gin"
          subtitle="Bright. Balanced. Boldly Louisville."
          description="Our signature gin. Inspired by the Southern hospitality of Louisville, Kentucky, this award-winning expression invites you to reimagine what a classic gin can be. With a bright base of juniper, grapefruit, and lemon peel, Louisville Dry Gin is infused with local botanicals and distilled using pure Kentucky water. It’s timeless, yet totally unexpected. At its very best, it transforms life’s simplest moments into something a little brighter, a little bolder, and a lot more memorable."
          tasting="Delicate dry with bold hints of citrus."
          serving="Try it in a G&T with a grapefruit twist or sip it neat to let the citrus shine."
          awards1="Gold Medal – Gin of the Year™ 2024"
          awards2="Gold Medal – 2024 Gin Masters (Microdistillery Round)"
          linkId="productContents_productGroupA_productRepeater_ImageProduct_2"
          bottle={
            <ProductBottle
              bgColor="bg-(--primary-red-main)"
              iconColor="#ac1f2c"
              bottleSrc="/imgs/our_gins/ginkins-louisville-dry-gin-bottle.webp"
              bottleAlt="Ginkins Louisville Dry Gin bottle - Bright citrus and classic juniper gin"
            />
          }
        />

        <Divider />
        <ProductRow
          title="Golden Bloom Gin"
          subtitle="Floral Finesse Meets Refreshing Ease."
          description="Infused with elderflower, juniper, and a delicate botanical bouquet, Golden Bloom is an invitation to slow down and savor the softer side of gin. Crafted with precision and care, this crisp, floral expression captures the essence of nature in every sip. Light, fragrant, and endlessly mixable, it balances the natural sweetness of elderflower with bright citrus, subtle herbs, and the grounding clarity of juniper for a refined, aromatic experience."
          tasting="Elderflower’s elegance, orange zest, and juniper."
          serving="Ideal in a spritz with tonic, ice, and a slice of cucumber or lemon."
          linkId="productContents_productGroupA_productRepeater_ImageProduct_1"
          bottle={
            <ProductBottle
              bgColor="bg-(--primary-gold-main)"
              iconColor="#E5D88A"
              bottleSrc="/imgs/our_gins/ginkins-golden-bloom-gin-bottle.webp"
              bottleAlt="Ginkins Golden Bloom Gin bottle - Floral and honeyed premium gin"
            />
          }
        />

        <Divider />
        <ProductRow
          title="Heritage Reserve"
          subtitle="Spice-Driven. Deeply Layered. Unexpectedly Smooth."
          description="For those who seek warmth and complexity, Heritage Reserve delivers. Bold cinnamon, smooth nutmeg, and crisp juniper meet in a slow-sipped blend that honors old-world flavor with a modern edge. It opens with a deep, spiced warmth on the nose, followed by a rich taste of cinnamon, nutmeg, and crisp juniper. The finish is long, layered, and unforgettable—crafted for those who appreciate depth in every detail."
          tasting="Spiced and sophisticated, with warming notes of cinnamon and nutmeg, brightened by crisp juniper and finished with smooth depth."
          serving="Best enjoyed over a large ice cube or in a Negroni variation."
          linkId="productContents_productGroupA_productRepeater_ImageProduct_0"
          bottle={
            <ProductBottle
              bgColor="bg-(--secondary-gray-500)"
              iconColor="#E5D88A"
              bottleSrc="/imgs/our_gins/ginkins-heritage-reserve-gin-bottle.webp"
              bottleAlt="Ginkins Heritage Reserve Gin bottle - Bold and traditional craft gin"
            />
          }
        />
        <Divider />
        <div className="lg:grid-cols-2 lg:gap-24 hidden xl:grid max-xl:px-5 max-4xl:px-37.25 md:max-w-480 place-self-center">
          <div>
            <h5>Crafted</h5>
            <h4 className="text-(--secondary-black)!">
              Limited Editions <br /> &amp; Future Releases
            </h4>
          </div>
          <div className="space-y-4 text-sm leading-relaxed text-(--primary-black) grid grid-cols-2 gap-5 relative">
            <div>
              <p className="text-lg leading-6.75 font-medium mb-4">
                Crafted in curiosity.
                <br />
                Made for discovery.
              </p>
              <p className="text-base leading-6">
                We’re always experimenting—always evolving. From seasonal
                infusions to rare barrel-aged releases, our limited-edition gins
                are crafted for the curious and the collectors alike.
              </p>
            </div>
            <div>
              <p className="text-lg leading-6.75 font-medium mb-4">
                Crafted with
                <br />
                Precision
              </p>
              <p className="text-base leading-6">
                The expertise of Scott Ginkins, a master distiller trained in
                Edinburgh, combined with Kentucky’s pristine limestone-rich
                water and a carefully curated selection of botanicals, results
                in a gin that’s both bold and beautifully balanced.
              </p>
            </div>
            <SingUpButton />
          </div>
        </div>
      </div>
    </section>
  );
}

function ProductRow({
  title,
  subtitle,
  description,
  tasting,
  serving,
  awards1,
  awards2,
  bottle,
  linkId,
}: {
  title: string;
  subtitle: string;
  description: string;
  tasting: string;
  serving: string;
  awards1?: string;
  awards2?: string;
  bottle: React.ReactNode;
  linkId: string;
}) {
  return (
    <div className="grid grid-cols-1 items-center gap-29.25 lg:grid-cols-2 max-xl:px-5 max-4xl:px-37.25 md:max-w-480 place-self-center">
      <div className="order-1 justify-center lg:justify-end flex lg:order-2 mb-15 xl:mb-30 relative">
        {bottle}
      </div>
      <div className="order-2 space-y-6 lg:order-1 mt-5 md:mt-45 lg:mt-0 px-0">
        <h4 className="text-(--primary-red-main)! text-[35px]! xl:text-[56px]! font-medium! xl:font-normal! text-center lg:text-left leading-10.5! xl:leading-16.75!">
          {title}
        </h4>
        <hr
          className="w-25 text-(--primary-red-main) my-8.5 mx-auto lg:mx-0"
          aria-hidden
        />
        <h2 className="text-center lg:text-left">{subtitle}</h2>
        <p className="text-base leading-6 text-(--secondary-black) mb-9.5 text-center lg:text-left">
          {description}
        </p>
        <ul className="space-y-4 list-disc text-base leading-6 text-(--secondary-black) marker:text-(--primary-red-main) pl-5">
          <li>
            <strong>Tasting Notes:</strong> {tasting}
          </li>
          <li>
            <strong>Serving Tip:</strong> {serving}
          </li>
          {awards1 && (
            <li>
              <strong>Awards:</strong> {awards1}
            </li>
          )}
          {awards2 && (
            <li>
              <strong>Awards:</strong> {awards2}
            </li>
          )}
        </ul>
        <Link
          href={`https://ginkinsgin.distilleryspirits.com` + `#${linkId}`}
          target="_blank"
          className="w-40 lg:w-44.25 h-9.75 mt-9.5 flex items-center justify-center px-5 py-1.5 transition animatedButton mx-auto lg:mx-0 group"
        >
          <h5 className="group-hover:text-(--primary-black)! group-active:text-(--primary-black)! group-focus:text-(--primary-black)!">
            Shop ONLINE
          </h5>
        </Link>
      </div>
    </div>
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
