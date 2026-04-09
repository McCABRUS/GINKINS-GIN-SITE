'use client';

import { useState } from 'react';
import GridCard from './GridCard';
import CentralGridCard from './CentralGridCard';
import WhereToBuyModal from './WhereToBuyModal';
import { trackEvent } from '@/lib/gtag';

export default function FindWhereToBuy() {
  const [activeModal, setActiveModal] = useState<
    'retailers' | 'restaurants' | null
  >(null);

  return (
    <section className="bg-(--primary-black) text-background pb-30 lg:pb-16 w-screen pt-25 relative overflow-hidden">
      <div className="mx-auto max-xl:px-5 max-4xl:px-37.25 md:max-w-480">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-11 xl-gap-0">
          <GridCard
            order="lg:order-1"
            alt="Luxury red shopping bag with gold botanical pattern for Ginkins Gin"
            title="Retailers Near You"
            description="From curated bottle shops to trusted liquor stores, Ginkins is finding its place on shelves across Kentucky—and beyond. "
            image="/imgs/where_to_buy/ginkins-gin-premium-shopping-bag--high.webp"
            bgColor="bg-(--primary-gold-main)"
            isLeft
            buttonMode="modal"
            buttonLabel="FIND A RETAILER"
            onButtonClick={() => {
              setActiveModal('retailers');
              trackEvent('click_retailers', {
                location: 'where_to_buy',
              });
            }}
          />
          <hr
            className="block lg:hidden mx-auto  w-[80%] text-(--primary-gold-main)"
            aria-hidden
          />
          <GridCard
            order="lg:order-2"
            alt="Set of Ginkins Gin branded coasters with Stay Ginspired slogan"
            title="Bars &amp; Restaurants"
            description="Discover where our gins are being shaken, stirred, and served in cocktails crafted by some of the best in the business."
            image="/imgs/where_to_buy/ginkins-gin-branded-coasters-set--opt.webp"
            bgColor="bg-(--primary-red-main)"
            buttonMode="modal"
            buttonLabel="WHERE TO SIP GINKINS"
            onButtonClick={() => {
              setActiveModal('restaurants');
              trackEvent('click_bars_restaurants', {
                location: 'where_to_buy',
              });
            }}
          />
          <hr
            className="block lg:hidden mx-auto  w-[80%] text-(--primary-gold-main)"
            aria-hidden
          />
          <GridCard
            order="lg:order-4"
            bgColor="bg-(--primary-gold-main)"
            alt="Red and gold luxury gift box containing a Ginkins Gin bottle"
            title="Order Online"
            description="Prefer delivery to your door? Check out our online retail partners for easy, secure ordering."
            image="/imgs/where_to_buy/ginkins-gin-single-bottle-gift-box--high.webp"
            buttonLink="https://ginkinsgin.distilleryspirits.com"
            urlTarget="_blank"
            isLeft
            onButtonClick={() => {
              setActiveModal('restaurants');
              trackEvent('click_order_online', {
                location: 'where_to_buy',
              });
            }}
          />
          <hr
            className="block lg:hidden mx-auto  w-[80%] text-(--primary-gold-main)"
            aria-hidden
          />
          <GridCard
            order="lg:order-5"
            bgColor="bg-(--primary-gold-main)"
            alt="Black and gold square gift box with intricate botanical pattern for Ginkins Gin"
            title="Wholesale &amp; Distribution"
            description="Interested in bringing Ginkins to your bar, store, or event? We’d love to connect."
            image="/imgs/where_to_buy/ginkins-gin-botanical-gift-box--high-res.webp"
            buttonLabel="PARTNER WITH US"
            buttonLink="/where-to-buy#ContactSection"
            urlTarget=""
            onButtonClick={() => {
              setActiveModal('restaurants');
              trackEvent('click_wholesale_and_distribution', {
                location: 'where_to_buy',
              });
            }}
          />
          <CentralGridCard />
        </div>
      </div>
      <div
        className="absolute border-solid border-(--primary-gold-main) border-t border-r-0 border-b-0 border-l-0 shrink-0 w-9.75 2xl:w-[35%] xl:w-[60%] lg:w-[70%] h-0 z-20 top-4.75 lg:top-0 left-1/2 -translate-x-1/2"
        style={{
          transform: 'rotate(90deg) scale(1, 1)',
        }}
      />
      <div
        className="absolute border-solid border-(--primary-gold-main) border-t border-r-0 border-b-0 border-l-0 shrink-0 w-18 2xl:w-[35%] xl:w-[60%] lg:w-[70%] h-0 z-20 bottom-9 lg:bottom-0 left-1/2 -translate-x-1/2"
        style={{
          transform: 'rotate(90deg) scale(1, 1)',
        }}
      />
      <div className="hidden lg:block absolute border-solid border-(--primary-gold-main) border-t border-r-0 border-b-0 border-l-0 shrink-0 w-50 2xl:w-[40%] lg:w-[30%] h-0 z-20 top-1/2 left-25 2xl:left-[15%] xl:left-[10%] lg:left-[15%] -translate-x-1/2" />
      <div className="hidden lg:block absolute border-solid border-(--primary-gold-main) border-t border-r-0 border-b-0 border-l-0 shrink-0 w-50 2xl:w-[40%] lg:w-[30%] h-0 z-20 top-1/2 -right-25 2xl:-right-[25%] xl:-right-[20%] lg:-right-[15%] -translate-x-1/2" />
      <WhereToBuyModal
        variant="retailers"
        open={activeModal === 'retailers'}
        onClose={() => setActiveModal(null)}
      />
      <WhereToBuyModal
        variant="restaurants"
        open={activeModal === 'restaurants'}
        onClose={() => setActiveModal(null)}
      />
    </section>
  );
}
