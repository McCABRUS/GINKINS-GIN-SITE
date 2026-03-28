'use client';

import { useEffect, useRef, useState } from 'react';
import BotanicalGrid from './BotanicalGrid';

type Side = 'left' | 'right';

const STEP_MS = 2400;
const RESUME_DELAY_MS = 2500;

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
  const [activeId, setActiveId] = useState<string | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isIOS, setIsIOS] = useState(false);

  const sideRef = useRef<Side>('left');
  const sequenceRef = useRef<string[]>([]);
  const indexRef = useRef(0);

  const stepTimerRef = useRef<number | null>(null);
  const resumeTimerRef = useRef<number | null>(null);

  const clearTimers = () => {
    if (stepTimerRef.current !== null) {
      window.clearTimeout(stepTimerRef.current);
      stepTimerRef.current = null;
    }
    if (resumeTimerRef.current !== null) {
      window.clearTimeout(resumeTimerRef.current);
      resumeTimerRef.current = null;
    }
  };

  const buildSideSequence = (nextSide: Side) => {
    const seq = shuffle(SIDE_IDS[nextSide]);
    sideRef.current = nextSide;
    sequenceRef.current = seq;
    indexRef.current = 0;
    setSide(nextSide);
  };

  useEffect(() => {
    if (isPaused) return;

    const run = () => {
      const seq = sequenceRef.current;

      if (!seq.length) return;

      if (indexRef.current >= seq.length) {
        const nextSide: Side = sideRef.current === 'left' ? 'right' : 'left';
        buildSideSequence(nextSide);
      }

      const nextId = sequenceRef.current[indexRef.current] ?? null;
      setActiveId(nextId);
      indexRef.current += 1;

      stepTimerRef.current = window.setTimeout(run, STEP_MS);
    };

    stepTimerRef.current = window.setTimeout(run, STEP_MS);

    return () => {
      if (stepTimerRef.current !== null) {
        window.clearTimeout(stepTimerRef.current);
      }
    };
  }, [isPaused]);

  useEffect(() => {
    const ua = window.navigator.userAgent;
    const platform = window.navigator.platform;

    const ios =
      /iPhone|iPad|iPod/i.test(ua) ||
      (platform === 'MacIntel' && window.navigator.maxTouchPoints > 1);

    setIsIOS(ios);

    buildSideSequence('left');

    const seq = sequenceRef.current;
    if (seq.length) {
      setActiveId(seq[0]);
      indexRef.current = 1;
    }

    return () => clearTimers();
  }, []);

  const registerInteraction = (id: string) => {
    clearTimers();

    setIsPaused(true);
    setActiveId(id);

    resumeTimerRef.current = window.setTimeout(() => {
      setIsPaused(false);
      indexRef.current = indexRef.current % sequenceRef.current.length;
    }, RESUME_DELAY_MS);
  };

  return {
    side,
    activeId,
    isPaused,
    registerInteraction,
    isIOS,
  };
}

export default function BotanicalGridMobile() {
  const { side, activeId, isPaused, registerInteraction, isIOS } =
    useMobileBotanicalCycle();

  return (
    <div className="-top-33.5 z-10 w-78.75 min-w-78.75 h-31.5 m-auto">
      <BotanicalGrid
        side={side}
        activeId={activeId}
        isHovering={isPaused}
        onItemInteract={registerInteraction}
        isIOSFix={isIOS}
      />
    </div>
  );
}
