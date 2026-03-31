'use client';

import JoinModal from '@/components/JoinModal';

import { useState } from 'react';

export default function SingUpButton() {
  const [isJoinOpen, setIsJoinOpen] = useState(false);
  return (
    <>
      <JoinModal open={isJoinOpen} onClose={() => setIsJoinOpen(false)} />
      <button
        type="button"
        className="inline-flex items-center justify-center px-5 py-1.5 transition animatedButton hover:text-(--primary-black)! w-full grou absolute -bottom-14"
        onClick={() => {
          setIsJoinOpen(true);
        }}
      >
        <h5 className="whitespace-nowrap 2xl:text-base! xl:text-[13px]! hover:text-(--primary-black)! group-hover:text-(--primary-black)! group-active:text-(--primary-black)! group-focus:text-(--primary-black)!">
          Sign up for our newsletter to be the first to know what’s next
        </h5>
      </button>
    </>
  );
}
