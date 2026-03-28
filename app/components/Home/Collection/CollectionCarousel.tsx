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

  const COMPACT_X = {
    center: 0,
    enterFromRight: 120,
    enterFromLeft: -120,
    exitToLeft: -120,
    exitToRight: 120,
  };

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
      autoAlpha: 0,
      y: 0,
    });
  }, []);

  const revealDesktopContent = useCallback(() => {
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

    const tl = gsap.timeline();

    targets.forEach(({ el, opacity }, index) => {
      tl.fromTo(
        el,
        { autoAlpha: 0, y: 8 },
        {
          autoAlpha: opacity,
          y: 0,
          duration: 0.28,
          ease: 'power2.out',
        },
        index * 0.03,
      );
    });
  }, []);

  const revealCompactContent = useCallback(() => {
    const content = mobileCardRef.current?.querySelector(
      '.collection-card__content',
    );

    if (!content) return;

    gsap.fromTo(
      content,
      { autoAlpha: 0, y: 8 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.28,
        ease: 'power2.out',
      },
    );
  }, []);

  const setDesktopBasePositions = useCallback(() => {
    const p = positionsRef.current;

    if (slotRefs.current[0]) {
      gsap.set(slotRefs.current[0], {
        x: p.left,
        opacity: 1,
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
        opacity: 1,
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

    if (!isCompact) {
      setDesktopBasePositions();
      revealDesktopContent();
    } else {
      setCompactBasePosition();
      revealCompactContent();
    }
  }, [
    positions,
    slotCards,
    isCompact,
    isTransitioning,
    setDesktopBasePositions,
    setCompactBasePosition,
    revealDesktopContent,
    revealCompactContent,
  ]);

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
            gsap.set(ghostContent, { autoAlpha: 0 });
          }
        }

        const p = positionsRef.current;

        const tl = gsap.timeline({
          defaults: {
            ease: 'power3.inOut',
          },
          onComplete: () => {
            flushSync(() => {
              setSlotCards(nextSlots);
              setGhost(null);
            });

            requestAnimationFrame(() => {
              if (viewportModeRef.current === 'desktop') {
                setDesktopBasePositions();
                revealDesktopContent();
              } else {
                setCompactBasePosition();
                revealCompactContent();
              }

              setIsTransitioning(false);
              isTransitioningRef.current = false;
            });
          },
        });

        if (viewportModeRef.current === 'desktop') {
          if (direction === 1) {
            if (l) {
              tl.to(
                l,
                {
                  x: p.offLeft,
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
                  duration: 0.78,
                },
                0,
              );
            }

            if (g) {
              gsap.set(g, {
                x: p.offRight,
                zIndex: 10,
              });

              tl.to(
                g,
                {
                  x: p.right,
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
                  duration: 0.78,
                },
                0,
              );
            }

            if (g) {
              gsap.set(g, {
                x: p.offLeft,
                zIndex: 10,
              });

              tl.to(
                g,
                {
                  x: p.left,
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
    [
      getNextSlots,
      hideAllContent,
      revealDesktopContent,
      revealCompactContent,
      setDesktopBasePositions,
      setCompactBasePosition,
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

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    pointerStartRef.current = { x: e.clientX, y: e.clientY };
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    const start = pointerStartRef.current;
    if (!start || isTransitioningRef.current) return;

    const dx = e.clientX - start.x;
    const dy = e.clientY - start.y;

    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > SWIPE_THRESHOLD) {
      if (dx < 0) next();
      else prev();
    }

    pointerStartRef.current = null;
  };

  const compactWidthClass =
    viewportMode === 'mobile'
      ? 'w-[min(92vw,430px)] md:w-[min(92vw,724px)]'
      : 'w-[min(92vw,724px)]';

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
        >
          <button
            type="button"
            aria-label="Previous card"
            onClick={prev}
            className="absolute left-4 md:left-6 lg:left-[6%] top-[40%] z-30 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-(--primary-red-main) text-background shadow-lg transition hover:scale-105 focus:scale-105 active:scale-105"
          >
            <span className="text-2xl leading-none">←</span>
          </button>

          <button
            type="button"
            aria-label="Next card"
            onClick={next}
            className="absolute right-4 md:right-6 lg:right-[6%] top-[40%] z-30 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-(--primary-red-main) text-background shadow-lg transition hover:scale-105 focus:scale-105 active:scale-105"
          >
            <span className="text-2xl leading-none">→</span>
          </button>

          {viewportMode === 'desktop' ? (
            <>
              {slotCards.map((cardIndex, slot) => (
                <div
                  key={`desktop-slot-${slot}`}
                  ref={(el) => {
                    slotRefs.current[slot] = el;
                  }}
                  className="absolute top-0 left-0 w-[min(92vw,980px)] will-change-transform"
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
                key={`compact-active-${slotCards[1]}`}
                ref={mobileCardRef}
                className={`absolute top-0 left-1/2 -translate-x-1/2 ${compactWidthClass} will-change-transform`}
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
                  key={`compact-ghost-${ghost.index}-${ghost.direction}`}
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
