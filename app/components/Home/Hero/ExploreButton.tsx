'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

export default function ExploreButtonWithModal() {
  const [open, setOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement | null>(null);

  /* ============================
     Side effects (ESC + body lock)
     ============================ */
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false);
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
  }, [open]);

  return (
    <>
      {/* ===== TRIGGER ===== */}
      <div className="absolute left-1/2 bottom-118 xl:bottom-[6%] -translate-x-1/2 z-40">
        <button
          onClick={() => setOpen(true)}
          className="
            px-5 py-1.5
            bg-(--primary-red-main)
            tracking-widest text-sm
            hover:bg-(--primary-gold-main)
            transition
            w-81.25
          "
        >
          <h5 className="text-background! text-lg!">EXPLORE THE COLLECTION</h5>
        </button>
      </div>

      {/* ===== MODAL ===== */}
      {open && (
        <div
          className="
            fixed inset-0 z-50
            flex items-center justify-center
            bg-black/80
            px-4 md:px-10
          "
          onClick={() => setOpen(false)} // 👈 click fuera cierra
          role="dialog"
          aria-modal="true"
        >
          {/* MODAL BOX */}
          <div
            ref={modalRef}
            tabIndex={-1}
            onClick={(e) => e.stopPropagation()} // 👈 click dentro NO cierra
            className="
              relative
              bg-background
              shadow-2xl
              overflow-hidden

              w-full h-full
              md:w-auto md:h-auto

              md:aspect-1186/853
              md:max-h-[85vh]

              p-5
            "
          >
            {/* CLOSE BUTTON */}
            <button
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="absolute top-5 right-5 z-20"
            >
              <Image
                src="/HomePopup/close-pop-up-button.svg"
                alt=""
                width={33}
                height={33}
              />
            </button>

            {/* GRID CONTENT */}
            <div className="grid grid-cols-1 md:grid-cols-2 h-full bg-background md:w-auto md:h-auto">
              {/* IMAGE COLUMN */}
              <div className="relative hidden md:block md:aspect-566/794">
                <Image
                  src="/HomePopup/hands-cocktail-ginkins-gin.webp"
                  alt=""
                  fill
                  priority
                  className="object-cover"
                />
              </div>

              {/* CONTENT COLUMN */}
              <div className="pl-11.5 py-14 text-center overflow-y-auto">
                <h2 className="text-(--primary-red-main)!">
                  Join the Inner Circle
                </h2>
                <h5 className="block tracking-widest text-(--primary-red-main)! mb-10.5">
                  Gin Notes Newsletter
                </h5>

                <div className="flex justify-center mb-4.25">
                  <Image
                    src="/HomePopup/icon-leaves-ginkins-gin.svg"
                    alt=""
                    width={121}
                    height={120}
                    className="h-full w-auto"
                  />
                </div>

                <div className="flex justify-center mb-4.25">
                  <div className="h-18.75 w-px bg-(--primary-red-main)" />
                </div>

                <h3 className="tracking-widest mb-10.5">Get Early Access</h3>

                <p className="text-sm leading-relaxed text-[#4A4A4A] mb-10.5">
                  This isn’t just a mailing list. It’s a front-row seat to
                  everything we’re creating and an invitation to be part of it.
                  When you join the Inner Circle, you’ll get early access to
                  limited releases, private tastings, and behind the scenes
                  peeks at what’s brewing (or distilling) at Ginkins HQ.
                </p>

                <form className="flex flex-nowrap place-items-center">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="
                      w-full h-10
                      border-b border-(--secondary-black)
                      bg-transparent py-2 text-sm
                      placeholder:text-(--secondary-black)
                      focus:outline-none mr-4 
                    "
                  />

                  <button
                    type="submit"
                    className="min-w-min[124px] h-10 inline-flex items-center justify-center bg-(--primary-red-main) px-5 py-1.5 tracking-wide  transition hover:bg-(--primary-gold-main)"
                  >
                    <h5 className="text-background! whitespace-nowrap">
                      Join Now
                    </h5>
                  </button>
                </form>

                <p className="mt-4 text-sm text-(--secondary-black)">
                  By clicking Sign Up you’re confirming that you agree with our
                  Terms and Conditions.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
