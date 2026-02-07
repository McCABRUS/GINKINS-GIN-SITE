import Image from 'next/image';

interface PairingItem {
  icon: string;
  label: string;
}

interface PairingColumnProps {
  title: string;
  items: PairingItem[];
  withDivider?: boolean;
}

export default function PairingColumn({
  title,
  items,
  withDivider = false,
}: PairingColumnProps) {
  return (
    <div className="relative mx-auto lg:mx-0">
      {withDivider && (
        <span
          className="absolute -right-8 top-0 hidden h-full w-px bg-(--primary-black) lg:block"
          aria-hidden
        />
      )}
      <div className="mb-12 lg:mb-0 lg:hidden">
        <span className="block h-px w-full bg-(--primary-black)" aria-hidden />
      </div>

      <h2 className="text-center text-(--primary-red-main)! mb-12.5 lg:mb-0">
        {title}
      </h2>
      <ul className="space-y-6">
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-4">
            <Image
              src={item.icon}
              alt=""
              width={24}
              height={24}
              className="shrink-0"
            />
            <h5 className="uppercase">{item.label}</h5>
          </li>
        ))}
      </ul>
    </div>
  );
}
