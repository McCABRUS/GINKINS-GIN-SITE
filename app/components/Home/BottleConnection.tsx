import Link from 'next/link';

export default function BottleConnection() {
  return (
    <section
      className="relative w-full aspect-4/5 md:aspect-16/7 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('/imgs/home/ginkins-heritage-reserve-espresso-cocktails.webp')",
      }}
    >
      <div className="absolute inset-0 bg-black/60 visible md:invisible" />
      <div className="relative mx-auto w-full max-lg:px-5 h-full max-4xl:px-37.25 md:max-w-480">
        <div className="flex h-full items-center justify-center md:justify-end">
          <div className="max-w-127.25 text-center py-20 2xs:py-0 reveal-on-scroll-top">
            <div className="flex justify-center">
              <div className="h-14.25 w-14.25 rounded-full bg-background flex items-center justify-center">
                <svg
                  width="81"
                  height="81"
                  viewBox="0 0 81 81"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="40.5" cy="40.5" r="40.5" fill="#FFFFFF" />
                  <g clipPath="url(#clip0_2001_2190)">
                    <path
                      d="M43.2836 36.0898C44.1413 36.6223 44.8468 37.3187 45.3725 38.1652C45.8982 39.0118 46.1749 39.8993 46.1749 40.8142C45.248 40.8142 44.3626 40.5547 43.4911 40.0222C42.6334 39.5034 41.9279 38.807 41.4022 37.9468C40.8765 37.0865 40.5998 36.199 40.5998 35.2978C41.5267 35.2978 42.4121 35.5572 43.2836 36.0898ZM41.4022 43.6679C40.8765 44.5282 40.5998 45.4157 40.5998 46.3169C41.5267 46.3169 42.4121 46.0575 43.2836 45.5249C44.1413 44.9924 44.8468 44.296 45.3725 43.4495C45.8982 42.6029 46.1749 41.7154 46.1749 40.8005C45.248 40.8005 44.3626 41.06 43.4911 41.5925C42.6334 42.1113 41.9279 42.8077 41.4022 43.6679ZM40.9595 62.511C47.2401 62.511 51.4457 60.4082 57.2283 58.3054V40.268H51.9298V56.0252C49.7302 59.3978 44.7362 61.3231 40.9595 61.3231C30.169 61.3231 25.7283 52.4204 25.7283 40.3909C25.7283 28.3614 30.1828 19.6908 40.9042 19.6908C51.6255 19.6908 52.6077 22.6402 54.7935 24.3197V19.4451C49.3706 19.0901 46.3824 18.4893 40.9042 18.4893C25.7974 18.4893 20.25 28.7164 20.25 40.3772C20.25 52.0381 25.7974 62.511 40.9595 62.511Z"
                      fill="#AC1F2C"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_2001_2190">
                      <rect
                        width="36.9783"
                        height="44.0217"
                        fill="white"
                        transform="translate(20.25 18.4893)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
            <h4 className="text-[35px]! xl:text-[56px]! my-9.5 xl:my-17.25 text-background!">
              We bottle connection.
              <br />
              You pour it forward.
            </h4>
            <div className="mt-8">
              <Link
                href="https://ginkinsgin.distilleryspirits.com"
                target="_blank"
                className="inline-flex items-center justify-center px-5 py-1.5 transition animatedButton group"
              >
                <h5 className="group-hover:text-(--primary-black)! group-active:text-(--primary-black)! group-focus:text-(--primary-black)!">
                  Shop Online
                </h5>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
