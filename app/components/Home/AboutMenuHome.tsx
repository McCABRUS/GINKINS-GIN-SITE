import Image from 'next/image';
import Link from 'next/link';

export default function AboutHomeMenu() {
  const items = [
    { label: 'Ginkins Story', href: '/about-ginkins#story' },
    { label: 'Meet the Maker', href: '/about-ginkins#founder' },
    { label: 'Sustainability Practices', href: '/sustainability' },
    { label: 'Accolades and Press', href: '/accolades' },
  ];
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
            <h3 className="text-lg!  inline-block uppercase text-background! mb-10">
              About Us
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

          <div className="relative flex justify-center">
            <div className="absolute left-3/5 lg:-right-12.5 top-6 z-10 fill-(--primary-red-main)">
              <Image
                src="/imgs/home/ginkins-gin-icon-star-sparkles.svg"
                alt=""
                width={159}
                height={157}
                className="fill-(--primary-red-main)"
                aria-hidden
              />
            </div>
            <div className="h-78.75 sm:h-127.5 w-53.75 sm:w-87 overflow-hidden">
              <Image
                src="/imgs/home/scott-ginkins-founder-master-distiller.webp"
                alt="Scott Ginkins, Founder and Master Distiller of Ginkins Gin"
                width={565}
                height={534}
                className="h-full w-full object-cover rounded-[200px_200px_0px_0px]"
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
