import Image from 'next/image';
import Link from 'next/link';
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
        <div className="relative w-[132%] h-[131%] left-[-16%] top-[-16%]">
          <Image src={image} alt={alt} fill className="object-cover" />
        </div>
      </div>

      <h2 className="text-center lg:text-left text-background! w-66.25 mt-3.5 text-4xl! leading-10!">
        {title}
      </h2>
      <div className="w-[80%] lg:w-66.25">
        <p className="text-center lg:text-left text-base leading-6 font-normal text-background  my-5">
          {description}
        </p>
        <Link
          href="https://ginkinsgin.distilleryspirits.com"
          target="_blank"
          className="relative w-40 lg:w-44.25 h-9.75 mt-9.5 flex mx-auto lg:mx-0 content-start items-center justify-center bg-(--primary-red-main) px-5 py-1.5 transition hover:bg-(--primary-gold-main)"
        >
          <h5 className="text-background!">Shop ONLINE</h5>
        </Link>
      </div>
    </div>
  );
}
