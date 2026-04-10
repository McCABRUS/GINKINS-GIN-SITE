import Image from 'next/image';
import TrackableLink from '../TrackableLink';
const items = [
  { label: 'Signature Home Creations', href: '#signature' },
  { label: 'Classic Ginkins Cocktails', href: '#classic' },
  { label: 'Food Pairings', href: '#pairings' },
];

export default function CocktailsMenu() {
  return (
    <section className="w-screen bg-(--primary-black) pt-15 pb-32.5 lg:pb-36.5 lg:pt-36.5 -mt-px">
      <div className="mx-auto max-xl:px-5 max-4xl:px-37.25 md:max-w-480">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_480px] gap-0 items-center">
          <div className="text-center lg:text-left order-2 lg:order-1">
            <h3 className="text-lg! inline-block uppercase text-background! mb-10 reveal-on-scroll">
              Try a Recipe | Mix It Up | Pair &amp; Pour
            </h3>
            <ul className="space-y-14">
              {items.map((item, i) => (
                <li key={i}>
                  <TrackableLink
                    href={item.href}
                    eventName={`click_cocktails_menu_item_${i + 1}`}
                    location="Cocktails_Menu"
                    className="block w-full"
                  >
                    <div className="grid w-full grid-cols-[3rem_minmax(0,1fr)] items-center gap-x-6 text-left group">
                      <h6 className="text-[35px]! leading-none! text-(--secondary-gray-300)! group-hover:text-(--primary-red-200)! transition">
                        {String(i + 1).padStart(2, '0')}
                      </h6>

                      <h4 className="min-w-0! leading-[1.05]! text-background! xl:text-(--secondary-gray-300)! group-hover:text-(--primary-red-200)! transition">
                        {item.label}
                      </h4>
                    </div>
                  </TrackableLink>

                  <div className="mt-6 h-px w-full bg-(--primary-red-main)" />
                </li>
              ))}
            </ul>
          </div>

          <div className="relative flex justify-center mb-10 lg:mb-0 order-1 lg:order-2">
            <div className="absolute right-35 lg:right-4 top-1/3 z-10 fill-(--primary-gold-main) w-24.5 h-30.5 lg:w-40 lg:h-49.75">
              <Image
                draggable={false}
                src="/imgs/cocktails/icon-stars-ginkins-gin.svg"
                alt=""
                width={159}
                height={157}
                className="fill-(--primary-gold-main) reveal-on-scroll-top"
                aria-hidden
              />
            </div>
            <div className="h-72.75 lg:h-118 w-53.75 lg:w-87 overflow-hidden">
              <Image
                draggable={false}
                src="/imgs/cocktails/ginkins-gin-lifestyle-tan-suit-cocktail.webp"
                alt="Man in a tailored tan suit with Ginkins Gin embroidery holding a Negroni cocktail with orange zest"
                width={520}
                height={492}
                className="h-full w-full object-cover object-center rounded-[200px_200px_200px_200px]  reveal-on-scroll-center"
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className="absolute border-solid border-background border-t border-r-0 border-b-0 border-l-0 shrink-0 w-12.5 lg:w-22.75 mt-16.25 lg:mt-25 h-0 z-20 left-1/2 -translate-x-1/2"
        style={{
          transform: 'rotate(90deg) scale(1, 1)',
        }}
      ></div>
    </section>
  );
}
