import Image from 'next/image';
import Link from 'next/link';

const items = [
  { label: 'Signature House Creations', href: '/cocktails#signature' },
  { label: 'Classic Ginkins Cocktails', href: '/cocktails#classic' },
  { label: 'Food Pairings', href: '/cocktails#pairings' },
];
export default function CocktailsMenu() {
  return (
    <section className="w-screen bg-(--primary-black) py-36.5 px-5 lg:px-37.25 -mt-px">
      <div className="mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_480px] gap-0 items-center">
          <div className="text-center lg:text-left">
            <h3 className="text-lg!  inline-block uppercase text-background! mb-10">
              Try a Recipe | Mix It Up | Pair & Pour
            </h3>
            <ul className="space-y-14">
              {items.map((item, i) => (
                <li key={i}>
                  <div className="flex items-center gap-6">
                    <h6 className="text-[35px]! text-(--secondary-gray-300)!">
                      {String(i + 1).padStart(2, '0')}
                    </h6>

                    <Link href={item.href}>
                      <h4 className="text-left text-(--secondary-gray-300)! hover:text-(--primary-red-main)! transition">
                        {item.label}
                      </h4>
                    </Link>
                  </div>

                  <div className="mt-6 h-px w-full bg-(--primary-red-main)" />
                </li>
              ))}
            </ul>
          </div>

          <div className="relative flex justify-center mt-10 lg:mt-0">
            <div className="absolute right-35 lg:right-4 top-1/3 z-10 fill-(--primary-gold-main) w-24.5 h-30.5 lg:w-40 lg:h-49.75">
              <Image
                src="/cocktails/icon-stars-ginkins-gin.svg"
                alt=""
                width={159}
                height={157}
                className="fill-(--primary-gold-main)"
                aria-hidden
              />
            </div>
            <div className="h-72.75 lg:h-118 w-53.75 lg:w-87 overflow-hidden">
              <Image
                src="/cocktails/ginkins-gin-lifestyle-tan-suit-cocktail.webp"
                alt="Man in a tailored tan suit with Ginkins Gin embroidery holding a Negroni cocktail with orange zest"
                width={520}
                height={492}
                className="h-full w-full object-cover object-center rounded-[200px_200px_200px_200px]"
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
