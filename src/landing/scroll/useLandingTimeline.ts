import { useEffect, useRef, useState, type RefObject } from 'react';
import { watchReducedMotion } from './prefersReducedMotion';
import {
  PIN_SCROLL_VH,
  PIN_SCROLL_VH_COMPACT,
  sceneAtProgress,
  type SceneEnterDir,
  type SceneExitDir,
} from './timelineConfig';
import type { ProductSceneId } from '../content/products';

export interface LandingTimelineState {
  progress: number;
  activeScene: ProductSceneId;
  reducedMotion: boolean;
  pinActive: boolean;
}

type MotionVars = Record<string, number | string>;

/** Soft morph like the reference — scale + fade, no lateral slides. */
function enterFrom(dir: SceneEnterDir): MotionVars {
  if (dir === 'left') {
    return { autoAlpha: 0, xPercent: -12, x: 0, y: 10, scale: 0.96 };
  }
  if (dir === 'right') {
    return { autoAlpha: 0, xPercent: 12, x: 0, y: 10, scale: 0.96 };
  }
  return { autoAlpha: 0, xPercent: 0, x: 0, y: 14, scale: 0.94 };
}

function exitTo(dir: SceneExitDir): MotionVars {
  if (dir === 'up') {
    return { autoAlpha: 0, xPercent: 0, x: 0, y: -36, scale: 1.02, ease: 'none' };
  }
  return { autoAlpha: 0, xPercent: 0, x: 0, y: -8, scale: 1.03, ease: 'none' };
}

/**
 * GSAP ScrollTrigger pin + scrub timeline for the cinematic stage.
 * Dynamic-imports gsap to keep the initial Home chunk lean.
 */
export function useLandingTimeline(
  rootRef: RefObject<HTMLElement | null>,
  stageRef: RefObject<HTMLElement | null>,
  enablePin = true,
): LandingTimelineState {
  const [progress, setProgress] = useState(0);
  const [activeScene, setActiveScene] = useState<ProductSceneId>('handshake');
  const [reducedMotion, setReducedMotion] = useState(false);
  const [pinActive, setPinActive] = useState(false);
  const progressRef = useRef(0);

  useEffect(() => watchReducedMotion(setReducedMotion), []);

  useEffect(() => {
    const root = rootRef.current;
    if (!root || reducedMotion) {
      setPinActive(false);
      return;
    }

    let killed = false;
    let ctx: { revert: () => void } | null = null;

    (async () => {
      const gsapMod = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      if (killed) return;

      const gsap = gsapMod.default;
      gsap.registerPlugin(ScrollTrigger);

      const mm = gsap.matchMedia();

      mm.add('(max-width: 767px)', () => {
        setPinActive(false);
        const scenes = root.querySelectorAll<HTMLElement>('[data-landing-scene]');
        scenes.forEach((el) => {
          ScrollTrigger.create({
            trigger: el,
            start: 'top 70%',
            end: 'bottom 40%',
            onEnter: () => {
              const id = el.dataset.landingScene as ProductSceneId | undefined;
              if (id) setActiveScene(id);
            },
            onEnterBack: () => {
              const id = el.dataset.landingScene as ProductSceneId | undefined;
              if (id) setActiveScene(id);
            },
          });
        });
      });

      if (enablePin) {
        mm.add('(min-width: 768px)', () => {
          const stage = stageRef.current;
          if (!stage) return;

          setPinActive(true);
          const vh = window.matchMedia('(max-width: 1100px)').matches
            ? PIN_SCROLL_VH_COMPACT
            : PIN_SCROLL_VH;

          gsap.timeline({
            scrollTrigger: {
              id: 'landing-pin',
              trigger: root,
              start: 'top top',
              end: `+=${vh}%`,
              pin: stage,
              scrub: 0.85,
              anticipatePin: 1,
              invalidateOnRefresh: true,
              onUpdate: (self) => {
                const p = self.progress;
                progressRef.current = p;
                setProgress(p);
                setActiveScene(sceneAtProgress(p));
              },
              onLeave: () => setPinActive(false),
              onEnterBack: () => setPinActive(true),
            },
          });

          const layers = stage.querySelectorAll<HTMLElement>('[data-scene-layer]');
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: root,
              start: 'top top',
              end: `+=${vh}%`,
              scrub: 0.85,
              invalidateOnRefresh: true,
            },
          });

          layers.forEach((layer) => {
            const start = Number(layer.dataset.start ?? 0);
            const end = Number(layer.dataset.end ?? 1);
            const fade = Number(layer.dataset.fade ?? 0.05);
            const enter = (layer.dataset.enter ?? 'fade') as SceneEnterDir;
            const exit = (layer.dataset.exit ?? 'fade') as SceneExitDir;
            const panel = layer.querySelector('[data-product-panel]');
            const target = (panel instanceof HTMLElement ? panel : layer) as HTMLElement;
            const isHandshake = start <= 0;

            if (isHandshake) {
              gsap.set(layer, { autoAlpha: 1, clearProps: 'transform' });
              tl.to(
                layer,
                {
                  autoAlpha: 0,
                  ease: 'none',
                  duration: Math.max(0.001, fade),
                },
                end,
              );
              return;
            }

            const span = Math.max(0.001, end - start);
            const move = Math.min(fade, span * 0.3);
            const enterAt = Math.max(0, start);
            const exitAt = Math.max(enterAt + move, end - move);

            const from = enterFrom(enter);
            gsap.set(target, from);
            if (target !== layer) {
              gsap.set(layer, { autoAlpha: 1, clearProps: 'transform' });
            }

            tl.fromTo(
              target,
              from,
              {
                autoAlpha: 1,
                x: 0,
                xPercent: 0,
                y: 0,
                scale: 1,
                ease: 'none',
                duration: Math.max(0.001, move),
                immediateRender: false,
              },
              enterAt,
            );

            tl.to(
              target,
              {
                ...exitTo(exit),
                duration: Math.max(0.001, move),
              },
              exitAt,
            );
          });
        });
      }

      ctx = { revert: () => mm.revert() };
    })();

    return () => {
      killed = true;
      ctx?.revert();
    };
  }, [rootRef, stageRef, reducedMotion, enablePin]);

  return { progress, activeScene, reducedMotion, pinActive };
}
