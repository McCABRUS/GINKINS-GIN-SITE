import Image from 'next/image';

export default function AboutHomeMenu() {
  return (
    <section className="w-screen bg-[#1C1C1C] py-28">
      <div className="mx-auto max-w-350 px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_480px] gap-20 items-center">
          <div>
            <h3 className="inline-block uppercase tracking-widest text-background! mb-10">
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
                    <h6 className="text-(--secundary-gray-300)!">
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
            <div className="absolute -right-12.5 top-6 z-10 fill-(--primary-red-main)">
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
    </section>
  );
}
