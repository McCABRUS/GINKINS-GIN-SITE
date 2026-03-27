'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import BotanicalGrid from './BotanicalGrid';

type Side = 'left' | 'right';

const STEP_MS = 2400;
const RESUME_DELAY_MS = 1800;

const SIDE_IDS: Record<Side, string[]> = {
  left: ['grapefruit', 'cardamom', 'angelica', 'juniper-berries', 'coriander'],
  right: ['juniper', 'orris', 'nutmeg', 'cassia', 'lemon-peel'],
};

function shuffle<T>(array: T[]) {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function useMobileBotanicalCycle() {
  const [side, setSide] = useState<Side>('left');
  const [autoActiveId, setAutoActiveId] = useState<string | null>(null);
  const [manualActiveId, setManualActiveId] = useState<string | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  const sequenceRef = useRef<string[]>([]);
  const indexRef = useRef(0);
  const sideRef = useRef<Side>('left');
  const timerRef = useRef<number | null>(null);
  const resumeTimerRef = useRef<number | null>(null);

  const clearTimers = useCallback(() => {
    if (timerRef.current !== null) window.clearTimeout(timerRef.current);
    if (resumeTimerRef.current !== null)
      window.clearTimeout(resumeTimerRef.current);
    timerRef.current = null;
    resumeTimerRef.current = null;
  }, []);

  const buildSideSequence = useCallback((nextSide: Side) => {
    sideRef.current = nextSide;
    sequenceRef.current = shuffle(SIDE_IDS[nextSide]);
    indexRef.current = 0;
    setSide(nextSide);
    setAutoActiveId(sequenceRef.current[0] ?? null);
    indexRef.current = 1;
  }, []);

  const scheduleNext = useCallback(() => {
    clearTimers();

    const tick = () => {
      if (manualActiveId !== null) return;

      const seq = sequenceRef.current;
      if (!seq.length) {
        buildSideSequence(sideRef.current);
      } else if (indexRef.current >= seq.length) {
        const nextSide: Side = sideRef.current === 'left' ? 'right' : 'left';
        buildSideSequence(nextSide);
      } else {
        setAutoActiveId(seq[indexRef.current] ?? null);
        indexRef.current += 1;
      }

      timerRef.current = window.setTimeout(tick, STEP_MS);
    };

    timerRef.current = window.setTimeout(tick, STEP_MS);
  }, [buildSideSequence, clearTimers, manualActiveId]);

  useEffect(() => {
    buildSideSequence('left');
    timerRef.current = window.setTimeout(scheduleNext, STEP_MS);

    return () => clearTimers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const resumeAfterIdle = useCallback(() => {
    if (resumeTimerRef.current !== null) {
      window.clearTimeout(resumeTimerRef.current);
    }

    resumeTimerRef.current = window.setTimeout(() => {
      setManualActiveId(null);
      setIsPaused(false);
      scheduleNext();
    }, RESUME_DELAY_MS);
  }, [scheduleNext]);

  const registerInteraction = useCallback(
    (id: string) => {
      clearTimers();
      setIsPaused(true);
      setManualActiveId(id);
      setAutoActiveId(id);
      resumeAfterIdle();
    },
    [clearTimers, resumeAfterIdle],
  );

  return {
    side,
    activeId: manualActiveId ?? autoActiveId,
    isPaused,
    registerInteraction,
  };
}

export default function BotanicalGridMobile() {
  const { side, activeId, isPaused, registerInteraction } =
    useMobileBotanicalCycle();

  return (
    <div className="-top-33.5 z-10 w-78.75 min-w-78.75 h-31.5 m-auto">
      <BotanicalGrid
        side={side}
        activeId={activeId}
        isHovering={isPaused}
        onItemInteract={registerInteraction}
      />
    </div>
  );
}
