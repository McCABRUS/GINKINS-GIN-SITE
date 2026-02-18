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
      className="fixed inset-0 z-500 flex items-center max-h-screen justify-center bg-black/80 px-4 md:px-10"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        ref={modalRef}
        tabIndex={-1}
        onClick={(e) => e.stopPropagation()}
        className="relative bg-background shadow-2xl overflow-hidden w-full grow md:w-auto h-200 2xs:h-180 md:h-155 lg:h-auto md:aspect-1186/853 lg:max-w-286.5 p-5"
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-5 right-5 z-20"
        >
          <Image
            src="/imgs/join-popup/ginkins-gin-ui-close-button.svg"
            alt=""
            width={33}
            height={33}
            aria-hidden
          />
        </button>
        <div className="grid grid-cols-1 lg:grid-cols-2 h-full bg-background lg:w-auto lg:h-auto">
          <div className="relative hidden lg:block md:aspect-566/794">
            <Image
              src="/imgs/join-popup/ginkins-gin-hands-red-curtain-campaign.webp"
              alt="Elegant red-gloved hands holding a Ginkins Gin bottle and cocktail glass against a velvet curtain"
              fill
              className="object-cover"
            />
          </div>
          <div className="pl-3.75 xl:pl-11.5 xl:py-25.75 xl:pr-8.25 text-center overflow-y-hidden relative">
            <h2 className="text-(--primary-red-main)!">
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
            <p className="text-left mt-4 text-sm text-(--secondary-black)">
              By clicking Sign Up you’re confirming that you agree with our
              Terms and Conditions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
