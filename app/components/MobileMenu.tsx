'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <button
        className="md:hidden text-(--primary-gold-main)"
        onClick={() => setOpen(true)}
        aria-label="Open menu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="23"
          height="15"
          viewBox="0 0 23 15"
          fill="none"
        >
          <rect width="22.5" height="1.875" fill="#E3D384" />
          <rect y="6.5625" width="22.5" height="1.875" fill="#E3D384" />
          <rect y="13.125" width="22.5" height="1.875" fill="#E3D384" />
        </svg>
      </button>

      {open && (
        <div className="fixed inset-0 z-50 bg-[#121212] text-(--primary-gold-main)">
          {/* Cerrar */}
          <button
            onClick={() => {
              setOpen(false);
              setMoreOpen(false);
            }}
            aria-label="Close menu"
            className="absolute top-6 right-6 text-2xl"
          >
            ✕
          </button>

          <nav className="px-8 pt-24 space-y-8 text-sm tracking-widest uppercase">
            <MenuItem label="About Ginkins" link="#" />
            <MenuItem label="Our Gins" link="#" />
            <MenuItem label="Where to Buy" link="#" />
            <MenuItem label="Cocktails & Pairings" link="#" />

            <div>
              <button
                onClick={() => setMoreOpen((v) => !v)}
                className="flex items-center gap-3"
              >
                <h5 className="text-(--primary-gold-main)! inline">More</h5>
                <span
                  className={`
                    transition-transform
                    ${moreOpen ? 'rotate-180' : ''}
                  `}
                >
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
                </span>
              </button>

              {moreOpen && (
                <div className="mt-6 ml-4 space-y-6 text-xs">
                  <MenuItem label="Accolades" link="#" />
                  <MenuItem label="FAQs" link="#" />
                  <MenuItem label="Sustainability" link="#" />
                </div>
              )}
            </div>

            <div className="pt-10">
              <Link
                href="/subscribe"
                className="inline-block px-4 py-1 border border-(--primary-gold-main) rounded text-sm font-medium transition-colors hover:text-(--primary-red-main) hover:border-(--primary-red-main)"
              >
                <h5 className="text-(--primary-gold-main)! inline">
                  SUBSCRIBE
                </h5>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}

function MenuItem({ label, link }: { label: string; link: string }) {
  return (
    <div className="block">
      <span className="mx-3">•</span>
      <Link href={link} aria-label={label}>
        <h5 className="text-(--primary-gold-main)! inline">{label}</h5>
      </Link>
    </div>
  );
}
