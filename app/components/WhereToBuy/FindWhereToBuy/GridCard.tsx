import Image from 'next/image';
export default function GridCard({
  title,
  alt,
  image,
  description,
  order,
  bgColor,
}: {
  title: string;
  image: string;
  alt: string;
  order?: string;
  description: string;
  bgColor: string;
}) {
  return (
    <div className={`flex flex-col items-center z-50 ${order}`}>
      <div className={`relative mb-8 h-57.5 w-57.5 rounded-full ${bgColor}`}>
        <div className="relative w-[130%] h-[130%] left-[-15%] top-[-15%]">
          <Image src={image} alt={alt} fill className="object-cover" />
        </div>
      </div>

      <h2 className="text-left text-background! max-w-57.5 mt-3.5">{title}</h2>
      <div className="max-w-57.5">
        <p className="text-left text-base leading-6 font-normal text-background  my-5">
          {description}
        </p>
        <button className="relative w-40 lg:w-44.25 h-9.75 mt-9.5 flex content-start items-center justify-center bg-(--primary-red-main) px-5 lg:px-8 py-1.5 lg:py-3 text-sm font-medium uppercase tracking-wide text-background transition hover:bg-(--primary-gold-main)">
          <h5 className="text-background!">Shop ONLINE</h5>
        </button>
      </div>
    </div>
  );
}
