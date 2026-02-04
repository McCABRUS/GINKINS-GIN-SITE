import Image from 'next/image';

export default function AboutHomeMenu() {
  return (
    <section className="w-screen bg-[#1C1C1C] py-28">
      <div
        className="absolute border-solid border-background border-t border-r-0 border-b-0 border-l-0 shrink-0 w-17.75 -mt-19.25 h-0 z-20 left-1/2 -translate-x-1/2"
        style={{
          transform: 'rotate(90deg) scale(1, 1)',
        }}
      ></div>
      <div className="mx-auto max-w-350 px-15 xl:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_480px] gap-20 items-center">
          <div className="text-center lg:text-left">
            <h3 className="text-lg!  inline-block uppercase tracking-widest text-background! mb-10">
              About Us
            </h3>
            <ul className="space-y-14">
              {[
                'Ginkins Story',
                'Meet the Maker',
                'Sustainability Practices',
                'Accolades and Press',
              ].map((item, i) => (
                <li key={i}>
                  <div className="flex items-center gap-6">
                    <h6 className="text-[35px]! text-(--secundary-gray-300)!">
                      {String(i + 1).padStart(2, '0')}
                    </h6>

                    <h4 className="text-(--secundary-gray-300)! hover:text-(--primary-red-main)! transition">
                      {item}
                    </h4>
                  </div>

                  <div className="mt-6 h-px w-full bg-(--primary-red-main)" />
                </li>
              ))}
            </ul>
          </div>

          <div className="relative flex justify-center">
            <div className="absolute left-3/5 lg:-right-12.5 top-6 z-10 fill-(--primary-red-main)">
              <Image
                src="/icon-stars-ginkins-gin.svg"
                alt=""
                width={159}
                height={157}
                className="fill-(--primary-red-main)"
              />
            </div>
            <div className="h-127.5 w-87 overflow-hidden">
              <Image
                src="/scott-ginkins-gin-master-distiller.webp"
                alt="Master Distiller"
                width={348}
                height={510}
                className="h-full w-full object-cover rounded-[200px_200px_0px_0px]"
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
