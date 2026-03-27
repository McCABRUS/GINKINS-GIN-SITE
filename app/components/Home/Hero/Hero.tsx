'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import BottleCarousel from './BottleCarousel';
import BotanicalGrid from './BotanicalGrid';
import BotanicalGridMobile from './BotanicalGridMobile';

const STEP_MS = 2400;
const RESUME_DELAY_MS = 1800;

const leftIds = [
  'grapefruit',
  'cardamom',
  'angelica',
  'juniper-berries',
  'coriander',
];

const rightIds = ['juniper', 'orris', 'nutmeg', 'cassia', 'lemon-peel'];

function shuffle<T>(array: T[]): T[] {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function buildSequence(left: string[], right: string[]) {
  const l = shuffle(left);
  const r = shuffle(right);
  const seq: string[] = [];

  const max = Math.max(l.length, r.length);

  for (let i = 0; i < max; i += 1) {
    if (l[i]) seq.push(l[i]);
    if (r[i]) seq.push(r[i]);
  }

  return seq;
}

function useBotanicalCycle(leftIds: string[], rightIds: string[]) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [isHovering, setIsHovering] = useState(false);

  const sequenceRef = useRef<string[]>([]);
  const indexRef = useRef(0);
  const timerRef = useRef<number | null>(null);
  const resumeTimerRef = useRef<number | null>(null);

  useEffect(() => {
    sequenceRef.current = buildSequence(leftIds, rightIds);
    indexRef.current = 0;
  }, [leftIds, rightIds]);

  useEffect(() => {
    if (isHovering) {
      if (timerRef.current !== null) {
        window.clearTimeout(timerRef.current);
      }
      timerRef.current = null;
      return;
    }

    const tick = () => {
      const sequence = sequenceRef.current;
      if (sequence.length === 0) return;

      const nextId = sequence[indexRef.current] ?? null;
      setActiveId(nextId);

      indexRef.current += 1;

      if (indexRef.current >= sequence.length) {
        sequenceRef.current = buildSequence(leftIds, rightIds);
        indexRef.current = 0;
      }

      timerRef.current = window.setTimeout(tick, STEP_MS);
    };

    timerRef.current = window.setTimeout(tick, STEP_MS);

    return () => {
      if (timerRef.current !== null) {
        window.clearTimeout(timerRef.current);
      }
      timerRef.current = null;
    };
  }, [isHovering, leftIds, rightIds]);

  const onEnter = () => {
    if (resumeTimerRef.current !== null) {
      window.clearTimeout(resumeTimerRef.current);
      resumeTimerRef.current = null;
    }

    if (timerRef.current !== null) {
      window.clearTimeout(timerRef.current);
      timerRef.current = null;
    }

    setIsHovering(true);
    setActiveId(null);
  };

  const onLeave = () => {
    if (resumeTimerRef.current !== null) {
      window.clearTimeout(resumeTimerRef.current);
    }

    resumeTimerRef.current = window.setTimeout(() => {
      setIsHovering(false);
    }, RESUME_DELAY_MS);
  };

  useEffect(() => {
    return () => {
      if (timerRef.current !== null) {
        window.clearTimeout(timerRef.current);
      }
      if (resumeTimerRef.current !== null) {
        window.clearTimeout(resumeTimerRef.current);
      }
    };
  }, []);

  return {
    activeId,
    isHovering,
    onEnter,
    onLeave,
  };
}

export default function Hero() {
  const { activeId, isHovering, onEnter, onLeave } = useBotanicalCycle(
    leftIds,
    rightIds,
  );

  return (
    <section className="relative w-full overflow-hidden xl:-mt-34 lg:-mt-9">
      <div className="absolute inset-0">
        <div className="h-[37%] lg:h-[30%] xl:h-[65%] bg-(--primary-black)" />
        <div className="h-[43%] lg:h-[34%] xl:h-[70%] bg-(--secondary-beige)" />
      </div>

      <div className="relative mx-auto max-w-400 h-250 z-30 justify-center flex">
        <div className="absolute top-10 xl:top-36.25 justify-self-center">
          <Image
            src="/imgs/home/arc.svg"
            alt=""
            width={486}
            height={310}
            className="w-80 xl:w-121.5"
            aria-hidden
            priority
          />
        </div>

        <div className="hidden lg:block absolute left-[10.25%] xl:top-86 lg:top-22 text-background text-center">
          <p className="font-cormorant-garamond leading-relaxed text-3xl ">
            WE BOTTLE <br /> CONNECTION.
          </p>
        </div>

        <div className="hidden lg:block absolute right-[10.25%] xl:top-86 lg:top-22 text-background text-center">
          <p className="font-cormorant-garamond text-3xl leading-relaxed top-86">
            YOU POUR IT <br /> FORWARD.
          </p>
        </div>

        <div
          className="hidden xl:block"
          onPointerEnter={onEnter}
          onPointerLeave={onLeave}
        >
          <BotanicalGrid
            side="left"
            activeId={activeId}
            isHovering={isHovering}
          />
          <BotanicalGrid
            side="right"
            activeId={activeId}
            isHovering={isHovering}
          />
        </div>

        <div className="absolute left-1/2 top-[-5%] xl:top-[18%] -translate-x-1/2 w-full h-full flex items-center justify-center z-0 max-w-480">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="374"
            height="614"
            viewBox="0 0 374 614"
            fill="none"
            className="z-10 -mt-88.5 w-61.5 xl:w-93.5"
          >
            <g
              clipPath="url(#paint0_angular_2821_1268_clip_path)"
              data-figma-skip-parse="true"
            >
              <g transform="matrix(0 0.296477 -0.176589 0 186.772 306.659)">
                <foreignObject
                  x="-1115.32"
                  y="-1115.32"
                  width="2230.64"
                  height="2230.64"
                >
                  <div className="h-full w-full opacity-[11]" />
                </foreignObject>
              </g>
            </g>
            <path
              d="M189.309 10.1823V1.23978e-05V1.23978e-05V10.1823ZM363.361 302.412L373.543 302.412V302.412H363.361ZM363.342 304.916L353.16 304.772L353.159 304.844V304.916H363.342ZM363.342 603.136V613.319H373.524V603.136H363.342ZM10.2 603.136H0.0176516V613.319H10.2V603.136ZM10.2 304.817H20.3823V304.748L20.3813 304.679L10.2 304.817ZM10.1824 184.233L7.34329e-05 184.233V184.233H10.1824ZM184.233 10.1823V1.23978e-05H184.233L184.233 10.1823ZM189.309 10.1823V20.3646C279.812 20.3646 353.179 93.7318 353.179 184.234H363.361H373.543C373.543 82.4847 291.059 4.19617e-05 189.309 1.23978e-05V10.1823ZM363.361 184.234H353.179V302.412H363.361H373.543V184.234H363.361ZM363.361 302.412L353.179 302.412C353.179 303.186 353.172 303.97 353.16 304.772L363.342 304.916L373.523 305.059C373.535 304.195 373.543 303.31 373.543 302.412L363.361 302.412ZM363.342 304.916H353.159V603.136H363.342H373.524V304.916H363.342ZM363.342 603.136V592.954H10.2V603.136V613.319H363.342V603.136ZM10.2 603.136H20.3823V304.817H10.2H0.0176516V603.136H10.2ZM10.2 304.817L20.3813 304.679C20.3709 303.913 20.3647 303.158 20.3647 302.411H10.1824H7.34329e-05C7.34329e-05 303.27 0.00727272 304.12 0.0185862 304.955L10.2 304.817ZM10.1824 302.411H20.3647V184.233H10.1824H7.34329e-05V302.411H10.1824ZM10.1824 184.233L20.3647 184.233C20.3649 93.7312 93.7312 20.3648 184.233 20.3646L184.233 10.1823L184.233 1.23978e-05C82.4841 0.000248909 0.000340462 82.4841 7.34329e-05 184.233L10.1824 184.233ZM184.233 10.1823V20.3646H189.309V10.1823V1.23978e-05H184.233V10.1823Z"
              data-figma-gradient-fill='{"type":"GRADIENT_ANGULAR","stops":[{"color":{"r":0.22397848963737488,"g":0.22397848963737488,"b":0.22397848963737488,"a":1.0},"position":0.39423078298568726},{"color":{"r":0.0,"g":0.0,"b":0.0,"a":1.0},"position":1.0}],"stopsVar":[{"color":{"r":0.22397848963737488,"g":0.22397848963737488,"b":0.22397848963737488,"a":1.0},"position":0.39423078298568726},{"color":{"r":0.0,"g":0.0,"b":0.0,"a":1.0},"position":1.0}],"transform":{"m00":2.1625955624253283e-14,"m01":-353.17864990234375,"m02":363.36102294921875,"m10":592.95416259765625,"m11":3.6307972416365492e-14,"m12":10.182312011718750},"opacity":1.0,"blendMode":"NORMAL","visible":true}'
            />
            <defs>
              <clipPath id="paint0_angular_2821_1268_clip_path">
                <path d="M189.309 10.1823V1.23978e-05V1.23978e-05V10.1823ZM363.361 302.412L373.543 302.412V302.412H363.361ZM363.342 304.916L353.16 304.772L353.159 304.844V304.916H363.342ZM363.342 603.136V613.319H373.524V603.136H363.342ZM10.2 603.136H0.0176516V613.319H10.2V603.136ZM10.2 304.817H20.3823V304.748L20.3813 304.679L10.2 304.817ZM10.1824 184.233L7.34329e-05 184.233V184.233H10.1824ZM184.233 10.1823V1.23978e-05H184.233L184.233 10.1823ZM189.309 10.1823V20.3646C279.812 20.3646 353.179 93.7318 353.179 184.234H363.361H373.543C373.543 82.4847 291.059 4.19617e-05 189.309 1.23978e-05V10.1823ZM363.361 184.234H353.179V302.412H363.361H373.543V184.234H363.361ZM363.361 302.412L353.179 302.412C353.179 303.186 353.172 303.97 353.16 304.772L363.342 304.916L373.523 305.059C373.535 304.195 373.543 303.31 373.543 302.412L363.361 302.412ZM363.342 304.916H353.159V603.136H363.342H373.524V304.916H363.342ZM363.342 603.136V592.954H10.2V603.136V613.319H363.342V603.136ZM10.2 603.136H20.3823V304.817H10.2H0.0176516V603.136H10.2ZM10.2 304.817L20.3813 304.679C20.3709 303.913 20.3647 303.158 20.3647 302.411H10.1824H7.34329e-05C7.34329e-05 303.27 0.00727272 304.12 0.0185862 304.955L10.2 304.817ZM10.1824 302.411H20.3647V184.233H10.1824H7.34329e-05V302.411H10.1824ZM10.1824 184.233L20.3647 184.233C20.3649 93.7312 93.7312 20.3648 184.233 20.3646L184.233 10.1823L184.233 1.23978e-05C82.4841 0.000248909 0.000340462 82.4841 7.34329e-05 184.233L10.1824 184.233ZM184.233 10.1823V20.3646H189.309V10.1823V1.23978e-05H184.233V10.1823Z" />
              </clipPath>
            </defs>
          </svg>

          <div className="z-0">
            <BottleCarousel />
          </div>
        </div>
      </div>

      <div className="relative grid z-50 lg:top-0 xl:-top-25 m-auto justify-center">
        <div className="absolute left-1/2 bottom-118 xl:bottom-[6%] -translate-x-1/2 z-40">
          <Link
            href="/our-gins"
            role="button"
            className="inline-flex items-center justify-center px-5 py-1.5 w-81.25 text-sm transition group animatedButton"
          >
            <h5 className="text-background! text-lg! group-hover:text-(--primary-black)! group-active:text-(--primary-black)! group-focus:text-(--primary-black)!">
              EXPLORE THE COLLECTION
            </h5>
          </Link>
        </div>
      </div>

      <div className="relative block xl:hidden text-center -top-33.5 ">
        <BotanicalGridMobile />
        <div className="lg:hidden relative bg-background -top-70 -mb-102 h-41.25 py-[17.5px] grid ">
          <h2 className="text-3xl! text-(--primary-red-main)! content-end">
            WE BOTTLE <br /> CONNECTION.
          </h2>
          <hr
            className="w-16 text-(--primary-black) place-self-center lg:my-1.25"
            aria-hidden="true"
          />
          <h2 className="text-3xl! text-(--primary-red-main)!">
            YOU POUR IT <br /> FORWARD.
          </h2>
        </div>
      </div>
    </section>
  );
}
