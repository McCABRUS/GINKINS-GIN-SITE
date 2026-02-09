type Props = {
  className?: string;
};

import Image from 'next/image';

export default function CornerIcon({ className }: Props) {
  return (
    <Image
      src="/Sustainability/FlowerIcon.svg"
      alt="Red stylized botanical flower icon for Ginkins Gin visual identity"
      width={83}
      height={83}
      className={className}
    />
  );
}
