'use client';

import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { flushSync } from 'react-dom';
import { gsap } from 'gsap';
import { CustomEase } from 'gsap/CustomEase';
import CollectionCard from './CollectionCard';
import { collectionData } from './data';

gsap.registerPlugin(CustomEase);
CustomEase.create('animistaEaseOutQuint', '0.23, 1, 0.32, 1');

const AUTOPLAY_MS = 5500;
const TRANSITION_MS = 2000;
const DRAG_ACTIVATE_PX = 6;
const SWIPE_THRESHOLD = 48;
const VELOCITY_THRESHOLD = 0.45;
const RELEASE_SNAP_MS = 0.7;
const MAX_SIDE_BLUR = 7;

const COMPACT_X = {
  center: 0,
  enterFromRight: 500,
  enterFromLeft: -500,
  exitToLeft: -500,
  exitToRight: 500,
};

type Direction = 1 | -1;

type GhostState = {
  index: number;
  direction: Direction;
} | null;

type Positions = {
  left: number;
  center: number;
  right: number;
  offLeft: number;
  offRight: number;
};

type DragState = {
  isDown: boolean;
  isDragging: boolean;
  pointerId: number | null;
  startX: number;
  startY: number;
  dx: number;
  dy: number;
  lastX: number;
  lastT: number;
  velocityX: number;
  rafId: number | null;
};

const initialDragState = (): DragState => ({
  isDown: false,
  isDragging: false,
  pointerId: null,
  startX: 0,
  startY: 0,
  dx: 0,
  dy: 0,
  lastX: 0,
  lastT: 0,
  velocityX: 0,
  rafId: null,
});

const clamp01 = (value: number) => Math.min(1, Math.max(0, value));
const easeOutQuint = (t: number) => 1 - Math.pow(1 - clamp01(t), 5);

export default function CollectionCarousel() {
  const items = useMemo(() => collectionData, []);
  const total = items.length;

  const [viewportMode, setViewportMode] = useState<
    'mobile' | 'tablet' | 'desktop'
  >('desktop');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [ghost, setGhost] = useState<GhostState>(null);

  const [slotCards, setSlotCards] = useState<[number, number, number]>(() => {
    if (total <= 1) return [0, 0, 0];
    return [total - 1, 0, 1];
  });

  const [positions, setPositions] = useState<Positions>({
    left: 0,
    center: 0,
    right: 0,
    offLeft: 0,
    offRight: 0,
  });

  const stageRef = useRef<HTMLDivElement | null>(null);
  const slotRefs = useRef<(HTMLDivElement | null)[]>([]);
  const ghostRef = useRef<HTMLDivElement | null>(null);
  const mobileCardRef = useRef<HTMLDivElement | null>(null);

  const autoplayRef = useRef<number | null>(null);
  const pointerStartRef = useRef<{ x: number; y: number } | null>(null);
  const touchStartRef = useRef<{ x: number; y: number } | null>(null);
  const dragRef = useRef<DragState>(initialDragState());

  const isTransitioningRef = useRef(false);
  const slotCardsRef = useRef(slotCards);
  const positionsRef = useRef(positions);
  const viewportModeRef = useRef(viewportMode);

  const isCompact = viewportMode !== 'desktop';

  useEffect(() => {
    isTransitioningRef.current = isTransitioning;
  }, [isTransitioning]);

  useEffect(() => {
    slotCardsRef.current = slotCards;
  }, [slotCards]);

  useEffect(() => {
    positionsRef.current = positions;
  }, [positions]);

  useEffect(() => {
    viewportModeRef.current = viewportMode;
  }, [viewportMode]);

  useEffect(() => {
    const sync = () => {
      const w = window.innerWidth;

      if (w < 768) {
        setViewportMode('mobile');
      } else if (w < 1200) {
        setViewportMode('tablet');
      } else {
        setViewportMode('desktop');
      }
    };

    sync();
    window.addEventListener('resize', sync);

    return () => window.removeEventListener('resize', sync);
  }, []);

  const getNextSlots = useCallback(
    (
      direction: Direction,
      current: [number, number, number],
    ): [number, number, number] => {
      if (direction === 1) return [current[1], current[2], current[0]];
      return [current[2], current[0], current[1]];
    },
    [],
  );

  const computePositions = useCallback(() => {
    const stage = stageRef.current;
    const centerSlot = slotRefs.current[1];

    if (!stage || !centerSlot) return;

    const stageRect = stage.getBoundingClientRect();
    const cardRect = centerSlot.getBoundingClientRect();

    const stageWidth = stageRect.width;
    const cardWidth = cardRect.width;

    if (!stageWidth || !cardWidth) return;

    const centerOffset =
      stageWidth >= 1200 ? cardWidth * 0.27 : cardWidth * 0.02;
    const leftVisibleRatio = 0.25;
    const rightVisibleRatio = 0.5;

    const left = -(cardWidth * leftVisibleRatio);
    const center = stageWidth / 2 - cardWidth / 2 + centerOffset;
    const right = stageWidth - cardWidth * rightVisibleRatio + centerOffset;

    const nextPositions: Positions = {
      left,
      center,
      right,
      offLeft: -cardWidth * 1.25,
      offRight: stageWidth + cardWidth * 0.25,
    };

    setPositions(nextPositions);
    positionsRef.current = nextPositions;
  }, []);

  const getDesktopContentEl = useCallback((slot: number) => {
    return slotRefs.current[slot]?.querySelector(
      '.collection-card__content',
    ) as HTMLElement | null;
  }, []);

  const getDesktopMediaEl = useCallback((slot: number) => {
    return slotRefs.current[slot]?.querySelector(
      '.collection-card__media',
    ) as HTMLElement | null;
  }, []);

  const getGhostContentEl = useCallback(() => {
    return ghostRef.current?.querySelector(
      '.collection-card__content',
    ) as HTMLElement | null;
  }, []);

  const getGhostMediaEl = useCallback(() => {
    return ghostRef.current?.querySelector(
      '.collection-card__media',
    ) as HTMLElement | null;
  }, []);

  const getCompactContentEl = useCallback(() => {
    return mobileCardRef.current?.querySelector(
      '.collection-card__content',
    ) as HTMLElement | null;
  }, []);

  const getContentXPositions = useCallback(() => {
    const stage = stageRef.current;

    if (!stage) {
      return {
        leftContentX: 0,
        centerContentX: 0,
        rightContentX: 0,
      };
    }

    const stageWidth = stage.getBoundingClientRect().width;

    const leftContentX =
      stageWidth >= 1920 ? -252 : stageWidth >= 1600 ? -244 : -236;

    const centerContentX =
      stageWidth >= 1920
        ? 575
        : stageWidth >= 1760
          ? 545
          : stageWidth >= 1600
            ? 520
            : 460;

    const rightContentX =
      stageWidth >= 1920 ? 248 : stageWidth >= 1600 ? 236 : 220;

    return {
      leftContentX,
      centerContentX,
      rightContentX,
    };
  }, []);

  const applyDesktopContentPositions = useCallback(() => {
    if (viewportModeRef.current !== 'desktop') return;

    const { leftContentX, centerContentX, rightContentX } =
      getContentXPositions();

    const leftContent = getDesktopContentEl(0);
    const centerContent = getDesktopContentEl(1);
    const rightContent = getDesktopContentEl(2);
    const ghostContent = getGhostContentEl();

    if (leftContent) {
      gsap.set(leftContent, { x: leftContentX });
    }

    if (centerContent) {
      gsap.set(centerContent, { x: centerContentX });
    }

    if (rightContent) {
      gsap.set(rightContent, { x: rightContentX });
    }

    if (ghostContent && ghost) {
      gsap.set(ghostContent, {
        x: ghost.direction === 1 ? rightContentX : leftContentX,
      });
    }
  }, [ghost, getContentXPositions, getDesktopContentEl, getGhostContentEl]);

  const syncDesktopVisuals = useCallback(() => {
    if (viewportModeRef.current !== 'desktop') return;

    const p = positionsRef.current;
    const maxDistance =
      Math.max(Math.abs(p.left - p.center), Math.abs(p.right - p.center)) || 1;

    const syncSlot = (slot: number) => {
      const media = getDesktopMediaEl(slot);
      const content = getDesktopContentEl(slot);

      if (!media) return;

      const currentX = Number(gsap.getProperty(media, 'x')) || 0;
      const distance = Math.abs(currentX - p.center);
      const ratio = clamp01(distance / maxDistance);
      const progress = 1 - ratio;

      gsap.set(media, {
        filter: `blur(${ratio * MAX_SIDE_BLUR}px)`,
        scale: 1 - ratio * 0.015,
        opacity: 0.35 + 0.65 * easeOutQuint(progress),
        transformOrigin: 'center center',
      });

      if (content) {
        const distToCenter = Math.abs(currentX - p.center);
        const distToLeft = Math.abs(currentX - p.left);

        const centerOpacity =
          distToCenter >= 140 ? 0 : easeOutQuint(1 - distToCenter / 140);
        const leftOpacity =
          distToLeft >= 120 ? 0 : easeOutQuint(1 - distToLeft / 120);

        const opacity = Math.max(centerOpacity, leftOpacity);

        gsap.set(content, {
          opacity,
          visibility: opacity <= 0.001 ? 'hidden' : 'visible',
        });
      }
    };

    syncSlot(0);
    syncSlot(1);
    syncSlot(2);

    const ghostMedia = getGhostMediaEl();
    const ghostContent = getGhostContentEl();

    if (ghostMedia) {
      const currentX = Number(gsap.getProperty(ghostMedia, 'x')) || 0;
      const distance = Math.abs(currentX - p.center);
      const ratio = clamp01(distance / maxDistance);
      const progress = 1 - ratio;

      gsap.set(ghostMedia, {
        filter: `blur(${ratio * MAX_SIDE_BLUR}px)`,
        scale: 1 - ratio * 0.015,
        opacity: 0.35 + 0.65 * easeOutQuint(progress),
        transformOrigin: 'center center',
      });

      if (ghostContent) {
        const distToCenter = Math.abs(currentX - p.center);
        const distToLeft = Math.abs(currentX - p.left);

        const centerOpacity =
          distToCenter >= 140 ? 0 : easeOutQuint(1 - distToCenter / 140);
        const leftOpacity =
          distToLeft >= 120 ? 0 : easeOutQuint(1 - distToLeft / 120);

        const opacity = Math.max(centerOpacity, leftOpacity);

        gsap.set(ghostContent, {
          opacity,
          visibility: opacity <= 0.001 ? 'hidden' : 'visible',
        });
      }
    }
  }, [
    getDesktopContentEl,
    getDesktopMediaEl,
    getGhostContentEl,
    getGhostMediaEl,
  ]);

  const syncCompactVisuals = useCallback(() => {
    if (viewportModeRef.current === 'desktop') return;

    const card = mobileCardRef.current;
    const content = getCompactContentEl();

    if (!card || !content) return;

    const currentX = Number(gsap.getProperty(card, 'x')) || 0;
    const maxDistance =
      Math.max(
        Math.abs(COMPACT_X.enterFromLeft - COMPACT_X.center),
        Math.abs(COMPACT_X.enterFromRight - COMPACT_X.center),
      ) || 1;

    const distance = Math.abs(currentX - COMPACT_X.center);
    const ratio = clamp01(distance / maxDistance);
    const progress = 1 - ratio;

    gsap.set(content, {
      opacity: easeOutQuint(progress),
      visibility: progress <= 0.001 ? 'hidden' : 'visible',
    });
  }, [getCompactContentEl]);

  const syncAllVisuals = useCallback(() => {
    syncDesktopVisuals();
    syncCompactVisuals();
  }, [syncDesktopVisuals, syncCompactVisuals]);

  const setDesktopBasePositions = useCallback(() => {
    const p = positionsRef.current;

    const l = getDesktopMediaEl(0);
    const c = getDesktopMediaEl(1);
    const r = getDesktopMediaEl(2);

    if (slotRefs.current[0]) {
      gsap.set(slotRefs.current[0], { zIndex: 10 });
    }

    if (slotRefs.current[1]) {
      gsap.set(slotRefs.current[1], { zIndex: 20 });
    }

    if (slotRefs.current[2]) {
      gsap.set(slotRefs.current[2], { zIndex: 10 });
    }

    if (l) gsap.set(l, { x: p.left });
    if (c) gsap.set(c, { x: p.center });
    if (r) gsap.set(r, { x: p.right });

    if (ghostRef.current && ghost) {
      gsap.set(ghostRef.current, {
        zIndex: 10,
      });

      const ghostMedia = getGhostMediaEl();

      if (ghostMedia) {
        gsap.set(ghostMedia, {
          x: ghost.direction === 1 ? p.offRight : p.offLeft,
        });
      }
    }

    applyDesktopContentPositions();
    syncAllVisuals();
  }, [
    applyDesktopContentPositions,
    getDesktopMediaEl,
    getGhostMediaEl,
    ghost,
    syncAllVisuals,
  ]);

  const setCompactBasePosition = useCallback(() => {
    if (mobileCardRef.current) {
      gsap.set(mobileCardRef.current, {
        x: COMPACT_X.center,
        zIndex: 20,
      });
    }

    syncAllVisuals();
  }, [syncAllVisuals]);

  const snapBackToBase = useCallback(
    (animate = true) => {
      if (viewportModeRef.current === 'desktop') {
        const p = positionsRef.current;
        const duration = animate ? RELEASE_SNAP_MS : 0;

        const l = getDesktopMediaEl(0);
        const c = getDesktopMediaEl(1);
        const r = getDesktopMediaEl(2);
        const g = getGhostMediaEl();

        if (l) {
          gsap.to(l, {
            x: p.left,
            duration,
            ease: 'animistaEaseOutQuint',
            overwrite: true,
            onUpdate: syncAllVisuals,
            onComplete: syncAllVisuals,
          });
        }

        if (c) {
          gsap.to(c, {
            x: p.center,
            duration,
            ease: 'animistaEaseOutQuint',
            overwrite: true,
            onUpdate: syncAllVisuals,
            onComplete: syncAllVisuals,
          });
        }

        if (r) {
          gsap.to(r, {
            x: p.right,
            duration,
            ease: 'animistaEaseOutQuint',
            overwrite: true,
            onUpdate: syncAllVisuals,
            onComplete: syncAllVisuals,
          });
        }

        if (g && ghost) {
          const ghostBaseX = ghost.direction === 1 ? p.offRight : p.offLeft;

          gsap.to(g, {
            x: ghostBaseX,
            duration,
            ease: 'animistaEaseOutQuint',
            overwrite: true,
            onUpdate: syncAllVisuals,
            onComplete: syncAllVisuals,
          });
        }
      } else if (mobileCardRef.current) {
        gsap.to(mobileCardRef.current, {
          x: COMPACT_X.center,
          duration: animate ? RELEASE_SNAP_MS : 0,
          ease: 'animistaEaseOutQuint',
          overwrite: true,
          onUpdate: syncAllVisuals,
          onComplete: syncAllVisuals,
        });
      }
    },
    [getDesktopMediaEl, getGhostMediaEl, ghost, syncAllVisuals],
  );

  useLayoutEffect(() => {
    if (isCompact) return;

    computePositions();

    const ro = new ResizeObserver(() => {
      computePositions();

      if (!isTransitioningRef.current) {
        requestAnimationFrame(() => {
          if (!isTransitioningRef.current) {
            setDesktopBasePositions();
          }
        });
      }
    });

    if (stageRef.current) ro.observe(stageRef.current);

    return () => ro.disconnect();
  }, [computePositions, isCompact, setDesktopBasePositions]);

  useLayoutEffect(() => {
    if (isTransitioning) return;

    if (!isCompact) {
      setDesktopBasePositions();
    } else {
      setCompactBasePosition();
    }
  }, [
    positions,
    slotCards,
    isCompact,
    isTransitioning,
    setDesktopBasePositions,
    setCompactBasePosition,
  ]);

  useLayoutEffect(() => {
    syncAllVisuals();
  }, [ghost, slotCards, positions, syncAllVisuals]);

  const runTransition = useCallback(
    (direction: Direction) => {
      if (isTransitioningRef.current || total < 2) return;

      const current = slotCardsRef.current;
      const nextSlots = getNextSlots(direction, current);

      const drag = dragRef.current;
      drag.isDown = false;
      drag.isDragging = false;
      drag.dx = 0;
      drag.dy = 0;
      drag.velocityX = 0;

      setIsTransitioning(true);
      isTransitioningRef.current = true;

      if (autoplayRef.current) {
        window.clearInterval(autoplayRef.current);
        autoplayRef.current = null;
      }

      const incomingGhostIndex =
        viewportModeRef.current === 'desktop'
          ? direction === 1
            ? current[0]
            : current[2]
          : nextSlots[1];

      flushSync(() => {
        setGhost({
          index: incomingGhostIndex,
          direction,
        });
      });

      requestAnimationFrame(() => {
        const l = getDesktopMediaEl(0);
        const c = getDesktopMediaEl(1);
        const r = getDesktopMediaEl(2);
        const g = getGhostMediaEl();
        const m = mobileCardRef.current;

        gsap.killTweensOf([l, c, r, g, m].filter(Boolean));

        const p = positionsRef.current;
        const duration = TRANSITION_MS / 1000;

        const tl = gsap.timeline({
          defaults: {
            ease: 'animistaEaseOutQuint',
          },
          onUpdate: syncAllVisuals,
          onComplete: () => {
            flushSync(() => {
              setSlotCards(nextSlots);
              setGhost(null);
              setIsTransitioning(false);
              isTransitioningRef.current = false;
            });

            setDesktopBasePositions();
          },
        });

        if (viewportModeRef.current === 'desktop') {
          if (direction === 1) {
            if (l) {
              tl.to(
                l,
                {
                  x: p.offLeft,
                  duration,
                },
                0,
              );
            }

            if (c) {
              tl.to(
                c,
                {
                  x: p.left,
                  duration,
                },
                0,
              );
            }

            if (r) {
              tl.to(
                r,
                {
                  x: p.center,
                  duration,
                },
                0,
              );
            }

            if (g) {
              gsap.set(g, {
                x: p.offRight,
              });

              tl.to(
                g,
                {
                  x: p.right,
                  duration,
                },
                0,
              );
            }
          } else {
            if (r) {
              tl.to(
                r,
                {
                  x: p.offRight,
                  duration,
                },
                0,
              );
            }

            if (c) {
              tl.to(
                c,
                {
                  x: p.right,
                  duration,
                },
                0,
              );
            }

            if (l) {
              tl.to(
                l,
                {
                  x: p.center,
                  duration,
                },
                0,
              );
            }

            if (g) {
              gsap.set(g, {
                x: p.offLeft,
              });

              tl.to(
                g,
                {
                  x: p.left,
                  duration,
                },
                0,
              );
            }
          }
        } else if (m) {
          if (direction === 1) {
            if (g) {
              gsap.set(g, {
                x: COMPACT_X.enterFromRight,
                zIndex: 15,
              });
            }

            tl.to(
              m,
              {
                x: COMPACT_X.exitToLeft,
                duration,
              },
              0,
            );

            if (g) {
              tl.to(
                g,
                {
                  x: COMPACT_X.center,
                  duration,
                },
                0,
              );
            }
          } else {
            if (g) {
              gsap.set(g, {
                x: COMPACT_X.enterFromLeft,
                zIndex: 15,
              });
            }

            tl.to(
              m,
              {
                x: COMPACT_X.exitToRight,
                duration,
              },
              0,
            );

            if (g) {
              tl.to(
                g,
                {
                  x: COMPACT_X.center,
                  duration,
                },
                0,
              );
            }
          }
        }
      });
    },
    [
      getDesktopMediaEl,
      getGhostMediaEl,
      getNextSlots,
      setDesktopBasePositions,
      syncAllVisuals,
      total,
    ],
  );

  const next = useCallback(() => runTransition(1), [runTransition]);
  const prev = useCallback(() => runTransition(-1), [runTransition]);

  useEffect(() => {
    if (autoplayRef.current) {
      window.clearInterval(autoplayRef.current);
    }

    autoplayRef.current = window.setInterval(() => {
      if (!isTransitioningRef.current) {
        runTransition(1);
      }
    }, AUTOPLAY_MS);

    return () => {
      if (autoplayRef.current) {
        window.clearInterval(autoplayRef.current);
      }
    };
  }, [viewportMode, runTransition]);

  const resolveSwipe = useCallback(
    (start: { x: number; y: number } | null, endX: number, endY: number) => {
      if (!start || isTransitioningRef.current) return;

      const dx = endX - start.x;
      const dy = endY - start.y;

      if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > SWIPE_THRESHOLD) {
        if (dx < 0) next();
        else prev();
      }
    },
    [next, prev],
  );

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    const drag = dragRef.current;

    drag.isDown = true;
    drag.isDragging = false;
    drag.pointerId = e.pointerId;
    drag.startX = e.clientX;
    drag.startY = e.clientY;
    drag.dx = 0;
    drag.dy = 0;
    drag.lastX = e.clientX;
    drag.lastT = performance.now();
    drag.velocityX = 0;

    pointerStartRef.current = { x: e.clientX, y: e.clientY };

    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch {
      void 0;
    }
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const drag = dragRef.current;
    if (!drag.isDown || isTransitioningRef.current) return;

    const dx = e.clientX - drag.startX;
    const dy = e.clientY - drag.startY;
    const now = performance.now();
    const dt = Math.max(now - drag.lastT, 16);

    drag.dx = dx;
    drag.dy = dy;
    drag.velocityX = (e.clientX - drag.lastX) / dt;
    drag.lastX = e.clientX;
    drag.lastT = now;

    if (!drag.isDragging) {
      const hasIntent =
        Math.abs(dx) > DRAG_ACTIVATE_PX || Math.abs(dy) > DRAG_ACTIVATE_PX;

      if (!hasIntent) return;

      drag.isDragging = Math.abs(dx) > Math.abs(dy);
      if (!drag.isDragging) return;
    }

    pointerStartRef.current = { x: drag.startX, y: drag.startY };

    if (drag.rafId !== null) return;

    drag.rafId = window.requestAnimationFrame(() => {
      drag.rafId = null;

      if (!drag.isDragging || isTransitioningRef.current) return;

      const p = positionsRef.current;
      const dxLocal = drag.dx;

      if (viewportModeRef.current === 'desktop') {
        const leftMedia = getDesktopMediaEl(0);
        const centerMedia = getDesktopMediaEl(1);
        const rightMedia = getDesktopMediaEl(2);

        if (leftMedia) {
          gsap.set(leftMedia, {
            x: p.left + dxLocal * 0.18,
          });
        }

        if (centerMedia) {
          gsap.set(centerMedia, {
            x: p.center + dxLocal * 0.32,
          });
        }

        if (rightMedia) {
          gsap.set(rightMedia, {
            x: p.right + dxLocal * 0.18,
          });
        }

        syncAllVisuals();
      } else if (mobileCardRef.current) {
        gsap.set(mobileCardRef.current, {
          x: COMPACT_X.center + dxLocal * 0.28,
        });

        syncAllVisuals();
      }
    });
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    const drag = dragRef.current;

    if (!drag.isDown) {
      pointerStartRef.current = null;
      return;
    }

    const dx = e.clientX - drag.startX;
    const dy = e.clientY - drag.startY;
    const absDx = Math.abs(dx);
    const absDy = Math.abs(dy);
    const velocity = drag.velocityX;

    drag.isDown = false;
    drag.pointerId = null;

    pointerStartRef.current = null;

    if (drag.isDragging) {
      if (
        (absDx > absDy && absDx > SWIPE_THRESHOLD) ||
        Math.abs(velocity) > VELOCITY_THRESHOLD
      ) {
        if (dx < 0) next();
        else prev();
      } else {
        snapBackToBase(true);
      }
    } else {
      resolveSwipe({ x: drag.startX, y: drag.startY }, e.clientX, e.clientY);
    }

    drag.isDragging = false;
    drag.dx = 0;
    drag.dy = 0;
    drag.velocityX = 0;

    if (drag.rafId !== null) {
      window.cancelAnimationFrame(drag.rafId);
      drag.rafId = null;
    }
  };

  const handlePointerCancel = () => {
    const drag = dragRef.current;

    drag.isDown = false;
    drag.isDragging = false;
    drag.pointerId = null;
    drag.dx = 0;
    drag.dy = 0;
    drag.velocityX = 0;

    pointerStartRef.current = null;

    if (drag.rafId !== null) {
      window.cancelAnimationFrame(drag.rafId);
      drag.rafId = null;
    }

    snapBackToBase(true);
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    const touch = e.touches[0];
    if (!touch) return;

    touchStartRef.current = { x: touch.clientX, y: touch.clientY };
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const touch = e.touches[0];
    if (!touch) return;

    const drag = dragRef.current;

    if (!drag.isDown) {
      drag.isDown = true;
      drag.startX = touch.clientX;
      drag.startY = touch.clientY;
      drag.lastX = touch.clientX;
      drag.lastT = performance.now();
    }

    drag.dx = touch.clientX - drag.startX;
    drag.dy = touch.clientY - drag.startY;

    if (!drag.isDragging) {
      const hasIntent =
        Math.abs(drag.dx) > DRAG_ACTIVATE_PX ||
        Math.abs(drag.dy) > DRAG_ACTIVATE_PX;

      if (!hasIntent) return;

      drag.isDragging = Math.abs(drag.dx) > Math.abs(drag.dy);
      if (!drag.isDragging) return;
    }

    if (drag.rafId !== null) return;

    drag.rafId = window.requestAnimationFrame(() => {
      drag.rafId = null;

      if (!drag.isDragging || isTransitioningRef.current) return;

      const p = positionsRef.current;
      const dxLocal = drag.dx;

      if (viewportModeRef.current === 'desktop') {
        const leftMedia = getDesktopMediaEl(0);
        const centerMedia = getDesktopMediaEl(1);
        const rightMedia = getDesktopMediaEl(2);

        if (leftMedia) {
          gsap.set(leftMedia, {
            x: p.left + dxLocal * 0.18,
          });
        }

        if (centerMedia) {
          gsap.set(centerMedia, {
            x: p.center + dxLocal * 0.32,
          });
        }

        if (rightMedia) {
          gsap.set(rightMedia, {
            x: p.right + dxLocal * 0.18,
          });
        }

        syncAllVisuals();
      } else if (mobileCardRef.current) {
        gsap.set(mobileCardRef.current, {
          x: COMPACT_X.center + dxLocal * 0.28,
        });

        syncAllVisuals();
      }
    });
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    const touch = e.changedTouches[0];
    if (!touch) return;

    const drag = dragRef.current;

    if (drag.isDragging) {
      const dx = touch.clientX - drag.startX;
      const dy = touch.clientY - drag.startY;
      const absDx = Math.abs(dx);
      const absDy = Math.abs(dy);

      if (absDx > absDy && absDx > SWIPE_THRESHOLD) {
        if (dx < 0) next();
        else prev();
      } else {
        snapBackToBase(true);
      }
    } else {
      resolveSwipe(touchStartRef.current, touch.clientX, touch.clientY);
    }

    drag.isDown = false;
    drag.isDragging = false;
    drag.pointerId = null;
    drag.dx = 0;
    drag.dy = 0;
    drag.velocityX = 0;

    touchStartRef.current = null;

    if (drag.rafId !== null) {
      window.cancelAnimationFrame(drag.rafId);
      drag.rafId = null;
    }
  };

  const handleTouchCancel = () => {
    touchStartRef.current = null;
    handlePointerCancel();
  };

  const stopStageForButton = (e: React.PointerEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    pointerStartRef.current = null;
  };

  const compactWidthClass = 'w-full';

  return (
    <div className="pt-25 top-56.25 h-312.5 md:h-295 lg:h-205 relative overflow-hidden">
      <div className="w-full h-full">
        <div
          ref={stageRef}
          className="relative h-full w-full overflow-hidden touch-pan-y"
          style={{ touchAction: 'pan-y' }}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerCancel}
          onPointerLeave={() => {
            pointerStartRef.current = null;
          }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onTouchCancel={handleTouchCancel}
        >
          <button
            type="button"
            aria-label="Previous Bottle"
            onPointerDown={stopStageForButton}
            onPointerUp={(e) => {
              stopStageForButton(e);
              prev();
            }}
            onTouchStart={(e) => {
              e.stopPropagation();
              touchStartRef.current = null;
            }}
            className="absolute left-5.25 md:left-10 lg:left-12.5 xl:left-53.75 lg:top-35 top-64 z-30 grid -translate-y-1/2 place-items-center transition hover:scale-105 focus:scale-105 active:scale-105"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="58"
              height="58"
              viewBox="0 0 58 58"
              fill="none"
              className="h-10 w-10 lg:h-14.5 lg:w-14.5"
            >
              <circle
                cx="29"
                cy="29"
                r="29"
                transform="rotate(-180 29 29)"
                fill="#AC1F2C"
              />
              <path
                d="M21.5471 28.2796L42.247 28.2796L42.247 31.4057L21.5471 31.4057L30.6692 39.7899L28.2645 42L15.0371 29.8427L28.2645 17.6853L30.6692 19.8954L21.5471 28.2796Z"
                fill="black"
              />
            </svg>
          </button>

          <button
            type="button"
            aria-label="Next Bottle"
            onPointerDown={stopStageForButton}
            onPointerUp={(e) => {
              stopStageForButton(e);
              next();
            }}
            onTouchStart={(e) => {
              e.stopPropagation();
              touchStartRef.current = null;
            }}
            className="absolute right-5.25 md:right-10 lg:right-12.5 xl:right-53.75 lg:top-35 top-64 z-30 grid -translate-y-1/2 place-items-center transition hover:scale-105 focus:scale-105 active:scale-105"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="58"
              height="58"
              viewBox="0 0 58 58"
              fill="none"
              className="h-10 w-10 lg:h-14.5 lg:w-14.5"
            >
              <circle cx="29" cy="29" r="29" fill="#AC1F2C" />
              <path
                d="M36.4529 29.7204L15.753 29.7204L15.753 26.5943L36.4529 26.5943L27.3308 18.2101L29.7355 16L42.9629 28.1574L29.7355 40.3147L27.3308 38.1046L36.4529 29.7204Z"
                fill="black"
              />
            </svg>
          </button>

          {viewportMode === 'desktop' ? (
            <>
              {slotCards.map((cardIndex, slot) => (
                <div
                  key={`desktop-slot-${slot}`}
                  ref={(el) => {
                    slotRefs.current[slot] = el;
                  }}
                  className="absolute top-0 left-0 w-[min(92vw,980px)]"
                  style={{
                    zIndex: slot === 1 ? 20 : 10,
                  }}
                >
                  <CollectionCard
                    title={items[cardIndex].title}
                    text={items[cardIndex].text}
                    img={items[cardIndex].img}
                    alt={items[cardIndex].alt}
                    linkId={items[cardIndex].linkId}
                  />
                </div>
              ))}

              {ghost && (
                <div
                  ref={ghostRef}
                  className="absolute top-0 left-0 w-[min(92vw,980px)] pointer-events-none"
                  style={{ zIndex: 10 }}
                >
                  <CollectionCard
                    title={items[ghost.index].title}
                    text={items[ghost.index].text}
                    img={items[ghost.index].img}
                    alt={items[ghost.index].alt}
                    linkId={items[ghost.index].linkId}
                  />
                </div>
              )}
            </>
          ) : (
            <>
              <div
                ref={mobileCardRef}
                className={`absolute top-0 left-1/2 -translate-x-1/2 ${compactWidthClass}`}
                style={{ zIndex: 20 }}
              >
                <CollectionCard
                  title={items[slotCards[1]].title}
                  text={items[slotCards[1]].text}
                  img={items[slotCards[1]].img}
                  alt={items[slotCards[1]].alt}
                  linkId={items[slotCards[1]].linkId}
                />
              </div>

              {ghost && (
                <div
                  ref={ghostRef}
                  className={`absolute top-0 left-1/2 -translate-x-1/2 ${compactWidthClass} pointer-events-none`}
                  style={{ zIndex: 15 }}
                >
                  <CollectionCard
                    title={items[ghost.index].title}
                    text={items[ghost.index].text}
                    img={items[ghost.index].img}
                    alt={items[ghost.index].alt}
                    linkId={items[ghost.index].linkId}
                  />
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
