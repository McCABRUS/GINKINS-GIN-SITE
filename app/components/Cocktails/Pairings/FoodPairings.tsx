import PairingColumn from './PairingColumn';
import Image from 'next/image';

export default function FoodPairings() {
  return (
    <section className="w-full bg-(--secondary-beige) py-15 lg:py-27 px-5 lg:px-15 xl:px-37 relative">
      <div className="mx-auto">
        <div className="text-center">
          <h3 className="uppercase text-(--primary-red-main)! text-[18px]! leading-6.75!">
            Discover
          </h3>
          <h1 className="my-13.25 text-(--primary-black)! lg:text-[56px]! leading-16.75! lg:font-normal!">
            Food Pairings by Ginkins
          </h1>
          <h5 className="text-(--primary-red-main)! mb-23.5 text-[18px]! leading-6.75!">
            Perfect dishes to complement your gin.
          </h5>
        </div>
        <div className="grid gap-11.5 lg:grid-cols-3">
          <PairingColumn
            title="Louisville Dry Gin"
            items={[
              {
                icon: '/cocktails/food-pairings-icons/ginkins-gin-icon-fish-citrus-mix.svg',
                label: 'Citrusy seafood',
              },
              {
                icon: '/cocktails/food-pairings-icons/ginkins-gin-icon-botanical-leaf-slice.svg',
                label: 'Goat cheese salads',
              },
              {
                icon: '/cocktails/food-pairings-icons/ginkins-gin-icon-bird-on-branch.svg',
                label: 'Grilled chicken',
              },
            ]}
            withDivider
          />
          <PairingColumn
            title="Golden Bloom"
            items={[
              {
                icon: '/cocktails/food-pairings-icons/ginkins-gin-icon-sparkle-botanical.svg',
                label: 'Charcuterie',
              },
              {
                icon: '/cocktails/food-pairings-icons/ginkins-gin-icon-botanical-seed.svg',
                label: 'Citrus-dressed greens',
              },
              {
                icon: '/cocktails/food-pairings-icons/ginkins-gin-icon-fish-minimalist.svg',
                label: 'Sushi',
              },
              {
                icon: '/cocktails/food-pairings-icons/ginkins-gin-icon-botanical-cross-section.svg',
                label: 'Soft cheeses',
              },
            ]}
            withDivider
          />

          <PairingColumn
            title="Heritage Reserve"
            items={[
              {
                icon: '/cocktails/food-pairings-icons/ginkins-gin-icon-farm-animal-pig.svg',
                label: 'Roasted pork',
              },
              {
                icon: '/cocktails/food-pairings-icons/ginkins-gin-icon-bird-abstract.svg',
                label: 'Duck breast',
              },
              {
                icon: '/cocktails/food-pairings-icons/ginkins-gin-icon-sparkle-flower.svg',
                label: 'Ginger-based desserts',
              },
              {
                icon: '/cocktails/food-pairings-icons/ginkins-gin-icon-blossom-detail.svg',
                label: 'Spiced nuts',
              },
            ]}
          />
        </div>
        <div className="mt-24 flex justify-center">
          <Image
            src="/cocktails/food-pairings-icons/ginkins-gin-icon-fish-citrus-mix.svg"
            alt=""
            width={140}
            height={140}
          />
        </div>
      </div>
      <div
        className="absolute hidden lg:block border-solid border-(--primary-black) border-t border-r-0 border-b-0 border-l-0 shrink-0 w-22 h-0 z-20 top-11 left-1/2 -translate-x-1/2"
        style={{
          transform: 'rotate(90deg) scale(1, 1)',
        }}
      ></div>
      <div
        className="absolute hidden lg:block border-solid border-(--primary-black) border-t border-r-0 border-b-0 border-l-0 shrink-0 w-22 h-0 z-20  bottom-11  left-1/2 -translate-x-1/2"
        style={{
          transform: 'rotate(90deg) scale(1, 1)',
        }}
      ></div>
    </section>
  );
}
