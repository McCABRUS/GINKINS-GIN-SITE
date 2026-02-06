import GridCard from './GridCard';
import CentralGridCard from './CentralGridCard';

export default function FindGinkins() {
  return (
    <section className="bg-(--primary-black) text-background py-16 w-screen pt-25 relative">
      <div className="mx-auto px-6">
        <div className="grid grid-cols-1 gap-24 lg:grid-cols-2 lg:gap-0">
          <GridCard
            order="lg:order-1"
            alt="Luxury red shopping bag with gold botanical pattern for Ginkins Gin"
            title="Retailers Near You"
            description="From boutique bottle shops to trusted liquor stores, Ginkins is on shelves across Kentucky and beyond."
            image="/where_to_buy/ginkins-gin-premium-shopping-bag.png"
            bgColor="bg-(--primary-gold-main)"
          />
          <GridCard
            order="lg:order-2"
            alt="Set of Ginkins Gin branded coasters with Stay Ginspired slogan"
            title="Bars & Restaurants"
            description="Discover where our gins are being shaken, stirred, and served in cocktails crafted by some of the best in the business."
            image="/where_to_buy/ginkins-gin-branded-coasters-set.png"
            bgColor="bg-(--primary-red-main)"
          />
          <GridCard
            order="lg:order-4"
            bgColor="bg-(--primary-gold-main)"
            alt="Red and gold luxury gift box containing a Ginkins Gin bottle"
            title="Order Online"
            description="Prefer delivery to your door? Check out our online retail partners for easy, secure ordering."
            image="/where_to_buy/ginkins-gin-single-bottle-gift-box.png"
          />
          <GridCard
            order="lg:order-5"
            bgColor="bg-(--primary-gold-main)"
            alt="Black and gold square gift box with intricate botanical pattern for Ginkins Gin"
            title="Wholesale & Distribution"
            description="Interested in bringing Ginkins to your bar, store, or event? We’d love to connect."
            image="/where_to_buy/ginkins-gin-botanical-gift-box.png"
          />
          <CentralGridCard />
        </div>
      </div>
      <div
        className="absolute border-solid border-(--primary-gold-main) border-t border-r-0 border-b-0 border-l-0 shrink-0 w-93.25 h-0 z-20 top-46.5 left-1/2 -translate-x-1/2"
        style={{
          transform: 'rotate(90deg) scale(1, 1)',
        }}
      ></div>
      <div
        className="absolute border-solid border-(--primary-gold-main) border-t border-r-0 border-b-0 border-l-0 shrink-0 w-93.25 h-0 z-20 bottom-46.5 left-1/2 -translate-x-1/2"
        style={{
          transform: 'rotate(90deg) scale(1, 1)',
        }}
      ></div>
      <div className="absolute border-solid border-(--primary-gold-main) border-t border-r-0 border-b-0 border-l-0 shrink-0 w-93.25 h-0 z-20 top-1/2 left-48.75 -translate-x-1/2"></div>
      <div className="absolute border-solid border-(--primary-gold-main) border-t border-r-0 border-b-0 border-l-0 shrink-0 w-93.25 h-0 z-20 top-1/2 -right-44.5 -translate-x-1/2"></div>
    </section>
  );
}
