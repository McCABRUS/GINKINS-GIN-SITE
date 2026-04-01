import Image from 'next/image';

interface RecipeCardProps {
  area: string;
  title: string;
  image: string;
  alt: string;
  description: string;
  ingredients: string[];
  instructions: string[];
  titleMode: string;
}

export default function RecipeCard({
  area,
  title,
  image,
  alt,
  description,
  ingredients,
  instructions,
  titleMode,
}: RecipeCardProps) {
  return (
    <article
      className={`
        group relative w-full min-w-0 overflow-hidden lg:rounded-xl
        ${area}
      `}
    >
      <Image
        draggable={false}
        src={image}
        alt={alt}
        width={405}
        height={522}
        className="w-full max-w-full h-auto object-cover"
      />
      <div className="pointer-events-none absolute top-6.5 inset-x-0 z-10 text-center">
        <h3
          className={
            titleMode === 'light'
              ? 'text-background!'
              : 'text-(--primary-black)!'
          }
        >
          {title}
        </h3>
      </div>
      <div className="absolute inset-0 z-20 flex items-center bg-black/70 opacity-0 transition-all duration-300 group-hover:opacity-100 group-focus-within:opacity-100 group-active:opacity-100 group-active-within:opacity-100">
        <div className="px-2 sm:px-6 py-2 sm:py-6 text-sm text-background space-y-6 max-h-full overflow-y-auto place-self-start">
          <p className="leading-relaxed">
            <strong>{description}</strong>
          </p>
          {ingredients.length > 0 && (
            <div>
              <p className="font-semibold mb-2">Ingredients</p>
              <ul className="list-disc pl-5 space-y-1">
                {ingredients.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          )}
          {instructions.length > 0 && (
            <div>
              <p className="font-semibold mb-2">Instructions</p>
              <ol className="list-decimal pl-5 space-y-1">
                {instructions.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ol>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
