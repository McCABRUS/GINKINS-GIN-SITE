import CollectionCard from './CollectionCard';
import { collectionData } from './data';

export default function CollectionCarousel() {
  const collectionDataFull = [...collectionData, ...collectionData];
  return (
    <div className="h-175.25 relative top-81.75">
      <div className="container">
        <div className="w-full">
          <div className="flex whitespace-nowrap animate-scroll hover:stop-animation">
            {collectionDataFull.map((card, index) => (
              <CollectionCard
                id={card.id}
                title={card.title}
                text={card.text}
                img={card.img}
                key={index}
                alt={card.alt}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
