import Image from 'next/image';

export default function TimelineMarker() {
  return (
    <div className="flex items-center justify-center">
      <Image
        draggable={false}
        src="/imgs/sustainability/ginkins-gin-icon-botanical-flower-red.svg"
        alt="Red stylized botanical flower icon for Ginkins Gin visual identity"
        width={28}
        height={28}
        aria-hidden
      />
    </div>
  );
}
