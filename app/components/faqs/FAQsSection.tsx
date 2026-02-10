'use client';

import { useState } from 'react';
import { FAQS } from './FAQsData';
import HelpFooter from '../HelpFooter';

export default function FAQsSection() {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggle = (id: number) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="bg-(--secondary-beige) py-20 relative">
      <div className="mx-auto px-6">
        <h2 className="text-center text-(--primary-black)! text-4xl!">
          FREQUENTLY ASKED QUESTIONS
        </h2>

        <div className="mt-12 divide-y divide-black/20">
          {FAQS.map((item) => {
            const isOpen = openId === item.id;

            return (
              <div key={item.id} className="py-6">
                <button
                  onClick={() => toggle(item.id)}
                  className="flex w-full items-center justify-between text-left"
                >
                  <span className="text-base font-bold leading-6 text-(--primary-black)">
                    {item.id}. {item.question}
                  </span>
                  <span
                    className={`ml-4 inline-flex h-6 w-6 items-center justify-center transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  >
                    <svg
                      className="rotate-180"
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                    >
                      <path
                        d="M8.88379 20.5303C8.78615 20.6279 8.6279 20.6279 8.53027 20.5303L8.17676 20.1768C8.07913 20.0791 8.07916 19.9209 8.17676 19.8232L15.8232 12.1768C15.9209 12.0791 16.0791 12.0791 16.1768 12.1768L23.8232 19.8232C23.9209 19.9209 23.9209 20.0791 23.8232 20.1768L23.4697 20.5303C23.3721 20.6279 23.2139 20.6279 23.1162 20.5303L16 13.4141L8.88379 20.5303Z"
                        fill="#0A0404"
                        stroke="#0A0404"
                      />
                    </svg>
                  </span>
                </button>
                <div
                  className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
                    isOpen
                      ? 'grid-rows-[1fr] opacity-100 mt-4'
                      : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden text-base font-normal leading-6 text-(--primary-black)">
                    {item.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <HelpFooter />
      </div>
    </section>
  );
}
