import { useEffect, useRef, useState, type ReactNode } from 'react';
import { PRODUCT_SCENES, LANDING_STORY, type ProductSceneId } from './content/products';
import { SCENE_MOTION, SCENE_SEGMENTS, segmentProgress } from './scroll/timelineConfig';
import { useLandingTimeline } from './scroll/useLandingTimeline';
import { ScrollProgressHint } from './ui/ScrollProgressHint';
import { StickySceneCopy, STICKY_COPY_SCENES } from './ui/StickySceneCopy';
import { HandshakeScene } from './scenes/HandshakeScene';
import { NetworkScene } from './scenes/NetworkScene';
import { DashboardScene } from './scenes/DashboardScene';
import { PortfolioScene } from './scenes/PortfolioScene';
import { TradeScene } from './scenes/TradeScene';
import { MarketScene } from './scenes/MarketScene';
import { AiChatScene } from './scenes/AiChatScene';
import { FinalCtaScene } from './scenes/FinalCtaScene';
import AboutSection from './sections/AboutSection';
import FeaturesSection from './sections/FeaturesSection';
import CareersSection from './sections/CareersSection';
import Footer from '../components/Footer';

function contentFor(id: ProductSceneId) {
  return PRODUCT_SCENES.find((s) => s.id === id)!;
}

function SceneBody({
  id,
  active,
  progress,
  reducedMotion,
  hideCopy = false,
}: {
  id: ProductSceneId;
  active: boolean;
  progress: number;
  reducedMotion: boolean;
  hideCopy?: boolean;
}) {
  const c = contentFor(id);
  const sceneProgress = reducedMotion ? 1 : segmentProgress(progress, id);

  switch (id) {
    case 'handshake':
      return <HandshakeScene content={c} active={active} reducedMotion={reducedMotion} />;
    case 'network':
      return (
        <NetworkScene content={c} active={active} progress={progress} hideCopy={hideCopy} />
      );
    case 'dashboard':
      return (
        <DashboardScene
          content={c}
          active={active}
          sceneProgress={sceneProgress}
          hideCopy={hideCopy}
        />
      );
    case 'portfolio':
      return (
        <PortfolioScene
          content={c}
          active={active}
          sceneProgress={sceneProgress}
          hideCopy={hideCopy}
        />
      );
    case 'trade':
      return (
        <TradeScene
          content={c}
          active={active}
          sceneProgress={sceneProgress}
          hideCopy={hideCopy}
        />
      );
    case 'market':
      return (
        <MarketScene
          content={c}
          active={active}
          sceneProgress={sceneProgress}
          hideCopy={hideCopy}
        />
      );
    case 'aiChat':
      return (
        <AiChatScene
          content={c}
          active={active}
          sceneProgress={sceneProgress}
          hideCopy={hideCopy}
        />
      );
    case 'cta':
      return <FinalCtaScene content={c} active={active} sceneProgress={sceneProgress} />;
    default:
      return null;
  }
}

function useIsDesktopPin() {
  const [isDesktop, setIsDesktop] = useState(() =>
    typeof window !== 'undefined' ? window.matchMedia('(min-width: 768px)').matches : true,
  );

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)');
    const onChange = () => setIsDesktop(mq.matches);
    onChange();
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  return isDesktop;
}

function SceneShell({
  id,
  children,
  inFrame,
}: {
  id: ProductSceneId;
  children: ReactNode;
  inFrame?: boolean;
}) {
  const fullBleed = id === 'handshake' || id === 'cta';
  if (fullBleed) {
    return <div className="h-full w-full">{children}</div>;
  }
  if (inFrame) {
    return <div className="h-full w-full overflow-hidden">{children}</div>;
  }
  return (
    <div className="mx-auto flex h-full w-full max-w-6xl items-center px-6 py-24 lg:px-10">
      {children}
    </div>
  );
}

function Continuations() {
  useEffect(() => {
    const run = async () => {
      try {
        const { ScrollTrigger } = await import('gsap/ScrollTrigger');
        ScrollTrigger.refresh();
      } catch {
        /* optional */
      }
    };
    void run();
  }, []);

  return (
    <>
      <AboutSection />
      <FeaturesSection />
      <CareersSection />
      <Footer />
    </>
  );
}

export default function LandingExperience() {
  const rootRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const isDesktop = useIsDesktopPin();
  const { progress, activeScene, reducedMotion, pinActive } = useLandingTimeline(
    rootRef,
    stageRef,
    isDesktop,
  );

  const stacked = reducedMotion || !isDesktop;
  const stickyCopyVisible =
    pinActive && STICKY_COPY_SCENES.includes(activeScene) && progress < 0.9;
  const showStageFrame = stickyCopyVisible;

  const frameScenes = SCENE_SEGMENTS.filter((s) => STICKY_COPY_SCENES.includes(s.id));
  const bleedScenes = SCENE_SEGMENTS.filter(
    (s) => s.id === 'handshake' || s.id === 'cta',
  );

  return (
    <div ref={rootRef} className="landing-root relative bg-navy-950 text-white">
      <a href="#landing-main" className="skip-link">
        {LANDING_STORY.skipLabel}
      </a>

      {stacked ? (
        <main id="landing-main" className="relative">
          {PRODUCT_SCENES.map((scene) => {
            const fullBleed = scene.id === 'handshake' || scene.id === 'cta';
            return (
              <section
                key={scene.id}
                data-landing-scene={scene.id}
                className={
                  fullBleed
                    ? 'relative min-h-[100svh] overflow-hidden'
                    : 'relative min-h-[100svh] border-b border-white/5 px-4 py-20 sm:px-6 lg:px-10'
                }
                aria-labelledby={`scene-${scene.id}`}
              >
                <div
                  id={`scene-${scene.id}`}
                  className={fullBleed ? 'h-full min-h-[100svh] w-full' : 'mx-auto max-w-6xl'}
                >
                  <SceneBody
                    id={scene.id}
                    active={activeScene === scene.id || reducedMotion}
                    progress={1}
                    reducedMotion={reducedMotion}
                  />
                </div>
              </section>
            );
          })}
        </main>
      ) : (
        <>
          <div ref={stageRef} id="landing-main" className="relative min-h-[100svh] overflow-hidden">
            {/* Soft depth atmosphere (reference video blob / vignette) */}
            <div
              className="pointer-events-none absolute inset-0"
              aria-hidden
              style={{
                background:
                  'radial-gradient(ellipse 75% 60% at 50% 45%, rgba(148,163,184,0.09), transparent 65%), radial-gradient(ellipse 45% 40% at 72% 48%, rgba(56,189,248,0.1), transparent 70%), radial-gradient(ellipse 40% 35% at 20% 55%, rgba(14,165,233,0.06), transparent 62%)',
              }}
            />
            <div
              className="pointer-events-none absolute left-1/2 top-[46%] h-[58vmin] w-[72vmin] -translate-x-1/2 -translate-y-1/2 rounded-[48%] bg-white/[0.035] blur-3xl"
              aria-hidden
            />

            {/* Floating cinematic stage frame — product morphs inside */}
            <div
              className="absolute inset-0 flex items-center justify-center px-5 pb-14 pt-8 md:px-10 md:pb-16 md:pt-10"
              aria-hidden={!showStageFrame}
              style={{
                opacity: showStageFrame ? 1 : 0,
                transition: 'opacity 0.45s cubic-bezier(0.22, 1, 0.36, 1)',
                pointerEvents: showStageFrame ? 'auto' : 'none',
              }}
            >
              <div
                className="relative aspect-[3/2] w-full max-w-5xl max-h-[min(68svh,640px)] overflow-hidden rounded-[1.75rem] border border-white/12 bg-navy-950 shadow-[0_40px_120px_rgba(0,0,0,0.55),0_0_80px_rgba(56,189,248,0.08)]"
                style={{
                  boxShadow:
                    '0 40px 120px rgba(0,0,0,0.55), 0 0 100px rgba(56,189,248,0.1), inset 0 1px 0 rgba(255,255,255,0.06)',
                }}
              >
                <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-navy-950/25 via-transparent to-navy-950/15" />
                {frameScenes.map((seg) => {
                  const motion = SCENE_MOTION[seg.id];
                  return (
                    <div
                      key={seg.id}
                      data-scene-layer
                      data-start={seg.start}
                      data-end={seg.end}
                      data-fade={motion.fade}
                      data-enter={motion.enter}
                      data-exit={motion.exit}
                      className="absolute inset-0"
                      style={{
                        pointerEvents: activeScene === seg.id ? 'auto' : 'none',
                      }}
                      aria-hidden={activeScene !== seg.id}
                    >
                      <SceneShell id={seg.id} inFrame>
                        <SceneBody
                          id={seg.id}
                          active={activeScene === seg.id}
                          progress={progress}
                          reducedMotion={false}
                          hideCopy
                        />
                      </SceneShell>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Full-bleed beats (handshake + CTA) */}
            <div className="relative z-20 h-[100svh] w-full">
              {bleedScenes.map((seg) => {
                const motion = SCENE_MOTION[seg.id];
                return (
                  <div
                    key={seg.id}
                    data-scene-layer
                    data-start={seg.start}
                    data-end={seg.end}
                    data-fade={motion.fade}
                    data-enter={motion.enter}
                    data-exit={motion.exit}
                    className="absolute inset-0"
                    style={{ pointerEvents: activeScene === seg.id ? 'auto' : 'none' }}
                    aria-hidden={activeScene !== seg.id}
                  >
                    <SceneShell id={seg.id}>
                      <SceneBody
                        id={seg.id}
                        active={activeScene === seg.id}
                        progress={progress}
                        reducedMotion={false}
                      />
                    </SceneShell>
                  </div>
                );
              })}
            </div>

            <StickySceneCopy
              activeScene={activeScene}
              progress={progress}
              visible={stickyCopyVisible}
            />
          </div>
          <ScrollProgressHint progress={progress} visible={pinActive && progress < 0.9} />
        </>
      )}

      <Continuations />
    </div>
  );
}
