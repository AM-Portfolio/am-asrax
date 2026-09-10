import { useEffect, useRef, useState, type RefObject } from 'react';
import { watchReducedMotion } from './prefersReducedMotion';
import { PIN_SCROLL_VH, PIN_SCROLL_VH_COMPACT, sceneAtProgress } from './timelineConfig';
import type { ProductSceneId } from '../content/products';

export interface LandingTimelineState {
  progress: number;
  activeScene: ProductSceneId;
  reducedMotion: boolean;
  pinActive: boolean;
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
              scrub: 0.65,
              anticipatePin: 1,
              invalidateOnRefresh: true,
              onUpdate: (self) => {
                const p = self.progress;
                progressRef.current = p;
                setProgress(p);
                setActiveScene(sceneAtProgress(p));
              },
            },
          });

          const layers = stage.querySelectorAll<HTMLElement>('[data-scene-layer]');
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: root,
              start: 'top top',
              end: `+=${vh}%`,
              scrub: 0.65,
              invalidateOnRefresh: true,
            },
          });

          layers.forEach((layer) => {
            const start = Number(layer.dataset.start ?? 0);
            const end = Number(layer.dataset.end ?? 1);
            const fade = Number(layer.dataset.fade ?? 0.04);
            // Avoid translate/scale on the handshake layer — transforms freeze <video> in some browsers
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

            gsap.set(layer, { autoAlpha: 0, y: 28, scale: 0.985 });
            tl.fromTo(
              layer,
              { autoAlpha: 0, y: 28, scale: 0.985 },
              {
                autoAlpha: 1,
                y: 0,
                scale: 1,
                ease: 'none',
                duration: Math.max(0.001, fade),
                immediateRender: false,
              },
              Math.max(0, start - fade),
            );

            tl.to(
              layer,
              {
                autoAlpha: 0,
                y: -20,
                scale: 0.99,
                ease: 'none',
                duration: Math.max(0.001, fade),
              },
              end,
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
