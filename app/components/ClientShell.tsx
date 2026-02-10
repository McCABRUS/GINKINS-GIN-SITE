'use client';

import AgeGate from './AgeGate';
import JoinModal from './JoinModal';
import ModalTriggerController from './ModalTriggerController';
import Preloader from './Preloader';
import { useState } from 'react';

export default function ClientShell() {
  const [isJoinOpen, setIsJoinOpen] = useState(false);
  return (
    <>
      <Preloader />
      <AgeGate />
      <JoinModal open={isJoinOpen} onClose={() => setIsJoinOpen(false)} />
      <ModalTriggerController openModal={() => setIsJoinOpen(true)} />
    </>
  );
}
