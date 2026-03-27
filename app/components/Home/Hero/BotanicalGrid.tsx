'use client';

import Image from 'next/image';

type Side = 'left' | 'right';
type RenderPart = 'label' | 'base' | 'hover' | 'extra';

type BotanicalItem = {
  id: string;
  label: string;
  baseSrc: string;
  hoverSrc: string;
  extraSrc?: string;
  priority?: boolean;
  wrapperClassName: string;
  labelClassName: string;
  labelFirst?: boolean;
  renderOrder: RenderPart[];
  baseClassName: string;
  hoverClassName: string;
  extraClassName?: string;
  baseWidth?: number;
  baseHeight?: number;
  hoverWidth?: number;
  hoverHeight?: number;
  extraWidth?: number;
  extraHeight?: number;
};

type BotanicalGridProps = {
  side: Side;
  activeId: string | null;
  isHovering: boolean;
};

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ');
}

function BotanicalCard({
  item,
  isAutoActive,
}: {
  item: BotanicalItem;
  isAutoActive: boolean;
}) {
  const renderPart = (part: RenderPart, index: number) => {
    switch (part) {
      case 'label':
        return (
          <p key={`label-${index}`} className={item.labelClassName}>
            {item.label}
          </p>
        );

      case 'base':
        return (
          <Image
            key={`base-${index}`}
            draggable={false}
            aria-hidden
            src={item.baseSrc}
            alt=""
            width={item.baseWidth ?? 100}
            height={item.baseHeight ?? 100}
            priority={item.priority}
            className={item.baseClassName}
          />
        );

      case 'hover':
        return (
          <Image
            key={`hover-${index}`}
            draggable={false}
            aria-hidden
            src={item.hoverSrc}
            alt=""
            width={item.hoverWidth ?? 100}
            height={item.hoverHeight ?? 100}
            className={item.hoverClassName}
          />
        );

      case 'extra':
        return item.extraSrc ? (
          <Image
            key={`extra-${index}`}
            draggable={false}
            aria-hidden
            src={item.extraSrc}
            alt=""
            width={item.extraWidth ?? 100}
            height={item.extraHeight ?? 100}
            className={item.extraClassName}
          />
        ) : null;

      default:
        return null;
    }
  };

  return (
    <div
      className={cx(item.wrapperClassName, isAutoActive && 'is-auto-active')}
    >
      {item.renderOrder.map(renderPart)}
    </div>
  );
}

const LEFT_ITEMS: BotanicalItem[] = [
  {
    id: 'grapefruit',
    label: 'Grapefruit Peel',
    baseSrc: '/imgs/home/botanicals/ginkins-gin-botanical-grapefruit.svg',
    hoverSrc:
      '/imgs/home/botanicals/ginkins-gin-botanical-grapefruit-hover.svg',
    extraSrc: '/imgs/home/botanicals/icon-image-1.png',
    priority: true,
    renderOrder: ['label', 'base', 'hover', 'extra'],
    wrapperClassName:
      'relative w-15.75 xl:w-20 2xl:w-25 h-15.75 xl:h-20 2xl:h-25 group',
    labelClassName:
      'text-base font-normal text-(--primary-black) xl:text-background justify-self-center text-center whitespace-nowrap mt-0 xl:-mt-3.5 2xl:-mt-8.5 mb-0 xl:mb-2.5 invisible group-hover:visible group-active:visible [.is-auto-active_&]:visible',
    baseClassName:
      'group-hover:invisible group-active:invisible [.is-auto-active_&]:invisible',
    hoverClassName:
      '-mt-15 xl:-mt-19.75 2xl:-mt-24.75 invisible group-hover:visible group-active:visible [.is-auto-active_&]:visible',
    extraClassName:
      '-mt-5 xl:-mt-6.25 invisible group-hover:visible group-active:visible [.is-auto-active_&]:visible',
    baseWidth: 102,
    baseHeight: 101,
    hoverWidth: 100,
    hoverHeight: 100,
    extraWidth: 200,
    extraHeight: 100,
  },
  {
    id: 'cardamom',
    label: 'Cardamon',
    baseSrc: '/imgs/home/botanicals/ginkins-gin-botanical-cardamom.svg',
    hoverSrc: '/imgs/home/botanicals/ginkins-gin-botanical-cardamom-hover.svg',
    extraSrc: '/imgs/home/botanicals/icon-image-2.png',
    priority: true,
    renderOrder: ['extra', 'hover', 'label', 'base'],
    wrapperClassName:
      'relative w-15.75 xl:w-20 2xl:w-25 h-15.75 xl:h-20 2xl:h-25 group top-full hover:-top-7.5 active:-top-7.5 [&.is-auto-active]:-top-7.5',
    labelClassName:
      'text-base font-normal text-(--secondary-black) justify-self-center text-center whitespace-nowrap mt-2.5 invisible group-hover:visible group-active:visible [.is-auto-active_&]:visible',
    baseClassName:
      '-mt-55.75 2xl:-mt-65.75 group-hover:invisible group-active:invisible [.is-auto-active_&]:invisible',
    hoverClassName:
      '-mt-18.25 2xl:mt-0.25 invisible group-hover:visible group-active:visible [.is-auto-active_&]:visible',
    extraClassName:
      'mt-9.5 mb-16.75 xl:mb-9.5 2xl:mt-[24.5px] 2xl:-mb-13.5 invisible group-hover:visible group-active:visible [.is-auto-active_&]:visible',
  },
  {
    id: 'angelica',
    label: 'Angelica Root',
    baseSrc: '/imgs/home/botanicals/ginkins-gin-botanical-angelica.svg',
    hoverSrc: '/imgs/home/botanicals/ginkins-gin-botanical-angelica-hover.svg',
    extraSrc: '/imgs/home/botanicals/icon-image-3.png',
    priority: true,
    renderOrder: ['label', 'base', 'hover', 'extra'],
    wrapperClassName:
      'relative w-15.75 xl:w-20 2xl:w-25 h-15.75 xl:h-20 2xl:h-25 group',
    labelClassName:
      'text-base font-normal text-(--primary-black) xl:text-background justify-self-center text-center whitespace-nowrap mt-0 xl:-mt-3.5 2xl:-mt-8.5 mb-0 xl:mb-2.5 invisible group-hover:visible group-active:visible [.is-auto-active_&]:visible',
    baseClassName:
      'group-hover:invisible group-active:invisible [.is-auto-active_&]:invisible',
    hoverClassName:
      '-mt-15 xl:-mt-19.75 2xl:-mt-24.75 invisible group-hover:visible group-active:visible [.is-auto-active_&]:visible',
    extraClassName:
      '-mt-5 xl:-mt-7.5 invisible group-hover:visible group-active:visible [.is-auto-active_&]:visible',
  },
  {
    id: 'juniper-berries',
    label: 'Juniper Berries',
    baseSrc: '/imgs/home/botanicals/ginkins-gin-botanical-juniper.svg',
    hoverSrc: '/imgs/home/botanicals/ginkins-gin-botanical-juniper-hover.svg',
    extraSrc: '/imgs/home/botanicals/icon-image-4.png',
    priority: true,
    renderOrder: ['extra', 'hover', 'label', 'base'],
    wrapperClassName:
      'relative w-15.75 xl:w-20 2xl:w-25 h-15.75 xl:h-20 2xl:h-25 group top-full hover:-top-7.5 active:-top-7.5 [&.is-auto-active]:-top-7.5',
    labelClassName:
      'text-base font-normal text-(--secondary-black) justify-self-center text-center whitespace-nowrap mt-2.5 invisible group-hover:visible group-active:visible [.is-auto-active_&]:visible',
    baseClassName:
      '-mt-55.75 2xl:-mt-65.75 group-hover:invisible group-active:invisible [.is-auto-active_&]:invisible',
    hoverClassName:
      '-mt-11 2xl:-mt-6 invisible group-hover:visible group-active:visible [.is-auto-active_&]:visible',
    extraClassName:
      'mt-7.5 2xl:mt-0 mb-12.25 xl:mb-5 2xl:-mb-5.75 invisible group-hover:visible group-active:visible [.is-auto-active_&]:visible',
  },
  {
    id: 'coriander',
    label: 'Corianders Seeds',
    baseSrc: '/imgs/home/botanicals/ginkins-gin-botanical-coriander.svg',
    hoverSrc: '/imgs/home/botanicals/ginkins-gin-botanical-coriander-hover.svg',
    extraSrc: '/imgs/home/botanicals/icon-image-5.png',
    priority: true,
    renderOrder: ['label', 'base', 'hover', 'extra'],
    wrapperClassName:
      'relative w-15.75 xl:w-20 2xl:w-25 h-15.75 xl:h-20 2xl:h-25 group',
    labelClassName:
      'text-base font-normal text-(--primary-black) xl:text-background justify-self-center text-center whitespace-nowrap mt-0 xl:-mt-3.5 2xl:-mt-8.5 mb-0 xl:mb-2.5 invisible group-hover:visible group-active:visible [.is-auto-active_&]:visible',
    baseClassName:
      'group-hover:invisible group-active:invisible [.is-auto-active_&]:invisible',
    hoverClassName:
      '-mt-15 xl:-mt-19.75 2xl:-mt-24.75 invisible group-hover:visible group-active:visible [.is-auto-active_&]:visible',
    extraClassName:
      '-mt-5 xl:-mt-7.5 invisible group-hover:visible group-active:visible [.is-auto-active_&]:visible',
  },
];

const RIGHT_ITEMS: BotanicalItem[] = [
  {
    id: 'juniper',
    label: 'Juniper',
    baseSrc: '/imgs/home/botanicals/ginkins-gin-botanical-juniper-icon.svg',
    hoverSrc:
      '/imgs/home/botanicals/ginkins-gin-botanical-juniper-icon-hover.svg',
    extraSrc: '/imgs/home/botanicals/icon-image-6.png',
    priority: true,
    renderOrder: ['label', 'base', 'hover', 'extra'],
    wrapperClassName:
      'relative w-15.75 xl:w-20 2xl:w-25 h-15.75 xl:h-20 2xl:h-25 group',
    labelClassName:
      'text-base font-normal text-(--primary-black) xl:text-background justify-self-center text-center whitespace-nowrap mt-0 xl:-mt-3.5 2xl:-mt-8.5 mb-0 xl:mb-2.5 invisible group-hover:visible group-active:visible [.is-auto-active_&]:visible',
    baseClassName:
      'group-hover:invisible group-active:invisible [.is-auto-active_&]:invisible',
    hoverClassName:
      '-mt-15 xl:-mt-19.75 2xl:-mt-24.75 invisible group-hover:visible group-active:visible [.is-auto-active_&]:visible',
    extraClassName:
      '-mt-5 xl:-mt-7 invisible group-hover:visible group-active:visible [.is-auto-active_&]:visible',
  },
  {
    id: 'orris',
    label: 'Orris Root',
    baseSrc: '/imgs/home/botanicals/ginkins-gin-botanical-orris.svg',
    hoverSrc: '/imgs/home/botanicals/ginkins-gin-botanical-orris-hover.svg',
    extraSrc: '/imgs/home/botanicals/icon-image-7.png',
    priority: true,
    renderOrder: ['extra', 'hover', 'label', 'base'],
    wrapperClassName:
      'relative w-15.75 xl:w-20 2xl:w-25 h-15.75 xl:h-20 2xl:h-25 group top-full hover:-top-7.5 active:-top-7.5 [&.is-auto-active]:-top-7.5',
    labelClassName:
      'text-base font-normal text-(--secondary-black) justify-self-center text-center whitespace-nowrap mt-2.5 invisible group-hover:visible group-active:visible [.is-auto-active_&]:visible',
    baseClassName:
      '-mt-56 2xl:-mt-65.75 group-hover:invisible group-active:invisible [.is-auto-active_&]:invisible',
    hoverClassName:
      '-mt-11.25 2xl:-mt-6.5 invisible group-hover:visible group-active:visible [.is-auto-active_&]:visible',
    extraClassName:
      'mt-11.25 2xl:mt-5.75 mb-12.25 xl:mb-6 2xl:-mb-6 invisible group-hover:visible group-active:visible [.is-auto-active_&]:visible',
  },
  {
    id: 'nutmeg',
    label: 'Nutmeg',
    baseSrc: '/imgs/home/botanicals/ginkins-gin-botanical-nutmeg.svg',
    hoverSrc: '/imgs/home/botanicals/ginkins-gin-botanical-nutmeg-hover.svg',
    extraSrc: '/imgs/home/botanicals/icon-image-8.png',
    priority: true,
    renderOrder: ['label', 'base', 'hover', 'extra'],
    wrapperClassName:
      'relative w-15.75 xl:w-20 2xl:w-25 h-15.75 xl:h-20 2xl:h-25 group',
    labelClassName:
      'text-base font-normal text-(--primary-black) xl:text-background justify-self-center text-center whitespace-nowrap mt-0 xl:-mt-3.5 2xl:-mt-8.5 mb-0 xl:mb-2.5 invisible group-hover:visible group-active:visible [.is-auto-active_&]:visible',
    baseClassName:
      'group-hover:invisible group-active:invisible [.is-auto-active_&]:invisible',
    hoverClassName:
      '-mt-15 xl:-mt-19.75 2xl:-mt-24.75 invisible group-hover:visible group-active:visible [.is-auto-active_&]:visible',
    extraClassName:
      '-mt-5 xl:-mt-4.5 invisible group-hover:visible group-active:visible [.is-auto-active_&]:visible',
  },
  {
    id: 'cassia',
    label: 'Cassia Bark',
    baseSrc: '/imgs/home/botanicals/ginkins-gin-botanical-cassia.svg',
    hoverSrc: '/imgs/home/botanicals/ginkins-gin-botanical-cassia-hover.svg',
    extraSrc: '/imgs/home/botanicals/icon-image-9.png',
    priority: true,
    renderOrder: ['extra', 'hover', 'label', 'base'],
    wrapperClassName:
      'relative w-15.75 xl:w-20 2xl:w-25 h-15.75 xl:h-20 2xl:h-25 group top-full hover:-top-7.5 active:-top-7.5 [&.is-auto-active]:-top-7.5',
    labelClassName:
      'text-base font-normal text-(--secondary-black) justify-self-center text-center whitespace-nowrap mt-2.5 invisible group-hover:visible group-active:visible [.is-auto-active_&]:visible',
    labelFirst: false,
    baseClassName:
      '-mt-55.75 2xl:-mt-65.75 group-hover:invisible group-active:invisible [.is-auto-active_&]:invisible',
    hoverClassName:
      '-mt-11.5 2xl:-mt-6.5 invisible group-hover:visible group-active:visible [.is-auto-active_&]:visible',
    extraClassName:
      'mt-10 2xl:mt-4 mb-12.25 xl:mb-6 2xl:-mb-6.25 invisible group-hover:visible group-active:visible [.is-auto-active_&]:visible',
  },
  {
    id: 'lemon-peel',
    label: 'Lemon Peel',
    baseSrc: '/imgs/home/botanicals/ginkins-gin-botanical-lemon.svg',
    hoverSrc: '/imgs/home/botanicals/ginkins-gin-botanical-lemon-hover.svg',
    extraSrc: '/imgs/home/botanicals/icon-image-10.png',
    priority: true,
    renderOrder: ['label', 'base', 'hover', 'extra'],
    wrapperClassName:
      'relative w-15.75 xl:w-20 2xl:w-25 h-15.75 xl:h-20 2xl:h-25 group',
    labelClassName:
      'text-base font-normal text-(--primary-black) xl:text-background justify-self-center text-center whitespace-nowrap mt-0 xl:-mt-3.5 2xl:-mt-8.5 mb-0 xl:mb-2.5 invisible group-hover:visible group-active:visible [.is-auto-active_&]:visible',
    baseClassName:
      'group-hover:invisible group-active:invisible [.is-auto-active_&]:invisible',
    hoverClassName:
      '-mt-15 xl:-mt-19.75 2xl:-mt-24.75 invisible group-hover:visible group-active:visible [.is-auto-active_&]:visible',
    extraClassName:
      '-mt-5 xl:-mt-7.5 invisible group-hover:visible group-active:visible [.is-auto-active_&]:visible',
  },
];

export default function BotanicalGrid({
  side,
  activeId,
  isHovering,
}: BotanicalGridProps) {
  const isLeft = side === 'left';
  const items = isLeft ? LEFT_ITEMS : RIGHT_ITEMS;

  const containerClassName = isLeft
    ? 'relative xl:absolute -top-85 xl:top-[55.1%] z-30 left-1/2 -translate-x-1/2 xl:translate-x-0 xl:left-[3%] grid grid-cols-5 grid-rows-2 min-w-78.75'
    : 'relative xl:absolute -top-85 xl:top-[55.1%] z-30 left-1/2 -translate-x-1/2 xl:translate-x-0 xl:left-auto xl:right-[3%] grid grid-cols-5 grid-rows-2 min-w-78.75';

  return (
    <div className={containerClassName}>
      {items.map((item) => (
        <BotanicalCard
          key={item.id}
          item={item}
          isAutoActive={activeId === item.id && !isHovering}
        />
      ))}
    </div>
  );
}
