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
import CollectionCard from './CollectionCard';
import { collectionData } from './data';

const AUTOPLAY_MS = 5500;
const SWIPE_THRESHOLD = 48;

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

export default function CollectionCarousel() {
  const items = useMemo(() => collectionData, []);
  const total = items.length;

  const [viewportMode, setViewportMode] = useState<
    'mobile' | 'tablet' | 'desktop'
  >('desktop');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [ghost, setGhost] = useState<GhostState>(null);
  const [pendingDesktopReveal, setPendingDesktopReveal] = useState(false);
  const [pendingCompactReveal, setPendingCompactReveal] = useState(false);

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

  const hideAllContent = useCallback(() => {
    if (!stageRef.current) return;

    const contentEls = stageRef.current.querySelectorAll(
      '.collection-card__content',
    );

    gsap.set(contentEls, {
      opacity: 0,
      y: 0,
      visibility: 'hidden',
    });
  }, []);

  const setDesktopBasePositions = useCallback(() => {
    const p = positionsRef.current;

    if (slotRefs.current[0]) {
      gsap.set(slotRefs.current[0], {
        x: p.left,
        opacity: 0.15,
        zIndex: 10,
      });
    }

    if (slotRefs.current[1]) {
      gsap.set(slotRefs.current[1], {
        x: p.center,
        opacity: 1,
        zIndex: 20,
      });
    }

    if (slotRefs.current[2]) {
      gsap.set(slotRefs.current[2], {
        x: p.right,
        opacity: 0.15,
        zIndex: 10,
      });
    }
  }, []);

  const setCompactBasePosition = useCallback(() => {
    if (mobileCardRef.current) {
      gsap.set(mobileCardRef.current, {
        x: COMPACT_X.center,
        opacity: 1,
        zIndex: 20,
      });
    }
  }, []);

  useLayoutEffect(() => {
    if (isCompact) return;

    computePositions();

    const ro = new ResizeObserver(() => {
      computePositions();
      if (!isTransitioningRef.current) {
        setDesktopBasePositions();
      }
    });

    if (stageRef.current) ro.observe(stageRef.current);

    return () => ro.disconnect();
  }, [computePositions, isCompact, setDesktopBasePositions]);

  useLayoutEffect(() => {
    if (isTransitioning) return;
    if (pendingDesktopReveal || pendingCompactReveal) return;

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
    pendingDesktopReveal,
    pendingCompactReveal,
    setDesktopBasePositions,
    setCompactBasePosition,
  ]);

  useLayoutEffect(() => {
    if (!pendingDesktopReveal) return;
    if (isCompact) return;

    setDesktopBasePositions();

    const leftContent = slotRefs.current[0]?.querySelector(
      '.collection-card__content',
    );
    const centerContent = slotRefs.current[1]?.querySelector(
      '.collection-card__content',
    );
    const rightContent = slotRefs.current[2]?.querySelector(
      '.collection-card__content',
    );

    const targets = [
      { el: leftContent, opacity: 0.45 },
      { el: centerContent, opacity: 1 },
      { el: rightContent, opacity: 0.45 },
    ].filter((item) => item.el) as { el: Element; opacity: number }[];

    if (!targets.length) return;

    gsap.set(
      targets.map((item) => item.el),
      {
        opacity: 0,
        y: 0,
        visibility: 'visible',
      },
    );

    const id = window.requestAnimationFrame(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          setPendingDesktopReveal(false);
          setIsTransitioning(false);
          isTransitioningRef.current = false;
        },
      });

      targets.forEach(({ el, opacity }, index) => {
        tl.to(
          el,
          {
            opacity,
            y: 0,
            duration: 0.28,
            ease: 'power2.out',
            force3D: true,
          },
          index * 0.03,
        );
      });
    });

    return () => {
      window.cancelAnimationFrame(id);
    };
  }, [isCompact, pendingDesktopReveal, setDesktopBasePositions]);

  useLayoutEffect(() => {
    if (!pendingCompactReveal) return;
    if (!isCompact) return;

    setCompactBasePosition();

    const content = mobileCardRef.current?.querySelector(
      '.collection-card__content',
    );

    if (!content) return;

    gsap.set(content, {
      opacity: 0,
      y: 0,
      visibility: 'visible',
    });

    const id = window.requestAnimationFrame(() => {
      gsap.to(content, {
        opacity: 1,
        y: 0,
        duration: 0.28,
        ease: 'power2.out',
        onComplete: () => {
          setPendingCompactReveal(false);
          setIsTransitioning(false);
          isTransitioningRef.current = false;
        },
      });
    });

    return () => {
      window.cancelAnimationFrame(id);
    };
  }, [isCompact, pendingCompactReveal, setCompactBasePosition]);

  const runTransition = useCallback(
    (direction: Direction) => {
      if (isTransitioningRef.current || total < 2) return;

      const current = slotCardsRef.current;
      const nextSlots = getNextSlots(direction, current);

      setIsTransitioning(true);
      isTransitioningRef.current = true;

      if (autoplayRef.current) {
        window.clearInterval(autoplayRef.current);
        autoplayRef.current = null;
      }

      hideAllContent();

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
        const l = slotRefs.current[0];
        const c = slotRefs.current[1];
        const r = slotRefs.current[2];
        const g = ghostRef.current;
        const m = mobileCardRef.current;

        gsap.killTweensOf([l, c, r, g, m].filter(Boolean));

        if (g) {
          const ghostContent = g.querySelector('.collection-card__content');
          if (ghostContent) {
            gsap.set(ghostContent, { opacity: 0, visibility: 'hidden' });
          }
        }

        const p = positionsRef.current;

        const tl = gsap.timeline({
          defaults: {
            ease: 'power3.inOut',
          },
          onComplete: () => {
            if (viewportModeRef.current === 'desktop') {
              flushSync(() => {
                setPendingDesktopReveal(true);
                setSlotCards(nextSlots);
                setGhost(null);
              });
            } else {
              flushSync(() => {
                setPendingCompactReveal(true);
                setSlotCards(nextSlots);
                setGhost(null);
              });
            }
          },
        });

        if (viewportModeRef.current === 'desktop') {
          if (direction === 1) {
            if (l) {
              tl.to(
                l,
                {
                  x: p.offLeft,
                  opacity: 0,
                  duration: 0.78,
                },
                0,
              );
            }

            if (c) {
              tl.to(
                c,
                {
                  x: p.left,
                  opacity: 0.45,
                  duration: 0.78,
                },
                0,
              );
            }

            if (r) {
              tl.to(
                r,
                {
                  x: p.center,
                  opacity: 1,
                  duration: 0.78,
                },
                0,
              );
            }

            if (g) {
              gsap.set(g, {
                x: p.offRight,
                opacity: 0,
                zIndex: 10,
              });

              tl.to(
                g,
                {
                  x: p.right,
                  opacity: 0.45,
                  duration: 0.78,
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
                  opacity: 0,
                  duration: 0.78,
                },
                0,
              );
            }

            if (c) {
              tl.to(
                c,
                {
                  x: p.right,
                  opacity: 0.45,
                  duration: 0.78,
                },
                0,
              );
            }

            if (l) {
              tl.to(
                l,
                {
                  x: p.center,
                  opacity: 1,
                  duration: 0.78,
                },
                0,
              );
            }

            if (g) {
              gsap.set(g, {
                x: p.offLeft,
                opacity: 0,
                zIndex: 10,
              });

              tl.to(
                g,
                {
                  x: p.left,
                  opacity: 0.45,
                  duration: 0.78,
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
                duration: 0.62,
              },
              0,
            );

            if (g) {
              tl.to(
                g,
                {
                  x: COMPACT_X.center,
                  duration: 0.62,
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
                duration: 0.62,
              },
              0,
            );

            if (g) {
              tl.to(
                g,
                {
                  x: COMPACT_X.center,
                  duration: 0.62,
                },
                0,
              );
            }
          }
        }
      });
    },
    [getNextSlots, hideAllContent, total],
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
    pointerStartRef.current = { x: e.clientX, y: e.clientY };
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    resolveSwipe(pointerStartRef.current, e.clientX, e.clientY);
    pointerStartRef.current = null;
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    const touch = e.touches[0];
    if (!touch) return;

    touchStartRef.current = { x: touch.clientX, y: touch.clientY };
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    const touch = e.changedTouches[0];
    if (!touch) return;

    resolveSwipe(touchStartRef.current, touch.clientX, touch.clientY);
    touchStartRef.current = null;
  };

  const handleTouchCancel = () => {
    touchStartRef.current = null;
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
          onPointerUp={handlePointerUp}
          onPointerCancel={() => {
            pointerStartRef.current = null;
          }}
          onPointerLeave={() => {
            pointerStartRef.current = null;
          }}
          onTouchStart={handleTouchStart}
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
                  className={`absolute top-0 left-0 w-[min(92vw,980px)] will-change-transform ${
                    pendingDesktopReveal
                      ? '[&_.collection-card__content]:opacity-0'
                      : ''
                  }`}
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
                  className="absolute top-0 left-0 w-[min(92vw,980px)] pointer-events-none will-change-transform"
                  style={{ zIndex: 10 }}
                >
                  <div className="[&_.collection-card__content]:opacity-0">
                    <CollectionCard
                      title={items[ghost.index].title}
                      text={items[ghost.index].text}
                      img={items[ghost.index].img}
                      alt={items[ghost.index].alt}
                      linkId={items[ghost.index].linkId}
                    />
                  </div>
                </div>
              )}
            </>
          ) : (
            <>
              <div
                ref={mobileCardRef}
                className={`absolute top-0 left-1/2 -translate-x-1/2 ${compactWidthClass} will-change-transform ${
                  pendingCompactReveal
                    ? '[&_.collection-card__content]:opacity-0'
                    : ''
                }`}
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
                  className={`absolute top-0 left-1/2 -translate-x-1/2 ${compactWidthClass} pointer-events-none will-change-transform`}
                  style={{ zIndex: 15 }}
                >
                  <div className="[&_.collection-card__content]:opacity-0">
                    <CollectionCard
                      title={items[ghost.index].title}
                      text={items[ghost.index].text}
                      img={items[ghost.index].img}
                      alt={items[ghost.index].alt}
                      linkId={items[ghost.index].linkId}
                    />
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
