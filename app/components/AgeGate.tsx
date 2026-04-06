'use client';

import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';
import gsap from 'gsap';

import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { isAgeVerified, setAgeVerified } from '@/lib/ageGate';
import AgeGateButton from './AgeGateButton';

export default function AgeGate() {
  const [isOpen, setIsOpen] = useState(false);
  const [denied, setDenied] = useState(false);
  const [exiting, setExiting] = useState(false);

  const hasCheckedRef = useRef(false);
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (hasCheckedRef.current) return;
    hasCheckedRef.current = true;

    if (!isAgeVerified()) {
      setIsOpen(true);
    }
  }, []);

  useLayoutEffect(() => {
    if (!isOpen || denied || !rootRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        '.agegate-reveal-on-scroll-top',
        { autoAlpha: 0, y: 48, scale: 0.995 },
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: 1,
          delay: 0.2,
          ease: 'power3.out',
        },
      );
      tl.fromTo(
        '.agegate-reveal-on-scroll-bottom',
        { autoAlpha: 0, y: -48, scale: 0.995 },
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: 1,
          delay: 0.2,
          ease: 'power3.out',
        },
      );
    }, rootRef);

    return () => ctx.revert();
  }, [isOpen, denied]);

  if (!isOpen) return null;

  return (
    <div
      ref={rootRef}
      className={clsx(
        'fixed inset-0 z-9999 bg-(--secondary-beige) transition-opacity duration-600',
        exiting && 'opacity-0',
      )}
    >
      <div className="absolute inset-0 opacity-[0.04] bg-[url('/imgs/legal/ginkins-gin-logo-watermark.svg')] bg-center bg-no-repeat bg-cover bg-(--secondary-beige)" />

      <div className="relative flex h-full w-full flex-col items-center justify-between px-6 py-10 text-center">
        <div className="agegate-reveal-on-scroll-top">
          <Image
            draggable={false}
            src="/imgs/preloader/ginkins-gin-logo.svg"
            alt="Ginkins Gin official logo in gold finish"
            width={69}
            height={49}
            className="w-17.25 h-12.25"
            aria-hidden
          />
        </div>

        <div className="flex flex-col items-center">
          <div className="agegate-reveal-on-scroll-bottom mb-8 flex lg:hidden h-17.5 w-17.5 items-center justify-center">
            <Image
              draggable={false}
              src="/imgs/legal/ginkins-gin-lemon-icon.svg"
              alt="Ginkins Gin lemon brand element"
              width={70}
              height={70}
              className="w-17.5 h-17.5 lemomIcon"
              aria-hidden
            />
          </div>

          {!denied ? (
            <>
              <h5 className="agegate-reveal-on-scroll-top mb-2.5 text-(--primary-red-main)! leading-6! lg:leading-6.75!">
                ROOTED IN TRADITION, INSPIRED BY LOUISVILLE
              </h5>

              <h2 className="agegate-reveal-on-scroll-top mb-10 text-(--primary-red-main)! max-w-103.25">
                ARE YOU OF LEGAL DRINKING AGE IN YOUR COUNTRY?
              </h2>

              <div className="agegate-reveal-on-scroll-top flex gap-4">
                <AgeGateButton
                  label="YES"
                  onClick={() => {
                    setTimeout(() => {
                      setExiting(true);
                      setTimeout(() => {
                        setAgeVerified();
                        setIsOpen(false);
                        window.__APP_STATE__ = {
                          ...(window.__APP_STATE__ || {}),
                          ageGateAccepted: true,
                        };

                        window.dispatchEvent(new Event('app:state-changed'));
                      }, 400);
                    }, 200);
                  }}
                />
                <AgeGateButton label="NO" onClick={() => setDenied(true)} />
              </div>
            </>
          ) : (
            <>
              <h2 className="agegate-reveal-on-scroll-top mb-53 text-(--primary-red-main)! max-w-103.25">
                YOU CANNOT ACCESS THIS WEBSITE
              </h2>
              <h5 className="agegate-reveal-on-scroll-top text-(--primary-red-main)! leading-6! lg:leading-6.75!">
                Come back when you are of legal drinking age
              </h5>
            </>
          )}
        </div>

        <p className="agegate-reveal-on-scroll-top max-w-217.75 text-[14px] text-(--primary-red-main) leading-5.25">
          * The cookies on this website are used for offering you a better
          browsing experience. To know more read our privacy policy{' '}
          <Link
            className="underline hover:font-bold"
            href="/privacy"
            onClick={() => {
              setAgeVerified();
              setIsOpen(false);
              window.__APP_STATE__ = {
                ...(window.__APP_STATE__ || {}),
                ageGateAccepted: true,
              };

              window.dispatchEvent(new Event('app:state-changed'));
            }}
          >
            here
          </Link>
        </p>
      </div>

      <div className="agegate-reveal-on-scroll-bottom hidden lg:flex h-24.25 w-24.25 items-center justify-center absolute top-1/2 right-64 -translate-y-1/2">
        <Image
          draggable={false}
          src="/imgs/legal/ginkins-gin-lemon-icon.svg"
          alt="Ginkins Gin lemon brand element"
          width={97}
          height={97}
          className="w-24.25 h-24.25 lemomIconReverse"
          aria-hidden
        />
      </div>

      <div className="agegate-reveal-on-scroll-bottom hidden lg:flex h-24.25 w-24.25 items-center justify-center absolute top-1/2 left-64 -translate-y-1/2">
        <Image
          draggable={false}
          src="/imgs/legal/ginkins-gin-lemon-icon.svg"
          alt="Ginkins Gin lemon brand element"
          width={97}
          height={97}
          className="w-24.25 h-24.25 lemomIcon"
          aria-hidden
        />
      </div>
    </div>
  );
}
