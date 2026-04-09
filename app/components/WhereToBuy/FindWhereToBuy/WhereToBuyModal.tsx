'use client';

import Image from 'next/image';
import { useEffect, useState, type ReactNode } from 'react';
import AnimatedModalShell from '@/components/AnimatedModalShell';
import { trackEvent } from '@/lib/gtag';

type Variant = 'retailers' | 'restaurants';

type RetailerLocation = {
  name: string;
  address: string;
  phone: string;
};

type RestaurantLocation = {
  name: string;
  address: string;
  restaurantUrl: string;
};

const retailers: RetailerLocation[] = [
  {
    name: 'Old Town Wine & Spirits',
    address: '1529 Bardstown Rd, Louisville, KY 40205',
    phone: '(502) 409-6285',
  },
  {
    name: 'World Buzz Wine & Spirits',
    address: '9301 Dayflower St, Prospect, KY 40059',
    phone: '(502) 618-2660',
  },
  {
    name: 'Skyway Beverage Shoppe',
    address: '2216 Hikes Ln, Louisville, KY 40218',
    phone: '(502) 459-5116',
  },
];

const restaurantLeftColumn: RestaurantLocation[] = [
  {
    name: 'MeeshMeesh Mediterranean',
    address: '636 E Market St, Louisville, KY 40202',
    restaurantUrl: 'https://meeshmeesh.com',
  },
  {
    name: 'Le Relais',
    address: '2817 Taylorsville Rd, Louisville, KY 40205',
    restaurantUrl: 'https://lerelaisrestaurant.com',
  },
  {
    name: 'Jane',
    address: '712 E Market St, Louisville, KY 40202',
    restaurantUrl: 'https://www.instagram.com/janelouisville/?hl=en',
  },
  {
    name: 'Molly Malone’s Irish Pub & Restaurant',
    address: '933 Baxter Ave, Louisville, KY 40204',
    restaurantUrl: 'https://mollymalonesirishpub.com',
  },
];

const restaurantRightColumn: RestaurantLocation[] = [
  {
    name: 'Sake A Gogo',
    address: '620 E Market St, Louisville, KY 40202',
    restaurantUrl: 'https://sakeagogo.com',
  },
  {
    name: 'Stitch Bourbon Bar',
    address: '216 S Shelby St, Louisville, KY 40202',
    restaurantUrl: 'https://claytonandcrume.com/pages/stitch-bourbon-bar',
  },
  {
    name: 'Darlings Bar',
    address: '1765 Bardstown Rd, Louisville, KY 40205',
    restaurantUrl: 'https://www.darlingsbar.com',
  },
];

function formatTel(phone: string) {
  return `tel:${phone.replace(/[^\d+]/g, '')}`;
}

function CloseButtonSvg() {
  return (
    <svg
      width="34"
      height="34"
      viewBox="0 0 34 34"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="15" cy="15" r="10" fill="currentColor" />
      <path
        d="M16.5254 0C7.4134 0 0 7.4134 0 16.5254C0 25.6374 7.4134 33.0508 16.5254 33.0508C25.6374 33.0508 33.0508 25.6374 33.0508 16.5254C33.0508 7.4134 25.6374 0 16.5254 0ZM22.5087 20.7116C22.6317 20.8285 22.7301 20.9688 22.798 21.1243C22.866 21.2797 22.9021 21.4472 22.9043 21.6169C22.9064 21.7866 22.8746 21.9549 22.8107 22.1121C22.7468 22.2693 22.652 22.4121 22.532 22.532C22.4121 22.652 22.2693 22.7468 22.1121 22.8107C21.9549 22.8746 21.7866 22.9064 21.6169 22.9043C21.4472 22.9021 21.2797 22.866 21.1243 22.798C20.9688 22.7301 20.8285 22.6317 20.7116 22.5087L16.5254 18.3234L12.3392 22.5087C12.0989 22.7371 11.7789 22.8625 11.4474 22.8582C11.1159 22.854 10.7992 22.7204 10.5648 22.486C10.3304 22.2516 10.1969 21.9349 10.1926 21.6034C10.1884 21.272 10.3138 20.9519 10.5421 20.7116L14.7275 16.5254L10.5421 12.3392C10.3138 12.0989 10.1884 11.7789 10.1926 11.4474C10.1969 11.1159 10.3304 10.7992 10.5648 10.5648C10.7992 10.3304 11.1159 10.1969 11.4474 10.1926C11.7789 10.1884 12.0989 10.3138 12.3392 10.5421L16.5254 14.7275L20.7116 10.5421C20.9519 10.3138 21.272 10.1884 21.6034 10.1926C21.9349 10.1969 22.2516 10.3304 22.486 10.5648C22.7204 10.7992 22.854 11.1159 22.8582 11.4474C22.8625 11.7789 22.7371 12.0989 22.5087 12.3392L18.3234 16.5254L22.5087 20.7116Z"
        fill="#AC1F2C"
      />
    </svg>
  );
}

function MapPinIcon({ mobile = false }: { mobile?: boolean }) {
  return (
    <svg
      width={mobile ? '16' : '22'}
      height={mobile ? '20' : '27'}
      viewBox="0 0 22 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M20.1143 10.9884C20.1143 5.96003 16.0337 1.88373 11 1.88373C5.96632 1.88373 1.88571 5.96003 1.88571 10.9884C1.88571 13.464 3.00397 15.7742 4.83214 18.1456C6.50886 20.3205 8.696 22.4433 11 24.73C13.304 22.4433 15.4911 20.3205 17.1679 18.1456C18.996 15.7742 20.1143 13.464 20.1143 10.9884ZM13.8286 10.9884C13.8286 9.42787 12.5622 8.16281 11 8.16281C9.43782 8.16281 8.17143 9.42787 8.17143 10.9884C8.17143 12.5489 9.43782 13.814 11 13.814C12.5622 13.814 13.8286 12.5489 13.8286 10.9884ZM15.7143 10.9884C15.7143 13.5893 13.6036 15.6977 11 15.6977C8.39637 15.6977 6.28571 13.5893 6.28571 10.9884C6.28571 8.38752 8.39637 6.27909 11 6.27909C13.6036 6.27909 15.7143 8.38752 15.7143 10.9884ZM22 10.9884C22 14.0613 20.6038 16.7743 18.6607 19.2947C16.7269 21.8031 14.1496 24.2438 11.6666 26.7241C11.2984 27.092 10.7016 27.092 10.3334 26.7241C7.85044 24.2438 5.27313 21.8031 3.33929 19.2947C1.39616 16.7743 0 14.0613 0 10.9884C0 4.91967 4.92487 0 11 0C17.0751 0 22 4.91967 22 10.9884Z"
        fill="currentColor"
      />
    </svg>
  );
}
function GlobeIcon({ mobile = false }: { mobile?: boolean }) {
  return (
    <svg
      width={mobile ? '16' : '22'}
      height={mobile ? '16' : '21'}
      viewBox="0 0 22 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M20.4651 10.5C20.4651 9.74195 20.3665 9.00589 20.1823 8.30233H15.6516C15.7736 9.02064 15.8444 9.74968 15.8605 10.4847C15.8607 10.4949 15.8607 10.5051 15.8605 10.5153C15.8444 11.2503 15.7736 11.9794 15.6516 12.6977H20.1823C20.3665 11.9941 20.4651 11.258 20.4651 10.5ZM2.34729 14.1628C3.59213 16.8382 6.15724 18.8271 9.25427 19.3785C8.06003 17.8031 7.18679 16.0335 6.67315 14.1628H2.34729ZM15.3269 14.1628C14.8132 16.0337 13.9391 17.8029 12.7447 19.3785C15.8422 18.8273 18.4077 16.8385 19.6527 14.1628H15.3269ZM8.26699 14.1628C8.81862 15.9703 9.74488 17.6632 11 19.14C12.2551 17.6632 13.1814 15.9703 13.733 14.1628H8.26699ZM7.90925 8.30233C7.77354 9.02436 7.69144 9.75847 7.67442 10.5C7.69144 11.2415 7.77354 11.9756 7.90925 12.6977H14.0908C14.2265 11.9757 14.3076 11.2415 14.3246 10.5C14.3076 9.75847 14.2265 9.02435 14.0908 8.30233H7.90925ZM12.7447 1.62059C13.9394 3.19626 14.8131 4.96607 15.3269 6.83721H19.6527C18.4077 4.16142 15.8423 2.1717 12.7447 1.62059ZM11 1.85906C9.74463 3.33595 8.81869 5.02945 8.26699 6.83721H13.733C13.1813 5.02945 12.2554 3.33595 11 1.85906ZM9.25427 1.62059C6.15716 2.17194 3.59215 4.1617 2.34729 6.83721H6.67315C7.18685 4.96625 8.05979 3.19615 9.25427 1.62059ZM1.53488 10.5C1.53488 11.258 1.63346 11.9941 1.81768 12.6977H6.34838C6.22638 11.9794 6.15558 11.2503 6.13953 10.5153C6.13931 10.5051 6.13931 10.4949 6.13953 10.4847C6.15558 9.74968 6.22638 9.02064 6.34838 8.30233H1.81768C1.63346 9.00589 1.53488 9.74195 1.53488 10.5ZM22 10.5C22 16.299 17.0751 21 11 21C4.92487 21 0 16.299 0 10.5C0 4.70101 4.92487 0 11 0C17.0751 0 22 4.70101 22 10.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

function ModalShell({
  open,
  onClose,
  children,
}: {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}) {
  return (
    <AnimatedModalShell
      open={open}
      onClose={onClose}
      panelClassName="relative w-full grow bg-background shadow-2xl max-h-[calc(100dvh-2rem)] overflow-y-auto overflow-x-hidden overscroll-contain lg:max-w-296.5 p-5 pt-16 pb-8 lg:px-5 lg:py-4.25 md:w-auto"
      overlayClassName="fixed inset-0 z-500 flex items-start justify-center overflow-y-auto overflow-x-hidden bg-black/80 px-4 py-4 md:px-10 md:py-0 md:items-center"
    >
      <button
        onClick={onClose}
        aria-label="Close"
        className="absolute top-4 md:top-5 right-7 md:right-5 z-20 text-background hover:text-(--primary-gold-300) w-6.5 h-6.5 md:w-8.5 md:h-8.5 transition-colors duration-300"
        type="button"
      >
        <CloseButtonSvg />
      </button>

      {children}
    </AnimatedModalShell>
  );
}

function RetailerRow({
  name,
  address,
  phone,
  mobile,
}: RetailerLocation & { mobile: boolean }) {
  return (
    <button
      type="button"
      onClick={() => {
        if (mobile) {
          window.location.href = formatTel(phone);
        }
      }}
      className="group flex w-full items-start gap-3 text-left"
      aria-label={`${name}, ${phone}`}
    >
      <div className="py-1.25 flex justify-start items-start gap-2.5 shrink-0 text-(--primary-black) transition-colors duration-200 group-hover:text-(--primary-red-main)">
        <MapPinIcon mobile={mobile} />
      </div>

      <div className="min-w-0 flex-1">
        <div className="text-base font-bold font-['Barlow'] leading-6 text-(--primary-black) transition-colors duration-200 group-hover:text-(--primary-red-main)">
          {name}
        </div>
        <div className="text-sm font-normal font-['Barlow'] leading-5 text-(--primary-black) transition-colors duration-200 group-hover:text-(--secondary-gray-300)">
          {address}
        </div>
        <div className="text-sm font-normal font-['Barlow'] leading-5 text-(--primary-black) transition-colors duration-200 group-hover:text-(--secondary-gray-300)">
          <span className="font-bold group-hover:text-(--primary-red-main)">
            Ph:{' '}
          </span>
          {phone}
        </div>
      </div>
    </button>
  );
}

function RestaurantRow({
  name,
  address,
  mobile,
  restaurantUrl,
}: RestaurantLocation & { mobile: boolean }) {
  return (
    <a
      href={`${restaurantUrl}`}
      target="_blank"
      rel="noreferrer"
      className="group flex w-full items-start gap-3 text-left"
      aria-label={`${name}, open external link`}
      onClick={() => {
        trackEvent(`click_restaurant_${name.replaceAll(' ', '_')}`, {
          location: 'header',
        });
      }}
    >
      <div className="py-1.25 flex justify-start items-start gap-2.5 shrink-0 text-(--primary-black) group-hover:text-(--primary-red-main)">
        <GlobeIcon mobile={mobile} />
      </div>

      <div className="min-w-0 flex-1">
        <div className="text-base font-bold font-['Barlow'] underline leading-6 text-(--primary-black) transition-colors duration-200 group-hover:text-(--primary-red-main)">
          {name}
        </div>
        <div className="text-sm font-normal font-['Barlow'] leading-5 text-(--primary-black) transition-colors duration-200 group-hover:text-(--secondary-gray-300)">
          {address}
        </div>
      </div>
    </a>
  );
}

export default function WhereToBuyModal({
  variant,
  open,
  onClose,
}: {
  variant: Variant;
  open: boolean;
  onClose: () => void;
}) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const media = window.matchMedia('(max-width: 767px)');

    const update = () => setIsMobile(media.matches);
    update();

    media.addEventListener('change', update);
    return () => media.removeEventListener('change', update);
  }, []);

  return (
    <ModalShell open={open} onClose={onClose}>
      {variant === 'retailers' ? (
        <div className="w-full flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-8">
          <div className="hidden lg:block w-115 h-150.25 shrink-0">
            <Image
              draggable={false}
              src="/imgs/where_to_buy/ginkins-retailers.webp"
              alt="Retailers near you"
              width={460}
              height={601}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="flex-1 pt-3 lg:py-6">
            <div className="flex flex-col items-start gap-4 self-stretch">
              <div
                className="self-stretch text-[36px] font-medium uppercase leading-10 text-(--primary-red-main)"
                style={{ fontFamily: 'Cormorant Garamond' }}
              >
                Retailers NEAR YOU
              </div>
              <div
                className="self-stretch text-sm font-normal leading-5 text-(--primary-black)"
                style={{ fontFamily: 'Barlow' }}
              >
                Available at select wine and spirits destinations across
                Kentucky —places known for curating distinctive selections with
                intention and expertise.
              </div>
              <div className="self-stretch h-0 border-t border-(--primary-red-main)" />
            </div>

            <div className="mt-8 lg:mt-16 md:grid md:grid-cols-[1fr_1fr] flex flex-col items-start overflow-hidden gap-6">
              {retailers.map((location) => (
                <RetailerRow
                  key={location.name}
                  name={location.name}
                  address={location.address}
                  phone={location.phone}
                  mobile={isMobile}
                />
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-11">
          <div className="hidden lg:block w-115 h-154 shrink-0">
            <Image
              draggable={false}
              src="/imgs/where_to_buy/ginkins-bar-restaurants.webp"
              alt="Restaurants and bars"
              width={460}
              height={616}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="flex-1 pt-3 lg:py-6">
            <div className="flex flex-col items-start gap-4 self-stretch">
              <div
                className="self-stretch text-[36px] font-medium uppercase leading-10 text-(--primary-red-main)"
                style={{ fontFamily: 'Cormorant Garamond' }}
              >
                Restaurants / Bars
              </div>
              <div
                className="self-stretch text-sm font-normal leading-5 text-(--primary-black)"
                style={{ fontFamily: 'Barlow' }}
              >
                Served in some of Louisville’s most distinctive bars and
                restaurants—where every pour reflects craftsmanship, care, and
                connection.
              </div>
              <div className="self-stretch h-0 border-t border-(--primary-red-main)" />
            </div>

            <div className="mt-8 lg:hidden flex flex-col items-start overflow-hidden gap-5">
              {[...restaurantLeftColumn, ...restaurantRightColumn].map(
                (location) => (
                  <RestaurantRow
                    key={location.name}
                    name={location.name}
                    address={location.address}
                    mobile={isMobile}
                    restaurantUrl={location.restaurantUrl}
                  />
                ),
              )}
            </div>

            <div className="hidden lg:grid lg:grid-cols-2 lg:gap-x-10 lg:gap-y-6 mt-8 lg:mt-16 overflow-hidden">
              <div className="flex flex-col gap-6">
                {restaurantLeftColumn.map((location) => (
                  <RestaurantRow
                    key={location.name}
                    name={location.name}
                    address={location.address}
                    mobile={isMobile}
                    restaurantUrl={location.restaurantUrl}
                  />
                ))}
              </div>

              <div className="flex flex-col gap-6">
                {restaurantRightColumn.map((location) => (
                  <RestaurantRow
                    key={location.name}
                    name={location.name}
                    address={location.address}
                    mobile={isMobile}
                    restaurantUrl={location.restaurantUrl}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </ModalShell>
  );
}
