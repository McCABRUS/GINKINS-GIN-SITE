'use client';
import { useState, useEffect, useRef } from 'react';

export default function ExploreButton() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false);
    }
    if (open) {
      document.addEventListener('keydown', onKey);
      document.body.style.overflow = 'hidden';
      setTimeout(() => ref.current?.focus(), 0);
    }
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <div className="absolute left-1/2 bottom-[6%] -translate-x-1/2">
        <button
          onClick={() => setOpen(true)}
          className="px-10 py-4 bg-(--primary-red-main) text-background tracking-widest text-sm hover:bg-(--primary-gold-main) transition"
        >
          EXPLORE THE COLLECTION
        </button>
      </div>
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center px-4"
        >
          <div
            className="fixed inset-0 bg-(--secondary-black) opacity-90"
            onClick={() => setOpen(false)}
          />
          <div
            ref={ref}
            tabIndex={-1}
            className="relative z-10 max-w-4xl w-full bg-background shadow-xl"
          >
            <div className="flex justify-end p-3">
              <button
                onClick={() => setOpen(false)}
                className="text-(--primary-gold-main) hover:text-background"
              >
                ✕
              </button>
            </div>
            <div className="p-6 text-(--primary-black)">PLACEHOLDER MODAL</div>
          </div>
        </div>
      )}
    </>
  );
}
