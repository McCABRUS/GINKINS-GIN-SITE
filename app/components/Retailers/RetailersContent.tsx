'use client';

import Link from 'next/link';
import HelpFooter from '../HelpFooter';

type Location = {
  name: string;
  address: string;
  href?: string;
};

type Section = {
  title: string;
  desktopColumns: Location[][];
};

const sections: Section[] = [
  {
    title: 'Louisville',
    desktopColumns: [
      [
        {
          name: 'Total Wine & More - Shelbyville Road',
          address: '5067 Shelbyville Road, Louisville, KY 40207',
        },
        {
          name: 'Total Wine & More - Paddock Shops',
          address: '4320 Summit Plaza Drive, Louisville, KY 40241',
        },
        {
          name: 'Liquor Barn Towne Center',
          address: '4301 Towne Center Drive, Louisville, KY 40241',
        },
      ],
      [
        {
          name: 'Liquor Barn Hurstbourne',
          address: '1850 South Hurstbourne Parkway, Louisville, KY 40220',
        },
        {
          name: 'Liquor Barn Middletown',
          address: '13401 Shelbyville Road, Louisville, KY 40223',
        },
        {
          name: 'Party Mart #1',
          address: '4808 Brownsboro Road, Louisville, KY 40207',
        },
      ],
      [
        {
          name: 'Old Town Wine & Spirits',
          address: '1529 Bardstown Road, Louisville, KY 40205',
        },
        {
          name: 'Skyway Beverage Shoppe',
          address: '2216 Hikes Lane, Louisville, KY 40218',
        },
      ],
    ],
  },
  {
    title: 'Prospect',
    desktopColumns: [
      [
        {
          name: 'World Buzz Wine & Spirits',
          address: '9301 Dayflower Street, Prospect, KY 40059',
        },
      ],
    ],
  },
  {
    title: 'Lexington',
    desktopColumns: [
      [
        {
          name: 'Total Wine & More - Sir Barton Way',
          address: '2321 Sir Barton Way, Lexington, KY 40509',
        },
      ],
      [
        {
          name: 'Liquor Barn Hamburg',
          address: '1837 Plaudit Place, Lexington, KY 40509',
        },
      ],
      [
        {
          name: 'Liquor Barn Beaumont Centre',
          address: '921 Beaumont Centre Parkway, Lexington, KY 40513',
        },
      ],
    ],
  },
  {
    title: 'Northern Kentucky',
    desktopColumns: [
      [
        {
          name: 'The Party Source',
          address: '95 Riviera Drive, Bellevue, KY 41073',
        },
      ],
    ],
  },
];

function MapPinIcon() {
  return (
    <svg
      width="22"
      height="27"
      viewBox="0 0 22 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      className="h-5.5 w-4.5 shrink-0 transition-colors duration-200 group-hover:text-(--primary-red-main) lg:h-6.75 lg:w-5.5"
    >
      <path
        d="M20.1143 10.9884C20.1143 5.96003 16.0337 1.88373 11 1.88373C5.96632 1.88373 1.88571 5.96003 1.88571 10.9884C1.88571 13.464 3.00397 15.7742 4.83214 18.1456C6.50886 20.3205 8.696 22.4433 11 24.73C13.304 22.4433 15.4911 20.3205 17.1679 18.1456C18.996 15.7742 20.1143 13.464 20.1143 10.9884ZM13.8286 10.9884C13.8286 9.42787 12.5622 8.16281 11 8.16281C9.43782 8.16281 8.17143 9.42787 8.17143 10.9884C8.17143 12.5489 9.43782 13.814 11 13.814C12.5622 13.814 13.8286 12.5489 13.8286 10.9884ZM15.7143 10.9884C15.7143 13.5893 13.6036 15.6977 11 15.6977C8.39637 15.6977 6.28571 13.5893 6.28571 10.9884C6.28571 8.38752 8.39637 6.27909 11 6.27909C13.6036 6.27909 15.7143 8.38752 15.7143 10.9884ZM22 10.9884C22 14.0613 20.6038 16.7743 18.6607 19.2947C16.7269 21.8031 14.1496 24.2438 11.6666 26.7241C11.2984 27.092 10.7016 27.092 10.3334 26.7241C7.85044 24.2438 5.27313 21.8031 3.33929 19.2947C1.39616 16.7743 0 14.0613 0 10.9884C0 4.91967 4.92487 0 11 0C17.0751 0 22 4.91967 22 10.9884Z"
        fill="currentColor"
      />
    </svg>
  );
}

function LocationRow({ location }: { location: Location }) {
  const content = (
    <>
      <span className="pt-1 shrink-0 text-(--primary-black) transition-colors duration-200 group-hover:text-(--primary-red-main)">
        <MapPinIcon />
      </span>

      <div className="min-w-0 flex-1">
        <div className="text-[16px] font-bold leading-6 text-(--primary-black) transition-colors duration-200 group-hover:text-(--primary-red-main) lg:text-[16px]">
          {location.name}
        </div>
        <div className="mt-0.5 text-[16px] font-normal leading-6 text-(--primary-black) transition-colors duration-200 lg:text-[16px]">
          {location.address}
        </div>
      </div>
    </>
  );

  const baseClassName =
    'group flex w-full items-start gap-3 text-left transition-colors duration-200 hover:no-underline';

  if (location.href) {
    return (
      <Link href={location.href} className={baseClassName}>
        {content}
      </Link>
    );
  }

  return <div className={baseClassName}>{content}</div>;
}

function DesktopSection({ section }: { section: Section }) {
  return (
    <section className="border-b border-black/30 pt-7.5 pb-7.5">
      <h5
        className="text-(--primary-red-main)! text-left text-[16px] font-normal uppercase tracking-[0.02em] lg:text-[16px]"
        style={{ fontFamily: 'Barlow' }}
      >
        {section.title}
      </h5>

      <div className="mt-7.5 grid grid-cols-1 gap-x-7.5 gap-y-5 lg:grid-cols-3">
        {section.desktopColumns.map((column, columnIndex) => (
          <div
            key={`${section.title}-col-${columnIndex}`}
            className="flex flex-col gap-6 text-(--primary-black)"
          >
            {column.map((location) => (
              <LocationRow key={location.name} location={location} />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

function MobileSection({ section }: { section: Section }) {
  const locations = section.desktopColumns.flat();

  return (
    <section className="pt-6 pb-6 first:pt-0 w-full">
      <h5
        className="text-(--primary-red-main)! text-left text-[18px]! font-normal uppercase tracking-[0.02em] leading-6.75!"
        style={{ fontFamily: 'Barlow' }}
      >
        {section.title}
      </h5>

      <div className="mt-5 flex flex-col gap-5">
        {locations.map((location) => (
          <LocationRow key={location.name} location={location} />
        ))}
      </div>
    </section>
  );
}

export default function RetailersContent() {
  return (
    <section className="w-screen bg-transparent pt-9 lg:pt-20 pb-24 lg:pb-31.5 relative">
      <div className="mx-auto w-full">
        <div className="flex flex-col items-center gap-10 lg:mx-42.25">
          <header className="w-full text-center">
            <h2
              className="text-(--primary-red-main)! text-[28px] uppercase leading-tight md:text-[36px] lg:text-[36px]"
              style={{ fontFamily: 'Cormorant Garamond' }}
            >
              Currently available in Kentucky:
            </h2>
          </header>

          <div className="lg:hidden place-items-center w-79.25">
            {sections.map((section) => (
              <MobileSection key={section.title} section={section} />
            ))}
          </div>

          <div className="hidden w-full lg:block">
            {sections.map((section) => (
              <DesktopSection key={section.title} section={section} />
            ))}
          </div>
        </div>
        <HelpFooter />
      </div>
    </section>
  );
}
