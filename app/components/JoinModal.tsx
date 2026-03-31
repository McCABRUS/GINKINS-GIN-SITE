'use client';

import Image from 'next/image';
import { useRef, useEffect } from 'react';
import NewsletterForm from './NewsletterForm';

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function JoinModal({ open, onClose }: Props) {
  const modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose();
    }

    if (open) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', onKey);
      setTimeout(() => modalRef.current?.focus(), 0);
    }

    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', onKey);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-500 flex items-start justify-center overflow-x-hidden overflow-y-auto bg-black/80 px-4 py-4 md:px-10 md:py-0 md:items-center"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        ref={modalRef}
        tabIndex={-1}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full grow bg-background shadow-2xl max-h-[calc(100dvh-2rem)] overflow-y-auto overflow-x-hidden overscroll-contain lg:max-w-296.5 p-5 lg:px-5 lg:py-4.25 md:w-auto"
      >
        <Image
          src="/imgs/join-popup/union_ginkins.webp"
          alt=""
          width={610}
          height={456}
          aria-hidden
          className="pointer-events-none select-none absolute opacity-[0.022] z-0 -left-6 -top-2 w-[135%] max-w-none lg:left-[52%] lg:top-1.5 lg:-translate-x-1/2 lg:w-[72%] h-[90%]"
        />
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-3 md:top-5 right-3 md:right-5 z-20 text-background hover:text-(--primary-gold-300) w-6.5 h-6.5 md:w-8.5 md:h-8.5 transition-colors duration-300"
        >
          <svg
            width="34"
            height="34"
            viewBox="0 0 34 34"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="15" cy="15" r="10" fill="currentColor" />
            <path
              d="M16.5254 0C7.4134 0 0 7.4134 0 16.5254C0 25.6374 7.4134 33.0508 16.5254 33.0508C25.6374 33.0508 33.0508 25.6374 33.0508 16.5254C33.0508 7.4134 25.6374 0 16.5254 0ZM22.5087 20.7116C22.6317 20.8285 22.7301 20.9688 22.798 21.1243C22.866 21.2797 22.9021 21.4472 22.9043 21.6169C22.9064 21.7866 22.8746 21.9549 22.8107 22.1121C22.7468 22.2693 22.652 22.4121 22.532 22.532C22.4121 22.652 22.2693 22.7468 22.1121 22.8107C21.9549 22.8746 21.7866 22.9064 21.6169 22.9043C21.4472 22.9021 21.2797 22.866 21.1243 22.798C20.9688 22.7301 20.8285 22.6317 20.7116 22.5087L16.5254 18.3234L12.3392 22.5087C12.0989 22.7371 11.7789 22.8625 11.4474 22.8582C11.1159 22.854 10.7992 22.7204 10.5648 22.486C10.3304 22.2516 10.1969 21.9349 10.1926 21.6034C10.1884 21.272 10.3138 20.9519 10.5421 20.7116L14.7275 16.5254L10.5421 12.3392C10.3138 12.0989 10.1884 11.7789 10.1926 11.4474C10.1969 11.1159 10.3304 10.7992 10.5648 10.5648C10.7992 10.3304 11.1159 10.1969 11.4474 10.1926C11.7789 10.1884 12.0989 10.3138 12.3392 10.5421L16.5254 14.7275L20.7116 10.5421C20.9519 10.3138 21.272 10.1884 21.6034 10.1926C21.9349 10.1969 22.2516 10.3304 22.486 10.5648C22.7204 10.7992 22.854 11.1159 22.8582 11.4474C22.8625 11.7789 22.7371 12.0989 22.5087 12.3392L18.3234 16.5254L22.5087 20.7116Z"
              fill="#AC1F2C"
            />
          </svg>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-[0.4815fr_0.5185fr] h-full bg-background lg:w-auto lg:h-auto gap-11.5">
          <div className="relative hidden lg:block md:aspect-533/818">
            <Image
              src="/imgs/join-popup/ginkins-gin-hands-red-curtain-campaign.webp"
              alt="Elegant red-gloved hands holding a Ginkins Gin bottle and cocktail glass against a velvet curtain"
              fill
              className="object-cover"
            />
          </div>

          <div className="xl:pl-0 xl:py-0 xl:pr-8.25 text-center relative content-center">
            <h2 className="text-(--primary-red-main)! xs:max-w-133.5 2xs:max-w-58.25 place-self-center">
              Join the Inner Circle
            </h2>
            <h5 className="block text-(--primary-red-main)! mb-10.5">
              Gin Notes Newsletter
            </h5>
            <div className="flex justify-center mb-4.25">
              <Image
                src="/imgs/join-popup/ginkins-gin-icon-botanical-leaves.svg"
                alt=""
                width={121}
                height={120}
                className="h-full w-auto"
                aria-hidden
              />
            </div>
            <div className="flex justify-center mb-4.25">
              <div className="h-18.75 w-px bg-(--primary-red-main)" />
            </div>
            <h3 className="mb-10.5">Get Early Access</h3>
            <p className="text-sm leading-relaxed text-(--primary-black) mb-10.5">
              This isn’t just a mailing list. It’s a front-row seat to
              everything we’re creating—and an invitation to be part of it. When
              you join the Inner Circle, you’ll get early access to limited
              releases, private tastings, and behind-the-scenes peeks at what’s
              brewing (or distilling) at Ginkins HQ.
            </p>

            <NewsletterForm isFooter={false} />
            <p className="text-center lg:text-left mt-4 text-sm text-(--secondary-black)">
              By clicking Sign Up you’re confirming that you agree with our
              Terms and Conditions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
