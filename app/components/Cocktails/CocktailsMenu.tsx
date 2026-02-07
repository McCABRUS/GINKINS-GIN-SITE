import Image from 'next/image';

export default function CocktailsMenu() {
  return (
    <section className="w-screen bg-(--primary-black) py-28 xl:px-37.25">
      <div
        className="absolute border-solid border-background border-t border-r-0 border-b-0 border-l-0 shrink-0 w-17.75 -mt-19.25 h-0 z-20 left-1/2 -translate-x-1/2"
        style={{
          transform: 'rotate(90deg) scale(1, 1)',
        }}
      ></div>
      <div className="mx-auto px-15 xl:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_480px] gap-20 items-center">
          <div className="text-center lg:text-left">
            <h3 className="text-lg!  inline-block uppercase tracking-widest text-background! mb-10">
              Try a Recipe | Mix It Up | Pair & Pour
            </h3>
            <ul className="space-y-14">
              {[
                'Signature House Creations',
                'Classic Ginkins Cocktails',
                'Food Pairings',
              ].map((item, i) => (
                <li key={i}>
                  <div className="flex items-center gap-6">
                    <h6 className="text-[35px]! text-(--secondary-gray-300)!">
                      {String(i + 1).padStart(2, '0')}
                    </h6>

                    <h4 className="text-left text-(--secondary-gray-300)! hover:text-(--primary-red-main)! transition">
                      {item}
                    </h4>
                  </div>

                  <div className="mt-6 h-px w-full bg-(--primary-red-main)" />
                </li>
              ))}
            </ul>
          </div>

          <div className="relative flex justify-center">
            <div className="absolute right-35 md:right-4 top-1/3 z-10 fill-(--primary-gold-main) w-24.5 h-30.5 md:w-40 md:h-49.75">
              <Image
                src="/cocktails/icon-stars-ginkins-gin.svg"
                alt=""
                width={159}
                height={157}
                className="fill-(--primary-gold-main)"
              />
            </div>
            <div className="h-72.75 md:h-118 w-53.75 md:w-87 overflow-hidden">
              <Image
                src="/cocktails/ginkins-gin-lifestyle-tan-suit-cocktail.png"
                alt="Man in a tailored tan suit with Ginkins Gin embroidery holding a Negroni cocktail with orange zest"
                width={328}
                height={472}
                className="h-full w-full object-cover object-center rounded-[200px_200px_200px_200px]"
                quality={100}
                //unoptimized={true}
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className="absolute border-solid border-background border-t border-r-0 border-b-0 border-l-0 shrink-0 w-22.75 mt-16.5 h-0 z-20 left-1/2 -translate-x-1/2"
        style={{
          transform: 'rotate(90deg) scale(1, 1)',
        }}
      ></div>
    </section>
  );
}
