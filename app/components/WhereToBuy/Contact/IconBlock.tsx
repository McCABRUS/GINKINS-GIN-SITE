import Image from 'next/image';
export default function IconBlock({
  label,
  svgImg,
  svgAlt,
  svgWidth,
  svgHeight,
}: {
  label: string;
  svgImg: string;
  svgAlt: string;
  svgWidth: number;
  svgHeight: number;
}) {
  return (
    <div className="flex flex-col items-center gap-4 text-center">
      <Image
        draggable={false}
        src={svgImg}
        alt={svgAlt}
        width={svgWidth}
        height={svgHeight}
        aria-hidden
      />
      <h5 className="">{label}</h5>
    </div>
  );
}
