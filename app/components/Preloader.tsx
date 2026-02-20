'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import clsx from 'clsx';
import { setAgeVerified } from '@/lib/ageGate';

export default function Preloader() {
  const [visible, setVisible] = useState(true);
  const [exiting, setExiting] = useState(false);
  const router = useRouter();

  useEffect(() => {
    console.log('PRELOADER HYDRATED');
  }, []);

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => {
        setExiting(true);
        setTimeout(() => {
          setVisible(false);
          window.__APP_STATE__ = {
            ...(window.__APP_STATE__ || {}),
            preloaderDone: true,
          };
          window.dispatchEvent(new Event('app:state-changed'));
        }, 600);
      }, 300);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }

    return () => window.removeEventListener('load', handleLoad);
  }, []);
  if (!visible) return null;

  return (
    <div
      className={clsx(
        'fixed inset-0 z-9999 flex flex-col items-center justify-between bg-(--primary-black) transition-opacity duration-600',
        exiting && 'opacity-0',
      )}
    >
      <div className="absolute inset-0 opacity-[0.04] bg-[url('/imgs/preloader/ginkins-gin-logo-watermark.svg')] bg-center bg-no-repeat bg-cover bg-(--primary-black) pointer-events-none" />
      <div className="pt-10 md:pt-14">
        <Image
          src="/imgs/preloader/ginkins-gin-logo.svg"
          alt="Ginkins Gin official logo in gold finish"
          width={69}
          height={49}
          className="w-17.25 h-12.25"
          aria-hidden
          priority
        />
      </div>
      <div className="relative flex items-center justify-center">
        <Image
          src="/imgs/preloader/ginkins-gin-preloader-icon.svg"
          alt="Ginkins Gin brand symbol"
          width={164}
          height={164}
          className="animate-spin-slow w-41 h-41"
          aria-hidden
          priority
        />
      </div>
      <p className="px-5 pb-25.25 md:pb-20.25 text-center text-[14px] leading-5.25 text-(--primary-red-main) font-normal z-10000000">
        * The cookies on this website are used for offering you a better
        browsing experience. To know more read our privacy policy{' '}
        <button
          className="underline hover:font-bold cursor-pointer z-1000000"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            alert('Click');
            console.log('Here Preloader privacy policy clicked');
            setAgeVerified();
            setTimeout(() => {
              setExiting(true);
              setTimeout(() => {
                setVisible(false);
                window.__APP_STATE__ = {
                  ...(window.__APP_STATE__ || {}),
                  preloaderDone: true,
                };
                window.dispatchEvent(new Event('app:state-changed'));
                router.push('/privacy');
              }, 600);
            }, 300);
          }}
        >
          here
        </button>
      </p>
    </div>
  );
}
