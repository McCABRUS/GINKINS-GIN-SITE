import CollectionCard from './CollectionCard';
import { collectionData } from './data';

export default function CollectionCarousel() {
  const collectionDataFull = [
    ...collectionData,
    ...collectionData,
    ...collectionData,
  ];
  return (
    <div className="pt-25 top-56.25 h-312.5 md:h-295 lg:h-205 relative overflow-hidden">
      <div className="container">
        <div className="w-full">
          <div className="flex whitespace-nowrap animate-collection hover:stop-animation">
            {collectionDataFull.map((card, index) => (
              <CollectionCard
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
