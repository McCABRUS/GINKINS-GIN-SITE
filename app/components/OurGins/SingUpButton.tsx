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
        className="inline-flex items-center justify-center bg-(--primary-red-main) px-5 py-1.5 transition hover:bg-(--primary-gold-main) w-[200%]"
        onClick={() => {
          console.log('open modal');
          setIsJoinOpen(true);
        }}
      >
        <h5 className="text-background! whitespace-nowrap text-lg! lg:text-base!">
          Sign up for our newsletter to be the first to know what’s next
        </h5>
      </button>
    </>
  );
}
