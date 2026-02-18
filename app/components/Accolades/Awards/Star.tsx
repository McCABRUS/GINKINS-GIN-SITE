import Image from 'next/image';

export default function Star() {
  return (
    <Image
      src="/imgs/accolades/ginkins-gin-icon-sparkle-red.svg"
      alt="Sparkle icon"
      height={110}
      width={113}
      className="w-18 h-17.5 xl:w-28.25 xl:h-27.5"
      aria-hidden
    />
  );
}
