'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

export default function HeaderClient() {
  const [open, setOpen] = useState(false);
  const moreRef = useRef<HTMLLIElement | null>(null);
  const firstItemRef = useRef<HTMLAnchorElement | null>(null);

  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (!moreRef.current) return;
      if (!moreRef.current.contains(e.target as Node)) setOpen(false);
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false);
    }
    document.addEventListener('click', onDocClick);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('click', onDocClick);
      document.removeEventListener('keydown', onKey);
    };
  }, []);

  useEffect(() => {
    if (open) {
      // focus al primer item para accesibilidad
      firstItemRef.current?.focus();
    }
  }, [open]);

  function onToggle(e: React.MouseEvent | React.KeyboardEvent) {
    e.preventDefault();
    setOpen((s) => !s);
  }

  function onKeyToggle(e: React.KeyboardEvent) {
    if (e.key === 'Enter' || e.key === ' ') {
      onToggle(e);
    }
  }

  return (
    <ul className="flex items-center gap-4">
      <li ref={moreRef} className="relative flex items-center">
        <div
          role="button"
          tabIndex={0}
          aria-haspopup="menu"
          aria-expanded={open}
          onClick={onToggle}
          onKeyDown={onKeyToggle}
          className="inline-flex items-center gap-2 px-1 py-1 cursor-pointer select-none focus:outline-none"
        >
          <h5
            className={`text-(--primary-gold-main)! inline ${open ? 'text-background)' : 'text-(--primary-gold-main)'}`}
          >
            MORE
          </h5>
          <span className="w-3 h-3 text-(--primary-gold-main)">
            {open ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
              >
                <path
                  d="M7 -1.56563e-06C3.13418 -1.90359e-06 -3.75434e-09 3.13418 -3.41715e-07 7C-6.79675e-07 10.8658 3.13418 14 7 14C10.8658 14 14 10.8658 14 7C14 3.13418 10.8658 -1.22767e-06 7 -1.56563e-06ZM9.69534 7.53846L7.53846 5.39875L7.53846 10.4327L6.46154 10.4327L6.46154 5.39875L4.30466 7.53846L3.54611 6.77418L7 3.34721L10.4539 6.77452L9.69534 7.53846Z"
                  fill="#FFF"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
              >
                <path
                  d="M7 14C10.8658 14 14 10.8658 14 7C14 3.13418 10.8658 0 7 0C3.13418 0 0 3.13418 0 7C0 10.8658 3.13418 14 7 14ZM4.30466 6.46154L6.46154 8.60125V3.56731H7.53846V8.60125L9.69534 6.46154L10.4539 7.22582L7 10.6528L3.54611 7.22548L4.30466 6.46154Z"
                  fill="#e3d384"
                />
              </svg>
            )}
          </span>
        </div>
        {open && (
          <div
            role="menu"
            aria-label="More menu"
            className="absolute left-1/2 top-full transform -translate-x-1/2 mt-3 w-auto bg-(--primary-black) shadow-lg z-20"
          >
            <ul className="py-2 justify-items-center">
              <li>
                <Link
                  href="/accolades"
                  ref={firstItemRef}
                  className="block px-4 py-2 text-(--primary-gold-main) hover:text-background hover:underline transition-colors focus:outline-none text-center"
                  role="menuitem"
                >
                  <h5 className="text-(--primary-gold-main)! inline">
                    ACCOLADES
                  </h5>
                </Link>
              </li>
              <hr
                className="text-background w-1/2 -m-2 mx-auto"
                aria-hidden="true"
              />
              <li>
                <Link
                  href="/faqs"
                  className="block px-4 py-2 text-(--primary-gold-main) hover:text-background hover:underline transition-colors text-center"
                  role="menuitem"
                >
                  <h5 className="text-center text-(--primary-gold-main)! inline">
                    FAQs
                  </h5>
                </Link>
              </li>
              <hr
                className="text-background w-1/2 -m-2 mx-auto"
                mx-auto
                aria-hidden="true"
              />
              <li>
                <Link
                  href="/sustainability"
                  className="block px-4 py-2 text-(--primary-gold-main) hover:text-background hover:underline transition-colors text-center"
                  role="menuitem"
                >
                  <h5 className="text-(--primary-gold-main)! inline">
                    SUSTAINABILITY
                  </h5>
                </Link>
              </li>
            </ul>
          </div>
        )}
        <span className="mx-3">•</span>
      </li>
    </ul>
  );
}
