import { FooterMerchCarouselData } from './FooterMerchCarouselData';
import FooterMerchCarousel from './FooterMerchCarousel';
export default function FooterMerch() {
  const FooterMerchCarouselDataFull = [
    ...FooterMerchCarouselData,
    ...FooterMerchCarouselData,
  ];

  return (
    <section className="w-screen h-95 md:h-140.75 bg-(--secondary-beige) overflow-hidden my-[17.5px]">
      <div className="relative overflow-hidden">
        <div className="flex whitespace-nowrap animate-merch gap-5">
          {FooterMerchCarouselDataFull.map((images, index) => (
            <FooterMerchCarousel
              img={images.img}
              key={index}
              alt={images.alt}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
