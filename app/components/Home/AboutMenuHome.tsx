import Image from 'next/image';
import TrackableLink from '../TrackableLink';
export default function AboutHomeMenu() {
  const items = [
    { label: 'Ginkins Story', href: '/about-ginkins#story' },
    { label: 'Meet the Maker', href: '/about-ginkins#founder' },
    { label: 'Sustainability Practices', href: '/sustainability' },
    { label: 'Accolades and Press', href: '/accolades' },
  ];
  return (
    <section className="w-screen bg-(--primary-black) py-28">
      <div
        className="absolute border-solid border-background border-t border-r-0 border-b-0 border-l-0 shrink-0 w-17.75 -mt-19.25 h-0 z-20 left-1/2 -translate-x-1/2"
        style={{
          transform: 'rotate(90deg) scale(1, 1)',
        }}
      ></div>
      <div className="mx-auto max-xl:px-5 max-4xl:px-37.25 md:max-w-480">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_480px] gap-20 items-center">
          <div className="text-center lg:text-left">
            <h3 className="text-lg! inline-block uppercase text-background! mb-20">
              About Us
            </h3>
            <ul className="space-y-14">
              {items.map((item, i) => (
                <li key={i}>
                  <TrackableLink
                    href={item.href}
                    eventName={`click_home_menu_item_${i + 1}`}
                    location="Home_Menu"
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

          <div className="relative flex justify-center lg:justify-end h-full reveal-on-scroll-left">
            <div className="absolute left-[53%] lg:left-[unset] -lg:-right-1.25 top-6 z-10 fill-(--primary-red-main) lg:w-39.75 lg:h-39.25 w-25">
              <Image
                draggable={false}
                src="/imgs/home/ginkins-gin-icon-star-sparkles.svg"
                alt=""
                width={159}
                height={157}
                className="fill-(--primary-red-main)"
                aria-hidden
              />
            </div>
            <div className="xl:h-full lg:h-120 h-78.75 w-auto aspect-348/510 overflow-hidden xl:mr-17 lg:mr-5">
              <Image
                draggable={false}
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
        className="absolute border-solid border-background border-t border-r-0 border-b-0 border-l-0 shrink-0 w-17.75 mt-19 h-0 z-20 left-1/2 -translate-x-1/2"
        style={{
          transform: 'rotate(90deg) scale(1, 1)',
        }}
      ></div>
    </section>
  );
}
