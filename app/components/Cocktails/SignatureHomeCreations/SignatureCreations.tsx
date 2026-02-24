import RecipeCard from './RecipeCard';

export default function SignatureHouseCreations() {
  return (
    <section
      className="w-screen bg-(--secondary-beige) py-0 lg:py-27 px-0 lg:px-[116.5px]"
      id="signature"
    >
      <div className="mx-auto">
        <div className="signature-grid grid grid-cols-1 gap-x-0 gap-y-0 lg:gap-x-10.5 lg:gap-y-8">
          <div className="area-title text-center space-y-9 mt-15 lg:mt-0 mb-14.75 lg:mb-0">
            <h3 className="text-(--primary-red-main)!">Savor</h3>
            <h1 className="text-(--secondary-black)! xl:text-[56px]! xl:leading-16.75!">
              Signature <br />
              House <br />
              Creations
            </h1>
            <h5 className="text-(--primary-red-main)!">
              Try a recipe | Mix it up | Pair &amp; pour
            </h5>
          </div>
          <RecipeCard
            area="area-card1"
            title="Southern Negroni"
            image="/imgs/cocktails/signature-house-creations/ginkins-gin-negroni-cocktail.webp"
            alt="Classic Negroni cocktail with Ginkins Gin, served over ice on a stone coaster with a large orange peel twis"
            description="Bold, bitter-sweet, and unmistakably smooth. A Southern spin on the Italian classic—Ginkins Louisville Dry meets Aperol and sweet vermouth for a citrus-forward twist that lingers just right."
            ingredients={[
              '1 oz Ginkins Louisville Dry Gin',
              '1 oz Aperol',
              '1 oz sweet vermouth',
              'Orange peel (for garnish)',
              'ice',
            ]}
            instructions={[
              'Add gin, Aperol, and sweet vermouth to a mixing glass filled with ice.',
              'Stir until well-chilled (about 20–30 seconds).',
              'Strain into a rocks glass over a large ice cube.',
              'Garnish with an expressed orange peel.',
            ]}
            titleMode="dark"
          />
          <RecipeCard
            area="area-card2"
            title="Harvest Brew"
            image="/imgs/cocktails/signature-house-creations/ginkins-gin-harvest-brew-cocktail.webp"
            alt="Autumnal Harvest Brew cocktail with Ginkins Gin and cinnamon stick garnish on a dark setting"
            description="Where gin meets cozy cold brew."
            ingredients={[
              '1 oz Ginkins Louisville Dry Gin',
              '3 oz cold brew',
              '1 oz pumpkin oat milk',
              '0.5 oz brown sugar cinnamon syrup',
              '1 oz chocolate syrup',
            ]}
            instructions={[
              'Shake all ingredients with ice, strain into a coupe, and garnish with cinnamon stick.',
            ]}
            titleMode="light"
          />
          <RecipeCard
            area="area-card4"
            title="Mandarin Gimlet"
            image="/imgs/cocktails/signature-house-creations/ginkins-gin-mandarin-gimlet-cocktail.webp"
            alt="Bright Mandarin Gimlet featuring Ginkins Gin, served with fresh mandarin segments on red"
            description="Zesty, vibrant, and refreshing."
            ingredients={[
              '2 oz Ginkins Gin',
              '1 oz fresh mandarin juice',
              '0.5 oz lime juice',
              '0.5 oz simple syrup',
            ]}
            instructions={[
              'Shake with ice, strain into a coupe, and garnish with mandarin twist.',
            ]}
            titleMode="light"
          />
          <RecipeCard
            area="area-card3"
            title="Heritage Espresso"
            image="/imgs/cocktails/signature-house-creations/ginkins-gin-heritage-espresso-dark.webp"
            alt="Signature Espresso Martini made with Ginkins Heritage Reserve on a black background with coffee grounds"
            description="Rich, bold, and bittersweet. A luxurious after-dinner sipper combining gin with deep espresso flavor. Exact proportions not specified in the original — we recommend:"
            ingredients={[
              '1.5 oz Ginkins GinHeritage Reserve',
              '1 oz espresso',
              '0.5 oz coffee liqueur or chocolate syrup',
              'Dash of vanilla extract',
            ]}
            instructions={[
              'Shake with ice and strain into a coupe.',
              'Garnish with a coffee bean.',
            ]}
            titleMode="light"
          />
          <RecipeCard
            area="area-card5"
            title="Golden Spritz"
            image="/imgs/cocktails/signature-house-creations/ginkins-gin-golden-spritz-cocktail.webp"
            alt="Effervescent Golden Spritz with Ginkins Gin, garnished with a cucumber ribbon and rosemary"
            description="Floral, fizzy, and perfect for sunny days."
            ingredients={[
              '1.5 oz Golden Bloom Gin',
              '1 oz elderflower liqueur',
              '2 oz sparkling water or prosecco',
            ]}
            instructions={[
              'Serve over ice in a wine glass with a cucumber ribbon or lemon peel.',
            ]}
            titleMode="dark"
          />
          <RecipeCard
            area="area-card6"
            title="Hop &amp; Herb Cocktail"
            image="/imgs/cocktails/signature-house-creations/ginkins-gin-hop-herb-cocktail.webp"
            alt="Vibrant yellow Hop &amp; Herb gin cocktail with a rosemary sprig and lime slice"
            description="Bright citrus meets IPA botanicals."
            ingredients={[
              '2 oz Ginkins Gin',
              '1 oz lemon juice',
              '0.75 oz honey syrup',
              '1 oz non-alcoholic IPA',
            ]}
            instructions={[
              'Shake first three ingredients with ice, pour into a highball glass, top with IPA, garnish with rosemary.',
            ]}
            titleMode="dark"
          />
          <RecipeCard
            area="area-card7"
            title="Ginkins Gin Espresso"
            image="/imgs/cocktails/signature-house-creations/ginkins-gin-espresso-martini-light.webp"
            alt="Ginkins Gin Espresso Martini served on a white marble coaster with scattered coffee beans"
            description="Rich, bold, and bittersweet."
            ingredients={[
              '1.5 oz Ginkins Gin',
              '1 oz espresso',
              '0.5 oz coffee liqueur or chocolate syrup',
            ]}
            instructions={[
              'Shake with ice, strain into coupe, garnish with coffee bean.',
            ]}
            titleMode="dark"
          />
          <RecipeCard
            area="area-card8"
            title="Basil Ginkins Smash"
            image="/imgs/cocktails/signature-house-creations/ginkins-gin-basil-smash-cocktail.webp"
            alt="Refreshing Basil Smash cocktail with Ginkins Gin and fresh basil leaf garnish on a red background"
            description="Herbaceous, crisp, and ideal for warm nights."
            ingredients={[
              '2 oz Ginkins Gin',
              '1 oz lemon juice',
              '0.75 oz simple syrup',
              'Fresh basil leaves',
            ]}
            instructions={[
              'Muddle basil with lemon juice and syrup, shake with gin and ice, strain, and garnish with basil sprig.',
            ]}
            titleMode="light"
          />
        </div>
      </div>
    </section>
  );
}
