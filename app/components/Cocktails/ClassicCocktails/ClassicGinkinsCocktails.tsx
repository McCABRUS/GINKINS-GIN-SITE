import CocktailCard from './CocktailCard';

export default function ClassicGinkinsCocktails() {
  return (
    <section className="w-full bg-(--primary-black)" id="classic">
      <div className="mx-auto pb-5 max-xl:px-5 max-3xl:px-37.25 md:max-w-480 lg:pt-27 lg:pb-19">
        <div className="text-center lg:hidden py-20">
          <h3 className="mb-9.25 text-(--primary-gold-main)!">Enjoy</h3>
          <h1 className="text-[#7E8589]! my-16 ">
            Classic Ginkins
            <br />
            Cocktails
          </h1>
          <p className="text-lg text-(--primary-gold-main)! uppercase">
            Recipes that showcase our gin’s character.
          </p>
        </div>
        <div
          className="
            grid gap-4 lg:gap-8
            grid-cols-2
            lg:grid-cols-4
          "
        >
          <CocktailCard
            title="Ginkins Martini"
            image="/imgs/cocktails/classic-ginkins-cocktails/ginkins-gin-heritage-martini-cocktail.webp"
            alt="Crystal clear Heritage Martini made with Ginkins Gin and a classic lemon peel"
          />
          <div className="hidden lg:flex lg:col-span-2 justify-center text-center">
            <div>
              <h3 className="text-(--primary-gold-main)!">Enjoy</h3>
              <h4 className="text-[#7E8589]! uppercase my-8">
                Classic Ginkins
                <br />
                Cocktails
              </h4>
              <h5 className="text-(--primary-gold-main)!">
                Recipes that showcase our gin’s character.
              </h5>
            </div>
          </div>

          <CocktailCard
            title="Tom Collins"
            image="/imgs/cocktails/classic-ginkins-cocktails/ginkins-gin-tom-collins-cocktail.webp"
            alt="Tom Collins cocktail in a highball glass with Ginkins Gin, lemon, and a maraschino cherry”"
          />
          <CocktailCard
            title="Clover Club – Heritage Style"
            image="/imgs/cocktails/classic-ginkins-cocktails/ginkins-gin-clover-club-cocktail.webp"
            alt="Pink Clover Club gin cocktail with egg white foam and fresh raspberries"
          />
          <CocktailCard
            title="Southside"
            image="/imgs/cocktails/classic-ginkins-cocktails/ginkins-gin-southside-cocktail.webp"
            alt="Refreshing Southside gin cocktail with fresh mint leaves and lime wedges"
          />
          <CocktailCard
            title="Bee’s Knees"
            image="/imgs/cocktails/classic-ginkins-cocktails/ginkins-gin-bees-knees-cocktail.webp"
            alt="Bees Knees cocktail with Ginkins Gin, honey, and lavender garnish on a dark background"
          />
          <CocktailCard
            title="Corpse Reviver #2"
            image="/imgs/cocktails/classic-ginkins-cocktails/corpse-reviver.webp"
            alt=""
          />
          <CocktailCard
            title="Aviation"
            image="/imgs/cocktails/classic-ginkins-cocktails/ginkins-gin-aviation-cocktail.webp"
            alt="Aviation cocktail made with Ginkins Gin, garnished with cherries on a branded coaster"
          />
          <CocktailCard
            title="French 75"
            image="/imgs/cocktails/classic-ginkins-cocktails/ginkins-gin-french-75-cocktail.webp"
            alt="Classic French 75 cocktail featuring Ginkins Gin and a lemon twist garnish"
          />
          <CocktailCard
            title="Golden French 75"
            image="/imgs/cocktails/classic-ginkins-cocktails/ginkins-gin-golden-french-cocktail.webp"
            alt="Ginkins Golden French cocktail served in a flute against a warm terracotta background"
          />
          <CocktailCard
            title="Heritage Martini"
            image="/imgs/cocktails/classic-ginkins-cocktails/martini.webp"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}
