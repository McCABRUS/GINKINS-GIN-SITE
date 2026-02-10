'use client';

import { useEffect, useRef } from 'react';
import { isAgeVerified } from '@/lib/ageGate';

type Props = {
  openModal: () => void;
};

declare global {
  interface Window {
    __APP_STATE__?: {
      preloaderDone?: boolean;
      ageGateAccepted?: boolean;
    };
  }
}

export default function ModalTriggerController({ openModal }: Props) {
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const modalOpenedRef = useRef(false);

  useEffect(() => {
    if (!window.__APP_STATE__) {
      window.__APP_STATE__ = {};
    }

    const clearTimer = () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }
    };

    const maybeStartTimer = () => {
      const { preloaderDone, ageGateAccepted } = window.__APP_STATE__!;

      // 🚨 CONDICIÓN ÚNICA
      if (
        preloaderDone &&
        (ageGateAccepted || isAgeVerified()) &&
        !modalOpenedRef.current
      ) {
        modalOpenedRef.current = true;

        clearTimer();
        timerRef.current = setTimeout(() => {
          openModal();
        }, 10_000);
      }
    };

    // 👉 chequeo inmediato (caso: usuario ya verificado)
    maybeStartTimer();

    const onStateChange = () => {
      maybeStartTimer();
    };

    window.addEventListener('app:state-changed', onStateChange);

    return () => {
      window.removeEventListener('app:state-changed', onStateChange);
      clearTimer();
    };
  }, [openModal]);

  return null;
}
